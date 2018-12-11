---
id: datascience
title: Data Science (AI)
---
> AI is at the center of modern application development as it allows for easy ways to automated traditional human tasks like classifications (question -> answer).

## Architectural Decisions

* [ADR-0002](adr/adr2.html) - Focus on theory or application for machine learning
* [ADR-0003](adr/adr3.html) - For Machine learning select a vendor specific stack of a general stack
* [ADR-0006](adr/adr6.html) - I use AWS for ML and Event Driven Architecture

## Setup 

### Install Jupyter Notebook 

http://jupyter-notebook-beginner-guide.readthedocs.io/en/latest/execute.html
http://jupyter.org/install

```bash
pip3 install --upgrade pip
pip3 install jupyter
```
https://www.datacamp.com/community/tutorials/installing-anaconda-mac-os-x
https://flinhong.com/2018/01/27/get-anaconda-ready-with-brew/

```bash
brew cask install anaconda
# add to .zshrc
export PATH=/usr/local/anaconda3/bin:"$PATH"
```

conda 

https://conda.io/docs/user-guide/tasks/manage-environments.html


### install anaconda 
https://www.anaconda.com/download/#macos


### Download from Jupyter Notebook

https://www.linux.com/blog/split-and-join-targz-file-Linux 
https://stackoverflow.com/questions/43042793/download-all-files-in-a-path-on-jupyter-notebook-server

!tar chvfz notebook.tar.gz *
!split --bytes=1MB notebook.tar.gz vid

### Install Package in Anaconda 
https://jakevdp.github.io/blog/2017/12/05/installing-python-packages-from-jupyter/
https://stackoverflow.com/questions/40075637/anaconda-and-package-installation-pydicom

## Software Development

Software Development is changing because of AI the actual "logic coding" is done by optimization - the algorithm itself. The new process looks like

1. Design a "code skeleton" 
2. Measure performance: this requires data to evaluate if something is right or not (human task, and decision factor if a problem can be solved this way)
3. Update (automated process) 

The benefit is that this requires much less domain knowledge. Human Tasks in this chain are: find example to evaluate / samples (labels), maintain surrounding data infrastructure.

The old approaches are still needed for OS Programming, Evaluation & Visualisation, Distributed Training & Node Communication.

[Source](https://www.figure-eight.com/building-the-software-2-0-stack-by-andrej-karpathy-from-tesla/)



## Algorithms

http://scikit-learn.org/stable/tutorial/machine_learning_map/


## Business Rules vs Trained Models

Learn about AI:

* AI/ML mit Python auf [http://udacaity.com](http://udacaity.com/)

[https://aws.amazon.com/blogs/big-data/build-a-data-lake-foundation-with-aws-glue-and-amazon-s3/](https://aws.amazon.com/blogs/big-data/build-a-data-lake-foundation-with-aws-glue-and-amazon-s3/)

[https://www.coursera.org/learn/ai/lecture/DnRJg/convolutional-neural-networks](https://www.coursera.org/learn/ai/lecture/DnRJg/convolutional-neural-networks)

NodeRED Docker: [https://hub.docker.com/r/nodered/node-red-docker/](https://hub.docker.com/r/nodered/node-red-docker/)

[https://developer.ibm.com/sso/postlogin?lang=en\_US&d=https%3A%2F%2Fwww.ibm.com%2Fdeveloperworks%2Fanalytics%2Flibrary%2Fiot-deep-learning-anomaly-detection-2%2Findex.html%3Fca%3Ddrs-](https://developer.ibm.com/sso/postlogin?lang=en_US&d=https%3A%2F%2Fwww.ibm.com%2Fdeveloperworks%2Fanalytics%2Flibrary%2Fiot-deep-learning-anomaly-detection-2%2Findex.html%3Fca%3Ddrs-)


## Data and Model Sources

### Data
* Google it to get the most current data sources.
* [Google Dataset Search](https://toolbox.google.com/datasetsearch)
* [Microsoft Research Open Data BETA](https://msropendata.com/)


### Models
* [modeldepot.io](https://modeldepot.io)
* [IBM Model Library](https://developer.ibm.com/code/exchanges/models/)


## Build a machine learing API
* [Five Minutes from Machine Learning to RESTful API](https://jobs.zalando.com/tech/blog/connexion-zalando-open-source/)