## Converting models to the PMML format

PMML is the predictive model markup language. You can read more about it [here](https://dmg.org/pmml/v4-4-1/GeneralStructure.html). Machine learning models converted to the PMML format can be leveraged by IBM Snap ML; as described [here](snapml.md), tree based models can utilize the IBM z16 Integrated Accelerator for AI.  

Additionally,  Machine Learning for z/OS can deploy PMML models. 

Generally, the best approach to converting models to PMML is to use [sklearn2pmml](https://github.com/jpmml/sklearn2pmml). This allows the user to create a PMMLPipeline object, which can contain either scikit-learn, xgboost, or lightGBM models as part of a pipeline. 

For considerations for using PMML models in  Machine Learning for z/OS, see the [WMLz documentation](https://www.ibm.com/docs/en/wml-for-zos/enterprise/3.1.0?topic=owe-supported-algorithms-data-sources-data-types-model-types)


### Samples

For an example of converting a scikit-learn model to PMML, see the IBM Snap ML examples; one such example can be found [here](https://github.com/IBM/snapml-examples/blob/main/examples/inference/random_forest/example_credit_card_fraud.ipynb)

Additionally, here is a brief code snippet showing the process: 

```` 
# Create a scikit-learn Random Forest Classifier model
model = RandomForestClassifier(n_estimators = 200, max_depth=6, n_jobs=4, random_state=42)

# Train a PMML pipeline that uses the scikit-learn model defined above
pipeline = PMMLPipeline([("model", model)]).fit(X_train, y_train)

# Save the trained PMML pipeline to a file, e.g., "model.pmml"
sklearn2pmml(pipeline, "model.pmml", with_repr=True)
````
