# 6. Implement a (terraform) deployment for each SCS, not one general infrastructure stack for all components

Date: 2019-05-10

## Status

Supercedes [2. Use pulumi+localstack over AWS SAM as serverless deployment](0002-use-pulumi-localstack-over-aws-sam-as-serverless-deployment.md)

Superceded by [21. Setup infrastructure with the tool of choice of the specific cloud](0021-setup-infrastructure-with-the-tool-of-choice-of-the-specific-cloud.md)

## Context

Infrastructure is a central part of the application, at the same time it should not be to coupled. One can make a seperate infrastructure repo that setups the infrastrucutre e.g. DBs for a system an then only deploy the different applications into this infrastrucutre or one seperates the infrastructure by applcation.

## Decision

Implement a (terraform) deployment for each Self Contained System (SCS), not one general infrastructure stack for all components.

## Consequences

Keeping the infastructure connected to the application makes it easier to manage the SCS but at the same time requires that multiple of those system are deployed to make a full application work. If would not seperate this this would couple the applications through the infrastructure.
