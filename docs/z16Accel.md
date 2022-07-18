## Leveraging the IBM Integrated Accelerator for AI

The IBM Integrated Accelerator for AI is an on-chip AI accelerator available on the IBM Telum chip that is part of IBM z16. It is designed to enable high throughput, low latency inference for deep learning and machine learning. 

With IBM z16 and the Integrated Accelerator for AI, you can build and train your models on any platform - including IBM zSystems and LinuxONE. When you are ready to deploy your assets, they will receive transparent acceleration and optimization on IBM zSystems, and will leverage the best available acceleration for the model type.

The IBM Integrated Accelerator for AI is more than just a matrix multiply accelerator - it provides optimization and acceleration for a set of complex functions commonly found in deep learning and machine learning models. This enables a broader set of functions to be accelerated on the chip.

As of IBM z16, the following operations are supported on the accelerator:

```
LSTM Activation
GRU Activation
Fused Matrix Multiply, Bias op
Fused Matrix Multiply (w/ broadcast)
Batch Normalization
Fused Convolution, Bias Add, Relu
Max Pool 2D
Average Pool 2D
Softmax
Relu
Tanh
Sigmoid
Add
Subtract
Multiply
Divide
Min
Max
Log
```

These allow the supporting frameworks to target an even broader set of operations to the Integrated Accelerator for AI. 

Currently, the following frameworks can leverage the IBM z16 Integrated Accelerator for AI:

- **ONNX deep learning models**, when compiled using the IBM Deep Learning Compiler or ONNX-MLIR. 
    - Note that Pytorch, TensorFlow, Apache MXNet and other model types can be easily converted to ONNX.
- **IBM Snap ML**, a machine learning framework that provides optimized training and inference.
    - Random Forest and Boosting Machine models are accelerated using the Integrated Accelerator for AI.
    - IBM Snap ML provides: 
        - Seamless acceleration of sci-kit learn applications.
        - Ability to execute lightGBM and XGBoost trained models when converted to JSON, PMML, or ONNX.
- **TensorFlow** (incubating)
    - Available initially as an open beta in late 2Q 2022.

For further details, use the navigation bar on this page to select a 'Featured Frameworks and Technologies' choice. 

Each of these are available as standalone packages, free of charge, or embedded within IBM products such as Watson Machine Learning for z/OS and Cloud Pak for Data. 

Further reading:

- [IBM Telum announcement](https://www.ibm.com/blogs/systems/ibm-telum-processor-the-next-gen-microprocessor-for-ibm-z-and-ibm-linuxone/)
