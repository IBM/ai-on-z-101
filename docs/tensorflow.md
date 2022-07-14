## TensorFlow on IBM zSystems and LinuxONE

[TensorFlow](https://www.tensorflow.org/) is a open source machine learning framework. It has a comphrensive set of tools that enable model development, training and inference. It also features a rich, robust ecosystem. 

TensorFlow can be used on IBM zSystems and LinuxONE on Linux environments - including z/OS Container Extensions.

With TensorFlow Servng, you can expose REST and GRPC endpoints for model inference requests. This supports high throughput, low latency inference serving.

On IBM zSystems and LinuxONE, TensorFlow is built to exploit the vector architecture for training and inference operations. On IBM z16 hardware, TensorFlow can leverage new inference acceleration capabilities. Read more below!


### z16 Integrated Accelerator for AI ###

On June 30th, 2022 IBM released an open beta of TensorFlow core that includes device support for the IBM Integrated Accelerator for AI. This open beta is publshed under the name 'IBM Z Optimized for TensorFlow'. 

This capability will allow TensorFlow to transparently target the z16 accelerator for a number of compute intenstive operations. The beta container image is available through the IBM Z and LinuxONE Container Registry (see below).

Read more about this support [here](https://community.ibm.com/community/user/ibmz-and-linuxone/blogs/prashantha-subbarao/2022/06/30/ibm-z-optimized-for-tensorflow)

### Getting Started with TensorFlow on IBM zSystems and LinuxONE ###

The recommended path for obtaining TensorFlow is to download a prebuilt container image from the [IBM Z and LinuxONE Container Registry](https://ibm.github.io/ibm-z-oss-hub/main/main.html).

The following images are available:

- TensorFlow Core (CPU)
- TensorFlow Serving (CPU)

New (open beta):
   - IBM Z Optimized for TensorFlow (this is TensorFlow core, leveraging the IBM z16 Integrated Accelerator for AI)

If you are interested in trying TensorFlow out, here is a quick self-directed exercise that demonstrates how to call a TensorFlow model from a z/OS Java program: [TensorFlow and zCX interaction](https://github.com/IBM/ai-on-z-tensorflow-zcx).

Note that although this lab highlights TensorFlow on zCX, the image can just as easily be deployed to a Linux LPAR or VM using these steps.



