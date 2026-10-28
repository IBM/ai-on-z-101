/* 1. When a link or URL points to a product (e.g. products-tools/model-formats/#pmml),
      open that product's accordion and scroll to it. */
function openAccordionFromHash(targetId) {
  var id = typeof targetId === "string" ? targetId : decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  var anchor = document.getElementById(id);
  if (!anchor) return;
  var details = anchor.tagName === "DETAILS" ? anchor : anchor.nextElementSibling;
  if (!details || details.tagName !== "DETAILS") return;
  details.open = true;
  anchor.scrollIntoView();
}

/* 2. Remember which accordions are open on each page, and put them back when the
      reader returns with the browser Back / Forward button. */
var ACCORDION_KEY = "accordions:";
var cameFromHistory = false;

function pageAccordions() {
  return Array.prototype.slice.call(document.querySelectorAll(".md-content details"));
}

function saveOpenAccordions() {
  var open = [];
  pageAccordions().forEach(function (d, i) { if (d.open) open.push(i); });
  try {
    sessionStorage.setItem(ACCORDION_KEY + location.pathname, JSON.stringify(open));
  } catch (e) { /* storage unavailable: skip */ }
}

function restoreOpenAccordions() {
  var open = [];
  try {
    open = JSON.parse(sessionStorage.getItem(ACCORDION_KEY + location.pathname)) || [];
  } catch (e) { return; }
  var all = pageAccordions();
  open.forEach(function (i) { if (all[i]) all[i].open = true; });
}

/* "toggle" does not bubble, so listen in the capture phase on the document. */
document.addEventListener("toggle", function (e) {
  if (e.target.tagName === "DETAILS") saveOpenAccordions();
}, true);

/* 3. Remember where the reader was when they followed a link out of an accordion
      (open accordions + scroll position), so Back returns to exactly that spot. */
var SCROLL_KEY = "scroll:";
var JUMP_KEY = "jumps:";
var currentPath = location.pathname;

function openIndexes() {
  var open = [];
  pageAccordions().forEach(function (d, i) { if (d.open) open.push(i); });
  return open;
}

function scrollAfterLayout(y) {
  /* Run a few times: the browser and the theme also try to restore scroll on Back. */
  [0, 60, 200, 450].forEach(function (ms) {
    setTimeout(function () { window.scrollTo(0, y); }, ms);
  });
}

/* Capture phase: runs before the click is acted on, so the "before" state is saved. */
document.addEventListener("click", function (e) {
  var a = e.target.closest && e.target.closest(".md-content a[href]");
  if (!a || !a.closest("details")) return;           /* only links inside accordions */
  try {
    var state = { open: openIndexes(), y: window.scrollY, hash: location.hash };
    if (a.pathname === location.pathname) {          /* jump within the same page */
      if (a.hash === location.hash) return;          /* same address: no history entry is added */
      var stack = JSON.parse(sessionStorage.getItem(JUMP_KEY + location.pathname) || "[]");
      stack.push(state);
      sessionStorage.setItem(JUMP_KEY + location.pathname, JSON.stringify(stack));
    } else {                                         /* jump to another page */
      sessionStorage.setItem(SCROLL_KEY + location.pathname, String(state.y));
    }
  } catch (err) { /* storage unavailable: skip */ }
}, true);

/* Same-page Back/Forward: put the accordions and scroll position back as they were. */
window.addEventListener("popstate", function () {
  if (location.pathname !== currentPath) return;     /* page change: handled in onPageShown */
  cameFromHistory = false;
  var stack = [];
  try { stack = JSON.parse(sessionStorage.getItem(JUMP_KEY + location.pathname) || "[]"); } catch (e) {}
  var s = stack[stack.length - 1];
  /* The theme also fires its own popstate when a link is clicked; that one carries the NEW
     address. A real Back lands on the address we left, so only act on that. */
  if (!s || location.hash !== s.hash) return;
  stack.pop();
  try { sessionStorage.setItem(JUMP_KEY + location.pathname, JSON.stringify(stack)); } catch (e) {}
  pageAccordions().forEach(function (d, i) { d.open = s.open.indexOf(i) !== -1; });
  saveOpenAccordions();
  scrollAfterLayout(s.y);
});

/* Capture phase so this runs before the theme's own Back/Forward handling. */
window.addEventListener("popstate", function () { cameFromHistory = true; }, true);

function onPageShown() {
  var nav = performance.getEntriesByType("navigation")[0];
  var fullLoadFromHistory = nav && nav.type === "back_forward";
  var cameBack = cameFromHistory || fullLoadFromHistory;
  currentPath = location.pathname;
  if (cameBack) {
    restoreOpenAccordions();
    var y = null;
    try { y = sessionStorage.getItem(SCROLL_KEY + location.pathname); } catch (e) {}
    if (y !== null) scrollAfterLayout(Number(y));
    else openAccordionFromHash();
  } else {
    /* A normal visit starts with everything closed; forget older state. */
    try {
      sessionStorage.removeItem(ACCORDION_KEY + location.pathname);
      sessionStorage.removeItem(SCROLL_KEY + location.pathname);
      sessionStorage.removeItem(JUMP_KEY + location.pathname);
    } catch (e) {}
    openAccordionFromHash();
  }
  cameFromHistory = false;
}

document$.subscribe(onPageShown);
window.addEventListener("hashchange", function () { openAccordionFromHash(); });

/* Clicking a link to the address you are already on (e.g. #watsonx-governance after the
   accordion was closed again) fires no hashchange, so handle the click itself. */
document.addEventListener("click", function (e) {
  var a = e.target.closest && e.target.closest("a[href*='#']");
  if (!a || !a.hash || a.pathname !== location.pathname) return;
  openAccordionFromHash(decodeURIComponent(a.hash.slice(1)));
}, true);
