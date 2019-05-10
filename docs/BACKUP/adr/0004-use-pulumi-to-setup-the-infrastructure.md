# 4. Use pulumi to setup the infrastructure

Date: 2019-03-10

## Status

Superceded by [6. Use terraform to setup infrastructure](0006-use-terraform-to-setup-infrastructure.md)

## Context

To automated the infrastructure within the CI/CD pipeline we need a tool to configure the infrasture.

## Decision

We use Pulumi to setup the intrastructure.

## Consequences

We have more freedom and better automation then with the limited features of AWS Amplify, and we can integrate with more then AWS in the future, futher we can use terrafrom within javascript code instead of using their own language. 

## Links

* [Forming Serverless Clouds with AWS: CloudFormation, SAM, CDK, Amplify](https://www.devalias.net/devalias/2018/09/15/forming-serverless-clouds-aws-cloudformation-sam-cdk-amplify/)
