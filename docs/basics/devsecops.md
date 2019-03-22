---
id: devsecops
title: DevSecOps
---

This section describes the DevOps and Security Pratices I apply building solution. This includes [CI/CD](#), [Security Best Pratices](#) and [Side Reliability Engineering](#).

## Decisions

- [ADR-0004](adr/0004-generate-clis-with-cement) - Generate CLIs with [oclif](https://oclif.io/docs/introduction)
- [ADR-0005](adr/0005-use-aws-amplify-plugins-when-possible-over-own-cli) - Use AWS Amplify Plugins when possible over own cli

1. Adr -> 
   1. Code your scripts in python ([BestPractices](https://srcco.de/posts/writing-python-command-line-scripts.html)).
   2. Code Guidelines by [google](https://google.github.io/styleguide/shell.xml) including when to use shell and when to use python (e.g. more then 100 lines!) https://github.com/google/styleguide/blob/gh-pages/pyguide.md

## Scripting

Script everything that you do more than twice.

## Developer Tooling

### CLIs 

Follow the [12 Factor CLI Apps](https://medium.com/@jdxcode/12-factor-cli-apps-dd3c227a0e46) bestpractices:

- No more then one level of nesting. e.g. `{yourcliname} {nestedobject} --fag=somesting (poly service --action=create)` 
- Which objects? `service` `web` `platform`
- Which flags per object? e.g. `--action="create"` `-a="deploy"` `-a=update`

### Build Plugins for AWS Amplify

When ever possible I want to use AWS Amplify and therefor add my own feature into it [Documentation](https://aws-amplify.github.io/docs/cli/plugins?sdk=js). You can find a sample project [here](https://github.com/denseidel/amplify-repo-boilerplate).


## CI/CD

* [CI/CD for Serverless and Containerized Applications (DEV309-R)](https://www.youtube.com/watch?v=01ewawuL-IY)
*  Summarize the fundamentals form: 
  * [Continous Delivery](https://martinfowler.com/books/continuousDelivery.html)
  * [Accelarate](https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339)
  * [State of DevOps Report](https://cloudplatformonline.com/rs/248-TPC-286/images/DORA-State%20of%20DevOps.pdf)

## Security

* Find a Foundational Book for the basic of security.
* [Learn Security on AWS with CloudGoat.](https://medium.com/@rzepsky/playing-with-cloudgoat-part-1-hacking-aws-ec2-service-for-privilege-escalation-4c42cc83f9da)


## Side Reliability Engineering
* Create fundamentals summary: [Site Reliability Engineering](https://landing.google.com/sre/sre-book/toc/): [Summary](https://github.com/shibumi/SRE-cheat-sheet)