# Build Models { #overview }

This stage focuses on developing the models that power AI applications. Activities may include building traditional machine learning or deep learning models, or selecting and serving a pre-built foundation model. IBM Z supports many of the tools and frameworks commonly used by AI practitioners, with hardware acceleration available through the Telum on-chip AI accelerator for supported workloads.

Model development does not need to occur on IBM Z. Many organizations develop and train models in cloud or hybrid environments before deploying them to IBM Z for production inference. IBM Z can also serve as a model development platform, allowing organizations to keep data, model development, deployment, and inference within the same environment.

## What happens at this stage?

<div class="grid cards" markdown>

- **Build traditional ML models**

    Train classification, regression, forecasting, or recommendation models on structured enterprise data using tools like IBM Z Accelerated SnapML, IBM Z Platform for Apache Spark MLlib, Python AI Toolkit for IBM z/OS, or Machine Learning for IBM z/OS.

- **Build deep learning models**

    Develop neural networks for computer vision, NLP, or other unstructured data workloads using IBM Z Accelerated for TensorFlow or IBM Z Accelerated for PyTorch, optimized for IBM Z hardware.

- **Use pre-built large language models**

    Source a pre-existing LLM from a provider like Hugging Face and serve it directly on IBM Z — no training or customization required.

- **Export for deployment**

    Save your model in a portable format — PMML for traditional ML, ONNX for deep learning — ready for the deploy and serve stages.

</div>

## Who is this stage for?

Model development is typically led by **Data Scientists**, with **ML Engineers** supporting training pipelines, automation, and operationalization. IT Architects and Application Architects often help evaluate platforms, frameworks, and deployment requirements. Business stakeholders provide domain expertise and help define success criteria, such as model performance goals and acceptable accuracy thresholds.

## Where to Start { #where-to-start }

Your starting point depends on the type of model you're building. The three paths below reflect how IBM Z typically supports the spectrum of model types.

### Building Traditional Machine Learning Models { #traditional-ml }

You are working with structured or tabular data and need models such as classification, regression, or forecasting systems.

??? note "Full lifecycle management on z/OS"

    [Machine Learning for IBM z/OS](../products-tools/ai-platforms.md#mlz)

    You want model development, training, management, and scoring integrated directly into the z/OS environment without containerization.

    **→ Use [Machine Learning for IBM z/OS (MLz)](../products-tools/ai-platforms.md#mlz).** Machine Learning for IBM z/OS provides a z/OS-native environment covering the full lifecycle — from training in Jupyter Notebooks to deploying scoring endpoints. Machine Learning for IBM z/OS also includes explainability features, such as pre- and post-processing support, to help build trustworthy AI models.

    *Common approach:* Develop and train models in Machine Learning for IBM z/OS Jupyter Notebooks → Deploy using Machine Learning for IBM z/OS → Expose as scoring endpoints (CICS, IMS, REST API, or batch) for z/OS applications.

??? note "Training traditional ML models on IBM Z"

    [IBM Z Accelerated SnapML](../products-tools/ai-frameworks.md#snapml)

    You need to train classical ML models on IBM Z using a library optimized for the platform.

    **→ Use [IBM Z Accelerated SnapML](../products-tools/ai-frameworks.md#snapml).** IBM Z Accelerated SnapML is the primary training technology for traditional ML on IBM Z, supporting classification and regression models. Decision tree ensemble inference is optimized on the Telum on-chip AI accelerator. IBM Z Accelerated SnapML is available as a container through the [AI Toolkit for IBM Z and IBM LinuxONE](../products-tools/ai-frameworks.md#ai-toolkit) via the IBM Container Registry (ICR).

    *Common approach:* Prepare features → Train with IBM Z Accelerated SnapML → Export to [PMML](../products-tools/model-formats.md#pmml) → Deploy via [Machine Learning for IBM z/OS (MLz)](../products-tools/ai-platforms.md#mlz) or AI Toolkit for IBM Z and IBM LinuxONE.

??? note "Python notebooks and scikit-learn on z/OS"

    [Python AI Toolkit for IBM z/OS](../products-tools/ai-frameworks.md#python-ai-toolkit)

    You prefer Python and want to train models using familiar libraries such as scikit-learn, XGBoost, pandas, and NumPy, running natively on z/OS.

    **→ Use the [Python AI Toolkit for IBM z/OS](../products-tools/ai-frameworks.md#python-ai-toolkit).** Provides a curated Python runtime with data science libraries that run natively on z/OS, close to enterprise data sources. Available as a container through the [AI Toolkit for IBM Z and IBM LinuxONE](../products-tools/ai-frameworks.md#ai-toolkit) via the IBM Container Registry (ICR).

    *Common approach:* Explore data in Jupyter Notebooks → Train with scikit-learn or XGBoost → Export to [PMML](../products-tools/model-formats.md#pmml) → Deploy.

??? note "ML integrated into data pipelines"

    [IBM Z Platform for Apache Spark](../products-tools/data-analytics.md#apache-spark)

    Your data is already being processed in IBM Z Platform for Apache Spark, and you want machine learning integrated directly into existing data engineering workflows.

    **→ Use IBM Z Platform for Apache Spark MLlib** via the [IBM Z Platform for Apache Spark](../products-tools/data-analytics.md#apache-spark). MLlib provides scalable ML capabilities that operate within Spark pipelines on IBM Z.

    *Common approach:* Process data in Spark → Engineer features → Train with MLlib → Export and deploy the trained model.

### Building Deep Learning Models { #deep-learning }

You need to develop neural networks for computer vision, natural language processing, or other unstructured data workloads. Deep learning models are trained with IBM Z Accelerated for TensorFlow or IBM Z Accelerated for PyTorch and typically exported to ONNX for deployment.

??? note "Native IBM Z Accelerated for TensorFlow or IBM Z Accelerated for PyTorch on IBM Z"

    [IBM Z Accelerated for TensorFlow](../products-tools/ai-frameworks.md#tensorflow) · [IBM Z Accelerated for PyTorch](../products-tools/ai-frameworks.md#pytorch)

    You are building deep learning models using IBM Z Accelerated for TensorFlow or IBM Z Accelerated for PyTorch and want to train and deploy natively on IBM Z.

    **→ Use [IBM Z Accelerated for TensorFlow](../products-tools/ai-frameworks.md#tensorflow) or [IBM Z Accelerated for PyTorch](../products-tools/ai-frameworks.md#pytorch).** Both frameworks are optimized for IBM Z hardware and generate models that leverage the on-chip AI accelerator on Telum and Telum II for inference. Both are available as containers through the [AI Toolkit for IBM Z and IBM LinuxONE](../products-tools/ai-frameworks.md#ai-toolkit) via the IBM Container Registry (ICR).

    *Common approach:* Prepare data → Train with IBM Z Accelerated for TensorFlow or IBM Z Accelerated for PyTorch → Deploy directly via [IBM Z Accelerated for Triton Inference Server](../products-tools/inference-serving.md#triton) or [Red Hat OpenShift AI](../products-tools/ai-platforms.md#rhoai).

    *Note: Native IBM Z Accelerated for TensorFlow and IBM Z Accelerated for PyTorch models cannot be imported into [Machine Learning for IBM z/OS (MLz)](../products-tools/ai-platforms.md#mlz). Use the ONNX path below if deploying to Machine Learning for IBM z/OS.*

??? note "ONNX-format deep learning models"

    [ONNX](../products-tools/model-formats.md#onnx) · [IBM Z Deep Learning Compiler](../products-tools/model-formats.md#zdlc)

    You are using any deep learning framework — Keras, IBM Z Accelerated for PyTorch, IBM Z Accelerated for TensorFlow, or others — and want to convert your model to ONNX for deployment on IBM Z.

    **→ Convert your model to [ONNX](../products-tools/model-formats.md#onnx) format** using your framework of choice, then deploy to IBM Z. To ensure the model leverages the on-chip AI accelerator on Telum and Telum II for inference, it must be optimized using the [IBM Z Deep Learning Compiler (zDLC)](../products-tools/model-formats.md#zdlc). The zDLC is available as a container through the [AI Toolkit for IBM Z and IBM LinuxONE](../products-tools/ai-frameworks.md#ai-toolkit) via the IBM Container Registry (ICR).

    *Common approach:* Train with Keras, IBM Z Accelerated for PyTorch, IBM Z Accelerated for TensorFlow, or another framework → Export to ONNX → then:

    - **Deploying to [IBM Z Accelerated for Triton Inference Server](../products-tools/inference-serving.md#triton) or [Red Hat OpenShift AI](../products-tools/ai-platforms.md#rhoai):** explicitly compile with the IBM Z Deep Learning Compiler (zDLC) before deploying.
    - **Deploying to [Machine Learning for IBM z/OS](../products-tools/ai-platforms.md#mlz):** the IBM Z Deep Learning Compiler is invoked automatically when you import the model — no manual compile step required.

??? note "Collaborative deep learning platform"

    [Red Hat OpenShift AI](../products-tools/ai-platforms.md#rhoai)

    Multiple teams need shared workspaces, automated pipelines, and AI capabilities using deep learning models.

    **→ Use [Red Hat OpenShift AI](../products-tools/ai-platforms.md#rhoai).** Provides data science workbenches, Kubeflow pipelines, and model lifecycle management on Linux on IBM Z. If your organization already uses OpenShift on distributed or x86 platforms, those same skills and workflows carry over directly to IBM Z — the OpenShift experience is consistent regardless of the underlying platform.

    *Common approach:* Create shared projects → Train IBM Z Accelerated for TensorFlow or IBM Z Accelerated for PyTorch models → Promote through OpenShift pipelines → Deploy on IBM Z.

### Using Pre-built Large Language Models { #llm }

Large language models can be sourced from IBM, open source communities, or commercial providers and served directly on IBM Z without customization or training from scratch.

??? note "Use a pre-built LLM on IBM Z"

    [Red Hat AI Inference Server](../products-tools/inference-serving.md#rh-inference) · [Red Hat OpenShift AI](../products-tools/ai-platforms.md#rhoai)

    Your use case is well-served by a general-purpose LLM sourced from Hugging Face or an IBM model repository.

    **→ Use [Red Hat AI Inference Server](../products-tools/inference-serving.md#rh-inference)** (for Spyre-accelerated decoder LLMs) or **[Red Hat OpenShift AI](../products-tools/ai-platforms.md#rhoai)** (for broader model management and serving on IBM Z) to serve a pre-built LLM on IBM Z. LLMs are served natively by both platforms.

    *Note: Red Hat AI Inference Server runs standalone and does not require Red Hat OpenShift. Red Hat OpenShift AI is the better fit if your organization already has an OpenShift container strategy.*

    *Common approach:* Select a model from Hugging Face or an IBM repository → Serve via Red Hat AI Inference Server or Red Hat OpenShift AI on IBM Z → Integrate with your application.

## Next Steps { #next-steps }

Once your model is built and validated, the next stage is to make it available in a production environment.

<div class="grid cards" markdown>

- **[Deploy Models](../deploy-models/deploy-models.md)**

    Convert your model to ONNX or PMML, optimize with zDLC or AI Optimizer, and deploy to a production environment — Machine Learning for IBM z/OS, AI Toolkit for IBM Z and IBM LinuxONE containers for Linux on Z, or Red Hat OpenShift AI.

</div>
