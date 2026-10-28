# Data & Analytics Tools

IBM Z Platform for Apache Spark handles large-scale data preparation and analytics directly on Z. IBM Synthetic Data Sets provides realistic artificial data for key IBM Z AI business use cases when real data is restricted or unavailable.

<div id="apache-spark"></div>

??? note "IBM Z Platform for Apache Spark"

    **AI Lifecycle:** [Prepare Data](../prepare-data/prepare-data.md) · [Build Models](../build-model/build-model.md)

    #### Overview: What is zSpark and Who Is It For?

    IBM Z Platform for Apache Spark (often referred to as zSpark) is a high-performance port of the open-source Apache Spark framework optimized natively for IBM z/OS.

    **Target Audience:** Enterprise Data Engineers, Data Scientists, z/OS System Programmers, and Application Developers looking to bridge traditional mainframe systems of record with modern data science and analytics tools.

    **The Problem It Solves:** Traditionally, extracting high-volume mainframe data for analytics and machine learning required copying sensitive operational data off the platform via ETL pipelines. This introduces high network costs, data latency, compliance exposures, and data synchronization overhead. zSpark allows teams to run Spark workloads directly on z/OS, keeping data secure within its native environment.

    #### Positioning & Core Business Value

    - **Zero Data Movement (In-Place Analytics)** — Process data right where it lives — adjacent to core transactional engines like Db2 for z/OS, IMS, and VSAM. This eliminates costly, vulnerable off-platform data transfers.
    - **Enterprise Security & Compliance** — Integrates tightly with core z/OS security frameworks, including RACF (Resource Access Control Facility) and robust cryptographic services, ensuring strict compliance with financial and healthcare data governance standards.
    - **Optimized Performance** — Leverages the robust scale, reliability, and cryptographic acceleration of IBM Z and LinuxONE hardware to handle large-scale data engineering and batch ML pipelines efficiently.
    - **Unified Analytics Platform** — Combine data preparation, feature engineering, SQL querying, and distributed machine learning into a single, cohesive workflow using familiar languages like Python (PySpark), Scala, Java, and R.

    #### How IBM Z Platform for Apache Spark Works on IBM Z

    Spark uses a distributed master-worker architecture to parallelize computational tasks:

    - **Driver Program** — Coordinates execution, manages the SparkContext, schedules tasks, and tracks job status across execution nodes.
    - **Executors** — Worker processes spawned on z/OS environments to run individual tasks and store data cached in memory.
    - **DataFrames and Datasets** — The primary APIs for structured data processing. They provide highly optimized query plans through Spark's Catalyst optimizer, making data manipulation extremely fast.

    #### Core Capabilities & Technical Summary

    | Category | Supported Features & Technology on IBM Z |
    |----|----|
    | Supported Languages | Python (PySpark), Scala, Java, R |
    | Core Components | Spark SQL, Spark Structured Streaming, MLlib (Machine Learning Pipelines) |
    | Key Data Sources | Db2 for z/OS, IMS, VSAM, SMF (System Management Facility) data, flat files, JDBC/ODBC |
    | Security Architecture | Native z/OS security context, RACF integration, audit logging |

    #### Getting Started

    - [Official Product Documentation: IBM Z Platform for Apache Spark](https://www.ibm.com/docs/en/zpas/1.4.0)
    - [Official Upstream Reference: Apache Spark Documentation](https://spark.apache.org/docs/latest/)

<div id="synthetic-data-sets"></div>

??? note "IBM Synthetic Data Sets"

    **AI Lifecycle:** [Prepare Data](../prepare-data/prepare-data.md)

    #### What are IBM Synthetic Data Sets?

    IBM Synthetic Data Sets are enterprise-grade, artificially generated datasets designed for AI model development in financial services. They look and behave like real transaction data — with no real customer information — making them safe to use for building, testing, and demonstrating AI models without requiring access to production data.

    One of the most common blockers in early-stage AI projects on IBM Z is data access. Getting approved access to production data takes time, and in regulated industries it may have restrictions that make it difficult to use freely for development. Synthetic Data Sets remove that blocker, letting teams move from idea to working model without waiting on data approvals.

    #### Why Use It

    - **Removes the data access blocker** — No need to request, anonymize, or wait for production data. Start building immediately.
    - **Realistic financial services data** — Datasets reflect the statistical properties and patterns of real financial transactions, not random noise.
    - **No seed data required** — IBM generates the data entirely. Clients don't need to provide any real data to get started.
    - **Privacy and compliance safe** — No real customer data means GDPR, PCI-DSS, or privacy concerns are addressed during development and demos.
    - **Covers three lifecycle stages** — Use the same datasets to build a model, validate it, and demonstrate results.

    #### Available Datasets

    | Dataset | Domain | Typical Use Case |
    |----|----|----|
    | Payment Cards | Banking & Payments | Credit card fraud detection model training and validation |
    | Core Banking & Money Laundering | Banking | Anti-money laundering (AML) model development |
    | Homeowners Insurance | Insurance | Insurance claims fraud detection |

    #### Getting Started

    - [IBM Synthetic Data Sets product page](https://www.ibm.com/products/synthetic-data-sets)
    - [IBM Synthetic Data Sets documentation](https://www.ibm.com/docs/en/synthetic-data-sets)
    - [AI on Z Solution Templates](https://ambitus.github.io/aionz-solution-templates/) — End-to-end examples using synthetic datasets

---

## Explore other Products & Tools

<div class="grid cards clickable-cards neutral-border-cards" markdown>

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

- **[Turnkey & ISV Solutions](turnkey-solutions.md)**

    - IBM SQL Data Insights Pro
    - Embedded AI Core Banking & Payment Solutions
    - ISV Packaged AI Solutions

</div>
