---
id: softwareengineering
title: Software Engineering
---

Software Engineering is craftsmanship - that applies independent of context: Good sotware development principles should be used coding frontends as well as coding backends. 

> Prerequisit: Get started by understanding how to design programs. I suggest taking the [Design of Computer Programs](https://classroom.udacity.com/courses/cs212/lessons/48688918/concepts/486889130923) Course by Peter Norvig. 


## Lessons Learned

* You should not require complex design documents and diagrams otherwise it is to complex
* [Writing code that isn't needed](https://www.youtube.com/watch?v=JOAq3YN45YE)
* [Not making the code easy to change](https://www.youtube.com/watch?v=eCg_VoFW46s)
* [Being to generic](https://www.youtube.com/watch?v=0wxyOng0-14)
* [Incremental Development & Design](https://www.youtube.com/watch?v=fjpkPe6-580)
* [Any time you find yourself stopping to think, something is wrong.](https://www.codesimplicity.com/post/the-secret-of-fast-programming-stop-thinking/) E.g. The most common reason developers stop to think is that they did not fully understand some word or symbol. **What ever I do, focus on reaching the goal, and check if it is something I want to learn - then deep dive and learn it while doing (less frameworks more foundations).** 
* Ecapsulation/Isolation of components by design services for specific transactional boundaries/context (orderService with all data about orders, customerService with all data about customer, shippingServices with all data relevant to shipping including customerId, orderId it does not need about all customer and order data, but only about the location and the product weight and as a result it creates an event "shiped" with orderId, customerId, shippingId and the relevant info for this event like shippingdate, shippingadress) and not sharing business data but only ids with an EDA [Link](https://www.youtube.com/watch?v=0TYbHVc2yWI)

## [System Design](https://github.com/donnemartin/system-design-primer/blob/master/README.md)

Summaries of various system design topics, including pros and cons. Everything is a trade-off.

![Summary](https://camo.githubusercontent.com/14f76dab28dfbfa12ea6b02c6bd0ec726fc17306/687474703a2f2f692e696d6775722e636f6d2f6a7255424146372e706e67)

## Clean Code

CleanCode Rules for [Python](https://github.com/d10l/clean-code-python) / [Typescript](https://github.com/d10l/clean-code-typescript) or [Javascript](https://github.com/d10l/clean-code-javascript) / [go](https://github.com/d10l/go-clean-arch).

If you have the time read the [Clean Code Book](https://www.amazon.de/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)


# Testing

Be efficient and test the interfaces that a customer (can be another developer) uses. 

| Component |  Testing   |                                                                                                                                        Resources |
| --------- | :--------: | -----------------------------------------------------------------------------------------------------------------------------------------------: |
| UI        | end 2 end  | [cypress](https://www.cypress.io/how-it-works/), [howto](https://medium.com/@darioghilardi/end-to-end-testing-on-a-react-redux-app-10f5a26f2f61) |
| Lib       |    unit    |                                                                                                                                                  |
| Backend   | unit / e2e |                                                                                                                                                  |

## Algorithms

Algorithms are an important part of a program. While often clean code is more important than the selection of the algorithm, problem like scaling make algorithms essential. As a n intro I suggest [Basics e.g. Complexity in python](https://www.youtube.com/watch?v=p65AHm9MX80) or taking the [Intro to Data Structures and Algorithms](https://eu.udacity.com/course/data-structures-and-algorithms-in-python--ud513) course by Google.

TODO: https://todoist.com/app?lang=en#task%2F3160384487

## Resilient Software Design

* https://jaxenter.de/unkaputtbar-einfuehrung-resilient-software-design-15119