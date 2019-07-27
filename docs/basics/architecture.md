---
id: architecture
title: Architecture
---

This section describes [what is software architecture](#software-architecture). The decision I made, you can find in each section under **ADR** in the sidebar.

Working with software architecture means applying [best pratices](#practices), use tools to [design and select a technology](#design) and document [decisions](#documentation-adrs). Concret Processes are described in the [Runbook/Playbook](#Runbook--Playbook).

## Decisions

<!-- adrlog -->

- [ADR-0001](adr/0001-record-architecture-decisions) - Record architecture decisions
- [ADR-0002](adr/0002-use-docusaurus-for-documentation) - Use Docusaurus for Documentation
- [ADR-0003](adr/0003-one-adr-for-each-repository-topic) - One ADR for each Repository/Topic

<!-- adrlogstop -->

## What is Software Architecture?

> Software architecture **identifies the modules and their responsibilities**, **releationships between modules**, **patterns**, **technologies** and **system wide NFR choices** like security, scalability and fault tolerance.

I apply the Principles of an [Evolutionary Architecture - watch for more details -](https://www.youtube.com/watch?v=8bEsNT7jdC4&t=112s&index=57&list=WL) to handle _Change_:

> An evolutionary architecture supports **incremental**, **guided change** as a first principle along **multiple dimensions**

## Practices

| Technical                     | Domain                        |
| ----------------------------- | ----------------------------- |
| Continous delivery            | Matches business capabilities |
| Support fast feedback         | Products over projects        |
| Appropriate coupling          | Cross functional teams        |
| Ports and Adapters            | Enable experimentation        |
| Automated fitness functions   | Decentralised governance      |
| Type 1 / 2 decisions          |                               |
| Intentional data architecture |                               |

Sources: [N26](https://www.youtube.com/watch?v=8bEsNT7jdC4&t=112s&index=57&list=WL) / [Netflix](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/15?src=clipshare) / [Zalando](https://github.com/denseidel/engineering-principles)

### Appropriate coupling

Means that we develop API first with [one identity](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/14?src=clipshare)/[api service per function with low coupling between apis](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/15?src=clipshare)

### Type 1/2 Decisons

Spend 80% of the time debating and aligning on Type 1 decisions. For Type 2 choose a path, experiement and iterate. [>>](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/23?src=clipshare)

### Data Architecture

["Without an intentional Data Architecture, Data becomes it's own monolith"](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/63?src=clipshare) - means to always build your own materialized view per api service (and a data loader that loads all the required data from the other services)

#### Automated Fitness fucntions

[Define Fitness Functions to act as your guide for architectural evolution](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/88?src=clipshare) especially for startegic topics: high impact & high change velocity.

> Fitness Function are the goal and quantitative measure to evaluate the guide change

Testing for ["First Principles"](https://medium.com/developers-writing/my-take-on-evolutionary-architecture-f761d45e75b9) that will be hard to correct in the long term and the negative impacts in production can only be monitored later when they stack up

- Code Quality
- Complexity
- Functionality: easier to test and interpret where the error is on unit level but in the end only relevant on the quality level of the solution
- Quality - [Design the monitoring first / test should be runnable in production](http://benjiweber.co.uk/blog/2015/03/02/monitoring-check-smells/)

An example from [Netflix](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/83?src=clipsharse) and how to model this.

## Design

Start by modeling the **[domain(s) diagram](https://docs.google.com/drawings/d/1kwtMhXe-3YLrqlLa-MoE84U-lDr-k5Z6qtlWgCuvHkk/edit)**. Then map out the solution & [component](http://plantuml.com/component-diagram)\) and add notes on the

- NFRs
- Patterns
- Technologies (see the [tech radar](techradar.md))

Design the use case flow with a sequence diagram.

### Technology Selection

The [technology radar](techradar.md) allows you to stand on the shoulders of giants which reduce the tool search time and we don't make mistakes multiple times.

Heuristic to do technology selection beyond the tech radars: Go to Github and do a simple search for the keyword e.g. CMS and sort by stars. Further you can filter the result for a specific language (e.g. JavaScript)

#### Create your own technology radar

Follow the instructions on the [Thoughtworks Website](https://www.thoughtworks.com/radar/how-to-byor). If your GoogleSheets Url does not work use csv file as a workaround by adding `/gviz/tq?tqx=out:csv` to the end of your Google Sheet url e.g. `https://docs.google.com/spreadsheets/d/1Z8G8PW6HLjmA4fbqhe1hxlQgEVN7802t7Nen8HjVHFY/gviz/tq?tqx=out:csv`.

## Documentation / ADRs

Architectural decision should be documented in a [light weight architecture decision record](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records) as proposed by the ThoughtWorks Tech Radar. More insights on why can be found from the [IBM Watson Team](https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=497744). An overview of the ADR ecosystem is provided on [github](https://adr.github.io/). I use the most popular tool [adr-tools](https://github.com/npryce/adr-tools).

```bash
brew install adr-tools
npm i -g adr-log
# init in root of project / decision context
adr init adr
```

### Create a new ADR

```bash
adr new Implement as Unix shell scripts
# write the ADR
# create a updated TOC list
adr-log -d adr
# (If you use docusarus you have to add `adr/` in front of the path and remove `.md` e.g. - [ADR-0001](adr/0001-record-architecture-decisions) - Record architecture decisions )
```

Write ADRs in [Y-Statement Format](https://adr.github.io/#sustainable-architectural-decisions): `In the context of <use case/user story u>, facing <concern c> we decided for <option o> to achieve <quality q>, accepting <downside d>.`

### Replace an ADR

```bash
 adr new -s 9 Use Rust for performance-critical functionality
```

## [Playbook](https://wa.aws.amazon.com/wat.concept.playbook.en.html)

Definition Runbook:

- **Problem/Sitation Description**: e.g. UnauthorizedAccess. An API was invoked from an IP address of an unusual network.
- **Data gathered for planning/troubleshooting**:
- **Steps to troubleshoot and fix**:
- **Urgency category**:
- **Escalation path**:

**Situation Description**: `OpenArchitectureQuestion:SystemDesign/InterfaceGranularity` - this finding informs you that a system designs a new interface. This interface has not been implemented before.

**Data to gather for processing**:

- Business Requirements: Write down the customer expectation. What do we want to achieve. What is the journey.
- External Functionalities: Which backend systems are involved (e.g. a service or an external api): Those are external functionalities I consume.
- Internal functionalities: Which functions do I provide through my interfaces?
-

### `Testing and creating poc for new technology`

#### Situation/Problem

`OpenArchitectureQuestion:TechnologyEvaluation/*` - I am ask to test a new technology e.g. evaluate the use of AWS EKS / Aurora. This might be driven from the business - with a requirement to solve a problem or more often currently we are ask by the IT to evaluate a technology (e.g. migrate the data platform to the cloud).

#### Data gathered for planning/troubleshooting

- _Business Requirements:_ Write down what are the business requirements that are implacted by this technology. E.g. what application run currently on the plattform? What are their requirements? How could the technology imporve them? What application are currently not running on the plattform but would benefit from the plattform (technology)? For this contact the IT teams but also directly the business units to get feedback from them. The result: **Hypothesis and Requirements and measurable KPIs** from the business. TODO: Document/Template?
- _Technology Information:_ Learn and document hands on (udemy, linkedin learning/ tutorials) about the technology before implementing any PoC. The experience is that this takes long and leads to sub optimal results (e.g. I paired for a day with a colleage but we could not set up EKS because we lack experience with cloud formation as well as eks). Better is to take 1 day to learn or do a tutorial so one understands how the technology should be use. Eventhough one is not as fast to start, overall one reduces time wasted and the solution quality. In this stage pairing value is limited, it makes more sense to split up and e.g. one check out eks and the other cloudformation. The result should be a **good understanding and handson description how to use the technology**. TODO: Document/Template?
  Important for this stage is that we should work in an isolated but unrestricted environment to increase the learning speed. A harden environment like on a shared multi tenant account decreases learning speed significant because often interaction with the platform team are required to get access to permissions for new products.

Gather data also by informing others (who? architecture board) what you are going to do.

#### Steps to Troubleshoot and Fix

1. Design the PoC based on the hypothesis (following the lessons learned and the technologies in this handbook)
2. Gather feedback on the first PoC Design
3. Implement a PoC (following the cloud first, MVP principles to gather speed). This should be done in the managed/restricted account. Therefore it is important to pair with someone from the platform team to fix issues fast e.g. new permissions. All should be documented into a _tutorial for this technology (what is it? when to (not) use it? how to use it?_ as well as what is require in the account. This is later the foundation for automation the access and management of the technology.
4. Validate the Hypothesis with the business and the IT (e.g. based on the AWS Well Architected Framework)
5. Iterate
6. Final Evaluation (TODO: Template for ADR / Document the decision on the technology radar/ As well as a first autoamtion/operation concept)

#### Urgency category

normal - given the situation the urgancy can increase, but runbooks steps should never be skipt (e.g. learning about the technology first).

#### Escalation path

?
