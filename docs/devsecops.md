---
id: devsecops
title: DevSecOps
---

DevSecOps consists of different Layers: 

* Process Process - GitOps
* Infrastructure (Automation) - Get your Infrastructure setup to build your plattform on top
* Plattform (Automation) - Get your Plattform setup 
* Dev Tool Development

### Architectural Decisions

1. [ADR-0011](adr/adr11.html) - Generate CLIs with Cement

## Use GitOps

## Scripting
1. Code your scripts in python ([BestPractices](https://srcco.de/posts/writing-python-command-line-scripts.html)).
2. Code Guidelines by [google](https://google.github.io/styleguide/shell.xml) including when to use shell and when to use python (e.g. more then 100 lines!) https://github.com/google/styleguide/blob/gh-pages/pyguide.md

## Infrastructure Automation - with Terraform

[Best Pracrtices](https://www.terraform.io/docs/providers/aws/r/route53_record.html)


## Developer Tooling

### CLIs 

Use a CLI to abstract from complex scripts and simplify repetetive tasks. [Cement](https://docs.builtoncement.com/getting-started/beginner-tutorial/part-1-creating-your-first-project) is a framework to create CLIs. An sample application can be found [here](#) and support [here](https://github.com/datafolklabs/cement#more-information).

Getting Started:

#### Design
A good general guideline can be found by heroku - [12 Factor CLI Apps](https://medium.com/@jdxcode/12-factor-cli-apps-dd3c227a0e46). e.g. using flags. Important questions are: 

- Do you have a nested CLI? I propose to have no more then one level of nesting. e.g. `{yourcliname} {nestedobject} --fag=somesting (poly service --action=create)` 
- Which objects? `service` `web` `platform`
- Which flags per object? e.g. `--action="create"` `-a="deploy"` `-a=update`



1. Prerequisits & install
2. Implementation
3. Packaging 

A longer getting started is provided by the Clement Page. 

```bash
# install
pip3 install cement
# generate project
cement generate project ./cli

```