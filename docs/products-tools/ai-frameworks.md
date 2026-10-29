---
title: AI Frameworks & Developer Tools on IBM Z
description: Accelerated open-source AI frameworks for IBM Z including TensorFlow, PyTorch, Snap ML, and the AI Toolkit for IBM Z and LinuxONE.
---

# AI Frameworks & Dev Tools

This page covers the open-source frameworks and IBM-optimized libraries you use to build and train models on IBM Z. It includes familiar tools like IBM Z Accelerated for TensorFlow and IBM Z Accelerated for PyTorch with built-in optimization for IBM Z hardware, and paired with enterprise level support.

<div id="ai-toolkit"></div>

??? note "AI Toolkit for IBM Z and IBM LinuxONE"

    **AI Lifecycle:** [Build Models](../build-model/build-model.md) · [Deploy Models](../deploy-models/deploy-models.md) · [Serve Model](../serve-model/serve-model.md)

    The AI Toolkit for IBM Z and IBM LinuxONE is a family of popular open-source AI frameworks across various phases of the AI lifecycle, along with IBM Elite Support, adapted and optimized for IBM Z hardware.

    The AI Toolkit for IBM Z and IBM LinuxONE enables enterprise customers to operationalize popular open-source AI frameworks directly within their core mainframe environment.

    This allows data science teams to build, train, and validate models using familiar top open-source AI frameworks (e.g., IBM Z Accelerated for PyTorch, IBM Z Accelerated for TensorFlow, IBM Z Accelerated SnapML, ONNX Runtime, scikit-learn) and provides frictionless deployment of these models trained on cloud or x86 environments to be ported to z/OS with minimal code refactoring, drastically reducing deployment cycles.

    This helps customers with Enterprise-Grade Security, Compliance, and Governance by keeping mission-critical data within the hardened, encrypted security boundary of IBM Z and minimizing regulatory compliance exposure.

    This way AI Toolkit for IBM Z and IBM LinuxONE provides the best of both worlds — the speed and flexibility of open-source AI and the security and reliability of IBM Z — to build AI solutions for mission-critical workloads.

    Each component is vetted through IBM's Secure Engineering process, scanned for vulnerabilities, and packaged as ready-to-use container images available in the [IBM Z and LinuxONE Container Registry](https://ibm.github.io/ibm-z-oss-hub/main/main.html).

    We are working towards providing AI Toolkit for IBM Z and IBM LinuxONE components also through Red Hat Ecosystem Catalog and Red Hat OpenShift AI shortly.

    These images run in Linux on Z environments (including z/OS Container Extensions) and are optimized to leverage the IBM Integrated Accelerator for AI on Telum I and Telum II processors.

    Detailed instructions are available in the corresponding pages for each component in the AI Toolkit for IBM Z and IBM LinuxONE.

    #### Components (as of 2026)

    | Component | Notes |
    |----|----|
    | IBM Z Deep Learning Compiler | ONNX-MLIR based compiler targeting Telum AI accelerator for Ultra Low Latency In-Transaction AI |
    | IBM Z Accelerated SnapML | High-performance AI training and inference for traditional Machine Learning models |
    | IBM Z Accelerated for PyTorch | Optimized PyTorch deep learning framework with on-chip AI acceleration support |
    | IBM Z Accelerated for TensorFlow | Optimized TensorFlow deep learning distribution with on-chip AI acceleration support |
    | IBM Z Accelerated Serving for TensorFlow | Production model server for TensorFlow models |
    | IBM Z Accelerated for Triton Inference Server | High-performance multi-framework model serving for machine learning and deep learning models |

    - [AI Toolkit for IBM Z and IBM LinuxONE product page](https://www.ibm.com/products/ai-toolkit-for-z-and-linuxone)
    - [Redbook: AI Toolkit for IBM Z](https://www.redbooks.ibm.com/redpapers/pdfs/redp5749.pdf)

<div id="snapml"></div>

??? note "IBM Z Accelerated SnapML"

    **AI Lifecycle:** [Prepare Data](../prepare-data/prepare-data.md) · [Build Models](../build-model/build-model.md)

    IBM Z Accelerated SnapML is an IBM library developed and maintained by IBM Research that provides high-speed training and inference of popular machine learning models. It is fully compatible with the scikit-learn Python API and addresses the core ML needs of data scientists: speed, resource efficiency, accuracy, and scalability to TB-scale datasets.

    It targets structured/tabular data workloads using popular statistical models, including Generalized Linear Models (Linear/Logistic Regression, SVMs), Decision Trees, Random Forests, and Gradient Boosting Machines.

    Instead of replacing existing workflows, IBM Z Accelerated SnapML acts as a high-performance drop-in replacement for standard machine learning libraries like scikit-learn or LightGBM.

    #### What IBM Z Accelerated SnapML Supports

    - Generalized Linear Models, Tree-based Models, and Gradient Boosting Machines
    - Accelerated scoring of scikit-learn, XGBoost, and LightGBM trained models when exported to PMML, JSON, or ONNX
    - Drop-in scikit-learn compatible API — no code changes required
    - Scalable to TB-scale datasets

    #### IBM Telum Integrated Accelerator for AI

    Starting with IBM Z Accelerated SnapML version 1.9.0, IBM Z Accelerated SnapML can utilize the IBM Integrated Accelerator for AI. Accelerator exploitation can be enabled at model import time for:

    - Random Forest
    - Extra Trees
    - Gradient Boosting Machines

    Starting with IBM Z Accelerated SnapML 1.9.1, IBM Z Accelerated SnapML-trained tree-based models (RF, ET, and GB) can be exported to PMML.

    #### Getting Started

    IBM Z Accelerated SnapML is a component of the AI Toolkit for IBM Z and IBM LinuxONE. The AI Toolkit for IBM Z and IBM LinuxONE is designed to enable our clients to deploy and accelerate the adoption of popular open source AI frameworks on their z/OS® and IBM® LinuxONE platforms. The AI Toolkit for IBM Z and IBM LinuxONE follows a rigorous IBM Secure Engineering process that vets and scans open source AI-serving frameworks and IBM-certified containers for security vulnerabilities and validates compliance with industry regulations. Clients can also purchase IBM Elite Support for AI Toolkit for IBM Z and IBM LinuxONE. These components of AI Toolkit for IBM Z and IBM LinuxONE are freely available.

    IBM Z Accelerated SnapML is available as Linux on Z containers and z/OS Container Extensions independently. It is also utilized as part of [Machine Learning for IBM z/OS](https://www.ibm.com/products/machine-learning-for-zos).

    The AI Toolkit for IBM Z and IBM LinuxONE components are available in the [IBM Z and LinuxONE Container Image Registry (ICR)](https://ibm.github.io/ibm-z-oss-hub/main/main.html). Instructions for downloading IBM Z Accelerated SnapML from ICR are available at the following link: [IBM Z and LinuxONE Container Image Registry](https://github.com/IBM/ibmz-accelerated-for-snapml)

    IBM Z Accelerated SnapML can also be installed directly via PyPI:

            pip install snapml

    We will also be providing IBM Z Accelerated SnapML through Red Hat Ecosystem catalog shortly.

    Examples for IBM Z Accelerated SnapML try out are available at:

    - [IBM Z Accelerated SnapML documentation](https://snapml.readthedocs.io/en/latest/)
    - [IBM Z Accelerated SnapML examples on GitHub](https://github.com/IBM/snapml-examples)
    - [IBM Z Accelerated SnapML with IBM Z Accelerated for Triton Inference Server examples](https://github.com/IBM/ai-on-z-triton-is-examples)
    - [Additional IBM Z Accelerated SnapML documentation](https://snapml.readthedocs.io/en/latest/)

<div id="tensorflow"></div>

??? note "IBM Z Accelerated for TensorFlow"

    **AI Lifecycle:** [Build Models](../build-model/build-model.md) · [Deploy Models](../deploy-models/deploy-models.md)

    IBM Z Accelerated for TensorFlow is a popular machine learning and artificial intelligence framework open-sourced by Google. It provides an end-to-end ecosystem of tools, libraries, and community resources that allow developers to design, train, and deploy deep learning models. Built around the concept of multidimensional data arrays known as "tensors," IBM Z Accelerated for TensorFlow excels at complex tasks such as computer vision, natural language processing, and predictive analytics.

    IBM Z Accelerated for TensorFlow can be used on IBM Z on Linux environments and z/OS Container Extensions. On IBM Z, IBM Z Accelerated for TensorFlow is built to exploit the vector architecture for training and inference operations. On IBM z16 and z17 hardware, IBM Z Accelerated for TensorFlow can now leverage new acceleration capabilities enabled by the Telum I and Telum II processors.

    On IBM z16 and z17 machines (running Linux on IBM Z or IBM® z/OS® Container Extensions (IBM zCX)), IBM Z Accelerated for TensorFlow core Graph Execution will leverage new inference acceleration capabilities that transparently target the IBM Integrated Accelerator for AI through the IBM Z Deep Neural Network (zDNN) library. The IBM zDNN library contains a set of primitives that support Deep Neural Networks. These primitives transparently target the IBM Integrated Accelerator for AI on IBM z16 and later. This leads to AI acceleration using the integrated Neural Network Assist (NNPA) instructions of the IBM Telum On-chip Accelerator. No changes to the original model are needed to take advantage of the new inference acceleration capabilities.

    #### Getting Started

    The recommended way to obtain IBM Z Accelerated for TensorFlow is to download prebuilt container images from the AI Toolkit for IBM Z and IBM LinuxONE. The AI Toolkit for IBM Z and IBM LinuxONE follows a rigorous IBM Secure Engineering process that vets and scans open source AI frameworks and IBM-certified containers for security vulnerabilities and validates compliance with industry regulations. Clients can also purchase IBM Elite Support for AI Toolkit for IBM Z and IBM LinuxONE. These components are freely available in the IBM Z and LinuxONE Container Image Registry (ICR).

    - [IBM Z Accelerated for TensorFlow on GitHub](https://github.com/IBM/ibmz-accelerated-for-tensorflow)

<div id="pytorch"></div>

??? note "IBM Z Accelerated for PyTorch"

    **AI Lifecycle:** [Build Models](../build-model/build-model.md) · [Deploy Models](../deploy-models/deploy-models.md)

    IBM Z Accelerated for PyTorch is one of the most popular open source AI frameworks in the world that provides a flexible platform for building deep learning models. Released by Facebook's AI Research lab in 2016, IBM Z Accelerated for PyTorch allows developers to create and modify models easily through its dynamic structure, which offers immediate feedback. This adaptability makes it particularly appealing for researchers and developers who want to experiment with new ideas.

    In IBM Z Accelerated for PyTorch, you create models by writing a Python program that specifies the layers and tensor-based operations of the deep neural network and compiling them into a model. Its focus on simplicity, low CPU usage, efficient memory management, and a robust community and ecosystem make it a strong choice for AI applications of all sizes.

    #### IBM Z Accelerated for PyTorch on IBM Z To Utilize IBM Telum Processors

    To maximize IBM Z Accelerated for PyTorch performance on IBM Z servers, AI Acceleration is done using the integrated Neural Network Assist (NNPA) instructions of the IBM Telum On-chip Accelerator. The AI Toolkit for IBM Z and IBM LinuxONE container images include IBM enhancements that enable open-source libraries to use these hardware acceleration capabilities. IBM Z Accelerated for PyTorch applications that run with the IBM Z Accelerated for PyTorch container image can use this hardware acceleration in a manner similar to how IBM Z Accelerated for PyTorch applications use AI accelerators on other platforms.

    IBM Z Accelerated for PyTorch can be leveraged for various use cases, including applications such as language processing and computer vision. It is optimized for AI on IBM z16 and z17, which improves inference performance for a wide range of IBM Z Accelerated for PyTorch models.

    IBM Z Accelerated for PyTorch is offered as Linux Containers for Linux on Z and z/OS Container Extensions (zCX) for z/OS users.

    #### Getting Started

    IBM Z Accelerated for PyTorch is a component of the AI Toolkit for IBM Z and IBM LinuxONE. The AI Toolkit for IBM Z and IBM LinuxONE is designed to enable our clients to deploy and accelerate the adoption of popular open source AI frameworks on their IBM Z platforms. The AI Toolkit for IBM Z and IBM LinuxONE follows a rigorous IBM Secure Engineering process that vets and scans open source AI-serving frameworks and IBM-certified containers for security vulnerabilities and validates compliance with industry regulations. Clients can also purchase IBM Elite Support for AI Toolkit for IBM Z and IBM LinuxONE.

    The AI Toolkit for IBM Z and IBM LinuxONE components are available in the [IBM Z and LinuxONE Container Image Registry (ICR)](https://ibm.github.io/ibm-z-oss-hub/main/main.html). This registry includes open-source software in container images that are often used as the foundation for new composite workloads. It provides a secure and trustworthy content source. These components of AI Toolkit for IBM Z and IBM LinuxONE are freely available. Details about downloading the image from ICR is available at [AI Toolkit for IBM Z and IBM LinuxONE page for IBM Z Accelerated for PyTorch](https://github.com/IBM/ibmz-accelerated-for-pytorch?tab=readme-ov-file).

    The AI Toolkit for IBM Z and IBM LinuxONE components will also soon be available for customers in Red Hat Ecosystem Catalog as well as integrated into Red Hat OpenShift AI for building integrated AI solutions.

    Further read:

    - [Accelerating IBM Z Accelerated for PyTorch Inference on IBM Z and LinuxONE](https://www.ibm.com/products/blog/the-rise-of-pytorch)

<div id="python-ai-toolkit"></div>

??? note "Python AI Toolkit for IBM z/OS"

    **AI Lifecycle:** [Prepare Data](../prepare-data/prepare-data.md) · [Build Models](../build-model/build-model.md) · [Deploy Models](../deploy-models/deploy-models.md)

    The Python AI Toolkit for IBM z/OS is a collection of open source Python packages designed to support AI and machine learning workloads on z/OS. It is built on top of IBM Open Enterprise SDK for Python, which provides the underlying Python runtime for z/OS — including the interpreter, standard libraries, and platform integration. The Python AI Toolkit for IBM z/OS extends that foundation with a curated set of AI and machine learning packages. Rather than pulling packages directly from the public Python ecosystem, the toolkit provides a tested and curated distribution through an IBM hosted PyPI style repository — giving organizations a trusted, enterprise-vetted source for AI packages that have been validated for z/OS compatibility and scanned for security vulnerabilities. Packages can be installed and managed using pip, the standard Python package manager, making the experience consistent with how teams already work in other Python environments. IBM support for the toolkit is available through IBM Shopz.

    #### Why Use It on IBM Z?

    - **Familiar Python Development** — Teams that already work with Python can begin developing AI and machine learning solutions on z/OS without learning a new programming language or framework.
    - **Keep Data on z/OS** — Applications run directly on z/OS, allowing organizations to work with sensitive enterprise data without moving it to another platform.
    - **Access Enterprise Data Sources** — Python applications can connect to data stored in Db2, IMS, VSAM, and other enterprise systems using SQLAlchemy, JDBC, ODBC, and z/OS specific connectors.
    - **End-to-End AI Workflows** — The toolkit supports common AI and machine learning tasks including data exploration, data preparation, model training, and model export within a Python based workflow.

    #### Common Use Cases

    The Python AI Toolkit for IBM z/OS can be used to:

    - Access and prepare data stored on z/OS
    - Build machine learning workflows using Python
    - Train models using open source Python libraries
    - Evaluate and optimize models
    - Export trained models for deployment in other environments

    #### Getting Started

    Visit the Python AI Toolkit for IBM z/OS product page for installation instructions, documentation, tutorials, and learning resources.

    - [Python AI Toolkit for IBM z/OS Product Page](https://ibm-z-oss-oda.github.io/python_ai_toolkit_zos/)
    - [Overview Video](https://ibm.biz/zPAIT_overview)
    - [Getting Started Video](https://ibm.biz/zPAIT_demo)
    - [Redpaper Solution Guide](https://ibm.biz/zPAIT_redbook)
    - [IBM Open Enterprise SDK for Python](https://www.ibm.com/products/open-enterprise-python-zos)

---

## Explore other Products & Tools

<div class="grid cards clickable-cards neutral-border-cards" markdown>

- **[Data & Analytics](data-analytics.md)**

    - IBM Z Platform for Apache Spark
    - IBM Synthetic Data Sets

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
