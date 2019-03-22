---
id: iam
title: IAM
---
To secure your app and mange user identities you can either build your own secuirty \(which is bad practice unless you are a security startup that sees it advantage in build novel and better security\), use a existing solution like keycloak and integrate it into your application or use a SaaS solution that provides you Identitymanagement.

**Architectural Decisons**
- Use AWS Amplify with Cognito

## Setup IDP

### SaaS - AWS Cognito

You require an [AWS Account and Credentials](../development-environment/accounts.md). Then you can use the following Pulumi code to setup your IDP:

[Setup up Pulumi](setup.html#automate-with-pulumi) then add:

```js
// index.js
const aws = require("@pulumi/aws");
const pulumi = require("@pulumi/pulumi");

// more config options here https://pulumi.io/quickstart/aws/setup.html 
aws.config.region = "eu-central-1"

// identity provider
const userPool = new aws.cognito.UserPool("saas-template-users", {
  autoVerifiedAttributes: ["email"],
});

const clientFrontend = new aws.cognito.UserPoolClient("client", {
  userPoolId: userPool.id,
});

exports.userPoolWebClientId = clientFrontend.id;
exports.userPoolId = userPool.id;
```

Export this values to be [used in your frontend application](#) with aws amplify by doing: `pulumi stack output -j > ../../frontend/src/config.json`.

### Keycloak

Use the [helm chart](https://github.com/helm/charts/tree/master/stable/keycloak).

## Integrate with API Gateway at the Edge

tbd

## Secure an API Backend

tbd