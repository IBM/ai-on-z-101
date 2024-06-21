# © Copyright IBM Corporation 2022.
# LICENSE: Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)

################ Dockerfile for spaCy 3.1.x ######################
#
# This Dockerfile builds a basic installation of spaCy
#
# spaCy (https://spacy.io/) is a python-based Natural Language Processing library
# that excels at large-scale information extraction tasks. It has support for a large
# number of languages (64+) and has a huge number of features, which have made it one of
# the most widely used libraries for NLP in production. 
#
# This dockerfile was obtained from https://github.com/IBM/ai-on-z-containers
#
# To build this image, from the directory containing this Dockerfile:
# docker build -f <dockerfile name> -t <image_name> .
#
#####################################################################################

# Base Image
FROM icr.io/ibmz/ubuntu:20.04

# The author
LABEL maintainer="AI on Z Team (https://www.ibm.com/support/z-content-solutions/journey-to-ai-on-z/)"

ARG DEBIAN_FRONTEND="noninteractive"

RUN apt-get update && apt-get install -y \
  software-properties-common \
  python3 \
  python3-dev \
  python3-pip \
  python3-scipy \
  pkg-config \
  libblas3 \
  liblapack3 \
  libblas-dev  \
  liblapack-dev \
  libopenblas-dev \
  wget \
  build-essential \
  nano \ 
  unzip \
  git \ 
  && pip3 install --upgrade pip \
  && pip3 install --no-cache-dir \
  wheel \ 
  numpy \
  jupyter

WORKDIR /git
#CLONE current versions 
RUN git clone https://github.com/explosion/murmurhash.git \ 
    && cd murmurhash \ 
    && pip install . 
RUN git clone https://github.com/explosion/thinc.git \ 
    && cd thinc \ 
    && pip install -r requirements.txt \ 
    && pip install --no-build-isolation --editable .
RUN git clone https://github.com/andrewsi-z/thinc-bigendian-ops.git \ 
    && cd thinc-bigendian-ops \ 
    && pip install . 
RUN git clone https://github.com/explosion/spaCy \
    && cd spaCy \ 
    && git checkout v3.1.x \
    && pip install -r requirements.txt \ 
    && pip install --no-build-isolation --editable .

WORKDIR /

COPY spacy-example.ipynb /notebooks/

WORKDIR /notebooks

CMD jupyter notebook  --allow-root --ip 0.0.0.0 --port 8888