# AI Governance { #overview }

## AI Governance


AI governance is an ongoing stage of the AI lifecycle that focuses on monitoring, managing, and evaluating models after deployment. Common activities include tracking model performance, detecting drift, understanding model behavior, and supporting organizational governance and compliance requirements. For organizations in regulated industries such as banking, insurance, healthcare, and the public sector, governance is often an important part of operating AI in production.

IBM Z supports governance activities on the same platform where data and models reside. This can simplify monitoring, explainability, auditing, and reporting workflows while helping organizations maintain control over sensitive data and AI operations.

## What happens at this stage?

<div class="grid cards no-hover-cards" markdown>

- **Monitor model performance**

    Track model output quality and accuracy over time. Detect when a model's predictions begin to diverge from expected behavior — before it affects business outcomes.

- **Detect drift**

    Monitor for output drift (predictions changing) and feature drift (input data patterns shifting) — and drill down to identify the source so you can take prompt action.

- **Explain decisions**

    Generate explanations for individual model predictions — supporting auditability, customer transparency, and regulatory requirements.

- **Ensure fairness and compliance**

    Identify and monitor for potential bias in model outcomes across demographic or protected groups, and produce documentation for regulatory review and audit.

</div>

## Who is this stage for?

AI governance is typically owned by **AI Governance Leads** and **AI Risk and Compliance Managers**, with ML Engineers, Data Scientists, and Data Engineers as key contributors. AI Governance Leads set compliance requirements and oversee model accountability; Data Scientists interpret monitoring results and determine when retraining is needed. On IBM Z, IT Architects are involved in ensuring governance tooling integrates with existing z/OS security and audit infrastructure.

## Where to Start { #where-to-start }

Start with the governance capabilities available on IBM Z. The tools below support both on-platform and off-platform governance — some run natively on IBM Z, others are available across environments including directly on IBM Z.

### On-Platform and Off-Platform Governance Tools { #governance-tools }

The following tools provide governance capabilities for models on IBM Z. Machine Learning for IBM z/OS Trustworthy AI and TrustyAI run natively on-platform. watsonx.governance and TrustyAI are available both on-platform and off-platform.

??? note "Governance for models on z/OS · Machine Learning for IBM z/OS<br><span class='accordion-sub'>Your models are deployed on z/OS and you need monitoring, explainability, fairness detection, and audit capabilities built into the same platform where models run.</span>"

    **→ Use [Machine Learning for IBM z/OS (MLz)](../products-tools/ai-platforms.md#mlz) Trustworthy AI.** Machine Learning for IBM z/OS includes built-in governance capabilities — model monitoring, drift detection, LIME/SHAP explainability, and fairness metrics — all running natively on z/OS without moving data off-platform.

    *Common approach:* Deploy model in Machine Learning for IBM z/OS → Enable monitoring and explainability → Review fairness metrics and drift alerts → Generate audit reports from within z/OS.

??? note "Governance for containerized models · Red Hat OpenShift AI · TrustyAI<br><span class='accordion-sub'>Your models are deployed on Red Hat OpenShift AI on Linux on IBM Z and you need bias detection, explainability, and fairness monitoring integrated into your containerized AI platform.</span>"

    **→ Use TrustyAI for [Red Hat OpenShift AI](../products-tools/ai-platforms.md#rhoai).** TrustyAI is an open-source AI explainability and fairness toolkit integrated directly into Red Hat OpenShift AI, providing governance for containerized model workloads on Linux on IBM Z. TrustyAI is available both on-platform and off-platform.

    *Common approach:* Deploy model through Red Hat OpenShift AI → Enable TrustyAI → Monitor predictions for bias and fairness → Generate explainability outputs for audit.

??? note "Enterprise-wide model tracking and compliance · watsonx.governance<br><span class='accordion-sub'>You want predictive AI governance capabilities such as model lineage tracking, fairness and drift monitoring, and audit documentation — on-platform or across environments.</span>"

    **→ Use [watsonx.governance](../products-tools/ai-platforms.md#watsonx-governance).** watsonx.governance is available both on-platform (Linux on IBM Z and LinuxONE) and off-platform. On-platform capabilities for IBM Z include AI Factsheets for model lineage and audit documentation, OpenScale Monitoring for fairness, drift detection, and explainability, and Watson Machine Learning (WML) for model deployment lifecycle management.

    *Common approach:* Establish on-platform governance with [Machine Learning for IBM z/OS](../products-tools/ai-platforms.md#mlz) Trustworthy AI and TrustyAI → Use watsonx.governance for broader model inventory, compliance reporting, or cross-environment monitoring.

## Where to Go from Here { #next-steps }

You've reached the end of the AI lifecycle. Governance feeds back into the beginning — monitoring results inform retraining decisions, which restart the train → optimize → deploy → serve cycle.

<div class="grid cards clickable-cards" markdown>

- **[Use Cases & Solution Blueprints](../use-cases/use-cases.md)**

    See end-to-end examples of complete AI on Z use cases — fraud detection, AML, credit risk, and more — including governance integration patterns.

- **[Resources & Contacts](../getting-help/terminology.md)**

    Ready to begin? See resources, contacts, and IBM Technology Expert Labs services to help you start your AI on IBM Z journey.

</div>
