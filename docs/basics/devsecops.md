---
id: devsecops
title: DevSecOps
---

* Add the summary of foundation books about:
  * [Continous Delivery](https://martinfowler.com/books/continuousDelivery.html)
  * [Accelarate](https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339)
  * [State of DevOps Report](https://cloudplatformonline.com/rs/248-TPC-286/images/DORA-State%20of%20DevOps.pdf)
  * Security
  * [Site Reliability Engineering](https://landing.google.com/sre/sre-book/toc/): [Summary](https://github.com/shibumi/SRE-cheat-sheet)

## Decisions

- [ADR-0004](adr/0004-generate-clis-with-cement) - Generate CLIs with [oclif](https://oclif.io/docs/introduction)
- [ADR-0005](adr/0005-use-aws-amplify-plugins-when-possible-over-own-cli) - Use AWS Amplify Plugins when possible over own cli

## Script - everything you do twice
1. Code your scripts in python ([BestPractices](https://srcco.de/posts/writing-python-command-line-scripts.html)).
2. Code Guidelines by [google](https://google.github.io/styleguide/shell.xml) including when to use shell and when to use python (e.g. more then 100 lines!) https://github.com/google/styleguide/blob/gh-pages/pyguide.md

## Developer Tooling

### CLIs 

A good general guideline can be found by heroku - [12 Factor CLI Apps](https://medium.com/@jdxcode/12-factor-cli-apps-dd3c227a0e46). e.g. using flags. Important questions are: 

- Do you have a nested CLI? I propose to have no more then one level of nesting. e.g. `{yourcliname} {nestedobject} --fag=somesting (poly service --action=create)` 
- Which objects? `service` `web` `platform`
- Which flags per object? e.g. `--action="create"` `-a="deploy"` `-a=update`

### Build Plugins for AWS Amplify

When ever possible I want to use AWS Amplify and therefor add my own feature into it [Documentation](https://aws-amplify.github.io/docs/cli/plugins?sdk=js). You can find a sample project [here](https://github.com/denseidel/amplify-repo-boilerplate).

