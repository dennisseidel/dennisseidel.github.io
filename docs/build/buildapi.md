---
id: buildapi
title: DO: Build the API
---

After you setup your meta repo and created a subrepo for your self contained system. Start by creating the API with serverless framework - do not use it for infrastructure. Infrastrucuture should be managed seperately through Terraform.

## SCS Components / Repository Structure

- `/infrastructure`: including databases, usw. and the config file of the current state
- `/servcice`: including service configs (e.g. serverless.yaml), infrastructure (e.g. container for serverless functions - should be replacable e.g. with Docker), business (business logic functions)
- `/scripts`: scripts to e.g. deploy infrastructure, build and deploy/release service
- `/ui`: include the ui component
- `api-swagger?`: where? ui? integration with serverless framework? api first?
- `README.md`: ...

## Sample Project

> [Tenant-Management](https://github.com/denseidel/saas-plaform-tenant-management)

## Serverless with typescript

- https://www.jamestharpe.com/serverless-typescript-getting-started/
- https://github.com/prisma/serverless-plugin-typescript

### Install the serverless framework

```bash
npm install -g serverless
# or update global pacakage
npm update -g
```

### Create service

```bash
mkdir service && cd service && serverless create --template aws-nodejs-typescript && npm install
```

### Develop, Test and Iterate

Deploy the function with `sls deploy -v` make sure you logout the event and create test cases that can be infoke loacally.

Invoke locally

```bash
sls invoke locally -f hello
```

Deploy:

```bash
sls deploy -v
```

### Remove

```bash
sls remove
```
