---
id: architecture
title: Architecture
---

Architecture should be designed for change, and you must never make comproises that impact architecture goals negatively as architecture is by definition hard to change.

> An evolutionary architecture supports **incremental**, **guided change** as a first principle along **multiple dimensions**

## Principles

[![](/img/principles-of-evolutionary-architecture.png)](https://www.youtube.com/watch?v=8bEsNT7jdC4&t=112s&index=57&list=WL)

## Practices

* **API First & One Identity** - [one identity](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/14?src=clipshare)/ [api service per function with low coupling between apis](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/15?src=clipshare)
* **Type 1/2 Decisons** - Identify [Type 1 and Type 2 decisions](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/23?src=clipshare); Spend 80% of the time debating and aligning on Type 1 decisions; For Type 2 choose a path, experiement and iterate
  * [SaaS](saas.md) vs Containers ([Overview Graph](bootstrap.md))
  * Port & Adapter Pattern
  * Shared Libraries & Communication
  * Syncronous vs Asynchronous 
  * Data Architecture - ["Without an intentional Data Architecture, Data becomes it's own monolith"](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/63?src=clipshare)
* **Evolution** -  [Define Fitness Functions to act as your guide for architectural evolution](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/88?src=clipshare)
  * Important if topic is strategic: high impact & high change velocity
  * [Netflix](https://www.slideshare.net/SuudhanRangarajan/netflix-play-api-why-we-built-an-evolutionary-architecture/83?src=clipsharse)


### Other Sources: 
* [Zalando's Engineering Principles](https://github.com/zalando/engineering-principles)


## Fitness Functions

> Fitness Function are the goal and quantitative measure to evaluate the guide change

* Testing for ["First Principles"](https://medium.com/developers-writing/my-take-on-evolutionary-architecture-f761d45e75b9) that will be hard to correct in the long term and the negative impacts in production can only be monitored later when they stack up
  * Code Quality
  * Complexity 
  * Functionality: easier to test and interpret where the error is on unit level but in the end only relevant on the quality level of the solution
  * Quality - [Design the monitoring first / test should be runnable in production]([http://benjiweber.co.uk/blog/2015/03/02/monitoring-check-smells/)

## Draw Architecture Diagramms

* solution \(process & component\)
* implementation / technology \(frameworks\)
* production
* evolution
* [domain diagram](https://docs.google.com/drawings/d/1kwtMhXe-3YLrqlLa-MoE84U-lDr-k5Z6qtlWgCuvHkk/edit)

Tool: [plantuml](http://plantuml.com)

## Tech Radars

The technology radar allows us to stand on the shoulders of giants which reduce the tool search time and we don't make mistakes multiple times. 

* [https://zalando.github.io/tech-radar/](https://zalando.github.io/tech-radar/)
* [https://www.thoughtworks.com/de/radar](https://www.thoughtworks.com/de/radar)