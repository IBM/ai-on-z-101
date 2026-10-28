# Deploy Models { #overview }

## Deploy Models


Before a model can be used in production, it often needs to be packaged, optimized, and prepared for its target runtime environment. This stage focuses on converting models into supported deployment formats, applying platform-specific optimizations, and preparing them for execution on IBM Z.

IBM Z supports multiple deployment paths based on the model type, deployment architecture, and target inference environment. Models developed with open source and commercial frameworks can be deployed using the same set of IBM Z deployment and serving technologies.

## What happens at this stage?

<div class="grid cards no-hover-cards" markdown>

- **Convert to a portable format**

    Export your trained model to ONNX (deep learning) or PMML (traditional ML) — standard interchange formats that work across IBM Z operating systems and deployment tools. If you are running IBM Z Accelerated for TensorFlow or IBM Z Accelerated for PyTorch natively, you can skip this step and deploy directly without conversion.

- **Optimize for IBM Z hardware**

    For deep learning models and encoder LLMs targeting the on-chip AI accelerator on Telum and Telum II, compile with the IBM Z Deep Learning Compiler (zDLC) after ONNX conversion. For LLMs served via Red Hat AI Inference Server or Red Hat OpenShift AI on Spyre, no ONNX conversion or compilation step is required — models can be served natively. Traditional ML models do not require this step.

- **Move to production**

    Deploy your model to a production runtime — on Z, Linux on Z or LinuxONE — co-located with the enterprise data it needs to score.

- **Configure scoring endpoints**

    Set up the model to receive inference requests via REST API, CICS/IMS native scoring, batch jobs, or a gRPC serving endpoint.

</div>

## Who is this stage for?

Optimization and deployment are typically owned by **ML Engineers** and **IT Architects**. The ML Engineer handles model conversion, compilation, and the deployment artifact. The IT Architect owns the infrastructure decisions — operating environment, serving topology, and integration with business applications. Data Scientists are stakeholders who validate that the deployed model performs as expected. In practice, one person may wear multiple hats depending on the organization.

## Where to Start { #where-to-start }

Your path is determined by two things: your model type and your target accelerator. The three subsections below map to those two dimensions.

### Deploying Traditional Machine Learning Models { #traditional-ml }

Traditional ML models (classification, regression, recommendation, forecasting) are deployed via PMML and will either leverage the **Telum on-chip AI accelerator** (e.g., gradient boosting and random forest models) or run on native CPU (e.g., linear regression and logistic regression). Not all traditional ML models use the on-chip AI accelerator.

??? note "Export and deploy via PMML · PMML · IBM Z Accelerated SnapML<br><span class='accordion-sub'>You have a model trained with IBM Z Accelerated SnapML, scikit-learn, XGBoost, or another traditional ML framework and need to move it to production.</span>"

    **→ Export to [PMML](../products-tools/model-formats.md#pmml)** and deploy through [Machine Learning for IBM z/OS](../products-tools/ai-platforms.md#mlz) or the AI Toolkit for IBM Z and IBM LinuxONE scoring services. PMML provides a portable format that does not require the original training framework at inference time.

    *Common approach:* Train with IBM Z Accelerated SnapML or scikit-learn → Export to PMML → Deploy and score through Machine Learning for IBM z/OS or AI Toolkit for IBM Z and IBM LinuxONE.

    *Note: IBM Z Accelerated SnapML is primarily a training technology. Deployment begins after exporting. IBM Z Accelerated SnapML can also be used within Machine Learning for IBM z/OS or the AI Toolkit for IBM Z and IBM LinuxONE as part of a broader deployment pipeline.*

??? note "Full lifecycle on z/OS · Machine Learning for IBM z/OS<br><span class='accordion-sub'>You want model importing, deployment, scoring endpoints, explainability, and lifecycle management fully integrated into the z/OS environment.</span>"

    **→ Use [Machine Learning for IBM z/OS (MLz)](../products-tools/ai-platforms.md#mlz).** Machine Learning for IBM z/OS is the primary deployment and scoring platform for traditional ML models on z/OS, supporting PMML imports from any training tool and exposing REST and CICS/IMS native scoring endpoints.

    *Common approach:* Build or import model (from any tool that exports PMML) → Import into Machine Learning for IBM z/OS → Deploy as a scoring endpoint co-located with z/OS applications.

### Deploying Deep Learning Models and Encoder LLMs (Telum On-Chip Accelerator) { #deep-learning }

Deep learning models and encoder LLMs share the same deployment path on IBM Z to enable **Telum on-chip AI acceleration**: convert to ONNX, compile with the IBM Z Deep Learning Compiler (zDLC), and deploy via a serving platform. Unlike traditional ML models, these heavier-weight models should always target the Telum on-chip AI accelerator. Encoder LLMs can also choose the Spyre path — see the next subsection.

??? note "Standard deep learning path · ONNX · zDLC<br><span class='accordion-sub'>You have a neural network trained with any framework and want to deploy it on the Telum on-chip AI accelerator.</span>"

    **→ Convert to [ONNX](../products-tools/model-formats.md#onnx), then compile with the [IBM Z Deep Learning Compiler (zDLC)](../products-tools/model-formats.md#zdlc).** zDLC optimizes the ONNX model for IBM Z hardware, generating a deployment artifact that leverages Telum AI acceleration automatically.

    *Common approach:* Export model to ONNX → Compile with zDLC → Deploy via [IBM Z Accelerated for Triton Inference Server](../products-tools/inference-serving.md#triton), [Machine Learning for IBM z/OS](../products-tools/ai-platforms.md#mlz), or [Red Hat OpenShift AI](../products-tools/ai-platforms.md#rhoai).

??? note "IBM Z Accelerated for TensorFlow direct serving · IBM Z Accelerated Serving for TensorFlow<br><span class='accordion-sub'>Your model was built with IBM Z Accelerated for TensorFlow and you want to skip ONNX conversion by deploying directly.</span>"

    **→ Export as a TensorFlow SavedModel** and deploy with [IBM Z Accelerated Serving for TensorFlow](../products-tools/inference-serving.md#tf-serving). This avoids the ONNX conversion step while still leveraging Telum hardware acceleration.

    *Common approach:* Train with IBM Z Accelerated for TensorFlow → Export SavedModel → Deploy to IBM Z Accelerated Serving for TensorFlow.

    *Note: The ONNX → zDLC path is also valid for IBM Z Accelerated for TensorFlow models and gives access to [IBM Z Accelerated for Triton Inference Server](../products-tools/inference-serving.md#triton) or [Red Hat OpenShift AI](../products-tools/ai-platforms.md#rhoai) as serving platforms.*

??? note "Multi-framework or containerized serving · IBM Z Accelerated for Triton Inference Server · Red Hat OpenShift AI<br><span class='accordion-sub'>You need to serve multiple model types from a shared inference platform, or your team works in a containerized OpenShift environment.</span>"

    **→ Use [IBM Z Accelerated for Triton Inference Server](../products-tools/inference-serving.md#triton)**, optionally managed through [Red Hat OpenShift AI](../products-tools/ai-platforms.md#rhoai). IBM Z Accelerated for Triton Inference Server supports TensorFlow, PyTorch, ONNX, and zDLC-compiled models from a single serving runtime.

    *Common approach:* Convert model to ONNX and compile with zDLC → Deploy to IBM Z Accelerated for Triton Inference Server → Optionally manage deployment pipelines and monitoring through Red Hat OpenShift AI.

??? note "Encoder LLMs on Telum · ONNX · zDLC · IBM Z Accelerated for Triton Inference Server<br><span class='accordion-sub'>You have an encoder large language model (e.g., BERT-style) and want to run it on the Telum on-chip AI accelerator rather than Spyre.</span>"

    **→ Convert the encoder LLM to [ONNX](../products-tools/model-formats.md#onnx)** and follow the same deep learning path: compile with [zDLC](../products-tools/model-formats.md#zdlc) and deploy via [IBM Z Accelerated for Triton Inference Server](../products-tools/inference-serving.md#triton), [Machine Learning for IBM z/OS](../products-tools/ai-platforms.md#mlz), or [Red Hat OpenShift AI](../products-tools/ai-platforms.md#rhoai).

    *Common approach:* Export encoder LLM to ONNX → Compile with zDLC → Deploy via IBM Z Accelerated for Triton Inference Server or Red Hat OpenShift AI.

    *Note: Encoder LLMs can also be served on Spyre — see the next subsection. As a general guide: models with approximately 300 million parameters or fewer are a good fit for the Telum on-chip AI accelerator; models up to approximately 30 billion parameters can run on Spyre; models larger than that are not suited for IBM Z. The right choice also depends on your Application SLAs and hardware availability.*

### Deploying Large Language Models on Spyre { #llm-spyre }

**Decoder LLMs always use Spyre.** Encoder LLMs may also choose Spyre over the Telum on-chip AI accelerator depending on Application SLAs, model size, and hardware availability. The tools in this subsection are specific to Spyre-accelerated LLM workloads.

??? note "Decoder LLMs and encoder LLMs on Spyre · Red Hat AI Inference Server<br><span class='accordion-sub'>You are deploying a decoder LLM (e.g., Llama, Granite) or an encoder LLM on Spyre without the full Red Hat OpenShift AI platform. No ONNX conversion is required.</span>"

    **→ Use [Red Hat AI Inference Server](../products-tools/inference-serving.md#rh-inference).** This is the recommended path for customers who want LLM inference on Spyre without paying for the full Red Hat OpenShift AI platform license. It is purpose-built for large model inference — no ONNX conversion required. Not used for traditional ML or deep learning models on the Telum accelerator.

    *Common approach:* Source or fine-tune an LLM → Deploy natively via Red Hat AI Inference Server with Spyre acceleration on IBM Z.

??? note "LLM deployment with MLOps and multi-platform support · Red Hat OpenShift AI<br><span class='accordion-sub'>You need MLOps pipeline management, model catalogs, and monitoring around your LLM deployment, or a single platform covering both Telum and Spyre workloads.</span>"

    **→ Use [Red Hat OpenShift AI](../products-tools/ai-platforms.md#rhoai).** Both Red Hat AI Inference Server and Red Hat OpenShift AI are valid paths for LLM inference on Spyre — no ONNX conversion required for either. Choose OpenShift AI when you need the broader platform: MLOps pipelines, model governance, and unified management across Telum and Spyre workloads.

    *Common approach:* Deploy LLMs through OpenShift AI using the [Red Hat AI Inference Server](../products-tools/inference-serving.md#rh-inference) runtime for Spyre workloads, or [IBM Z Accelerated for Triton Inference Server](../products-tools/inference-serving.md#triton) for Telum workloads — all managed from a single MLOps platform.

??? note "Hybrid routing across platforms · AI Optimizer for IBM Z and LinuxONE<br><span class='accordion-sub'>You have a hybrid deployment spanning IBM Z and other platforms (cloud, GPU clusters) and need intelligent routing of LLM inference requests to the most optimal platform.</span>"

    **→ Use [AI Optimizer for IBM Z and LinuxONE](../products-tools/ai-platforms.md#ai-optimizer).** AI Optimizer acts as a gateway that receives a prompt and routes it to the most optimal platform based on configured criteria — IBM Z Spyre, Telum, or an external GPU. It now includes [Red Hat AI Inference Server](../products-tools/inference-serving.md#rh-inference) as an integrated component.

    *Common approach:* Deploy AI Optimizer as the inference gateway → Route LLM prompts to Spyre via the embedded Red Hat AI Inference Server or to an external GPU platform depending on the request.

## Next Steps { #next-steps }

<div class="grid cards clickable-cards" markdown>

- **[Serve Model](../serve-model/serve-model.md)**

    Invoke your deployed model from applications — via ALNSCORE or WOLA for z/OS-native calls, or REST and gRPC for containerized runtimes.

</div>
