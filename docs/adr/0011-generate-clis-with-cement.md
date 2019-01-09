---
id: adr11
title: 11. Generate CLIs with Cement 
---

* Status: accepted
* Date: 2018-09-26 <!-- optional -->

## Context and Problem Statement

CLI make the developer experience much better and make some features even easier to implement. There are many options from Python to NodeJS.

## Decision Drivers <!-- optional -->

* Fit with toolstack and goals of getting more into automation and machine learning
* Features - it should allow to implement relevant features (e.g. cli, templating ...) with a good development speed
* Community - it should have a good adoption in the community

## Considered Options

* Cement Framework
* Yeoman
* Caporal.js (NodeJS)
* python + argparse
* bash
* Go

## Decision Outcome

Chosen option: "Cement", because it fits my toolstack and offers enough features.

## Pros and Cons of the Options <!-- optional -->

### Cement Framework

* Good, because it has features for the full cli scope. 
* Good, because it is python and fits my stack
* Good, because it is used by others e.g. AWS
* Bad, because it is a seperate CLI and does not have a commuity around it like Yeoman

### Yeoman

* Good, because it as an existing large community and ecosystem around it. 
* Good, because it is used by others like Microsoft & IBM.
* Bad, because it is focused on scaffolding.
* Bad, beacuse it does not fit my tech stack towards automation & Machine Learning. 

### Caporal.JS

* Good, because it has features for the full cli scope. 
* Bad, because it does not fit my tech stack towards automation & Machine Learning. 
* Bad, because it is not as widely adopted. 

### Python + argepars

* Good, because it has features for the full cli scope. 
* Good, because it is python and fits my stack
* Bad, because it has less features.
* Bad, because it has a slower developer experience (more coding/ less out of the box functionality)
* Bad, bacause it does not allow for a real cli expierence out of the box. 

### bash

* Good, because it is simple.
* Bad, because it is very complex to mange code in bash.
* Bad, because it does not allow for a real cli experience.


### Go

* Good, because of it offers compiled binaries and this leads to a better user experience
* Good, because it is a typed language. 
* Good, because it offers great performance. 
* Good, because it integrates well with the Kubernetes Ecosystem.
* Bad, because it does not fit my learning goals.
