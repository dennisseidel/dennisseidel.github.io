# 6. Use terraform to setup infrastructure

Date: 2019-04-28

## Status

Accepted

Supercedes [4. Use pulumi to setup the infrastructure](0004-use-pulumi-to-setup-the-infrastructure.md)

## Context

I needed a tool that allowed me to setup my infrastructure on AWS. There are multiple options like [pulumi](), [terraform](https://www.terraform.io/), [serverless framework](), [up]()

## Decision

I will use Terraform to setup my infrastructure in the future.

This is because Terraform becomes the de facto standard as show in the [ThoughtWorks Radar](https://www.thoughtworks.com/radar/tools/terraform) as well as confirmed by my exchange with guys at Microsoft and Syncier. Pulumi would be a better fit because it use Typescript instead of HCL - but the ecosystem is much more important.

## Consequences

This will offer better documentation as well as more tool e.g. for testing [Terratest](https://github.com/gruntwork-io/terratest) as well as better support for other clouds through more providers. The downside is that I have to use HCL.
