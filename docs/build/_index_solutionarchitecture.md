---
id: solutionarchitecture
title: PLAN: Solution Architecture
---

__Input:__ Requirements & Hypothesis from a Business Model Canvas

[Solution Architect](https://www.youtube.com/watch?v=zB9WuYE1REI) / [Lead Engineer](https://www.youtube.com/watch?v=iLS6NXMXtLI) maps the [requirements and business hypothesis for the MVP](#seeTheDocumentFromTheBusinessSection) to the technology (from the platform) keeping the long term goal (e.g. scalability, enterpise tech stack - tech radar) in mind. Further tasks include building a team that owns the solution, communicating the solution ([workload on p.2](https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf)) to the team.  The goal is to increase the solution quality  (measured by the customer satisfaction) by 1.) chosing the right technologies and architecture implementing the hypothesis and 2.) increase the speed of the solution/workload team (short and long term) as well as the enterprise speed overall. This includes 3 important KPIs:

- Functional(ity) Requirements: Can the technology and architecture perform the required functionality?
- Non-Functional Requirements: Those should be specified in fitness functionals two important ones are:
  - Autonomy: How autonomous are the teams and their services and the components end 2 end. This has a major impact on long term speed of the enterprise and individual team.
  - Complexity & Evolability: Intercomponent vs Intracomponent complexity

## Decompose Hypothesis & Business model into Service / Encapsulation

### Understand the business

I start understanding the requirements by doing [> Event Storming](https://www.draw.io/#G1P-QKaQRHFhe5sWsY2tQ4AlTResRbguIo) with the business. and make sure that the business decomposition is right.

__RESULT:__ Event Storming Map with Events & Commands & Users & Policies

### Decompose into Contexts (Services)

To move fast one needs to be able to focus on the work and not coordination. Therefore it is important that the solution is decomposed into components that are manageble by a "pizza sized team". This means:

> Services should be decomposed along things that don't have dependencies to each other (e.g. processes, data flow). 

Otherwise even if the interfaces are kept the same if the business logic changes or a new value is add the other service need to react to this (a generic ignore unknown might be wrong - e.g. if the name of a product just change, the I want the other service still behave the same - e.g. giving the correct price for the product not a generic one or an error).

> Those Things are the verticals e.g. kranken, sach, leben or even individual products. Where one vertical own the functionality end 2 end from the frontend component (react) to the database. If the vertical gets to big it make sense to decompose it into smaller idependent verticals e.g. from kranken to the different kranken products.

This is described in the [Self Contained System Architecture (SCSA)](https://scs-architecture.org/index.htmls).

---
__TODO:__ Integrate this part 
The goal is to identify components that have independent dataflows and end to end functionality so one can reduce communication between functionality: Do it along the DDD domains: [Explore DDD Boundaries](https://learn-particular.thinkific.com/courses/take/explore-ddd-boundaries/lessons/4836638-service-boundaries) / [DDD](https://github.com/heynickc/awesome-ddd).

1. Identify encapsulated functionality (without dataflow / communication) by create a lean diagram with a domain diagram \(events, commands, actors, aggregates\). These are often business domains (life, motor, health) as they don't communicate with each other rather then objects (contracts, parties, documents) as functionality most often will require a data flow across those objects. [Source](https://www.youtube.com/watch?v=0TYbHVc2yWI) / [Source](https://learn-particular.thinkific.com/courses/take/explore-ddd-boundaries/lessons/4836638-service-boundaries).
2. Sketch down the components in a first deployment diagram & how they interact at runtime with a [sequence diagram](http://plantuml.com/sequence-diagram).

---


_TODO: How to handle aggregated views, for analytics -> data lake -> for admins/clerks?_ Composed UIs or data lakes or seperate data services - [more info on the concept](https://docs.google.com/document/d/1OHJGHMeRMPHHYL89bw-ADxp8wfFZ071IjWnqxpx8kE0/edit).


__RESULT:__ Add aggregates ([DDD Intro](https://www.youtube.com/watch?v=lUCLFOISuXk)) and bounded context([The Art of Discovering Bounded Contexts](https://www.youtube.com/watch?v=ez9GWESKG4I)) to the event storming map.

## Create Technical Solution/Workload Specification

__Input:__ Event storming map including the bounded context/SCSs
- (Define the SCSs and their functional and non functional requirements)
- create technology architecture map ([draw.io template](https://www.draw.io/#G1xFliNe2GF3Z79eeZheFbrTdEle95ucmd))
- Define the sequence and functions required (sequence diagram?)
- Integration with the enterpise & system environment

### Create Technology Architecture for each SCS/workload

Based on simple diagrams I sketch the deployment of the architecture unsign simple forms provided by the platform (e.g. [draw.io](https://www.draw.io/)). In this map add for each component the tech stack (Products, Standards, Databases) and architectural design patterns (Cloud & Integration) and track these architectural decisions.

### Setup the architectural guidelines

I setup a architecure dashboard including the [architectural best practices](https://aws.amazon.com/de/architecture/well-architected/). I use a tool like the [AWS Well architected](https://aws.amazon.com/well-architected-tool/) or [security belt](https://github.com/otto-de/security-belt). Depending on the product I include:

#### Basic architectural best practices

- __Operational Excellence__: The ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures.
- __Security__: The ability to protect information, systems, and assets, while delivering business value through risk assessments and mitigation strategies.
- __Reliability__: The ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues.
- __Performance Efficiency__: The ability to use computing resources efficiently to meet system requirements, and to maintain that efficiency as demand changes and technologies evolve.
- __Cost Optimization__: The ability to run systems to deliver business value at the lowest price point.

#### Things that are hard to change later

- internationalization.

#### Architectural Fitness Functions

(e.g. Komplexity Messures).

#### Enterpise guidelines

(e.g. tech stack aligment, it strategy and landscape (eam) fit)
