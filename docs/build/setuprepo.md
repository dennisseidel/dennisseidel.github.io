---
id: setuprepo
title: PLAN: Setup Repository
---

After installing your tools in the section before (especially the CLI), initialize your repo with default templates as well as a github bot that checks your commits.

## Initialize Project

```sh
# initalize the repo
hub init your-repo-name
# create the repo on github
hub create
```

## Document projects

The most important part for a project is the `README.md` therefore document all relevant details there and only reference from other documentation to this file. Use the [new-project template](https://github.com/denseidel/new-project).

For further documentation use [Docusaurus](https://docusaurus.io/docs/en/installation).

```sh
# install aws amplify extension
npm install -g amplify-repo-boilerplate
# add README basics
amplify repo add-boilerplate
```

## Add [Zappr](https://zappr.opensource.zalan.do) Config

Add a `.zappr.yaml` ([Documentation](https://zappr.readthedocs.io/en/latest/setup/#zappr-features-and-their-configuration-options)) in the top-level of the repository:

```yaml
autobranch:
  pattern: '{number}-{title}'
  length: 60
commit:
  message:
    patterns:
      - '#[0-9]+'
approvals:
  minimum: 1
  ignore: none
  pattern: "^(:\\+1:|👍)$"
  veto:
    pattern: "^(:\\-1:|👎)$"
specification:
  title:
    minimum-length:
      enabled: true
      length: 8
  body:
    minimum-length:
      enabled: true
      length: 8
    contains-url: true
    contains-issue-number: true
  template:
    differs-from-body: true
pull-request:
  labels:
    additional: true
```

```sh
# install aws amplify extension
npm install -g amplify-repo-boilerplate
# add zappr agent
amplify repo add-guideline-agent
```

## Decisons

<!-- adrlog -->

- [ADR-0001](adr/0004-document-with-readme-md-and-docusaurus.md) - Document with README.md and Docusaurus

<!-- adrlogstop -->