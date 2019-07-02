---
id: softwaredesign
title: PLAN: Software Design
---

**Input**: Technical Solution Design & Architecture Belt (Architectural Practices)

After I designed and identified

1. the general technical solution map: defined self contained system workloads, relationships between the components, deployment & technologies
2. the relevant architectural practices & fitness functions for the architecure belt of this solution

for each workload. I design each of the components included in the workload within the boundaries of the technical solution (that utlizes the platform) and the architecture belt.

## Product Requirement Documentation, User Stories

Create a 1 pager for the [product requirement documentation - including the user interaction and design](https://web.archive.org/web/20190422164155/https://www.atlassian.com/agile/product-management/requirements) - [TEMPLATE](https://docs.google.com/document/d/1-kKH6L1eHzGRNX_59DEK1D-u7TPns79OVBOkbtdZvsA/edit#). Including writing the [User Stories](https://medium.freecodecamp.org/how-and-why-to-write-great-user-stories-f5a110668246).

## Software architecture and domain

The software design includes how a component is implemented, the interface and api, sequence of actions and exception handling.

### Design the API / Events in OpenAPI

First we start designing the API with Swagger. The best tool to do this is the [swagger editor](https://github.com/swagger-api/swagger-editor) or using [Visual Studio Code with the openapi-lint extension](https://marketplace.visualstudio.com/items?itemName=mermade.openapi-lint).

To understand _OpenAPI_ you should read the basics in this [tutorial](https://idratherbewriting.com/learnapidoc/pubapis_openapi_tutorial_overview) and [how to document it on aws api gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api-quick-start-import-export.html).

While designing your API keep in mind idenpotency and transactionality - and opt for a simple solution otherwise you have to think a lot about Resilience (see below). This is part of following the API design best practices of:

- [Microsoft](https://docs.microsoft.com/de-de/azure/architecture/best-practices/api-design)
- [Zalando](https://opensource.zalando.com/restful-api-guidelines/)

#### Validate for API Guidelines

Setup [Zally](https://github.com/zalando/zally) for api validation.

#### Create your spec

```bash
# create file
code openapi.yaml
```

### Design your clode according to software best practices

- Architecture: https://medium.com/the-software-architecture-chronicles/ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together-f2590c0aa7f6 / https://herbertograca.com/tag/software-architecture/page/2/
- Code Design Best Practices https://herbertograca.com/dev-theory-articles-listing/

### Design it Resilience

- Recilience requirements in the cloud due to retries and network availability. Google suggest the following [best pratices on retries](https://cloud.google.com/functions/docs/bestpractices/retries)and [general tips](https://cloud.google.com/functions/docs/bestpractices/tips):

  - Use retry to handle transient errors
  - Set an end condition to avoid infinite retry loops
  - Distinguish between retriable and fatal errors
  - Write idempotent functions (Especially make retryable background functions idempotent)
  - Ensure HTTP functions send an HTTP response
  - Do not start background activities
  - Always delete temporary files
  - Use dependencies wisely
  - Use global variables to reuse objects in future invocations
  - Do lazy initialization of global variables

- AWS lambda tips for idempotency [here](https://cloudonaut.io/your-lambda-function-might-execute-twice-deal-with-it/)
