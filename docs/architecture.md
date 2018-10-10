---
id: architecture
title: Architecture
---

> Definition: Software architecture identifies the modules and their responsibilities, releationships between modules, patterns, technologies and system wide NFRs choices like security, scalability and fault tolerance.

I apply the Principles of an [Evolutionary Architecture - watch for more details -](https://www.youtube.com/watch?v=8bEsNT7jdC4&t=112s&index=57&list=WL) to handle *Change*: 

> An evolutionary architecture supports **incremental**, **guided change** as a first principle along **multiple dimensions**

## Practices

| Technical                     | Domain                        |
| ----------------------------- | ----------------------------- |
| Continous delivery            | Matches business capabilities |
| Support fast feedback         | Products over projects        |
| Appropriate coupling          | Cross functional teams        |
| Ports and Adapters            | Enable experimentation        |
| Automated fitness functions   | Decentralised governance      |
| Type 1 / 2 decisions          |
| Intentional data architecture |

Sources: [N26](https://www.youtube.com/watch?v=8bEsNT7jdC4&t=112s&index=57&list=WL) / [Netflix](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/15?src=clipshare) / [Zalando](https://github.com/denseidel/engineering-principles)

### Appropriate coupling

Means that we develop API first with [one identity](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/14?src=clipshare)/[api service per function with low coupling between apis](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/15?src=clipshare) 

### Type 1/2 Decisons 
Spend 80% of the time debating and aligning on Type 1 decisions. For Type 2 choose a path, experiement and iterate. [More >](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/23?src=clipshare)

### Data Architecture
["Without an intentional Data Architecture, Data becomes it's own monolith"](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/63?src=clipshare) - means to always build your own materialized view per api service (and a data loader that loads all the required data from the other services)

#### Automated Fitness fucntions
[Define Fitness Functions to act as your guide for architectural evolution](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/88?src=clipshare) especially for startegic topics: high impact & high change velocity.

> Fitness Function are the goal and quantitative measure to evaluate the guide change

Testing for ["First Principles"](https://medium.com/developers-writing/my-take-on-evolutionary-architecture-f761d45e75b9) that will be hard to correct in the long term and the negative impacts in production can only be monitored later when they stack up
  * Code Quality
  * Complexity 
  * Functionality: easier to test and interpret where the error is on unit level but in the end only relevant on the quality level of the solution
  * Quality - [Design the monitoring first / test should be runnable in production](http://benjiweber.co.uk/blog/2015/03/02/monitoring-check-smells/)

An example from [Netflix](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/83?src=clipsharse) and how to model this.

## Design

Start by modeling the **[domain(s) diagram](https://docs.google.com/drawings/d/1kwtMhXe-3YLrqlLa-MoE84U-lDr-k5Z6qtlWgCuvHkk/edit)**. Then map out the solution & [component](http://plantuml.com/component-diagram)\) and add notes on the 
* NFRs
* Patterns
* Technologies (see the [tech radar](techradar.md))

### Technology Selection

The [technology radar](techradar.md) allows you to stand on the shoulders of giants which reduce the tool search time and we don't make mistakes multiple times. 

* [https://zalando.github.io/tech-radar/](https://zalando.github.io/tech-radar/)
* [https://www.thoughtworks.com/de/radar](https://www.thoughtworks.com/de/radar)
* [CNCF Landscape](https://landscape.cncf.io/grouping=landscape)

Heuristic to do technology selection beyond the tech radars: Go to Github and do a simple search for the keyword e.g. CMS and sort by stars. Further you can filter the result for a specific language (e.g. JavaScript)