---
id: setuprepo
title: PLAN: Setup Repository
---

After installing your tools in the section before (especially the CLI), initialize your repo with default templates as well as a github bot that checks your commits.

## Initialize Project

Initialize the [meta](https://github.com/mateodelnorte/meta) repo if multiple repos are used:

```bash
# create a new directory for your meta project and initialize a new git repository in your new dir:
hub init my-meta-repo & cd my-my-meta-repo
# initialize your new repository as a meta repo:
meta init
```

Create the repos with hub:

```sh
# initalize the repo
hub init your-repo-name
# create the repo on github
cd your-repo-name & hub create
```

Add repos: to meta repo:

```bash
# to add new projects, use
meta project import [your-repo-name] [repo url from hub create]
# clone meta repo and all its projects
meta git clone
```

> Setup 1 meta repo for the complete project. Add for each self contained system on subrepo.

## Document projects

The most important part for a project is the `README.md` therefore document all relevant details there and only reference from other documentation to this file. Use the [new-project template](https://github.com/d10l/templates/tree/master/git-repo/create).

For further documentation use [Docusaurus](https://docusaurus.io/docs/en/installation).

```sh
npm install -g dencli
# add README basics
den repo:addboilerplate
```

## Add [Zappr](https://zappr.opensource.zalan.do) Config

Add a `.zappr.yaml` ([Documentation](https://zappr.readthedocs.io/en/latest/setup/#zappr-features-and-their-configuration-options)) in the top-level of the repository:

```yaml
autobranch:
  pattern: "{number}-{title}"
  length: 60
commit:
  message:
    patterns:
      - "#[0-9]+"
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
npm install -g dencli
# add zappr agent
den repo:addguidelineagent
```