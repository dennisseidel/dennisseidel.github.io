# 7. Use hygen as the templating engine for my developer tools

Date: 2019-05-30

## Status

Accepted

## Context

A tempating/rendering engine helps [speed up](https://blog.echobind.com/improve-developer-productivity-with-generators-and-team-conventions-2b79f5244783) projects. There are multiple options [available](https://medium.com/ableneo/improve-your-javascript-developer-experience-by-generating-code-d10f7f2e9b6d). One of de major differences is the template framework they use ejs vs handlebars.

## Decision

I will use [hygens](https://github.com/jondot/hygen) to generate code snippets and templates.

## Consequences

We will allow me to reuse my existing code, include it into my nodejs cli as well as us it seperately. It is less popular then the other options, therefore I will have to check regularly that it will be still well maintained.