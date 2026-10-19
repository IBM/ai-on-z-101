# Turnkey & ISV Solutions

This page covers pre-built solutions from IBM and partners that run on IBM Z without requiring you to build a model from scratch. They are a good starting point if you have a specific use case and need a solution that is ready to deploy.

## Three Pathways to AI on IBM Z { #pathways }

Not every organization approaches AI the same way. IBM Z supports three common adoption paths based on your goals, skills, and implementation requirements.

| \# | Pathway | Who It's For | What's Delivered |
|----|----|----|----|
| 1 | **Turnkey / ISV Solution** | Organizations that want a proven, ready-to-deploy solution with minimal internal AI expertise required | A fully packaged AI application from IBM or a partner ISV — install, configure, and run |
| 2 | **Deploy an Existing Model** | Teams that already have a trained model and need to operationalize it on IBM Z | IBM Z model serving infrastructure ([Machine Learning for IBM z/OS](ai-platforms.md#mlz), [Red Hat OpenShift AI](ai-platforms.md#rhoai), [IBM Z Accelerated Serving for TensorFlow](inference-serving.md#tf-serving), [IBM Z Accelerated for Triton Inference Server](inference-serving.md#triton)) to score models in production |
| 3 | **Build Your Own Model** | Data science teams who need full control and have proprietary data or unique requirements | The full AI lifecycle on IBM Z — prepare data, train, optimize, deploy, serve, and govern |

This page covers **Pathway 1**. For Pathways 2 and 3, see the [AI Lifecycle](../prepare-data/lifecycle-overview.md) section.

IBM Turnkey Solutions

## IBM SQL Data Insights Pro { #sql-data-insights }

**AI Lifecycle:** [Prepare Data](../prepare-data/prepare-data.md) · [Deploy & Serve](../deploy-models/deploy-models.md)

### What is SQL Data Insights Pro?

IBM SQL Data Insights Pro delivers AI-powered analysis and insights of enterprise data in place. Designed to work within your existing data infrastructure, it brings AI capabilities directly to your data inside Db2 — without requiring a separate AI platform or additional infrastructure. Built on models selected for enterprise data use cases, SQL Data Insights Pro helps data teams discover relationships, similarities, and patterns in their data using standard SQL.

For organizations that want AI-driven insights from their enterprise data without the complexity of managing a separate AI stack, SQL Data Insights Pro provides an integrated, ready-to-use solution.

### Why Use It on IBM Z

- **Keep data in place** — AI processing runs within Db2, helping organizations analyze sensitive data without moving it to external systems.
- **Use existing infrastructure** — Runs on IBM Z, enabling AI processing within your existing infrastructure without requiring a separate AI platform.
- **Work with familiar SQL** — Query for similarity and meaning using SQL rather than learning new tools or query languages.
- **Analyze multiple data types** — Works with both structured relational data and unstructured text such as comments, descriptions, and logs.
- **Reduce data movement** — Analyze data where it already resides rather than building separate pipelines to export, process, and reload data.

### Key Capabilities

| Capability | Details |
|----|----|
| Query Interface | Standard SQL |
| AI Acceleration | Telum on-chip inference on IBM z16, z17, LinuxONE 4, and LinuxONE 5 with Spyre support coming soon. |
| Data Types | Structured relational data and unstructured text |
| AI Capabilities | Semantic similarity and AI-powered SQL queries, embedding-based analysis, incremental retraining, and Column Prioritization for improving model relevance. |
| Data Residency | Processing remains on platform with no external model calls required |
| Data Source | Db2 for z/OS, including VSAM and IMS data sources, with expanded support planned for additional data sources. |

### On IBM Z

Data teams can use it to enrich and analyze enterprise data before model development. It can also be used in production environments where applications need semantic search or similarity matching directly within Db2.

The product is especially useful for organizations that want AI-driven insights from enterprise data while minimizing data movement and infrastructure complexity.

### Getting Started

- [IBM SQL Data Insights Pro product page](https://www.ibm.com/products/sql-data-insights-pro)
- [IBM Documentation — Db2 SQL Data Insights](https://www.ibm.com/docs/en/sql-data-insights-pro/1.1.1)

ISV Solutions

## ISV Ecosystem — What Are ISV Solutions? { #isv-overview }

IBM provides the underlying AI infrastructure for IBM Z, including hardware accelerators, open-source frameworks, model optimization tools, and inference runtimes. **Independent Software Vendors (ISVs)** build on these capabilities to deliver AI applications tailored to specific business domains such as fraud detection, anti-money laundering, and customer experience.

For organizations looking to adopt AI without building and maintaining their own models, ISV solutions can provide a direct path to production. These offerings typically include pre-built models, domain expertise, and deployment frameworks designed for specific business use cases.

## Embedded AI Core Banking & Payment Solutions { #embedded-ai-solutions }

These solutions integrate with core banking, payments, and transaction processing platforms such as DXC Hogan, FIS, and Worldline Cardlink. They are designed to run on z/OS and support real-time decisioning within existing business workflows.

| Vendor Solution | Supported Integrations | Use Case | Platform Support |
|----|----|----|----|
| [DXC UmbrellaFraud](https://www.luxoft.com/blog/luxoft-umbrellafraud-ai-ml-hogan-zbased-save-millions-100-coverage) | DXC Hogan / Card and Merchant System | Real-time fraud detection | z/OS |
| [Worldline Cardlink](https://community.ibm.com/community/user/blogs/demi-chen/2025/08/15/cardlink-next-on-ibm-z17-ai-fraud) | Worldline | Fraud detection | z/OS |

## ISV Packaged AI Solutions { #packaged-ai-solutions }

These are modular, standalone AI applications built by ecosystem partners that run on Linux on Z. They address specific enterprise use cases and integrate with common core banking and payments platforms.

| Vendor Solution | Supported Integrations | Use Case | Platform Support |
|----|----|----|----|
| [Featurespace](https://www.featurespace.com/) | Majority of core banking & payments solutions | Real-time fraud detection and risk scoring | Linux on Z |
| [Quantexa](https://www.quantexa.com/) | Non-real time (batch) — core banking & payments | Entity resolution, fraud detection, KYC, AML | Linux on Z |
| [ACI Proactive Risk Manager](https://www.aciworldwide.com/solutions/aci-fraud-management-banking) | ACI Base24, and other payment solutions | Fraud & risk management | Linux on Z |
| [OvationCXM](https://www.ovationcxm.com/) | Any core, including FIS Systematics, DXC Hogan | Customer experience management — householding use case | Linux on Z |
| [Exponential AI](https://exponentialai.com/) | Claims/insurance workloads (real-time/batch) | Claims processing (e.g., healthcare) | Linux on Z |
| [Clari5](https://www.clari5.com/) | Majority of core banking & payments platform | Anti-money laundering & payments fraud | Linux on Z |

Explore other Products & Tools

<div class="grid cards" markdown>

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

- **[AI Platforms](ai-platforms.md)**

    - Machine Learning for IBM z/OS (MLz)
    - AI Optimizer for IBM Z and LinuxONE
    - Red Hat OpenShift AI
    - watsonx.ai
    - watsonx.governance

- **[Hardware](hardware-solutions.md)**

    - IBM Integrated Accelerator for AI (Telum)
    - IBM Spyre Accelerator

</div>
