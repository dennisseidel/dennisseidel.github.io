---
id: cicd
title: CI/CD Service
---

**Architecture Decisons** 

<!-- adrlog -->

- [ADR-0005](adr/0005-use-azure-pipeline-for-cicd.md) - Use Azure Pipeline for CICD

<!-- adrlogstop -->

## Setup Azure Pipelines

Create your first pipeline based on your github repository [here](https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started-yaml?view=azure-devops).

## Important Use Cases

* [Ignoring path, files or branches for the pipeline trigger](https://docs.microsoft.com/en-us/azure/devops/pipelines/build/triggers?view=azure-devops&tabs=yaml)

## [Sample](https://github.com/denseidel/saas-platform-template/blob/master/devops/frontend-preview/azure-pipelines.yaml)

```yaml
# https://github.com/denseidel/saas-platform-template/blob/master/devops/frontend-preview/azure-pipelines.yaml
# Add steps that analyze code, save build artifacts, deploy, and more:
# https://docs.microsoft.com/azure/devops/pipelines/languages/javascript

pr:
  branches:
    include:
    - master
  paths:
    include:
    - /frontend
    exclude:
    - README.md
    - /adr/*
    - .adr-dir

pool:
  vmImage: 'Ubuntu-16.04'

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '8.x'
  displayName: 'Install Node.js'

- script: |
    apt-get update && apt-get install -y libgconf-2-4
    curl -fsSL https://get.pulumi.com | sh
  displayName: 'setup credentials & dependencies'

- script: |
    export PATH=$PATH:$HOME/.pulumi/bin
    cd devops/frontend-preview
    npm install
    pulumi stack select denseidel/saas-template-frontend/dev
    pulumi stack output -j > ../../frontend/src/config.json
    cd ../../frontend
    npm install && npm run build
  env:
      PULUMI_ACCESS_TOKEN: $(pulumi.access.token)
      AWS_ACCESS_KEY_ID: $(aws.master.accesskey)
      AWS_SECRET_ACCESS_KEY: $(aws.master.accesssecret)
  displayName: 'build'

- script: |
    cd frontend
    npm run e2e
  displayName: 'run test'

- script: |
    # setup preview environment & artifact bucket & upload to artifiact bucket
    export PATH=$PATH:$HOME/.pulumi/bin
    cd devops/frontend-preview
    #npm install
    pulumi stack select denseidel/saas-template-frontend/dev
    pulumi up -y
  env:
      PULUMI_ACCESS_TOKEN: $(pulumi.access.token)
      AWS_ACCESS_KEY_ID: $(aws.master.accesskey)
      AWS_SECRET_ACCESS_KEY: $(aws.master.accesssecret)
  displayName: 'Setup Infrastucture & Deploy to preview environment'
```
