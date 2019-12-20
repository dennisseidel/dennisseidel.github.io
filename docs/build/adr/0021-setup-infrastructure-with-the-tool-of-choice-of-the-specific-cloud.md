# 21. Setup infrastructure with the tool of choice of the specific cloud

Date: 2019-12-20

## Status

Accepted

Supercedes [6. Implement a (terraform) deployment for each SCS, not one general infrastructure stack for all components](0006-implement-a-terraform-deployment-for-each-scs-not-one-general-infrastructure-stack-for-all-components.md)

## Context

Infrastructure is a central part of the application, at the same time it should not be to coupled. One can make a seperate infrastructure repo that setups the infrastrucutre e.g. DBs for a system an then only deploy the different applications into this infrastrucutre or one seperates the infrastructure by applcation.

As all cloud provider have a different feature set (e.g. paramter storage AWS SSM, Azure App Configuration and nothing on GCP) I will have to rewrite and redesign the infrastructure anyway. Therefore it makes sense to use the infratructure tool of choice for the cloud and migrate it later. Even with cross plattform framework like Terraform the logic and the syntax changes when moving between clouds.

## Decision

Use the prefered infrastructure tool of the cloud where we implement e.g. currently CloudFormation on AWS.

## Consequences

This makes it easier to find the documentation for the provider as well as has the best integration with the plattform. Further I can wrap this in my own cli if needed - that might go directly to the API instead of config as code if needed.
