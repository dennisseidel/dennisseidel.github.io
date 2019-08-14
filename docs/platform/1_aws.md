---
id: aws
title: AWS & Azure
---

This section describe the platform I use to implement the solutions. This is the foundation for the build section starting with designing the [solution architecture](../build/1_solutionarchitecture.md).

## AWS

To get started I register an account and create an *access_key_id* and *secret_access_key* that I then can use building mu applications:

### Signup for an [AWS](https://aws.amazon.com) account
### [Create IAM roles](https://docs.aws.amazon.com/de_de/IAM/latest/UserGuide/best-practices.html)
### Install [AWS CLI](https://docs.aws.amazon.com/de_de/cli/latest/userguide/cli-chap-getting-started.html)

```bash
sudo pip install awscli
# use the access key id and secret access ky as describe above
aws configure
# AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
# AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
# Default region name [None]: eu-central-1
# Default output format [None]:

# for the man pages do
aws configure help
```

#### [Configure multiple Profiles:](https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html)

```text
vi ~/.aws/credentials
```

```text
[default]
aws_access_key_id=XXX
aws_secret_access_key=XXX

[serverless-admin]
aws_access_key_id=AKIAIOSFODNN7EXAMPLE
aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

Set the profile:

```text
export AWS_PROFILE=serverless-admin
```

Next I use the *access_key_id* and *secret_access_key* to setup my infrastructure with Terraform.

### Account structure

I create multiple accounts for each stage to isolate changes, it could also make sense to give each team their own account. In this case the question is how to integrate the different services of the teams? I propose the idea of autonomous teams that work in their _bounded/autonomous context_ end to end (from the frontend component to the database) this means they integrate through their component reuse or API provided by the team OR a shared event infrastructure.

## Plaform Features

For the next step the solution design I understand the [features the platform provides](https://aws.amazon.com/de/products/) to provided the right solution mapping. As of now I require: 

- Hosting for Components (Static files & CDN): [S3](https://docs.aws.amazon.com/s3/index.html) + [CloudFront](https://docs.aws.amazon.com/cloudfront/?id=docs_gateway)
- Service Runtime: [Lambda](https://docs.aws.amazon.com/lambda/?id=docs_gateway)
- IAM:  [Cognito](https://docs.aws.amazon.com/cognito/?id=docs_gateway) & [IAM](https://docs.aws.amazon.com/iam/?id=docs_gateway)
- Persistance: [RDS Aurora](https://docs.aws.amazon.com/rds/?id=docs_gateway), [Dynamodb](https://docs.aws.amazon.com/dynamodb/?id=docs_gateway)
- Application Integration: [SQS](https://docs.aws.amazon.com/sqs/?id=docs_gateway)/[SNS](https://docs.aws.amazon.com/sns/?id=docs_gateway), [Kinesis](https://docs.aws.amazon.com/kinesis/?id=docs_gateway), [StepFunctions](https://docs.aws.amazon.com/step-functions/?id=docs_gateway)
- CICD: [Azure Pipeline](https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started-yaml?view=azure-devops)

## Automation (Terraform)

Setup the AWS infrastructure for your solution using [Terraform](https://learn.hashicorp.com/terraform/?track=aws#aws).