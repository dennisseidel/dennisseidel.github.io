---
id: runtime
title: Runtime Service
---

> The runtime services allow you to implement your backend logic in functions, orchestrate this logic and provide API for frontends and other services (internal or external).

Choosing your runtime is a tradeoff between responisibility and therefore bootstraping speed and [architecture evolution](../) and portability/lock in. This SaaS/PaaS offerings e.g. Serverless offer a faster implemenation because more operational responsiblity is covered by the provider. At the same time this means it is more opinionated, has lockin potential and some security considerations.

#### Operational View:

<a href="https://de.slideshare.net/AmazonWebServices/leadership-session-using-devops-microservices-and-serverless-to-accelerate-innovation-srv325-aws-reinvent-2018"><img src="/img/operational-responsibility-1.png" width="80%"></a>

#### (Shared) Responsibility / Security View:

<a href="https://de.slideshare.net/AmazonWebServices/unlock-highly-regulated-enterprise-workloads-with-saas-on-aws-govcloud-us-wps303-aws-reinvent-2018">
  <img src="/img/shared-responsibility-1.png" width="80%">
  <img src="/img/shared-responsibility-2.png" width="80%">
</a>

More information on restricted workloads in the cloud:
* [AWS US DoD](https://de.slideshare.net/AmazonWebServices/deploy-a-dod-secure-cloud-computing-architecture-environment-in-aws) / [2](https://de.slideshare.net/AmazonWebServices/expanding-your-aws-and-onpremise-footprint-to-aws-govcloud-us) 
* [AWS/Personio Germany - GDPR](/Whitepaper_AWS-bei-Personio.pdf)
* https://de.slideshare.net/AmazonWebServices/accelerating-compliance-ato-with-security-automation
* https://de.slideshare.net/AmazonWebServices/leadership-session-aws-security-sec305l-aws-reinvent-2018
* https://de.slideshare.net/AmazonWebServices/how-to-architect-and-bring-to-market-saas-on-aws-govcloud-us

## REST & GraphQL

### Serverless

For serverless workloads implement the serverless service in pulumi. This requires a [AWS account](../development-environment/accounts.md), this allows you to deploy AWS Lambda functions. All of the platform is provided by AWS. As a next step you can [implement your services](../services)

### Container Runtime (Kubernetes)

#### Setup

You can use locally [minikube](#), for AWS [korps](#) and for "bare metal" [kubeadm](#). I would advice on using a hosted version like EKS.

## StepFunctions
 
and why and when uber uses cadence

<img src="/img/stepfunctions-example-foodpanda.png" width="90%">

https://de.slideshare.net/AmazonWebServices/building-business-workflows-with-aws-step-functions

## API Gateway & Developer Portal

To manage your API you can use the [AWS Developer Portal](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-developer-portal.html). 