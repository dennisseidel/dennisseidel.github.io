# 5. Use AWS Amplify Plugins when possible over own cli

Date: 2019-02-18

## Status

Accepted

## Context

While oclif seems the better option to build new clis, a lot of what I requires is already provided by the aws amplify cli - therefore I have to decide if I want to build a new cli for my own command, wrap aws amplify in my cli or use the [plugin](https://aws-amplify.github.io/docs/cli/plugins?sdk=js) approach to extend the aws amplify cli.

## Decision

I will extend the AWS Amplify CLI with plugins when possible, which is based on [gluegun](https://github.com/infinitered/gluegun).

## Consequences

This allows me to use the functionality the easiest and have a common setup through aws amplify. I have to make sure that my code is portable when I want to migrate away from aws amplify when and go full polycloud I can reuse the code.
