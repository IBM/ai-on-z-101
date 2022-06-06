## Terminology and technology relationships

This page is focused primarily on IBM technologies and terminology. General open source and AI terminology can be found elsewhere on the net. 

Where applicable, for links see the sidebar.

- IBM **Deep Learning Compiler** is an ONNX model compiler based on ONNX-MLIR. When compiling for IBM z16, it uses IBM zDNN APIs for ONNX operators that the Integrated Accelerator for AI supports. 

- IBM **Integrated Accelerator for AI** is an on-chip AI inference accelerator that optimizes and acclerates complex AI operations beyond just matrix multiplication. It is invoked through the Neural Network Processing Assist (NNPA) instruction.

- **NNPA (Neural Network Processing Assist)** is a new architected instruction with the IBM z16 which is used to execute work on the IBM Integrated Accelerator for AI. Framework and compiler developers would typically use IBM zDNN library instead of attempting to directly code the NNPA instruction. Note that this is not something end users need to worry about - frameworks and compilers like the IBM Deep Learning Compiler (ONNX-MLIR), Snap ML, TensorFlow will handle this for you (at the right software levels!).

- IBM **Telum** is the zArchitecture chip that is featured in the IBM z16. IBM Telum includes an on-chip inference accelerator, known as the IBM Integrated Accelerator for AI.

- **Watson Machine Learning for z/OS** is a full lifecycle AI solution that features the ability to deploy AI models directly to z/OS for infusion into z/OS applications.

- IBM **z16** is IBM's latest zSystem (mainframe), featuring the IBM Telum chip and the Integrated Accelerator for AI. 

- IBM **zDNN** is IBM's open source API library for utilizing the IBM Integrated Accelerator for AI. It provides C APIs that greatly simplify use of the accelerator, including 'helper' functions. zDNN invokes the NNPA instruction on behalf of the caller to drive the accelerator.