---
id: solutionarchitecture
title: PLAN: Solution Architecture
---

After you clarified your idea in the [startup engineering phase](../business/_index_startup-engineering.md) and you have your **user stories & problems** and your map out the business with an **[event storming map](/docs/business/index.html#implementation-design)** you begin with the solution design.

## Enabelment about good design

Good architecture cover the areas **simplicity**, **non functional requirement** and **system design (for change)**. And read [software architecture is overrated, clean and simple design is underrated](https://web.archive.org/web/20190920073642/https://blog.pragmaticengineer.com/software-architecture-is-overrated/) first!

### Simplicity

- [Rails Conf 2012 Keynote: Simplicity Matters by Rich Hickey](https://www.youtube.com/watch?v=rI8tNMsozo0): something know, inside the mental capability, limited (less 7), not connected (because all needs to be consider when fixed or changed), focus on software quality & change over programmer convinience, [making things easier](https://youtu.be/rI8tNMsozo0?t=1056) by making the domain simpler.
- [Three Flaws in Software Design](https://www.youtube.com/watch?v=JOAq3YN45YE) / [Part2](https://www.youtube.com/watch?v=eCg_VoFW46s) / [Part3](https://www.youtube.com/watch?v=0wxyOng0-14) / https://www.codesimplicity.com/ https://dev.to/akotek/thoughts-on-code-simplicity-by-max-kanat-alexander-22a1 / https://www.youtube.com/watch?v=7TmQWkSCMKE / [Code Simplicity book](https://drive.google.com/open?id=11DZM6_Kkd6OaK7y7JlU72HafTs6pAQfl) / [the law of simplicity](https://drive.google.com/open?id=1dkz_zcJhOrr-sD-c7gb8TIo9mZl4Cc3y)
- [Redis Code Example](https://www.youtube.com/watch?v=RaIwBagADVM)
- [Clean Code](https://herbertograca.com/dev-theory-articles-listing/)

### Non functional requirements

Get the basics about **Operation Excellence, Security, Reliability, Performance Efficiency and Cost Optimization** by read about the well architected framework in this [paper](https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf), watch a [lecture](https://youtu.be/gjNPpjYNiow?t=52) and do the [lab](https://wellarchitectedlabs.com/).

- **Operational Excellence**: The ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures.
- **Security**: The ability to protect information, systems, and assets, while delivering business value through risk assessments and mitigation strategies.
- **Reliability**: The ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues.
- **Performance Efficiency**: The ability to use computing resources efficiently to meet system requirements, and to maintain that efficiency as demand changes and technologies evolve.
- **Cost Optimization**: The ability to run systems to deliver business value at the lowest price point.

### Design for change & autonomy

[Design your software (for change)](https://www.youtube.com/watch?v=D4z5TEOqutY) (the things that are hard to change) through [software design patterns](https://www.linkedin.com/learning/software-architecture-foundations/design-patterns?u=2108001).

- https://medium.com/the-software-architecture-chronicles/ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together-f2590c0aa7f6
- https://herbertograca.com/2017/09/14/ports-adapters-architecture/

## Make architecture visible by setting up checklists

Then setup the checklist [well architected framework](https://console.aws.amazon.com/wellarchitected/home?region=us-east-1#/workload/da1bd3b21263bca687f3d969fffcfc28/questions) and track your application. Also setup your [architecure decisions / adrs](#), [tech-radars](#) and process like [Runbook/Playbook](#Runbook--Playbook).

Think about **automating them by using architectural [Fitness Functions](https://www.thoughtworks.com/de/insights/blog/fitness-function-driven-development)** (e.g. Komplexity Messures).

Example:

> <img src="/img/well-architected-tool.png"/>

> Architectural decision should be documented in a [light weight architecture decision record](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records) as proposed by the ThoughtWorks Tech Radar. More insights on why can be found from the [IBM Watson Team](https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=497744). An overview of the ADR ecosystem is provided on [github](https://adr.github.io/). I use the most popular tool [adr-tools](https://github.com/npryce/adr-tools). Write ADRs in [Y-Statement Format](https://adr.github.io/#sustainable-architectural-decisions): `In the context of <use case/user story u>, facing <concern c> we decided for <option o> to achieve <quality q>, accepting <downside d>.`

```bash
brew install adr-tools
npm i -g adr-log
# init in root of project / decision context
adr init adr


# create a new ADR
adr new Implement as Unix shell scripts
# write the ADR
# create a updated TOC list
adr-log -d adr
# (If you use docusarus you have to add `adr/` in front of the path and remove `.md` e.g. - [ADR-0001](adr/0001-record-architecture-decisions) - Record architecture decisions )

# replace an adr
adr new -s 9 Use Rust for performance-critical functionality
```

> <img src="/img/tech-radar.png" />

> Runbook/Playbook tbd - show picture of how to add them to git repo

> Automated fitness function: check a thoughworks [blogpost](https://www.thoughtworks.com/de/insights/blog/fitness-function-driven-development).

## Decompose Hypothesis & Business model into Service / Encapsulation

Always **understand the business first** by at least heaving an **[event storming map](../business/_index_startup-engineering.md)**. From there decompose the different contexts/services.

To move fast one needs to be able to focus on the work and not coordination. Therefore it is important that the solution is decomposed into components that are manageble by a "pizza sized team". This means:

> Services should be decomposed along things that don't have dependencies to each other (e.g. independent end-2-end processes, independent data flow) to reduce communication. [Explore DDD Boundaries](https://learn-particular.thinkific.com/courses/take/explore-ddd-boundaries/lessons/4836638-service-boundaries) and find the bounded context([The Art of Discovering Bounded Contexts](https://www.youtube.com/watch?v=ez9GWESKG4I)).

Otherwise even if the interfaces are kept the same if the business logic changes or a new value is add the other service need to react to this (a generic ignore unknown might be wrong - e.g. if the name of a product just change, the I want the other service still behave the same - e.g. giving the correct price for the product not a generic one or an error).

> Those Things are the verticals e.g. kranken, sach, leben or even individual products. Where one vertical own the functionality end 2 end from the frontend component (react) to the database. If the vertical gets to big it make sense to decompose it into smaller idependent verticals e.g. from kranken to the different kranken products.

This is described in the [Self Contained System Architecture (SCSA)](https://scs-architecture.org/index.htmls).

Example:

> 1. Identify encapsulated functionality (without dataflow / communication) from the event storming map. These are often business domains (life, motor, health) as they don't communicate with each other rather then objects (contracts, parties, documents) as functionality most often will require a data flow across those objects. [Source](https://www.youtube.com/watch?v=0TYbHVc2yWI) / [Source](https://learn-particular.thinkific.com/courses/take/explore-ddd-boundaries/lessons/4836638-service-boundaries).

1. Sketch down the components in a [c4 digramm](https://c4model.com/) & how they interact at runtime with a [sequence diagram](http://plantuml.com/sequence-diagram). You should use [c4 for plantuml](https://github.com/RicardoNiepel/C4-PlantUML) or use the native [aws diagram](https://github.com/awslabs/aws-icons-for-plantuml).

- (Define the SCSs and their functional and non functional requirements)
- create technology architecture map ([draw.io template](https://www.draw.io/#G1xFliNe2GF3Z79eeZheFbrTdEle95ucmd))
- Define the sequence and functions required (sequence diagram?)
- Integration with the enterpise & system environment

Examples:

> Example - Event Storming Map with Bounded Context identitfied

> Example C4 Diagramm tbd

---

_TODO: How to handle aggregated views, for analytics -> data lake -> for admins/clerks?_ Composed UIs or data lakes or seperate data services - [more info on the concept](https://docs.google.com/document/d/1OHJGHMeRMPHHYL89bw-ADxp8wfFZ071IjWnqxpx8kE0/edit).

## Background

- https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf
- https://www.youtube.com/watch?v=DngAZyWMGR0
- https://www.youtube.com/watch?v=ObuL8C1QtF4
- [Solution Architect](https://www.youtube.com/watch?v=ObuL8C1QtF4) / [Lead Engineer](https://www.youtube.com/watch?v=iLS6NXMXtLI)
- [DDD Intro](https://www.youtube.com/watch?v=lUCLFOISuXk)
