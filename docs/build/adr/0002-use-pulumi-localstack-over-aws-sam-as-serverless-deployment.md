# [Superceded by 6.] 2. Use pulumi+localstack over AWS SAM as serverless deployment

Date: 2019-04-07

## Status

Superceded by [6. Implement a (terraform) deployment for each SCS, not one general infrastructure stack for all components](0006-implement-a-terraform-deployment-for-each-scs-not-one-general-infrastructure-stack-for-all-components.md)

## Context

For implementing serverless APIs on AWS one can use multiple frameworks like AWS SAM, AWS CMK, Pulumi or Terraform. The main criterial is that it should speed up the development, allow for a good development workflow and if possible make migrations to other solutions easier.

## Decision

We will use pulumi to develop the serverless apis. 

## Consequences

This allows us to use localstack for local development and testing, as well as the defintion of all the components on the cloud without abstracting this away. This might cost us some speed that is provided by AWS SAM with hot reloading and their local development environment. At the same time as it supports also other cloud providers e.g. Azure & GCP this makes a migration simpler. Also the reliance on cloudformation leads to the fact that the ifrastructure can not be validate like with Terrafrom & Pulumi. Further the fact that one develops locally heavily with unit tests with jest and moking aws leads to better code (because pulumi can not be run locally without localstack to test the functions). But I have to keep to things in mind:
* The development of AWS SAM, if they include man more features that boost productivity it might make sense to use it.
* How I can migrate within pulumi from e.g. AWS Lambda to Knative.
