## Converting models to the ONNX format

ONNX is the Open Neural Network eXchange. You can read more about it [here](https://onnx.ai/) and explore how it is leveraged by the IBM Z Deep Learning Compiler [here](onnxdlc.md).

Converting or exporting trained deep learning models to the ONNX format is a requirement for leveraging the IBM Z Deep Learning Compiler, whether stand-alone or as part of Machine Learning for z/OS. 

The approach in deep learning frameworks varies - for example:

- TensorFlow models must be converted using the open-source [tensorflow-onnx](https://github.com/onnx/tensorflow-onnx) package.
- PyTorch models can be exported directly to ONNX using [PyTorch APIs](https://pytorch.org/docs/master/onnx.html).

Information on exporting models from other frameworks can be found on the [ONNX community page](https://onnx.ai/get-started.html).

### Best practices 

- To avoid endian issues, we strongly recommend converting models to the ONNX format on the platform on which they were trained. (e.g., if a model was trained on an x86 environment, convert the model to ONNX on an x86 environment before transmitting to IBM Z or LinuxONE). 

- For Deep Learning Compiler usage: to determine which ONNX opset to specify for model conversion, see the following references:

    - [NNPA supported opset level](https://github.com/onnx/onnx-mlir/blob/main/docs/SupportedONNXOps-NNPA.md)
    - [CPU supported opset level](https://github.com/onnx/onnx-mlir/blob/main/docs/SupportedONNXOps-cpu.md)

- On z16 or LinuxONE 4 machines (or later), we recommend using the highest opset level as specified under NNPA operator support. This will generally be the first statement in the NNPA supported opset level file linked above.

### Determining whether model operations will target the on-chip AI accelerator featured on IBM Telum I and Telum II processors:

When compiling with the IBM Z Deep Learning Compiler, you can get information and insights into various model operations and whether they will run on the accelerator. This can be critical information to help explore model performance. 

- For guidance on [displaying model operation targets (CPU or Z accelerator)](https://github.com/ibm/zdlc#view-operation-targets-at-compile-time)
- Runtime [instrumentation can be enabled](https://github.com/ibm/zdlc#obtaining-ibm-z-deep-learning-compiler-debug-instrumentation-)
- Check [here for other performance guidance](https://github.com/ibm/zdlc#performance-tips-for-ibm-z-integrated-accelerator-for-ai-)

