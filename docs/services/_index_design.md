---
id: services
title: Design
---
The core business functions are develop in services either using microservices or event driven actors. Start by defining your [software architecture](../basics/architecture) - or not but make a concious decision about this. Especially around the [platform](../platform/setup) you will use. Next select the correct [boostrap toolkit](bootstrap) and start with the software design.

### **Architectural Decisions**

<!-- adrlog -->

- [ADR-0001](adr/0001-implement-general-services-in-nodejs-and-ml-services-in-python.md) - Implement general services in NodeJS and ML services in Python
- [ADR-0002](adr/0002-use-pulumi-localstack-over-aws-sam-as-serverless-deployment.md) - Use pulumi+localstack over AWS SAM as serverless deployment
- [ADR-0003](adr/0003-use-typescript-over-javascript-when-possible.md) - Use Typescript over Javascript when possible

<!-- adrlogstop -->

## Software architecture and domain 
Create a lean diagram with a domain diagram \(events, commands, actors, aggregates\), interaction diagram and a first deployment diagram, \(squnce diagram? not at this stage right?\).

Do it along the DDD domains: [Explore DDD Boundaries](https://learn-particular.thinkific.com/courses/take/explore-ddd-boundaries/lessons/4836638-service-boundaries) / [DDD](https://github.com/heynickc/awesome-ddd).

## Sofware Design

The software design includes how a component is implemented, the interface and api, sequence of actions and exception handling.

1. Start by designing the API
2. Map out the business process([activities](http://plantuml.com/activity-diagram-beta)) & [sequences](http://plantuml.com/sequence-diagram) of actions with 
3. Next model the **[state - data architecture](http://plantuml.com/state-diagram)** of the components e.g. the service or the application (redux & views).

### Design the API / Events in OpenAPI

First we start designing the API with Swagger. The best tool to do this is the [swagger editor](https://github.com/swagger-api/swagger-editor) or using [Visual Studio Code with the openapi-lint extension](https://marketplace.visualstudio.com/items?itemName=mermade.openapi-lint). I suggest adding the swagger editor to the docker-compose file in your project:

```text
services:
  swaggereditor:
    image: swaggerapi/swagger-editor
    ports:
      - "80:8080"
```

To understand *OpenAPI* you should read the basics in this [tutorial](https://idratherbewriting.com/learnapidoc/pubapis_openapi_tutorial_overview) and [how to document it on aws api gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api-quick-start-import-export.html).

#### Validate for API Guidelines

Setup [Zally](https://github.com/zalando/zally) for api validation.

#### Create your spec

```bash
# create file
code openapi.yaml
```