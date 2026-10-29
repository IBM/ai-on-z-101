# Model Formats & Compilers

Before a model can run on IBM Z, it usually needs to be in the right format. ONNX and PMML are the two main interchange formats, and the IBM Z Deep Learning Compiler converts ONNX models into artifacts optimized for the Telum on-chip accelerator.

<div id="onnx"></div>

??? note "ONNX"

    ONNX is an Open Neural Network eXchange standard designed to simplify porting models across different platforms. You can read more about it [here](https://onnx.ai) and explore how it is leveraged by the IBM Z Deep Learning Compiler [here](https://ibm.github.io/zDLC/).

    Converting trained deep learning models to the ONNX format is a requirement for leveraging the IBM Z Deep Learning Compiler, whether stand-alone or as part of Machine Learning for z/OS.

    The approach to convert Deep Learning models to ONNX varies depending among others on the deep learning frameworks - for example:

    - TensorFlow models must be converted using the open-source [tensorflow-onnx](https://github.com/onnx/tensorflow-onnx) package.
    - PyTorch models can be exported directly to ONNX using [PyTorch APIs](https://pytorch.org/docs/master/onnx.html).
    - Information on exporting models from other frameworks can be found on the [ONNX community page](https://onnx.ai/get-started.html).

    #### Best practices

    To avoid endian issues, we strongly recommend converting models to the ONNX format on the platform on which they were trained. (e.g., if a model was trained on an x86 environment, convert the model to ONNX on an x86 environment before transmitting it to IBM Z or LinuxONE).

    For Deep Learning Compiler usage: to determine which ONNX opset to specify for model conversion, see the following references:

    - [NNPA supported opset level](https://ibm.github.io/zDLC/)
    - [CPU supported opset level](https://ibm.github.io/zDLC/)

    On z16 or LinuxONE 4 machines (or later), we recommend using the highest opset level as specified under NNPA operator support. This will generally be the first statement in the NNPA supported opset level file linked above.

    #### Determining whether model operations will target the on-chip AI accelerator featured on IBM Telum I and Telum II processors

    When using the IBM Z Deep Learning Compiler, to compile a model, you can get information and insights into various model operations and whether they will run on the accelerator. This can be critical information to help explore model performance.

    For guidance on displaying model operation targets (CPU or Z accelerator), runtime instrumentation, and other performance guidance, [check here](https://ibm.github.io/zDLC/).

<div id="pmml"></div>

??? note "PMML"

    PMML stands for Predictive Model Markup Language. It is an XML-based file format used to describe and share machine learning models between different software applications. You can read more about it [here](https://dmg.org/pmml/v4-4-1/GeneralStructure.html). Machine learning models converted to the PMML format can be leveraged by IBM Snap ML which is part of the AI Toolkit for IBM Z; as described [here](ai-frameworks.md#snapml), tree based models can utilize the IBM z16 Integrated Accelerator for AI.

    Additionally, PMML models can be deployed leveraging Machine Learning for z/OS to infuse the AI model inference into z/OS core applications.

    Generally, the best approach to converting models to PMML is to use [sklearn2pmml](https://github.com/jpmml/sklearn2pmml). This allows the user to create a PMMLPipeline object, which can contain either scikit-learn, xgboost, or lightGBM models as part of a pipeline.

    For considerations for using PMML models in Machine Learning for z/OS, see the [MLz documentation](https://www.ibm.com/docs/en/wml-for-zos/enterprise/3.2.0?topic=overview-mlz-enterprise).

    #### Samples

    For an example of converting a scikit-learn model to PMML, see the [IBM Snap ML examples](https://github.com/IBM/snapml-examples/blob/main/examples/inference/random_forest/example_credit_card_fraud.ipynb); one such example can be found [here](https://github.com/IBM/snapml-examples/blob/main/examples/inference/random_forest/example_credit_card_fraud.ipynb).

    Additionally, here is a brief code snippet showing the process:

            # Create a scikit-learn Random Forest Classifier model
            model = RandomForestClassifier(n_estimators = 200, max_depth=6, n_jobs=4, random_state=42)

            # Train a PMML pipeline that uses the scikit-learn model defined above
            pipeline = PMMLPipeline([("model", model)]).fit(X_train, y_train)

            # Save the trained PMML pipeline to a file, e.g., "model.pmml"
            sklearn2pmml(pipeline, "model.pmml", with_repr=True)

<div id="zdlc"></div>

??? note "IBM Z Deep Learning Compiler (zDLC)"

    **AI Lifecycle:** [Deploy Models](../deploy-models/deploy-models.md)

    The IBM Z Deep Learning Compiler (zDLC) is an enterprise-grade compilation framework built on open-source [ONNX-MLIR](https://github.com/onnx/onnx-mlir) (Multi-Level Intermediate Representation) technology. It converts open-format deep learning models (such as ONNX outputs from PyTorch or TensorFlow) into optimized C/C++ shared libraries specifically tuned for the IBM Z and LinuxONE architectures.

    Rather than interpreting model graphs at runtime, zDLC compiles deep learning models into native binary representations. It applies low-level hardware optimizations, graph fusions, and quantization techniques while offloading mathematical execution directly to specialized on-chip accelerators — such as the IBM Telum Integrated Accelerator for AI (NNPA) — both in Linux and z/OS environments.

    This gives business benefits of Ultra-Low Latency In-Transaction AI and Seamless Hardware Acceleration to customers.

    #### Deploying ONNX Deep Learning Models on IBM Z

    ONNX is the Open Neural Network eXchange. You can read more about it [here](https://onnx.ai).

    ONNX establishes a streamlined path to take a project from playground to production. With ONNX, you can start a data science project using the frameworks and libraries of your choosing, including popular frameworks such as PyTorch and TensorFlow. The model can be developed and trained leveraging these frameworks on the training platform of your choice. Once the model is trained and ready to begin the deployment journey, you would export or convert it to the ONNX format.

    Tools such as Netron allow inspection and exploration of an ONNX model. When it comes to running the model, there are various back-ends that can be used to test and serve ONNX models. This includes model compilers such as the IBM Z Deep Learning Compiler (zDLC), which is based on ONNX-MLIR.

    The ONNX-MLIR project provides compiler technology to transform a valid ONNX graph into code that implements the graph with minimum runtime support. It implements the ONNX standard and is based on the underlying LLVM/MLIR compiler technology.

    The result of this compiler is a lightweight shared object library that has no dependencies on the framework or libraries that the model was developed and trained in. It can be used for inference from C++, Java, or Python programs.

    #### IBM Telum Integrated Accelerator for AI

    IBM Research enhanced the IBM Z Deep Learning Compiler (zDLC) to target the IBM Integrated Accelerator for AI for a variety of ONNX primitives. This support has been contributed to ONNX-MLIR, which is the foundation for the IBM Z Deep Learning Compiler. ONNX-MLIR has been updated to support IBM z17's new Telum II processor.

    The IBM Z Deep Learning Compiler compiles ONNX models into optimized s390x binaries that automatically offload eligible operations to the Telum on-chip AI accelerator via the zDNN library — no manual mapping required. It is based on the open-source ONNX-MLIR project with IBM Research enhancements contributed upstream.

    zDLC is available as part of the AI Toolkit for IBM Z and IBM LinuxONE, distributed through the [IBM Z and LinuxONE Container Registry](https://ibm.github.io/ibm-z-oss-hub/containers/zdlc.html).

    #### Key Capabilities

    - Produces a lightweight `.so` shared library with no framework dependencies at runtime
    - Supports encoder LLMs and small decoder LLMs (up to 2B parameters) on IBM z17
    - INT8 quantization, Layer Normalization, and GeLU support on Telum II (IBM z17)
    - Embeddable in applications or servable via IBM Z Accelerated for Triton Inference Server
    - C++, Java, and Python runtime APIs

    #### Getting Started with the IBM Z Deep Learning Compiler

    z/OS users can either choose stand-alone Linux on Z options or leverage through Machine Learning for IBM z/OS based approach; in either case, z/OS Container Extensions will be required to utilize the IBM Z Deep Learning Compiler.

    Linux on Z, z/OS Container Extensions users can leverage the IBM Z Deep Learning Compiler directly to create model programs that can be incorporated into serving environments or applications directly.

    - Available through the [IBM Z and LinuxONE Container Registry (ICR)](https://ibm.github.io/ibm-z-oss-hub/containers/zdlc.html) listed under zDLC
    - Command-line model compiler that produces a `.so` library with optional Java and Python wrappers
    - Extensive details available in the [IBM Z Deep Learning Compiler official product page](https://ibm.github.io/zDLC/)

    These model libraries can be leveraged either directly or through IBM Z Accelerated for Triton Inference Server, which is part of the AI Toolkit for IBM Z and IBM LinuxONE.

    Additional samples:

    - [Documentation and samples, including C++, Java, and Python clients](https://github.com/IBM/zDLC)
    - [Leveraging DLC with IBM Z Accelerated for Triton Inference Server on LoZ](https://github.com/IBM/onnxmlir-triton-backend)
    - [Machine Learning for IBM z/OS](ai-platforms.md#mlz) — a z/OS product that manages the full model lifecycle. Enables you to upload your ONNX model then compile and deploy at the push of a button. Supports server-side mini-batching for ONNX/DLC model serving to get the best benefit out of the Integrated Accelerator for AI. Infuse AI into z/OS applications either through native CICS, IMS, and Java native scoring services or through using model server REST endpoints.

    See the [zDLC official documentation](https://ibm.github.io/zDLC/) for comprehensive details.

---

## Explore other Products & Tools

<div class="grid cards clickable-cards neutral-border-cards" markdown>

- **[Data & Analytics](data-analytics.md)**

    - IBM Z Platform for Apache Spark
    - IBM Synthetic Data Sets

- **[AI Frameworks & Dev Tools](ai-frameworks.md)**

    - AI Toolkit for IBM Z and IBM LinuxONE
    - IBM Z Accelerated SnapML
    - IBM Z Accelerated for TensorFlow
    - IBM Z Accelerated for PyTorch
    - Python AI Toolkit for IBM z/OS

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
