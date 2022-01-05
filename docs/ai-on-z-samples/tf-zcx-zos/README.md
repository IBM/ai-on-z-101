# Demonstrating interaction between z/OS and TensorFlow Serving

This project intends to demonstrate a call to TensorFlow Serving using REST API from a simple z/OS Java app. 
The purpose is to create a simple and easily deployable scenario that can be used on z/OS to understand serving concepts.

This model performns a matrix multiplication of a [1,5] input tensor by a [5,1] weights tensor, where all weights are defined with a value of 1. This results in an output tensor shape of [1,1].

For example, with this model an input tensor of [[1,2,3,4,5]] is multiplied by a weights tensor of [[1],[1],[1],[1],[1]], 
resulting in a value of [[15.]]

Note that since this project is intended for deployment to z/OS, we are avoiding managing dependecies through sub-moduling or Maven/Ant.
The intent is to quickly try this project out without installing additional software. Required Jar files can be pulled from the references below.

## Deploying TensorFlow Serving on z/OS Container Extensions

- TensorFlow Serving can be obtained from the IBM Container Image Repository or built from source for Linux on Z
   - [IBM Container Image Repository](https://ibm.github.io/ibm-z-oss-hub/main/main.html)
   - [Source](https://github.com/linux-on-ibm-z/docs/wiki/Building-TensorFlow-Serving)
- Details on the TFServing API can be found here: https://www.tensorflow.org/tfx/serving/api_rest

- To deploy the example model, you can follow this procedure:
   - SFTP the TensorFlow saved model to zCX. This should be the model folder and all subfolders.
      - The saved model can be found in the model subdirectory of this project.
      - The notebook used to create the model is simplemm.ipynb
   - Create a new docker volume.
      - e.g., `docker volume create tfmodels`
      - **tfmodels** is the volume name we create to use in subsequent steps
   - Copy the model directory into the docker volume. 
      - One approach is to create a simple container using the volume to allow a docker cp:
         - `docker container create --name tfsimple -v tfmodels:/models simple_image`
         - `docker cp <host_model_dir> tfsimple:/models`
            - **tfsimple** is the container name we create to facilitate the copy via docker CP. 
            - **simple_image** can be any base image, and it can be deleted after this copy.
            - **models** is a directory we choose to copy the model into. 
   - Run the TFServing image:
         - `docker run -d --rm -p 8507:8501 -v tfmodels:/models -e MODEL_NAME=<model_name> <image id>`
            - 8501 is the default TFServing REST port. Here it is mapped to zCX port 8507. 
            - **model_name** is the TensorFlow model name; this is commonly the directory name that holds the saved_model.pb file

## Updating and deploying the z/OS application

- First, deploy the project to your host system. This program is intended for Unix environments.
   - Suggestion on how to get github projects to z/OS can be found here: https://github.com/IBM/IBM-Z-zOS
- The following Jar files must be in the project root directory;
   - Apache Commons Logging: [commons-logging-1.1.3.jar](http://archive.apache.org/dist/commons/logging/binaries/)
   - Apache HttpClient: [httpclient-4.5.13.jar](https://repo1.maven.org/maven2/org/apache/httpcomponents/httpclient/4.5.13/)
   - Apache Httpcore: [httpcore-4.4.14.jar](https://repo1.maven.org/maven2/org/apache/httpcomponents/httpcore/4.4.14/)
   - Json Processing API [javax.json-1.0.jar](https://repo1.maven.org/maven2/org/glassfish/javax.json/1.0/)
   - We suggest using SFTP to transmit the jars to the z/OS environment.
   - Note: If different versions are used, update the Makefile to reference the correect version.
- run `make` to build compile the .java files
- issue the following command to try a TensorFlow Serving request:   
   - `make run HOSTIP=tf-serve-ip PORT=tf-serv-port MODEL_DIR=model-dir PAYLOAD=input-tensor`
       - **tf-serve-ip** is the IP address of the server or instance hosting TensorFlow Serving
       - **tf-serv-port** is the TF Serving REST port
       - **model-dir** is the model path, which should typically be /v1/models/simplemm for the sample model.
       - **input-tensor** consists of 5 comma separated decimal values. 
       
   For example, if we mapped the TFServing REST port to 8507, we would use something like this (changing the IP address 
   to one in use by zCX):
      `make run HOSTIP=127.0.0.1 PORT=8507 MODEL_DIR=/v1/models/simplemm PAYLOAD=1.0,2.0,3.0,4.0,5.0`
   
   In addition to verbose messages, the result for test would show:
      {
         "predictions": [[15.0]
         ]
      }

