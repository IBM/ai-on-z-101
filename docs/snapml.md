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

In addition to being available through PyPI, Snap ML is an available python framework in IBM Cloud Pak for Data. 

### z16 Integrated Accelerator for AI ###

Starting with Snap ML version 1.9.0, Snap ML can utilize the IBM Integrated Accelerator for AI. 

Integrated AI Accelerator exploitation can be enabled at model import time for:

- Random Forest
- Extra Trees
- Gradient Boosting Machines


### Getting Started with the IBM Snap ML ###

Snap ML is available for IBM LinuxONE and Linux on Z environments, including z/OS container extensions. 

Linux on zSystems package available via PyPI:
```
pip install snapml 
```
- This enables install into a python environment through standard mechanisms, at no charge. 

Snap ML is an available python framework in IBM Cloud Pak for Data.  

[Click here for official documentation](https://snapml.readthedocs.io/en/latest/)
[Click here for examples using Snap ML](https://github.com/IBM/snapml-examples)
[Example using Snap ML with BentoML Serving](https://github.com/IBM/snapml-examples/tree/main/examples/inference/random_forest/bentoml)

### Notes: ###

- Starting With Snap ML 1.9.1, SnapML-trained tree-based models (RF, ET and GB) can be exported to PMML.
