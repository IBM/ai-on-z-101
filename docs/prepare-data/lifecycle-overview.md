---
title: AI Lifecycle on IBM Z - End-to-End Workflow Overview
description: Understand the complete AI lifecycle on IBM Z from data preparation and model training to deployment, serving, and governance.
---

# AI Lifecycle on IBM Z

## AI Lifecycle Overview { #overview }

IBM offers a broad set of AI technologies for IBM Z. Many products support more than one stage of the AI lifecycle and often work together. Use the sections below to explore where each product is commonly used, understand how products relate to one another, and see common paths organizations take when building AI solutions.

<div class="grid cards clickable-cards" markdown>

- **[Prepare Data](prepare-data.md)**

    Clean, transform, and engineer features to prepare data for AI models.

- **[Build Models](../build-model/build-model.md)**

    Build traditional ML and deep learning models on IBM Z or hybrid cloud, wherever your investments are.

- **[Deploy Models](../deploy-models/deploy-models.md)**

    Convert, optimize, and deploy your model into a production environment on IBM Z.

- **[Serve Model](../serve-model/serve-model.md)**

    Run trained models in production inference environments where they can process requests, generate predictions, and support operational workloads.

- **[AI Governance](../ai-governance/ai-governance.md)**

    Monitor, explain, and govern models in production for bias, drift, and regulatory compliance.

</div>

### IBM Z Products Used in the AI Lifecycle { #lifecycle-matrix }

Explore which products and tools support each stage of the AI lifecycle across **IBM z/OS** and **Linux on Z**.

<style>
.lc-table { width:100%; border-collapse:collapse; font-size:.6rem; }
.lc-table th { background:#f4f4f4; color:#161616; font-weight:600; padding:.4rem .6rem; border:1px solid #e0e0e0; text-align:center; }
.lc-table th:first-child { text-align:left; }
.lc-table td { padding:.4rem .6rem; border:1px solid #e0e0e0; text-align:center; color:#161616; }
.lc-table td:first-child { text-align:left; }
/* Per-column solid blues — light to dark left to right */
.lc-col1 { background:#e8f1ff; }
.lc-col2 { background:#c4daff; }
.lc-col3 { background:#74aaff; }
.lc-col4 { background:#4589ff; }
.lc-col5 { background:#0f62fe; color:#fff; }
/* Stars always gold */
.lc-star-light, .lc-star-dark { color:#f1a10d; font-size:.9rem; font-weight:700; }
/* Label cells (Explainability, TrustyAI) */
.lc-label { background:#0f62fe; color:#fff; font-weight:600; font-size:.6rem; }
</style>

<table class="lc-table">
<thead>
<tr>
  <th>Product</th>
  <th>Prepare Data</th>
  <th>Build Models</th>
  <th>Deploy Models</th>
  <th>Serve Model</th>
  <th>AI Governance</th>
  <th>IBM z/OS</th>
  <th>Linux on Z</th>
</tr>
</thead>
<tbody>
<tr>
  <td><a href="../../products-tools/data-analytics/#synthetic-data-sets">IBM Synthetic Data Sets</a></td>
  <td class="lc-col1"></td><td></td><td></td><td></td><td></td>
  <td>Yes</td><td>Yes</td>
</tr>
<tr>
  <td><a href="../../products-tools/data-analytics/#apache-spark">IBM Z Platform for Apache Spark</a></td>
  <td class="lc-col1"></td><td class="lc-col2"></td><td></td><td></td><td></td>
  <td>Yes</td><td>—</td>
</tr>
<tr>
  <td><a href="../../products-tools/ai-frameworks/#snapml">IBM Z Accelerated SnapML*</a></td>
  <td class="lc-col1"></td><td class="lc-col2"></td><td class="lc-col3"><span class="lc-star-light">★</span></td><td></td><td></td>
  <td>Yes via zCX</td><td>Yes</td>
</tr>
<tr>
  <td><a href="../../products-tools/ai-frameworks/#tensorflow">IBM Z Accelerated for TensorFlow*</a></td>
  <td></td><td class="lc-col2"></td><td class="lc-col3"><span class="lc-star-light">★</span></td><td></td><td></td>
  <td>Yes via zCX</td><td>Yes</td>
</tr>
<tr>
  <td><a href="../../products-tools/ai-frameworks/#pytorch">IBM Z Accelerated for PyTorch*</a></td>
  <td></td><td class="lc-col2"></td><td class="lc-col3"><span class="lc-star-light">★</span></td><td></td><td></td>
  <td>Yes via zCX</td><td>Yes</td>
</tr>
<tr>
  <td><a href="../../products-tools/ai-frameworks/#python-ai-toolkit">Python AI Toolkit for z/OS</a></td>
  <td></td><td class="lc-col2"></td><td class="lc-col3"><span class="lc-star-light">★</span></td><td></td><td></td>
  <td>Yes</td><td>—</td>
</tr>
<tr>
  <td><a href="../../products-tools/model-formats/#zdlc">ONNX &amp; IBM Z Deep Learning Compiler*</a></td>
  <td></td><td></td><td class="lc-col3"></td><td></td><td></td>
  <td>Yes via zCX</td><td>Yes</td>
</tr>
<tr>
  <td><a href="../../products-tools/inference-serving/#tf-serving">IBM Z Accelerated Serving for TensorFlow*</a></td>
  <td></td><td></td><td class="lc-col3"></td><td class="lc-col4"><span class="lc-star-dark">★</span></td><td></td>
  <td>Yes via zCX</td><td>Yes</td>
</tr>
<tr>
  <td><a href="../../products-tools/inference-serving/#triton">IBM Z Accelerated for Triton Inference Server*</a></td>
  <td></td><td></td><td class="lc-col3"></td><td class="lc-col4"><span class="lc-star-dark">★</span></td><td></td>
  <td>Yes via zCX</td><td>Yes</td>
</tr>
<tr>
  <td><a href="../../products-tools/ai-platforms/#mlz">Machine Learning for IBM z/OS</a></td>
  <td></td><td class="lc-col2"></td><td class="lc-col3"><span class="lc-star-light">★</span></td><td class="lc-col4"><span class="lc-star-dark">★</span></td><td class="lc-label">Explainability &amp; Drift</td>
  <td>Yes</td><td>—</td>
</tr>
<tr>
  <td><a href="../../products-tools/ai-platforms/#ai-optimizer">AI Optimizer for IBM Z and LinuxONE</a></td>
  <td></td><td></td><td></td><td class="lc-col4"></td><td></td>
  <td>—</td><td>Yes</td>
</tr>
<tr>
  <td><a href="../../products-tools/ai-platforms/#rhoai">Red Hat OpenShift AI</a></td>
  <td class="lc-col1"></td><td class="lc-col2"></td><td class="lc-col3"></td><td class="lc-col4"><span class="lc-star-dark">★</span></td><td class="lc-label">TrustyAI</td>
  <td>Yes via zCX</td><td>Yes</td>
</tr>
<tr>
  <td><a href="../../products-tools/inference-serving/#rh-inference">Red Hat AI Inference Server</a></td>
  <td></td><td></td><td></td><td class="lc-col4"></td><td></td>
  <td>—</td><td>Yes</td>
</tr>
<tr>
  <td><a href="../../products-tools/ai-platforms/#watsonx-ai">watsonx.ai</a></td>
  <td></td><td class="lc-col2"></td><td class="lc-col3"></td><td class="lc-col4"><span class="lc-star-dark">★</span></td><td></td>
  <td>—</td><td>Yes</td>
</tr>
<tr>
  <td><a href="../../products-tools/ai-platforms/#watsonx-governance">watsonx.governance</a></td>
  <td></td><td></td><td></td><td></td><td class="lc-col5"></td>
  <td>—</td><td>Yes</td>
</tr>
</tbody>
</table>

**\*** Available in IBM Container Registry, with support included in AI Toolkit for IBM Z and IBM LinuxONE

⭐ = Most used capability
