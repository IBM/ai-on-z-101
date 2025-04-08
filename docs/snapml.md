## Traditional Machine Learning with IBM Snap ML

Snap ML is a library that provides high speed training and inference of popular machine learning models. You can read more about it [here](https://www.zurich.ibm.com/snapml/).

Standard machine learning models power most of today's machine learning applications in business and are very popular among practitioners as well. Snap ML has been designed to address some of the biggest challenges that companies and practitioners face when applying machine learning to real use cases.

Snap ML is a library for accelerating the training and inference of popular Machine Learning (ML) models:

- Provides high-performance implementations of:
  - Generalized Linear Models
  - Tree-based Models
  - Gradient Boosting Machines

Addresses ML needs of Data Scientists by being:

- Fast
- Resource-efficient
- Accurate
- Scalable to TB-scale datasets

Snap ML:

- Is developed & maintained by IBM Research. 
- Is fully compatible with the scikit-learn Python API.
- Supports accelerated scoring of scikit-learn, XGBoost and LightGBM trained models when exported or converted to: PMML, JSON, ONNX.

### IBM Telum Integrated Accelerator for AI ###

Starting with Snap ML version 1.9.0, Snap ML can utilize the IBM Integrated Accelerator for AI. 

Integrated AI Accelerator exploitation can be enabled at model import time for:

- Random Forest
- Extra Trees
- Gradient Boosting Machines


### Getting started with Snap ML ###

IBM Snap ML is available as part of [Machine Learning for z/OS](https://www.ibm.com/products/machine-learning-for-zos), as well as for IBM LinuxONE and Linux on Z environments - including z/OS container extensions. A prebuilt container is available as part of the IBM AI Toolkit Offering; additionally Snap ML can be installed via PyPI, and Snap ML is a component of Cloud Pak for Data on Linux on Z.

As mentioned, IBM Snap ML component of the [AI Tookit for IBM Z and LinuxONE](aitoolkitloz.md). You can find the latest container images in the [IBM Z and LinuxONE Container Image registry](https://ibm.github.io/ibm-z-oss-hub/main/main.html) under ibmz-accelerated-for-snapml. 

Additionally, an s390x (Linux on IBM Z package) is available via PyPI:
```
pip install snapml 
```
- This enables install into a python environment through standard mechanisms, at no charge. 

Snap ML is additionally an available python framework in IBM Cloud Pak for Data.  

Other assets include: 

- [Click here for official documentation](https://snapml.readthedocs.io/en/latest/)
- [Click here for examples using Snap ML](https://github.com/IBM/snapml-examples)
- [Leveraging Snap ML with Triton Inference Server on LoZ](https://github.com/IBM/ai-on-z-triton-is-examples)
- [Example using Snap ML with BentoML Serving](https://github.com/IBM/snapml-examples/tree/main/examples/inference/random_forest/bentoml)

### Notes: ###

- Starting With Snap ML 1.9.1, SnapML-trained tree-based models (RF, ET and GB) can be exported to PMML.
