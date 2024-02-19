## TensorFlow on IBM zSystems and LinuxONE

[TensorFlow](https://www.tensorflow.org/) is a open source machine learning framework. It has a comphrensive set of tools that enable model development, training and inference. It also features a rich, robust ecosystem. 

TensorFlow can be used on IBM zSystems and LinuxONE on Linux environments - including z/OS Container Extensions.

With TensorFlow Servng, you can expose REST and GRPC endpoints for model inference requests. This supports high throughput, low latency inference serving.

On IBM zSystems and LinuxONE, TensorFlow is built to exploit the vector architecture for training and inference operations. On IBM z16 hardware, TensorFlow can leverage new inference acceleration capabilities. Read more below!


### z16 Integrated Accelerator for AI ###

On Feb 8th 2023, IBM released a library called [IBM-zDNN-Plugin](https://pypi.org/project/ibm-zdnn-plugin/) on the Python Package Index (PyPI). 

The ibm-zdnn-plugin is a device plugin for TensorFlow that leverages the IBM z Deep Neural Network (zDNN) library for accelerated inferencing. On IBM® z16™ hardware (running Linux on IBM Z or IBM® z/OS® Container Extensions (IBM zCX)), TensorFlow core 2.9 or later can leverage new inference acceleration capabilities by transparently targeting the IBM Integrated Accelerator for AI through the IBM-zDNN-Plugin.

ibm-zdnn-plugin follows the TensorFlow [PluggableDevice architecture](https://blog.tensorflow.org/2021/06/pluggabledevice-device-plugins-for-TensorFlow.html), which provides a plug-in mechanism that allows devices to be registered in TensorFlow without changing the TensorFlow code. This capability allows TensorFlow to target the z16 accelerator seamlessly and transparently for several compute intensive operations.

Read more about this support [here](https://community.ibm.com/community/user/ibmz-and-linuxone/blogs/prashantha-subbarao/2023/02/08/ibm-zdnn-plugin?CommunityKey=038560b2-e962-4500-b0b5-e3745175a065)

### Getting started with the AI Toolkit for IBM Z and LinuxONE ###

The recommended path for obtaining TensorFlow and TensorFlow Serving is to download a prebuilt container image from the [IBM Z and LinuxONE Container Registry](https://ibm.github.io/ibm-z-oss-hub/main/main.html).

These components are part of the [AI Tookit for IBM Z and LinuxONE](aitoolkitloz.md). You can find the latest container images in the [IBM Z and LinuxONE Container Image registry](https://ibm.github.io/ibm-z-oss-hub/main/main.html) as either:
- ibmz-accelerated-for-tensorflow
- ibmz-accelerated-serving-for-tensorflow

If you are interested in trying TensorFlow out, here is a quick self-directed exercise that demonstrates how to call a TensorFlow model from a z/OS Java program: [TensorFlow and zCX interaction](https://github.com/IBM/ai-on-z-tensorflow-zcx).

Note that although this lab highlights TensorFlow on zCX, the image can just as easily be deployed to a Linux LPAR or VM using these steps.



