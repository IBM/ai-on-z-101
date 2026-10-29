---
title: Enterprise AI Platforms on IBM Z
description: Enterprise platforms for AI lifecycle management on IBM Z including Machine Learning for IBM z/OS (MLz), watsonx.ai, and watsonx.governance.
---

# AI Platforms

This page covers the platforms that manage the AI lifecycle on IBM Z, from model training and deployment to governance. Each one covers a different part of that lifecycle, and some overlap. Knowing which platform fits your use case is the first step before looking at frameworks or serving tools.

<div id="mlz"></div>

??? note "Machine Learning for IBM z/OS (MLz)"

    **AI Lifecycle:** [Build Models](../build-model/build-model.md) · [Deploy Models](../deploy-models/deploy-models.md) · [Serve Model](../serve-model/serve-model.md) · [AI Governance](../ai-governance/ai-governance.md)

    Machine Learning for IBM z/OS (MLz) is IBM's transactional AI platform for IBM Z, providing an integrated environment to deploy, serve, monitor, and govern AI models close to mission-critical applications, transactions, and data. MLz also supports a train anywhere approach, allowing models to be developed on IBM Z or in external environments and then deployed for scoring.

    MLz is designed for data scientists, application developers, architects, and IT teams that need to operationalize AI alongside the enterprise applications, transactions, and data already running on IBM Z.

    Traditional AI architectures may require moving data to another platform for model scoring, which can introduce latency, data movement, governance considerations, and additional complexity. MLz brings AI to the data, enabling model scoring close to the applications and transactions where business decisions occur, while helping reduce unnecessary data movement.

    #### Key Value

    MLz is the only AI platform purpose-built for z/OS — enabling organisations to run AI where their most critical workloads already execute, with the security, compliance, and performance that z/OS natively provides.

    #### Key Capabilities

    - **Unified AI lifecycle management** — train, deploy, version, score, and monitor models from a single interface on z/OS.
    - **Native workload integration** — model scoring connects directly to CICS, IMS, and batch workloads without application redesign.
    - **Direct z/OS data source connectivity** — training and scoring connect natively to Db2, IMS, VSAM, and MQ.
    - **Flexible model import and export** — import models in PMML, ONNX, and Python formats; export in standard formats for portability across environments including watsonx.ai.
    - **Hardware-accelerated inference** — the Telum AI Accelerator and zIIP specialty engines deliver high-volume, low-latency inference without consuming general CPU capacity.
    - **Built-in model observability** — monitors for drift, detects bias, provides SHAP-based explanations, and integrates with AI Factsheets.
    - **Native z/OS governance** — full model lifecycle logging and auditing within RACF, SMF, and existing z/OS security frameworks. No separate governance toolchain required.

    #### When to Consider MLz

    MLz is the right choice when one or more of the following apply:

    - AI scoring needs to run close to z/OS applications and data — especially for regulated or latency-sensitive workloads where moving data off-platform is a risk or compliance concern.
    - Models trained externally — in watsonx.ai, Python environments, or open-source tools — need to be deployed and monitored on z/OS without rebuilding the surrounding application.
    - The team wants to train models directly on z/OS data sources — Db2, IMS, VSAM, MQ — without data extraction or replication to another platform.
    - Enterprise governance, auditability, and explainability are required for AI models in production — particularly in banking, insurance, government, or healthcare.
    - High-volume inference workloads need hardware acceleration (Telum AI Accelerator, zIIP) to avoid consuming general-purpose CPU capacity.

    #### AI Lifecycle — Stages and Role on IBM Z

    MLz supports all five stages of the AI lifecycle, and all five execute on IBM Z alongside the transactions, applications, and data already running there.

    **Train Model**

    Train models directly on z/OS using Python, Scikit-learn, XGBoost, and PyTorch inside notebooks running through z/OS Container Extensions (zCX). Training connects natively to Db2, IMS, VSAM, and MQ — regulated or sensitive data never needs to leave the platform.

    **Deploy Models**

    Import models trained externally — in watsonx.ai, Linux-based environments, or any tool that exports PMML or ONNX — and deploy them on z/OS without redesigning the surrounding application. MLz manages versioning and the full deployment lifecycle from a single interface.

    **Serve Model**

    Model scoring integrates directly with CICS, IMS, and batch workloads. Inference runs at the point of transaction — no data movement, no external round-trip, no added latency. The Telum AI Accelerator and zIIP specialty engines handle high-volume inference without consuming general-purpose CPU capacity.

    **AI Governance**

    Model lifecycle activity is logged and audited within existing z/OS security frameworks — RACF, SMF audit trails, and pervasive encryption are native to the platform. Governance is built in, not bolted on. AI Factsheets integration supports enterprise-wide model documentation. No separate governance toolchain is required.

    #### Getting Started

    - [MLz Product Page — Start here](https://www.ibm.com/products/machine-learning-for-zos)
    - [MLz Content Solution Hub — Documentation, tutorials, labs, and support](https://www.ibm.com/support/z-content-solutions/machine-learning-zos/)
    - [MLz Product Documentation — Full reference documentation](https://www.ibm.com/docs/en/wml-for-zos/enterprise/3.2.0?topic=overview-mlz-enterprise)

<div id="ai-optimizer"></div>

??? note "AI Optimizer for IBM Z and LinuxONE"

    **AI Lifecycle:** [Deploy Models](../deploy-models/deploy-models.md) · [Serve Model](../serve-model/serve-model.md)

    AI Optimizer for IBM Z and LinuxONE is an all-in-one inferencing stack designed to simplify the deployment, management, routing, and monitoring of AI workloads on IBM Z. Delivered as a single software appliance, the solution combines the operating system, curated AI models, container runtime, observability tooling, and management interfaces into a single pre-configured environment.

    The product serves as the inferencing layer for IBM Spyre Accelerator and helps organizations operationalize enterprise AI workloads closer to mission-critical data and applications. AI Optimizer provides centralized routing, monitoring, model management, and observability capabilities that reduce deployment complexity and accelerate time to value.

    AI Optimizer is intended for enterprise architects, AI engineers, application owners, and platform administrators deploying AI at scale on IBM Z. It helps organizations standardize AI inferencing infrastructure while improving visibility, control, and operational efficiency.

    #### Key Capabilities

    - **All-in-One Inferencing Stack** — Provides a complete, pre-configured AI inferencing environment in a single software appliance.
    - **Optimized Inferencing and Intelligent Routing** — Routes inference requests across AI model instances using built-in routing strategies and model characteristics. Helps optimize performance and resource utilization.
    - **Single Installer Deployment** — Simplifies setup through a unified installation and configuration process.
    - **Real-Time Monitoring and Observability** — Delivers visibility into AI workload performance through built-in monitoring dashboards.
    - **Local and External Model Integration** — Enables locally deployed and supported remote AI models to be accessed through a common inferencing framework, providing a unified approach to model registration and access.
    - **AI Model Deployment and Management** — Provides a centralized experience to deploy, configure, update, and manage AI models, including generative AI and encoder-based workloads.
    - **IBM Spyre Accelerator Integration** — Provides the software layer for running supported AI models with IBM Spyre Accelerator, enabling applications to leverage Spyre acceleration for AI inference workloads.

    #### On IBM Z

    AI Optimizer serves as the software layer between AI applications and IBM Spyre Accelerator infrastructure. Applications submit inference requests through AI Optimizer, which manages model selection, routing, monitoring, and observability.

    Teams can deploy and manage AI workloads through a pre-configured environment rather than assembling an inferencing stack from individual components. AI Optimizer is particularly valuable when scaling AI workloads into production environments where performance visibility, governance, and operational control are critical.

    #### Getting Started

    - [AI Optimizer for IBM Z and LinuxONE product page](https://www.ibm.com/products/ai-optimizer-for-z)
    - [AI Optimizer for IBM Z documentation overview](https://www.ibm.com/docs/en/ai-optimizer-for-z/3.1.1?topic=overview-ai-optimizer-z-linuxone)

<div id="rhoai"></div>

??? note "Red Hat OpenShift AI"

    **AI Lifecycle:** [Deploy Models](../deploy-models/deploy-models.md) · [AI Governance](../ai-governance/ai-governance.md)

    Red Hat OpenShift AI is an AI and machine learning platform built on Red Hat OpenShift. It provides the tools needed to develop, deploy, and manage AI models in a single environment. Teams can use workbenches for development, automate workflows with pipelines, deploy models, track model versions, and apply governance controls across the AI lifecycle.

    Red Hat OpenShift AI runs natively on IBM Z and LinuxONE through OpenShift. It is a good fit for organizations that already use OpenShift and want a consistent platform for AI workloads across their infrastructure. Instead of assembling separate tools for development, deployment, monitoring, and governance, teams can manage these capabilities within a single Kubernetes based platform.

    #### Key Capabilities

    - JupyterHub based data science workbenches for model development and experimentation
    - Kubeflow Pipelines for building, scheduling, and monitoring machine learning workflows
    - Integrated model serving through KServe, [IBM Z Accelerated for Triton Inference Server](inference-serving.md#triton), and [Red Hat AI Inference Server](inference-serving.md#rh-inference)
    - Centralized model registry for tracking model versions and deployment history
    - TrustyAI for fairness monitoring and model drift detection
    - Support for Spyre Accelerator enabled inference through Red Hat AI Inference Server on IBM z17
    - A consistent platform across IBM Z, LinuxONE, and cloud based OpenShift environments

    #### On IBM Z

    Data scientists can develop and train models in OpenShift based workbenches. Machine learning pipelines help automate tasks such as data preparation and deployment. Once deployed, organizations can use TrustyAI and integrations with [watsonx.governance](ai-platforms.md#watsonx-governance) to support governance and monitoring requirements.

    Red Hat OpenShift AI is well suited for organizations that run OpenShift on IBM Z and want a cloud native AI platform based on open technologies. It provides a consistent experience across on premises and cloud environments, making it easier to manage containerized AI workloads across different deployment locations.

    #### Getting Started

    - [Red Hat OpenShift AI on IBM Z and LinuxONE — IBM Community blog](https://community.ibm.com/community/user/blogs/kelly-pushong/2025/11/13/red-hat-openshift-ai-on-ibm-z-and-linuxone)
    - [Red Hat OpenShift AI product page](https://www.redhat.com/en/products/ai/openshift-ai)
    - [Red Hat OpenShift AI self-managed documentation](https://docs.redhat.com/en/documentation/red_hat_openshift_ai_self-managed/)
    - [Red Hat OpenShift AI cloud service documentation](https://docs.redhat.com/en/documentation/red_hat_openshift_ai_cloud_service/)

<div id="watsonx-ai"></div>

??? note "watsonx.ai"

    **AI Lifecycle:** [Prepare Data](../prepare-data/prepare-data.md) · [Build Models](../build-model/build-model.md) · [Deploy Models](../deploy-models/deploy-models.md)

    IBM watsonx.ai is IBM's AI studio for building, training, tuning, evaluating, and deploying AI models. It supports both traditional machine learning and generative AI workloads in a single environment.

    The platform is designed for data scientists, ML engineers, and application developers who want one place to manage AI projects from experimentation through deployment. Instead of moving between separate tools for notebooks, model training, prompt engineering, deployment, and model management, teams can work within a single platform.

    For Linux on IBM Z environments, watsonx.ai is commonly used to build and evaluate models before deploying them to Linux on IBM Z based inference platforms such as Red Hat OpenShift AI, vLLM, or other supported serving environments.

    For IBM Z environments, watsonx.ai is commonly used to build and evaluate models before deploying them through platforms such as Watson Machine Learning (in watsonx.ai) on Linux on IBM Z or Machine Learning for IBM z/OS (MLz) on z/OS.

    #### Key Capabilities

    - Access to IBM Granite models, Mistral, and other supported foundation models
    - Prompt Lab for creating, testing, and comparing prompts across foundation models
    - AutoAI for automated model selection, feature engineering, and hyperparameter optimization
    - Tools for building retrieval-augmented generation (RAG) applications and agent-based workflows
    - REST APIs and the ibm-watsonx-ai Python SDK for inference, deployment management, and application integration
    - Integration with watsonx.governance for model tracking, governance, and compliance workflows using AI Factsheets and OpenScale

    #### On IBM Z

    watsonx.ai supports the Prepare Data, Build Model, and Deploy Models stages of the AI lifecycle. Teams can use watsonx.ai to prepare data, build models, fine-tune foundation models, test prompts, and evaluate model performance. Once a model is ready, it can be deployed in Watson Machine Learning (in watsonx.ai) on Linux on IBM Z or Machine Learning for IBM z/OS (MLz) on z/OS.

    For generative AI applications, the ibm-watsonx-ai Python SDK is a common integration option. Developers can generate text, build chat-based experiences, work with prompt templates, and integrate models into applications and workflows.

    watsonx.ai is a good fit for organizations that want a single platform for developing both machine learning and generative AI solutions while maintaining a path to deployment on IBM Z.

    #### Getting Started

    - [IBM watsonx.ai product page](https://www.ibm.com/products/watsonx-ai)
    - [IBM watsonx.ai documentation](https://www.ibm.com/docs/en/watsonx/saas)
    - [watsonx.ai getting started tutorials](https://www.ibm.com/docs/en/watsonx/saas?topic=getting-started)
    - [watsonx.ai REST API reference](https://cloud.ibm.com/apidocs/watsonx-ai)
    - [watsonx.ai Python SDK documentation (v1.7.1)](https://ibm.github.io/watsonx-ai-python-sdk/)
    - [watsonx.ai Python SDK GitHub repository](https://github.com/IBM/watsonx-ai-python-sdk)

<div id="watsonx-governance"></div>

??? note "watsonx.governance"

    **AI Lifecycle:** [AI Governance](../ai-governance/ai-governance.md)

    IBM watsonx.governance model management and Risk and Compliance Management helps organizations track, monitor, and govern AI systems throughout their lifecycle. It supports traditional machine learning models.

    The platform is designed for AI governance teams, model risk managers, compliance teams, and data scientists who need visibility into how AI systems are built, deployed, and managed. It helps organizations document AI assets, monitor model behavior, evaluate risk, and demonstrate compliance with internal policies and external regulations.

    As AI adoption grows, governance becomes an ongoing process rather than a one-time review before deployment. watsonx.governance provides tools for monitoring, documentation, and oversight throughout the lifecycle of a model or AI application.

    #### Key Capabilities

    - Centralized AI inventory for tracking use cases, models, prompts, and agents across environments
    - AI Factsheets for capturing model metadata, training lineage, evaluation results, deployment history, and operational metrics
    - Continuous monitoring for bias and fairness with configurable alerts
    - SHAP-based explainability to help understand individual model predictions
    - Detection of data drift and model performance changes over time
    - Evaluation and guardrails for generative AI, including assessments for quality, relevance, toxicity, and sensitive information
    - Governed catalog for registering, evaluating, and managing AI agents and tools

    #### On IBM Z

    watsonx.governance model management and Risk and Compliance Management supports the AI Governance stage of the AI lifecycle. Models deployed through MLz or Red Hat OpenShift AI can be registered and monitored within watsonx.governance. This gives organizations a single place to manage AI governance across IBM Z and cloud environments.

    AI Factsheets can capture information throughout development, testing, deployment, and production operations. This creates a documented record of how a model was built, evaluated, deployed, and monitored over time.

    watsonx.governance is particularly relevant for organizations with regulatory, audit, or risk management requirements. It provides tools to support transparency, accountability, and ongoing oversight across AI initiatives.

    #### Getting Started

    - [IBM watsonx.governance product page](https://ibm.seismic.com/Link/Content/DCHHH9XmHjJFJ8MVCTMG2R7DjTFV)
    - [Governing AI with watsonx documentation](https://github.ibm.com/aiopenscale/fs-tracker/issues/589)
    - [watsonx.governance overview](https://ibm.seismic.com/Link/Content/DC6W8QP6DfRp8GCJ67G7RDhFg4R3)
    - [Evaluating AI assets in watsonx.governance](https://www.ibm.com/docs/en/watsonx/saas)
    - [watsonx.governance on IBM Z and LinuxONE — supported capabilities](https://www.ibm.com/docs/en/software-hub/5.4.x?topic=requirements-s390x-hardware)

---

## Explore other Products & Tools

<div class="grid cards clickable-cards neutral-border-cards" markdown>

- **[Data & Analytics](data-analytics.md)**

    - IBM Z Platform for Apache Spark
    - IBM Synthetic Data Sets

- **[AI Frameworks & Dev Tools](ai-frameworks.md)**

    - AI Toolkit for IBM Z and IBM LinuxONE
    - IBM Z Accelerated SnapML
    - IBM Z Accelerated for TensorFlow
    - IBM Z Accelerated for PyTorch
    - Python AI Toolkit for IBM z/OS

- **[Model Formats & Compilers](model-formats.md)**

    - ONNX
    - PMML
    - IBM Z Deep Learning Compiler (zDLC)

- **[Inference & Serving](inference-serving.md)**

    - IBM Z Accelerated for Triton Inference Server
    - IBM Z Accelerated Serving for TensorFlow
    - Red Hat AI Inference Server on IBM Z

- **[Hardware](hardware-solutions.md)**

    - IBM Integrated Accelerator for AI (Telum)
    - IBM Spyre Accelerator

- **[Turnkey & ISV Solutions](turnkey-solutions.md)**

    - IBM SQL Data Insights Pro
    - Embedded AI Core Banking & Payment Solutions
    - ISV Packaged AI Solutions

</div>
