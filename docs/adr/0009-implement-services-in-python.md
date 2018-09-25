---
id: adr9
title: 9. Implement services in Python 
---

* Status: accepted
* Date: 2018-09-25 <!-- optional -->

## Context and Problem Statement

There are many option to implement backends Java, NodeJS, Python, Scala/Akka and Go.

## Decision Drivers <!-- optional -->

* Learning the right skills
* Development Speed
* Market
* Ecosystem
* Performance
* Extensibility & Maintainability

## Considered Options

* Python
* NodeJS
* Java

## Decision Outcome

Chosen option: "Python", because it fits my goal of focusing on automtion & intelligence best as well as the general pros and cons.

## Pros and Cons of the Options <!-- optional -->

### Python

* Good, because of the great integration with machine learning.
* Good, because of the great ecosystem (but some packages are not very well described compared to nodejs).
* Good, because I learn the basic skills (postgres, sql ...)
* Good, because it is very extensible.
* Good, because I learn the foundational skills like code structure.
* Good, because it is also use for DevOps.
* Bad, because of slower developer speed compaired to strapi. 
* Bad, because of the slower performance. 
* Bad, because it is not in the standard stack of my current employer.

### NodeJS

* Good, because it is Javascript which I need in the frontend anyway.
* Good, because of a large ecosystem.
* Good, because I already have some experience. 
* Good, because of a very good performance. 
* Good, because I has a great headless cms with [strapi](https://github.com/strapi/strapi).
* Bad, because strapi is currently still under heavy development. 
* Bad, because of the worse integration with machine learning. 

### Java

* Good, because of a great ecosystem.
* Good, because of great performance.
* Bad, because worse integration with machine learning.
* Bad, because of slower developer speed.
* Bad, because of higher complexity. 
* Bad, because I have not some much experience with Java. 