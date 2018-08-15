---
id: saas
title: SaaS
---

SaaS is important tool for [commodity functionality of your business as well as a default principle for implementing services & frontends](architecture.md).

### **Architectural Decisions**

tbd

## Using SaaS 

* Make sure it is not a high business value functionality? What happens if you can not change this feature or add a new one? 
* Do not customize the solution. 
* Cost of Scalability.
* If in doubt you should use the **ports and adapters pattern** to exchange and extend the solution behind a stable API.  

## Implementing a Solution as SaaS vs Plattform

Solution should always be implemented that they can be provided to 3rd parties as a SaaS solution. This means as is with minimum customization.
The solution should "not" be extended for 3rd parties - as this find your niche and become sucessful through scalability would conflict. If customization is required by the party then the stable components should be provided **as a Service** and the customization should be either through a component (service + ui) that orchestrates the stable *aaS Components or a runtime is provided where the customer can deploy his own orchestration components  / combined folution.

### General Features of SaaS

* Internationalization
* Scalability
* Multi tenancy Concept: APIs + How would a central orchestraction component look
* Administration Concept: APIs + How would a central orchestration component look
* Access Management & User Management: API + Central orchestration component This should be done by providing a seperate IAM Servcies that can be integrated that includes Indentity Federation which allows us to integrate standard based external identity providers. This should be an open source component because of the cost of scaling e.g. [keycloak](https://www.keycloak.org/).
* GDPR: extract/intregrate, track, comply (https://hub.docker.com/r/pontusvision/open-source-gdpr/) This must be included in all components and integrated in the GDPR component that itself needs to be customizable. Here check with features of the google cloud plattform. 
* Metering (By what resource ussage would be scale -> most likly the a good candidate for a business model later: User/Objects, API Calls, ...)
* Resilience & SLA/SLOs: Make sure that you can define SLOs & SLAs. What are the correct ones, which are required, how to measure and manage them. How can the customer see them. How can he interact with you on them (e.g. get support, see the current status). How can we limit the impact of problems to the customer and to our own service? Not the complete plattform should be impacted by a problem in one part of the plattform. Furhter NFRs are central for scalability and sucess quality. And they are the key differentiator for Saas solutions, that are by definition limited in complexity and create value through scalability
* Security: Make the service public by default and secure them for this requirement.

### Important but can be implemented centrally latern: 
* Payment/Taxing (of the solution itself)

