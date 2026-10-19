# AI Lifecycle on IBM Z

## AI Lifecycle Overview { #overview }

IBM offers a broad set of AI technologies for IBM Z. Many products support more than one stage of the AI lifecycle and often work together. Use the sections below to explore where each product is commonly used, understand how products relate to one another, and see common paths organizations take when building AI solutions.

<div class="grid cards" markdown>

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

| Product | Prepare Data | Build Models | Deploy Models | Serve Model | AI Governance | IBM z/OS | Linux on Z |
|----|----|----|----|----|----|----|----|
| [IBM Synthetic Data Sets](../products-tools/data-analytics.md#synthetic-data-sets) | ● |  |  |  |  | Yes | Yes |
| [IBM Z Platform for Apache Spark](../products-tools/data-analytics.md#apache-spark) | ● | ● |  |  |  | Yes | — |
| [IBM Z Accelerated SnapML\*](../products-tools/ai-frameworks.md#snapml) | ● | ● | ★ |  |  | Yes via zCX | Yes |
| [IBM Z Accelerated for TensorFlow\*](../products-tools/ai-frameworks.md#tensorflow) |  | ● | ★ |  |  | Yes via zCX | Yes |
| [IBM Z Accelerated for PyTorch\*](../products-tools/ai-frameworks.md#pytorch) |  | ● | ★ |  |  | Yes via zCX | Yes |
| [Python AI Toolkit for IBM z/OS](../products-tools/ai-frameworks.md#python-ai-toolkit) |  | ● | ★ |  |  | Yes | — |
| [ONNX & IBM Z Deep Learning Compiler\*](../products-tools/model-formats.md#zdlc) |  |  | ● |  |  | Yes via zCX | Yes |
| [IBM Z Accelerated Serving for TensorFlow\*](../products-tools/inference-serving.md#tf-serving) |  |  | ● | ● |  | Yes via zCX | Yes |
| [IBM Z Accelerated for Triton Inference Server\*](../products-tools/inference-serving.md#triton) |  |  | ● | ★ |  | Yes via zCX | Yes |
| [Machine Learning for IBM z/OS](../products-tools/ai-platforms.md#mlz) |  | ● | ★ | ★ | Explainability & Drift | Yes | — |
| [AI Optimizer for IBM Z and LinuxONE](../products-tools/ai-platforms.md#ai-optimizer) |  |  |  | ● |  | — | Yes |
| [Red Hat OpenShift AI](../products-tools/ai-platforms.md#rhoai) | ● | ● | ● | ★ | TrustyAI | Yes via zCX | Yes |
| [Red Hat AI Inference Server](../products-tools/inference-serving.md#rh-inference) |  |  |  | ● |  | — | Yes |
| [watsonx.ai](../products-tools/ai-platforms.md#watsonx-ai) |  | ● | ● | ★ |  | — | Yes |
| [watsonx.governance](../products-tools/ai-platforms.md#watsonx-governance) |  |  |  |  | ● | — | Yes |

**\*** Available in IBM Container Registry, with support included in AI Toolkit for IBM Z and IBM LinuxONE

★ = Most used capability
