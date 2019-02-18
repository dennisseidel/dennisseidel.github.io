# 2. Use hosted services over containers, but document (tested) abstractions and migration strategies

Date: 2019-02-18

## Status

Accepted

## Context

While building and learning how to build cloud solutions on a cloud platform I have to decide to go with a portable containers setup or with native services.

## Decision

I will use hosted services over containers, but document (tested) abstractions and migration strategies.

## Consequences

This will allow me to get started with my project more quickly and reduce initial cost. I will have to make sure that I document how this can be migrated to a more portable setup to show that this can also be used for more relevant components to evolution.

## Pros and Cons of the Options <!-- optional -->

### Serverless & hosted services (GCF, AWS Lambda)

* Good, because it has lower cost for bootstrapping private projects
* Good, because it is tightly integrated with AWS
* Good, because it is fast to develop
* Good, because I can do it in Python with is the Language use by Biotech companies
* Bad, because it is not the Allianz strategy, so I cannot use it for work projects
* Bad, because it is AWS specific \(Locking\)
* Bad, because it is not very "evolutionary"
* Bad, because it misses some logging and routing features like Istio 

### Containers / Istio / Kubernetes

* Good, because it makes me less dependent on one cloud provider for future jobs. 
* Good, because the interest on my videos and from colleagues is large therefor a great opportunity to make myself a name.
* Good, because it reached 1.0 and is now more stable.
* Good, because it integrates with the other Google ecosystem (AI, Serverless Kubernetes)
* Good, because it is the tech stack of bio tech companies like Synthego and Syapse
* Good, because I can use plain Docker and have a faster local development time
* Bad, because it is more expensive for private p