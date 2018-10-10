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

Implement a CLI for the most important task. Use [Cement](https://docs.builtoncement.com/getting-started/beginner-tutorial/part-1-creating-your-first-project) to create CLIs. An sample application can be found [here](#) and support [here](https://github.com/datafolklabs/cement#more-information).

```bash
# install
pip3 install cement
# generate project
cement generate project ./cli

```