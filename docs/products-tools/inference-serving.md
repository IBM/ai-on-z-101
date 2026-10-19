# Inference & Serving

Once a model is deployed, these are the runtimes that handle inference requests. IBM Z Accelerated for Triton Inference Server and IBM Z Accelerated Serving for TensorFlow target deep learning workloads on Telum, while Red Hat AI Inference Server is built for LLMs on Spyre.

## IBM Z Accelerated for Triton Inference Server { #triton }

**AI Lifecycle:** [Serve Model](../serve-model/serve-model.md)

IBM Z Accelerated for Triton Inference Server is a model server open-sourced by NVIDIA. IBM Z Accelerated for Triton Inference Server's primary business value lies in its ability to standardize enterprise AI deployment by running models from any framework — such as IBM Z Accelerated for PyTorch, IBM Z Accelerated for TensorFlow, or ONNX Runtime — on a single, unified platform. By maximizing hardware utilization through dynamic batching and concurrent model execution, it significantly cuts compute costs while delivering low-latency predictions. This flexibility and resource efficiency streamline MLOps workflows, allowing teams to scale high-throughput AI services in production without maintaining fragmented infrastructure.

It is commonly used across a wide variety of platforms and architectures, including s390x (Linux on Z). On Linux on Z, IBM Z Accelerated for Triton Inference Server can leverage AI frameworks that take advantage of both the SIMD architecture and the IBM Integrated Accelerator for AI (Neural Network Assist — NNPA).

IBM Z Accelerated for Triton Inference Server is a component of the AI Toolkit for IBM Z and IBM LinuxONE, with container images available in the IBM Z and LinuxONE Container Image Registry.

### Key Features

- Server-side micro-batching (Dynamic Batching) for throughput optimization
- Support for multiple frameworks and model backends
- Model version control and concurrent model execution
- Metrics/Monitoring integration
- Supports customization: new frameworks, rule integrations

### Supported Model Paths on IBM Z

IBM Z Accelerated for Triton Inference Server is quite flexible and supports a wide variety of model types. It also has the ability to create custom model backends, which make it extremely flexible for a variety of scenarios. In our testing, we have focused on three primary paths which allow us to deploy models that can leverage the Integrated Accelerator for AI when deployed on Telum I and Telum II processors:

- Traditional ML models in PMML, ONNX, or JSON format, run using an IBM Z Accelerated SnapML C++ runtime
- Deep learning models in ONNX format compiled with the IBM Z Deep Learning Compiler (zDLC)
- IBM Z Accelerated for PyTorch backend with Telum II support — enables real-world multi-model AI use cases on Telum II

### Getting Started

IBM Z Accelerated for Triton Inference Server is a component of the AI Toolkit for IBM Z and IBM LinuxONE. The AI Toolkit for IBM Z and IBM LinuxONE is designed to enable our clients to deploy and accelerate the adoption of popular open source AI frameworks on their z/OS® and IBM® LinuxONE platforms. The AI Toolkit for IBM Z and IBM LinuxONE follows a rigorous IBM Secure Engineering process that vets and scans open source AI-serving frameworks and IBM-certified containers for security vulnerabilities and validates compliance with industry regulations. Clients can also purchase IBM Elite Support for AI Toolkit for IBM Z and IBM LinuxONE. These components of AI Toolkit for IBM Z and IBM LinuxONE are freely available.

Two channels are provided for customers to download and deploy IBM Z Accelerated for Triton Inference Server:

- Red Hat Ecosystem Catalog: [IBM Z Accelerated for Triton™ Inference Server in Red Hat Ecosystem Catalog](https://catalog.redhat.com/en/software/container-stacks/detail/6a841823cd719546e3a3bf9c)
- The AI Toolkit components are available in the IBM Z and LinuxONE Container Image Registry (ICR). Instructions for downloading IBM Z Accelerated for Triton Inference Server from ICR are available at the following link: [IBM Z and LinuxONE Container Image Registry](https://github.com/IBM/ibmz-accelerated-for-nvidia-triton-inference-server)

IBM has made detailed examples available that can be used to try the Snap ML backend on Triton Inference Server: [IBM Z Accelerated SnapML backend examples on GitHub](https://github.com/IBM/ai-on-z-triton-is-examples/tree/main/snapml-examples).

Additionally, Triton can also be used to deploy ONNX models compiled with the IBM Deep Learning Compiler. Guidance on building and using the Triton Deep Learning Compiler backend can be found [here](https://github.com/IBM/onnxmlir-triton-backend).

Note that IBM Snap ML is available for install via PyPI, while the IBM Deep Learning Compiler is available via the IBM Z and LinuxONE Container Repository. Both are no-charge sources.

## IBM Z Accelerated Serving for TensorFlow { #tf-serving }

**AI Lifecycle:** [Serve Model](../serve-model/serve-model.md)

With IBM Z Accelerated Serving for TensorFlow, you can expose REST and gRPC endpoints for model inference requests, supporting high-throughput, low-latency inference serving on IBM Z for IBM Z Accelerated for TensorFlow models.

### Getting Started

The recommended way to obtain IBM Z Accelerated Serving for TensorFlow is to download prebuilt container images from the AI Toolkit for IBM Z and IBM LinuxONE. The AI Toolkit for IBM Z and IBM LinuxONE follows a rigorous IBM Secure Engineering process that vets and scans open source AI-serving frameworks and IBM-certified containers for security vulnerabilities and validates compliance with industry regulations. Clients can also purchase IBM Elite Support for AI Toolkit for IBM Z and IBM LinuxONE. These components are freely available in the IBM Z and LinuxONE Container Image Registry (ICR).

- [IBM Z Accelerated Serving for TensorFlow on GitHub](https://github.com/IBM/ibmz-accelerated-serving-for-tensorflow)

## Red Hat AI Inference Server { #rh-inference }

**AI Lifecycle:** [Serve Model](../serve-model/serve-model.md)

Red Hat AI Inference Server is Red Hat's enterprise supported model serving platform for large language models and foundation models. It is built on vLLM and designed to run standalone or on top of Red Hat OpenShift. The platform provides an OpenAI compatible API, allowing applications built for OpenAI interfaces to connect with minimal changes. It is intended for platform teams and machine learning engineers who need to run LLM inference in production using a supported runtime with a defined release lifecycle and operational tooling. On IBM Z and LinuxONE, Red Hat AI Inference Server enables production deployment of generative AI workloads, including support for Spyre accelerated workloads on IBM z17.

### Key Capabilities

- OpenAI compatible APIs, reducing the need to modify existing client applications
- Enterprise support, security updates, and a defined release lifecycle from Red Hat
- Support for the IBM Spyre Accelerator on IBM z17 for accelerated LLM inference
- Support for a curated set of IBM Granite, Llama, Mistral, and other vLLM compatible open weight models
- Consistent runtime across on premises OpenShift deployments on IBM Z and cloud based OpenShift environments

### On IBM Z

Within the Red Hat OpenShift AI stack on IBM Z and LinuxONE, it serves as the runtime responsible for handling inference requests after a model has been deployed. Organizations building generative AI applications on IBM Z may consider Red Hat AI Inference Server when they need a supported LLM serving platform.

### Getting Started

- [Red Hat AI Inference Server product page](https://www.redhat.com/en/products/ai/inference)

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
