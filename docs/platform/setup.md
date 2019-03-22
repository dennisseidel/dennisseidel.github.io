---
id: setup
title: Setup
---

This section decsribe the platform I use to implement the solutions.

**Architecture Decisions**

<!-- adrlog -->

- [ADR-0001](adr/0001-use-aws-services-as-my-platform) - Use AWS services as my platform
- [ADR-0002](adr/0002-use-hosted-services-over-containers-but-document-tested-abstractions-and-migration-strategies) - Use hosted services over containers, but document (tested) abstractions and migration strategies
- [ADR-0003](adr/0003-use-aws-amplify-to-interface-with-the-platform) - Use AWS Amplify to interface with the platform
<!-- adrlogstop -->


## Local Development Setup

* Use AWS Amplify as the interface to the AWS. 

### [Get started with AWS Amplify](https://aws-amplify.github.io/docs/js/start?platform=react)

```bash
# make sure you install the cli as decsribed in the development environment section
```

## Automated CI/CD for platform setup

[Install](https://pulumi.io/quickstart/install.html) locally and then [setup for your peferred cloud (e.g. AWS)](https://pulumi.io/quickstart/aws/index.html) and then [get started](https://pulumi.io/quickstart/aws/tutorial-rest-api.html).

```bash
# install
brew install pulumi
# setup for aws (I prefer using environment variables)
export AWS_ACCESS_KEY_ID=<YOUR_ACCESS_KEY_ID>
export AWS_SECRET_ACCESS_KEY=<YOUR_SECRET_ACCESS_KEY>
# generate infrastructure project with sample (without sample use: pulumi new javascript)
pulumi new javascript --dir infrastrucure
cd infrastrucure
```

You can login and manage your stack [online](https://app.pulumi.com/) for using this to manage the shared state and managing locks [login & get an access token for your ci/cd](https://pulumi.io/reference/cli/pulumi_login.html). If you want to work only locally without shared state use `--local` [flag](https://pulumi.io/reference/state.html#to-the-filesystem-backend).

### Create resource

### Export the values from the module and into a file

I want to export the some values from the infrastructure module either directly to be used in code or exported into a config file later picked up by the application at deployment. For this define it as a variable and then export it from the module

```js
const userPool = new aws.cognito.UserPool("saas-template-users", {
  autoVerifiedAttributes: ["email"],
});

exports.userPoolId = userPool.id;
```

To then export this value into a config file run this:

```bash
pulumi stack output -j > ../../frontend/src/config.json
```

## Register your DOMAIN

This is most likely done once there I would not automate this step but do it the manual way: [https://console.aws.amazon.com/route53](https://console.aws.amazon.com/route53)