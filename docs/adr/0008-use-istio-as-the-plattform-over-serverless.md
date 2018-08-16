---
id: adr8
title: 8. Use Istio as the plattform over serverless 
---

* Status: accepted
* Date: 2018-08-16 <!-- optional -->

## Context and Problem Statement

To run the applications I need to decide which platform to chose.

## Decision Drivers <!-- optional -->

* That there is a large ecosystem.
* That I can use it at work. 
* That the companies I want to work for need this skill.

## Considered Options

* Serverless (GCF, AWS Lambda)
* Kubernetes / Istio

## Decision Outcome

Chosen option: "Kubernetes/Istio", because it evolved into a viable option that has less lockin into one cloud provider and the interest in the market is big.

## Pros and Cons of the Options <!-- optional -->

### Serverless (GCF, AWS Lambda)

* Good, because it has lower cost for bootstrapping private projects
* Good, because it is tightly integrated with AWS
* Good, because it is fast to develop
* Good, because I can do it in Python with is the Language use by Biotech companies
* Bad, because it is not the Allianz strategy, so I cannot use it for work projects
* Bad, because it is AWS specific \(Locking\)
* Bad, because it is not very "evolutionary"
* Bad, because it misses some logging and routing features like Istio 

### Istio / Kubernetes

* Good, because it makes me less dependent on one cloud provider for future jobs. 
* Good, because the interest on my videos and from colleagues is large therefor a great opportunity to make myself a name.
* Good, because it reached 1.0 and is now more stable.
* Good, because it integrates with the other Google ecosystem (AI, Serverless Kubernetes)
* Good, because it is the tech stack of bio tech companies like Synthego and Syapse
* Good, because I can use plain Docker and have a faster local development time
* Bad, because it is more expensive for private projects
