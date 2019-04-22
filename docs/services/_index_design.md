---
id: services
title: PLAN: Design
---
The core business functions are develop in services either using microservices or event driven actors. Start by defining your [software architecture](../basics/architecture) - or not but make a concious decision about this. Especially around the [platform](../platform/setup) you will use. Next select the correct [boostrap toolkit](bootstrap) and start with the software design.

### **Architectural Decisions**

<!-- adrlog -->

- [ADR-0001](adr/0001-implement-general-services-in-nodejs-and-ml-services-in-python.md) - Implement general services in NodeJS and ML services in Python
- [ADR-0002](adr/0002-use-pulumi-localstack-over-aws-sam-as-serverless-deployment.md) - Use pulumi+localstack over AWS SAM as serverless deployment
- [ADR-0003](adr/0003-use-typescript-over-javascript-when-possible.md) - Use Typescript over Javascript when possible

<!-- adrlogstop -->

## Product Requirement Documentation, User Stories

Create a 1 pager for the [product requirement documentation - including the user interaction and design](https://web.archive.org/web/20190422164155/https://www.atlassian.com/agile/product-management/requirements) - [TEMPLATE](https://docs.google.com/document/d/1-kKH6L1eHzGRNX_59DEK1D-u7TPns79OVBOkbtdZvsA/edit#). Including writing the [User Stories](https://medium.freecodecamp.org/how-and-why-to-write-great-user-stories-f5a110668246).

## Software architecture and domain 

The software design includes how a component is implemented, the interface and api, sequence of actions and exception handling.

### Components / Service Boundries
After know the product requirements, start __design the software implementation__. To define well encapsulated independent services understand the domain. The goal is to identify components that have independent dataflows and end to end functionality so one can reduce communication between functionality: Do it along the DDD domains: [Explore DDD Boundaries](https://learn-particular.thinkific.com/courses/take/explore-ddd-boundaries/lessons/4836638-service-boundaries) / [DDD](https://github.com/heynickc/awesome-ddd).

1. Identify encapsulated functionality (without dataflow / communication) by create a lean diagram with a domain diagram \(events, commands, actors, aggregates\). These are often business domains (life, motor, health) as they don't communicate with each other rather then objects (contracts, parties, documents) as functionality most often will require a data flow across those objects. [Source](https://www.youtube.com/watch?v=0TYbHVc2yWI) / [Source](https://learn-particular.thinkific.com/courses/take/explore-ddd-boundaries/lessons/4836638-service-boundaries).
2. Sketch down the components in a first deployment diagram & how they interact at runtime with a [sequence diagram](http://plantuml.com/sequence-diagram).

Also check [software architecture](../basics/architecture) on this topic.

### Design the API / Events in OpenAPI

First we start designing the API with Swagger. The best tool to do this is the [swagger editor](https://github.com/swagger-api/swagger-editor) or using [Visual Studio Code with the openapi-lint extension](https://marketplace.visualstudio.com/items?itemName=mermade.openapi-lint).

To understand *OpenAPI* you should read the basics in this [tutorial](https://idratherbewriting.com/learnapidoc/pubapis_openapi_tutorial_overview) and [how to document it on aws api gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api-quick-start-import-export.html).

While designing your API keep in mind idenpotency and transactionality - and opt for a simple solution otherwise you have to think a lot about [Relience](resilience.md). This is part of following the API design best practices of:

- [Microsoft](https://docs.microsoft.com/de-de/azure/architecture/best-practices/api-design)
- [Zalando](https://opensource.zalando.com/restful-api-guidelines/)

#### Validate for API Guidelines

Setup [Zally](https://github.com/zalando/zally) for api validation.

#### Create your spec

```bash
# create file
code openapi.yaml
```