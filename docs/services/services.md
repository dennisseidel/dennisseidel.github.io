---
id: services
title: Design
---
The core business functions are develop in services either using microservices or event driven actors. Start by defining your [software architecture](../basics/architecture) - or not but make a concious decision about this. Especially around the [platform](../platform/setup) you will use. Next select the correct [boostrap toolkit](bootstrap) and start with the software design.

### **Architectural Decisions**

<!-- adrlog -->

- [ADR-0001](adr/0001-implement-general-services-in-nodejs-and-ml-services-in-python) - Implement general services in NodeJS and ML services in Python

<!-- adrlogstop -->

## Software architecture and domain 
Create a lean diagram with a domain diagram \(events, commands, actors, aggregates\), interaction diagram and a first deployment diagram, \(squnce diagram? not at this stage right?\).

## Sofware Design

The software design includes how a component is implemented, the interface and api, sequence of actions and exception handling.

1. Start by designing the API
2. Map out the business process([activities](http://plantuml.com/activity-diagram-beta)) & [sequences](http://plantuml.com/sequence-diagram) of actions with 
3. Next model the **[state - data architecture](http://plantuml.com/state-diagram)** of the components e.g. the service or the application (redux & views).

### Design the API / Events in Swagger

First we start designing the API with Swagger. The best tool to do this is the [swagger editor](https://github.com/swagger-api/swagger-editor). I suggest adding the swagger editor to the docker-compose file in your project:

```text
services:
  swaggereditor:
    image: swaggerapi/swagger-editor
    ports:
      - "80:8080"
```

Create your swagger file: [basic swagger file structure](https://swagger.io/docs/specification/2-0/basic-structure/)