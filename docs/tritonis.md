## Triton Inference Server for Linux on Z environments

Triton Inference Server is a model server open-sourced by Nvidia. Triton supports model inference on both CPU and GPU devices and is commonly used across a wide variety of platforms and architectures, including s390x (Linux on Z). On Linux on Z, Triton is able to leverage AI frameworks that can take advantage of both the SIMD architecture as well as the IBM Integrated Accelerator for AI. 

Features of Triton include:

- Server-side micro-batching (Dynamic Batching)
- Support for multiple frameworks
- Supports customization: new frameworks, rule integrations.
- Model version control
- Concurrent model execution
- Metrics/Monitoring Integration

Triton is quite flexible and supports a wide variety of model types. It also has the ability to create custom model backends, which make it extremely flexible for a variety of scenarios.  In our testing, we have focused on two primary paths which allow us to deploy models that can leverage the Integrated Accelerator for AI when deployed on IBM z16 or LinuxONE 4. 

These are:

- Traditional machine learning models in the PMML, ONNX, or JSON format that are run using an IBM Snap ML runtime.
- Deep Learning models in the ONNX model format and compiled with the IBM Deep Learning Compiler.

You can easily build and experiment with either of these capabilities on your Linux on Z environment. 

Triton Inference Server is a component of the [AI Tookit for IBM Z and LinuxONE](aitoolkitloz.md). You can find the latest container images in the [IBM Z and LinuxONE Container Image registry](https://ibm.github.io/ibm-z-oss-hub/main/main.html) under ibmz-accelerated-for-nvidia-triton-inference-server. 

IBM has made detailed examples available that can be used to try the Snap ML support: [https://github.com/IBM/ai-on-z-triton-is-examples/tree/main/snapml-examples](https://github.com/IBM/ai-on-z-triton-is-examples/tree/main/snapml-examples).
    
Additionally as mentioned Triton can also be used to deploy ONNX models compiled with the IBM Deep Learning Compiler. Guidance on building and using the Triton Deep Learning Compiler backend can be found here: https://github.com/IBM/onnxmlir-triton-backend

Note that IBM Snap ML is available for install with PyPI , while the IBM Deep Learning Compiler is available via the IBM Z and LinuxONE Container Repository. Both are no charge sources. 