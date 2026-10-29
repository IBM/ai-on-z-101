# Serve Model { #overview }

## Serve Model


Serving is the stage where a deployed model is made available for production use. On IBM Z, as soon as a model is deployed a scoring endpoint is created — serving and deploying are effectively the same step. This stage focuses on invoking that endpoint from your applications and managing the model in production over time.

The invocation method depends on your runtime: models deployed in Machine Learning for IBM z/OS (MLz) are called via ALNSCORE, ALNSRVSC, WOLA, Java, or REST; models deployed in IBM Z Accelerated for Triton Inference Server or Red Hat AI Inference Server are called via REST or gRPC. On IBM Z, invocation happens close to enterprise data, reducing latency and enabling AI to be embedded directly into transactional workflows.

## What happens at this stage?

<div class="grid cards no-hover-cards" markdown>

- **Integrate the model into your application**

    The scoring endpoint is created at deploy time — this stage is about wiring it into your business application. Use ALNSCORE or WOLA for z/OS-native calls, or REST and gRPC for containerized runtimes.

- **Handle production traffic**

    Configure dynamic batching, concurrency, and throughput settings to handle inference requests at production volume while meeting SLA requirements.

- **Manage model versions**

    Support model versioning and controlled updates, allowing new model versions to be swapped in, tested, and rolled back with minimal disruption to production workloads.

- **Infuse AI into applications**

    Embed inference directly into business applications — CICS transactions, IMS workflows, microservices, or REST-based integrations — co-located with enterprise data on IBM Z.

</div>

## Who is this stage for?

Serving is typically owned by **ML Engineers** and **Application Architects**, with Data Scientists as stakeholders validating that the serving layer produces correct outputs. Line of Business and IT Architects set the SLA and throughput requirements the serving layer should meet.

## Where to Start { #where-to-start }

Your serving method and runtime platform are determined by your model type and where it was deployed. The three subsections below map to those two dimensions.

### Invoking Traditional Machine Learning Models { #traditional-ml }

Traditional ML models are served through z/OS-native scoring interfaces or the AI Toolkit for IBM Z and IBM LinuxONE. Depending on the model type, they may leverage the **Telum on-chip AI accelerator** (e.g., gradient boosting and random forest) or run on native CPU (e.g., linear regression). If your traditional ML model is containerized, [IBM Z Accelerated for Triton Inference Server](#deep-learning) (covered in the next subsection) is also an option and supports PMML and ONNX traditional ML models alongside deep learning workloads.

??? note "Native z/OS scoring · Machine Learning for IBM z/OS<br><span class='accordion-sub'>Your core applications run on z/OS and you need inference integrated directly with CICS transactions, IMS workflows, or REST calls — without containerization.</span>"

    **→ Use [Machine Learning for IBM z/OS (MLz)](../products-tools/ai-platforms.md#mlz).** Machine Learning for IBM z/OS is the primary invocation platform for traditional ML on z/OS. Once the model is imported and deployed in Machine Learning for IBM z/OS, your application calls it using one of its supported invocation methods: ALNSCORE, ALNSRVSC, WOLA, Java, or REST. Machine Learning for IBM z/OS also supports [ONNX](../products-tools/model-formats.md#onnx) models in addition to PMML.

    *Common approach:* Import [PMML](../products-tools/model-formats.md#pmml) or [ONNX](../products-tools/model-formats.md#onnx) model into Machine Learning for IBM z/OS → Deploy as a scoring endpoint → Invoke from CICS transactions, IMS workflows, or REST-based application integrations.

### Invoking Deep Learning Models and Encoder LLMs (Telum On-Chip Accelerator) { #deep-learning }

Deep learning models and encoder LLMs targeting the Telum on-chip AI accelerator are invoked through containerized inference runtimes on Linux on Z or z/OS Container Extensions. Applications call these models via REST or gRPC endpoints. If you are on z/OS and prefer a native (non-containerized) runtime, [Machine Learning for IBM z/OS (MLz)](#traditional-ml) (covered in the previous subsection) also supports ONNX models. Encoder LLMs may also choose the Spyre path — see the next subsection.

??? note "Multi-framework inference on Linux on Z · IBM Z Accelerated for Triton Inference Server<br><span class='accordion-sub'>You need a single inference server that handles ONNX, TensorFlow, PyTorch, and zDLC-compiled models, running in containers on Linux on Z or z/OS Container Extensions.</span>"

    **→ Use [IBM Z Accelerated for Triton Inference Server](../products-tools/inference-serving.md#triton).** IBM Z Accelerated for Triton Inference Server provides a unified, high-performance runtime for deep learning, encoder LLM, and traditional ML models on IBM Z. Applications invoke models via REST or gRPC endpoints.

    *Common approach:* Deploy [zDLC](../products-tools/model-formats.md#zdlc)-compiled [ONNX](../products-tools/model-formats.md#onnx) model to IBM Z Accelerated for Triton Inference Server → Invoke via gRPC or REST from application code.

??? note "IBM Z Accelerated for TensorFlow direct serving · IBM Z Accelerated Serving for TensorFlow<br><span class='accordion-sub'>Your model is a TensorFlow SavedModel and you want to serve it using the IBM Z Accelerated Serving for TensorFlow runtime.</span>"

    **→ Use [IBM Z Accelerated Serving for TensorFlow](../products-tools/inference-serving.md#tf-serving).** Provides a production IBM Z Accelerated Serving for TensorFlow runtime optimized for IBM Z hardware, leveraging Telum AI acceleration.

    *Common approach:* Export IBM Z Accelerated for TensorFlow SavedModel → Deploy to IBM Z Accelerated Serving for TensorFlow → Expose inference endpoint for application calls.

??? note "Managed inference with MLOps · Red Hat OpenShift AI<br><span class='accordion-sub'>Multiple teams need shared serving infrastructure, monitoring, scaling controls, and pipeline management for deep learning workloads.</span>"

    **→ Use [Red Hat OpenShift AI](../products-tools/ai-platforms.md#rhoai).** OpenShift AI manages serving infrastructure for both Telum and Spyre workloads, making it the right platform when you need coverage across multiple accelerators or model types.

    *Common approach:* Deploy model servers ([IBM Z Accelerated for Triton Inference Server](../products-tools/inference-serving.md#triton) or [IBM Z Accelerated Serving for TensorFlow](../products-tools/inference-serving.md#tf-serving)) through OpenShift AI → Monitor performance and scale inference workloads from a unified MLOps platform.

??? note "Encoder LLMs on Telum · IBM Z Accelerated for Triton Inference Server · zDLC<br><span class='accordion-sub'>You have an encoder LLM (e.g., BERT-style) and want to serve it on the Telum on-chip AI accelerator.</span>"

    **→ Use [IBM Z Accelerated for Triton Inference Server](../products-tools/inference-serving.md#triton) or [Red Hat OpenShift AI](../products-tools/ai-platforms.md#rhoai).** Encoder LLMs targeting Telum follow the ONNX → zDLC compilation path: export the model to [ONNX](../products-tools/model-formats.md#onnx), compile with [IBM Z Deep Learning Compiler (zDLC)](../products-tools/model-formats.md#zdlc), and serve via IBM Z Accelerated for Triton Inference Server or through OpenShift AI.

    *Common approach:* Export encoder LLM to ONNX → Compile with zDLC → Deploy to IBM Z Accelerated for Triton Inference Server → Serve via gRPC or REST endpoint.

    *Note: Encoder LLMs can also be served on Spyre — see the next subsection. The choice depends on your SLOs and whether you have Spyre available.*

### Invoking Large Language Models on Spyre { #llm-spyre }

**Decoder LLMs always use the IBM Spyre Accelerator.** Encoder LLMs may also choose Spyre over Telum depending on Application SLAs and hardware availability. Both Red Hat AI Inference Server and Red Hat OpenShift AI are valid serving paths — no ONNX conversion is required for either. Applications invoke Spyre-accelerated LLMs via REST.

??? note "Dedicated LLM inference server · Red Hat AI Inference Server<br><span class='accordion-sub'>You want Spyre-accelerated LLM inference without the full Red Hat OpenShift AI platform. No ONNX conversion required — LLMs are served natively.</span>"

    **→ Use [Red Hat AI Inference Server](../products-tools/inference-serving.md#rh-inference).** The recommended path for customers who want LLM inference on Spyre without the OpenShift AI platform license. Runs standalone, exposes an OpenAI-compatible REST API, and serves LLMs natively without any ONNX conversion step.

    *Common approach:* Source or fine-tune an LLM → Deploy natively via Red Hat AI Inference Server on IBM Z Spyre → Invoke via REST.

??? note "LLM serving with MLOps and multi-accelerator support · Red Hat OpenShift AI<br><span class='accordion-sub'>You need MLOps pipeline management, monitoring, and model governance around your LLM serving, or a single platform that covers both Telum and Spyre workloads.</span>"

    **→ Use [Red Hat OpenShift AI](../products-tools/ai-platforms.md#rhoai).** Both Red Hat AI Inference Server and Red Hat OpenShift AI are valid paths for LLM inference on Spyre — no ONNX conversion required for either. Choose OpenShift AI when you need the broader platform: MLOps pipelines, model governance, and unified management across Telum and Spyre workloads.

    *Common approach:* Manage LLM serving through OpenShift AI using the [Red Hat AI Inference Server](../products-tools/inference-serving.md#rh-inference) runtime for Spyre workloads, or [IBM Z Accelerated for Triton Inference Server](../products-tools/inference-serving.md#triton) for Telum workloads — all from a single MLOps platform.

    [See validated LLMs for IBM Z on Red Hat OpenShift AI →](https://docs.redhat.com/en/documentation/red_hat_ai/3/html/validated_models/ibm-z-validated-models_validated-models)

??? note "Hybrid inference routing across platforms · AI Optimizer for IBM Z and LinuxONE<br><span class='accordion-sub'>You have a hybrid environment spanning IBM Z and other platforms (cloud, GPU clusters) and need intelligent routing of LLM inference requests to the most optimal platform.</span>"

    **→ Use [AI Optimizer for IBM Z and LinuxONE](../products-tools/ai-platforms.md#ai-optimizer).** AI Optimizer acts as an inference gateway that receives a prompt and routes it to the most optimal platform — IBM Z Spyre, Telum, or an external GPU — based on configured criteria. It now includes [Red Hat AI Inference Server](../products-tools/inference-serving.md#rh-inference) as an integrated component.

    *Common approach:* Deploy AI Optimizer as the inference gateway → Route LLM prompts to Spyre via the embedded Red Hat AI Inference Server, or to an external GPU platform, depending on the request and routing policy.

## Next Steps { #next-steps }

<div class="grid cards clickable-cards" markdown>

- **[AI Governance](../ai-governance/ai-governance.md)**

    Monitor your production model for bias, drift, and fairness. Use watsonx.governance, TrustyAI, and Machine Learning for IBM z/OS built-in explainability to meet regulatory requirements.

</div>
