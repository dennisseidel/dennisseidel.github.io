# 17. Implement the policy agent in the native programming language

Date: 2019-08-18

## Status

Accepted

## Context

Each API call needs to be authorized based on defined policies. There are multiple framework that support this task. [open policy agent](https://github.com/open-policy-agent/opa) which is supported by the CNCF and has the most github maintainers but [ldap integration](https://www.openpolicyagent.org/docs/latest/guides-identity/) need to implemented through [plugins](https://www.openpolicyagent.org/docs/latest/plugins/#building-go-plugins). [Casbin](https://casbin.org/en/) is more mature, and has a easier policy language but it is also much more restrictive e.g. a situation where an broker can access on behalf of a customer is hard to model. Both of them have no LDAP/AD integration out of the box.

## Decision

I implement the policy agent myself in the native programming language.

## Consequences

This makes it easier to implement and connect to external data source. But I will make sure that i decouple the infrastructure code from the domain code so I can later switch to another soltuion like Open Policy Agent when it is more mature and provides a solution out of the box connecting to LDAP/AD.

More Info:
- https://github.com/casbin/awesome-auth
- https://dev.to/dwipr/how-to-create-role-based-authorization-middleware-with-casbin-and-nest-js-52gm
- https://medium.com/@KevinHoffman/securing-microservices-with-open-policy-agent-fcf04d982b4a
- https://github.com/lirantal/awesome-nodejs-security
- https://github.com/google/cel-spec