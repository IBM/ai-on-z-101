## Deploying ONNX deep learning models on IBM Z or LinuxONE Systems

ONNX is the Open Neural Network eXchange. You can read more about it [here](https://onnx.ai/).

ONNX establishes a streamlined path to take a project from playground to production.  

With ONNX, you can start a data science project using the frameworks and libraries of your choosing, including popular frameworks such as PyTorch and TensorFlow. The model can be developed and trained leveraging these frameworks on the training platform of your choice. Once the model is trained and ready to begin the deployment journey, you would [export or convert it to the ONNX format](onnxconv.md). 

Tools such as [Netron](https://netron.app/) allow inspection and exploration of an ONNX model. When it comes to running the model, there are various back-ends that can be used to test and serve ONNX models. This includes model compilers such as the IBM Z Deep Learning Compiler (zDLC), which is based on ONNX-MLIR. 

The [ONNX-MLIR project](https://onnx.ai/onnx-mlir/) provides compiler technology to transform a valid Open Neural Network Exchange (ONNX) graph into code that implements the graph with minimum runtime support. It implements the ONNX standard and is based on the underlying LLVM/MLIR compiler technology. 

The result of this compiler is a lightweight shared object library that has no dependencies on the framework or libraries that the model was developed and trained in. It can be used for inference from C++, Java or Python programs. 

### IBM Telum Integrated Accelerator for AI ###

IBM Research enhanced the IBM Z Deep Learning Compiler (zDLC) to target the IBM Integrated Accelerator for AI for a variety of ONNX primitives. This support has been contributed to ONNX-MLIR, which is the foundation for the IBM Deep Learning Compiler. ONNX-MLIR has been updated to support IBM z17's new Telum II processor.

### Getting Started with the IBM Z Deep Learning Compiler ###

The best approach to getting started with ONNX models using the IBM Z Deep Learning Compiler will depend on the IBM Z or LinuxONE operating system on which you plan to use the inference program. 

**z/OS users** can either choose a Machine Learning for z/OS (MLz) based approach or leverage Linux on Z options; in either case, z/OS Container Extensions will be required to utilize the IBM Z Deep Learning Compiler.
 
- **Machine Learning for z/OS**, which is a z/OS product that manages full model lifecycle and includes numerous features to improve performance for AI models and simplify deployment. 
    - Enables you to upload your ONNX model then compile and deploy at the push of a button. 
    - Supports server side mini-batching for ONNX/DLC model serving to get the best benefit out of the Integrated Accelerator for AI.
    - Infuse AI into z/OS applications either through native CICS, IMS, and Java native scoring services or through using model server REST endpoints.

**Linux on Z, z/OS Container Extensions, and LinuxONE** users can leverage the Deep Learning Compiler directly to create model programs that can be incorporated into serving environments or applications directly.

- Available through the [IBM Z and LinuxONE Container Registry](https://ibm.github.io/ibm-z-oss-hub/containers/zdlc.html) listed under **zDLC**.
- IBM zDLC [official product page](https://ibm.github.io/zDLC/).
- Command-line model compiler that produces a .so library with optional Java and Python wrappers.
- These model libraries can be leveraged either directly or through Triton Inference Server, which is part of the AI Toolkit for IBM Z And LinuxONE. 
    - [Leveraging DLC with Triton Inference Server on LoZ](https://github.com/IBM/onnxmlir-triton-backend)
- Additional samples: 
    - [Documentation and samples, including C++, Java, and Python clients](https://github.com/IBM/zDLC)
    

Read our blogs on ONNX for more information:

- [IBM Z and the Open Neural Network Exchange](https://www.ibm.com/blogs/systems/ibm-z-and-the-open-neural-network-exchange-onnx/)
- [Leveraging ONNX models on IBM Z and LinuxONE](https://community.ibm.com/community/user/ibmz-and-linuxone/blogs/andrew-sica/2021/10/29/leveraging-onnx-models-on-ibm-z-and-linuxone)
- [Announcing ONNX-MLIR/IBM Deep Learning Compiler for Linux on Z and LinuxONE](https://community.ibm.com/community/user/ibmz-and-linuxone/blogs/charles-volzka/2022/05/26/ibm-z-deep-learning-compiler-onnx-mlir)
- [Announcing ONNX-MLIR/IBM Z Deep Learning Compiler Telum II support](https://community.ibm.com/community/user/blogs/sunny-anand/2025/06/10/ibm-z-deep-learning-compiler-500)