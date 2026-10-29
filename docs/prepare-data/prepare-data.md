# Prepare Data

## Prepare Data


Before a model can be trained, data must be cleaned, transformed, and structured for machine learning. IBM's AI on Z strategy is build and train anywhere, deploy on Z. Organizations may prepare data and develop models in existing environments or work directly on IBM Z, depending on their architecture, data residency, and operational requirements. This page helps you identify the tools that best fit your data sources, team, and AI objectives.

## What happens at this stage?

<div class="grid cards no-hover-cards" markdown>

- **Access & Connect**

    Connect to enterprise data sources — Db2, IMS, VSAM, flat files.

- **Cleanse & Validate**

    Handle missing values, inconsistent formats, duplicates, and outliers so your model trains on reliable data.

- **Transform & Engineer Features**

    Aggregate, normalize, encode, and derive new features that give the model meaningful signals to learn from.

- **Build Pipelines**

    Automate repeatable preparation steps so data flows consistently from source to model training — and again at inference time.

</div>

## Who is this stage for?

Data preparation is typically performed by **Data Engineers** and **Data Scientists**, with input from business stakeholders who help define data requirements, quality expectations, and desired outcomes. Depending on team structure, responsibilities may range from dedicated data pipelines to end-to-end preparation within notebooks and machine learning workflows.

## Where to Start { #where-to-start }

Your starting point depends on where your data resides, how much preparation is required, and how your team prefers to work. Select a scenario to expand guidance.

??? note "Preparing Historical Data for Model Training · PMML / ONNX<br><span class='accordion-sub'>Your data science team already uses cloud, data lake, or x86-based tooling to prepare historical training data, and you plan to deploy the trained model on IBM Z.</span>"

    Your data science team already uses cloud, data lake, or x86-based tooling to prepare historical training data, and you plan to deploy the trained model on IBM Z.

    **→ Use your existing data preparation frameworks.** There is no need to change your current workflow. Export the trained model in a portable format — such as [PMML](../products-tools/model-formats.md#pmml) (standard for traditional ML pipelines) or [ONNX](../products-tools/model-formats.md#onnx) (for deep learning models) — and deploy it on IBM Z.

    *Common approach:* Prepare historical data and train the model externally using your established frameworks, then export it in a portable format and deploy it on IBM Z for low-latency inference co-located with your enterprise data, business applications, and high-volume transactions.

    *Note: Preparing data and building models off-platform is a practical approach. IBM Z is designed to deliver the greatest AI value when models are deployed and served on-platform, where they co-locate with enterprise data, business applications, and high-volume transactions.*

??? note "Starting a POC or Demo · IBM Synthetic Data Sets<br><span class='accordion-sub'>You don't have access to production data yet, or you want to move quickly without data privacy concerns.</span>"

    You don't have access to production data yet, or you want to move quickly without data privacy concerns. IBM Synthetic Data Sets are currently available for three use cases: banking, AML, and insurance.

    **→ Start with [IBM Synthetic Data Sets](../products-tools/data-analytics.md#synthetic-data-sets).** Pre-built, realistic datasets help you build, test, and validate models without waiting for production data access.

    *Common approach:* Use synthetic data as a standalone starting point to develop and validate a model, then retrain with production data when it becomes available. Synthetic data can also be used to augment an existing real dataset when more training examples are needed to improve model accuracy — whether you train on-platform or off-platform.

??? note "Building a Production Data Pipeline on IBM Z · IBM Z Platform for Apache Spark<br><span class='accordion-sub'>You need to process large volumes of enterprise data, perform complex transformations, or create repeatable feature engineering workflows on-platform.</span>"

    You need to process large volumes of enterprise data, perform complex transformations, or create repeatable feature engineering workflows, and you want to keep all processing on-platform.

    **→ Use [IBM Z Platform for Apache Spark](../products-tools/data-analytics.md#apache-spark).** Spark runs natively on z/OS and supports large-scale data preparation close to enterprise data sources.

    *Common approach:* Build Spark pipelines that cleanse, transform, and enrich data before supplying it to model training frameworks.

??? note "Writing Python-Based Data Preparation Scripts on IBM Z · Python AI Toolkit for IBM z/OS<br><span class='accordion-sub'>Your team prefers Python-based workflows and you want to run data preparation scripts directly on z/OS, close to your enterprise data.</span>"

    Your team prefers Python-based workflows and you want to run data preparation scripts directly on z/OS, close to your enterprise data.

    **→ Use the [Python AI Toolkit for IBM z/OS](../products-tools/ai-frameworks.md#python-ai-toolkit).** This toolkit provides a Python runtime and popular data science libraries (NumPy, pandas, scikit-learn, and more) optimized to run natively on z/OS.

    *Common approach:* Use pandas and scikit-learn pipelines to cleanse, transform, and engineer features from Db2 or VSAM data, keeping all processing on-platform without exporting data to an external environment.

??? note "Unified MLOps Platform · Red Hat OpenShift AI<br><span class='accordion-sub'>Multiple teams need shared workspaces, automated pipelines, model management, deployment, and governance across the AI lifecycle.</span>"

    Multiple teams need shared workspaces, automated pipelines, model management, deployment, and governance across the AI lifecycle.

    **→ Use [Red Hat OpenShift AI](../products-tools/ai-platforms.md#rhoai).** Red Hat OpenShift AI supports the full AI lifecycle and runs anywhere OpenShift is available, including Linux on Z and z/OS Container Extensions (zCX). On IBM Z, it is most commonly used for deployment, inference, and governance.

    *Common approach:* Use Red Hat OpenShift AI in an existing cloud, x86, or OpenShift environment for data preparation and model development, then deploy models to IBM Z for production inference. Teams already using OpenShift AI can extend existing workflows and tooling to IBM Z.

    *Note: Data preparation can be performed with Red Hat OpenShift AI on IBM Z. Organizations focused primarily on on-platform data preparation may also consider [IBM Z Platform for Apache Spark](../products-tools/data-analytics.md#apache-spark) or [Python AI Toolkit for IBM z/OS](../products-tools/ai-frameworks.md#python-ai-toolkit).*

## Next Steps { #next-step }

<div class="grid cards clickable-cards" markdown>

- **[Build Models](../build-model/build-model.md)**

    Once your data is prepared and model-ready, the next step is building your model. IBM Z supports traditional machine learning, deep learning, and serving pre-built large language models.

</div>
