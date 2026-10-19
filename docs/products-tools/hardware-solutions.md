# Hardware Accelerators

Telum and Spyre are the two AI accelerators available with IBM Z. Telum has an on-chip AI accelerator, designed for real-time inference on traditional ML and deep learning models. Spyre Accelerator for IBM Z is a separate card-based accelerator built for small decoder model workloads.

## Telum and the IBM Integrated Accelerator for AI { #telum }

### What is the IBM Integrated Accelerator for AI?

The IBM Integrated Accelerator for AI is an on-chip AI accelerator available on the [IBM Telum chip](https://www.ibm.com/products/z/telum) — part of IBM z16, LinuxONE 4, and now IBM z17 and LinuxONE 5 servers (Telum II). It is designed to enable high throughput, low latency inference for deep learning and machine learning. It also supports small encoder language models.

You can build and train your models on any platform, including IBM Z. When you are ready to deploy, your models can take advantage of the Telum on-chip accelerator, bringing the model inferencing directly to transactions processed in the core for real-time decisions.

The IBM Integrated Accelerator for AI is more than just a matrix multiply accelerator — it provides optimization and acceleration for a wide set of complex functions commonly found in deep learning and machine learning models, enabling a broader set of operations to run on-chip.

### Why the Integrated Accelerator?

- **On-chip, no GPU required** — AI inference runs directly on the Telum processor alongside your business transactions, with no external hardware needed.
- **High throughput, low latency** — Designed for real-time scoring at enterprise scale, enabling AI decisions within transaction flows.
- **Supported frameworks** — Secured, supported open-source frameworks have been optimized to exploit the on-chip accelerator in Telum.
- **Security and compliance** — Data doesn't need to leave the IBM Z platform, preserving the security and governance properties of your enterprise environment.

### Example Use Cases

<div class="grid cards" markdown>

- **Fraud Detection**

    Identify potentially fraudulent transactions as they occur, helping reduce losses and improve customer experience.

- **Credit Risk Assessment**

    Evaluate risk in real time to support faster lending and approval decisions.

- **Payment Authorization**

    Enhance payment processing with intelligent scoring and anomaly detection.

- **Anti-Money Laundering**

    Detect suspicious activity and support compliance initiatives through AI-powered analysis.

</div>

### Supported Operations by Machine Generation

The following operations are supported on the accelerator by machine generation. Telum II (IBM z17) adds significant new capabilities including INT8 quantization, Layer Normalization, Gelu, and more:

??? note "View supported operations table"

    | Operation | z16 / LinuxONE 4 (Telum) | z17 / LinuxONE 5 (Telum II) |
    |----|----|----|
    | LSTM Activation | ✓ | ✓ |
    | GRU Activation | ✓ | ✓ |
    | Fused Matrix Multiply, Bias op | ✓ | \+ transpose, INT8 quantization |
    | Fused Matrix Multiply (w/ broadcast) | ✓ | \+ transpose, INT8 quantization |
    | Batch Normalization | ✓ | ✓ |
    | Fused Convolution, Bias Add, Relu | ✓ | ✓ |
    | L2 Norm | — | ✓ |
    | Layer Normalization | — | ✓ |
    | Max Pool 2D | ✓ | ✓ |
    | Average Pool 2D | ✓ | ✓ |
    | Softmax | ✓ | ✓ |
    | Relu | ✓ | ✓ |
    | Leaky Relu | — | ✓ |
    | Gelu | — | ✓ |
    | Tanh | ✓ | ✓ |
    | Sigmoid | ✓ | ✓ |
    | Add / Subtract / Multiply / Divide | ✓ | ✓ |
    | Min / Max / Log | ✓ | ✓ |
    | Square root | — | ✓ |
    | Transform (Tensor) | — | ✓ |
    | Reduce | — | ✓ |

### Using the Integrated Accelerator for AI

Depending on your model type, there are a few essential approaches to leveraging the Integrated Accelerator for AI. These capabilities are available in IBM product offerings as well as through no-cost channels (such as the IBM Z Container Image Registry).

**For deep learning models** (IBM Z Accelerated for PyTorch, IBM Z Accelerated for TensorFlow):

- [ONNX models compiled with the IBM Z Deep Learning Compiler (zDLC)](model-formats.md#zdlc)
- [IBM Z Accelerated for TensorFlow](ai-frameworks.md#tensorflow) — transparent zDNN offload
- [IBM Z Accelerated for PyTorch](ai-frameworks.md#pytorch) — Telum and Telum II acceleration

**For traditional ML models** (scikit-learn, XGBoost, LightGBM):

- [IBM Z Accelerated SnapML](ai-frameworks.md#snapml) — optimized training and inference with Telum acceleration for Random Forest, Extra Trees, and Gradient Boosting

**For model serving**:

- [IBM Z Accelerated for Triton Inference Server](inference-serving.md#triton)
- [IBM Z Accelerated Serving for TensorFlow](inference-serving.md#tf-serving)

**For framework and compiler developers**:

- [IBM zDNN](https://github.com/IBM/zDNN) — the low-level C library exposing Telum AI accelerator operations. Available in z/OS in all in-service releases, and for RHEL, Ubuntu, and SUSE.

[IBM Telum processor website →](https://www.ibm.com/products/z/telum)

## IBM Spyre Accelerator { #spyre }

**AI Lifecycle:** [Deploy Models](../deploy-models/deploy-models.md) · [Serve Model](../serve-model/serve-model.md)

The IBM Spyre Accelerator is an AI accelerator for IBM z17 designed to support generative AI and foundation model inference on IBM Z. It provides additional AI compute for workloads that require larger models and higher throughput than traditional transactional AI use cases.

Spyre is commonly used to deploy and serve large language models that enables use cases like retrieval-augmented generation (RAG) applications and/or AI assistants, and code modernization solutions. It allows organizations to run these workloads close to their business applications and enterprise data on IBM Z.

### Key Capabilities

- Dedicated AI acceleration for foundation model inference
- Support for a curated set of IBM Granite, Llama, Mixtral, and other transformer-based models
- Support for online and batch inference workloads
- Scalable architecture with support for multiple accelerator cards in a single system
- Support for FP16, INT8, and INT4 precision formats
- Integration with enterprise AI platforms and inference runtimes
- No accelerator programming required for most deployments

### On IBM Z

It complements the Telum AI accelerator, which is optimized for real-time transactional AI workloads such as fraud detection and risk scoring. Spyre is designed for larger generative AI and foundation model workloads that require additional compute capacity.

Organizations typically use Spyre when deploying:

- Large language models (LLMs)
- Retrieval-augmented generation (RAG) applications
- AI assistants and copilots
- Document intelligence solutions

Spyre is accessed through supported software products rather than programmed directly.

### Common Software Integrations

- [IBM watsonx.ai](ai-platforms.md#watsonx-ai)
- [Red Hat OpenShift AI](ai-platforms.md#rhoai)
- [Red Hat AI Inference Server](inference-serving.md#rh-inference)

### When to Consider Spyre

Spyre may be a good fit when:

- You need to deploy and serve foundation models on IBM Z
- Your workload requires more compute than traditional transactional AI models
- You want to keep AI workloads close to business applications and data
- You are implementing generative AI use cases on IBM Z

### Getting Started

- [IBM Spyre Accelerator content solution hub](https://www.ibm.com/support/z-content-solutions/spyre-accelerator-z-and-linuxone/)
- [Red Hat AI Inference Server (Spyre serving runtime)](inference-serving.md#rh-inference)

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
    - AI Optimizer for IBM Z and IBM LinuxONE
    - Red Hat OpenShift AI
    - watsonx.ai
    - watsonx.governance

- **[Turnkey & ISV Solutions](turnkey-solutions.md)**

    - IBM SQL Data Insights Pro
    - Embedded AI Core Banking & Payment Solutions
    - ISV Packaged AI Solutions

</div>
