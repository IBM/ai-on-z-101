## TensorFlow on IBM zSystems and LinuxONE

[TensorFlow](https://www.tensorflow.org/) is a open source machine learning framework. It has a comphrensive set of tools that enable model development, training and inference. It also features a rich, robust ecosystem. 

TensorFlow can be used on IBM Z and Linux ONE on Linux environments - including z/OS Container Extensions.

With TensorFlow Servng, you can expose REST and GRPC endpoints for model inference requests. This supports high throughput, low latency inference serving.

On IBM zSystems and LinuxONE, TensorFlow is built to exploit the vector architecture for training and inference operations. On IBM z16 hardware, TensorFlow can now leverage new acceleration capabilities enabled by the Telum I and Telum II processors. Read more below!


### IBM Telum Integrated Accelerator for AI ###

On IBM z16, LinuxONE 4, and later machines (running Linux on IBM Z or IBM® z/OS® Container Extensions (IBM zCX)), TensorFlow core Graph Execution will leverage new inference acceleration capabilities that transparently target the IBM Integrated Accelerator for AI through the IBM z Deep Neural Network (zDNN) library. The IBM zDNN library contains a set of primitives that support Deep Neural Networks. These primitives transparently target the IBM Integrated Accelerator for AI on IBM z16 and later. No changes to the original model are needed to take advantage of the new inference acceleration capabilities.

### Getting started with the AI Toolkit for IBM Z and LinuxONE ###

The recommended path for obtaining TensorFlow and TensorFlow Serving is to download a prebuilt container image from the [IBM Z and LinuxONE Container Registry](https://github.com/IBM/ibmz-accelerated-serving-for-tensorflow).

These components are part of the [AI Tookit for IBM Z and LinuxONE](aitoolkitloz.md). You can find the latest container images in the [IBM Z and LinuxONE Container Image registry](https://github.com/IBM/ibmz-accelerated-serving-for-tensorflow) as either:
- ibmz-accelerated-for-tensorflow
- ibmz-accelerated-serving-for-tensorflow



