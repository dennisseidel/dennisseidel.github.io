---
id: index
title: Startup Engineering
---

Start by setup up the **product** as a **project** in Todoist, and create **Sections** for **Lean Startup/Business** and **Startup Engineering / Build**. Then follow the playbook describe below.

## Define Idea/Product

[Write down](https://www.youtube.com/watch?v=DOtCl5PU8F0) your **idea/product = hypothesis for growth** :

- **Problem**: Intial conditions/setting of the idea/product
- **Solution**: Experiement within this condition to grow qick
- **Insights**: Explanation why the experiement we try will be successful

This matches the solution architecture class where they also start by writing the [problem](https://www.linkedin.com/learning/software-architecture-foundations/requirements-gathering-problem-statements-and-user-stories?u=2108001).

[Examples](https://www.youtube.com/watch?v=DOtCl5PU8F0):

> <a href="https://www.linkedin.com/learning/software-architecture-foundations/requirements-gathering-problem-statements-and-user-stories?u=2108001"><img src="/img/problem-statement-architecture-perspective.png" width="60%"/></a>

> <a href="https://youtu.be/DOtCl5PU8F0?t=1400"><img src="/img/problem-statement-yc-wufoo.png" width="60%"/></a>

> <a href="https://youtu.be/DOtCl5PU8F0?t=1400"><img src="/img/problem-statement-yc-whoo-insight.png" width="60%"/></a>

An alternative pattern is to write the [press release](https://medium.com/@IndianaStyle/amazon-press-release-how-to-55d61188ecdd) like AWS e.g. [AppMesh](https://aws.amazon.com/app-mesh/).

## Initial user research

[Talk to users](https://www.youtube.com/watch?v=MT4Ig2uqjTc) to generate and validate your hypothesis. ([Q&A](https://www.youtube.com/watch?v=vqgnifnlLMI)).

Examples:

_All audiances:_

> 1. What is the hardest part about [doing this thing e.g. collaborating between students]?
> 2. Tell me about the last time you encountered that problem ...
> 3. Why was that hard?
> 4. What, if anything, have you done to solve the problem?
> 5. What don't you love about the solutions you've tried?

In the **Idea** stage try to find users with the problem start with: _friends, coworkers, intros, drop in person!, industry events._

In the **build prototype** stage find the _best customer fit_ by finding nuermical answers to 3 areas from the user:

> 1. Find numerical How much does this problem cost them? (Severity of Pain: ROI, Savings)
> 2. How frequent is this problem? (Daily Monthly)
> 3. How large is their buget? (Ability to Fix - Buget, Authority)

The best first customer overlaps in those 3 areas.

In the **launched** stage find _product market_ fit.

> Weekly survey of your existing customers and measure the "very disappoint", if this is more then 40% you reached product market fit.
>
> "How would you feel if you cloud no longer use XX?
>
> 1. Very disappointed
> 2. Somewhat disappointed
> 3. Not disappointed

Try to ask for the phonenumber in surveys, often the results are not self expanatory and it helps as some follow up questions to clarify some results. Never ask user for features - only for their problem.

> Important: Apply this principle everywhere e.g. talking to the board members that are the customers for a presentation. Or talking to customers of the data plattform.

## Product Design

Test your hyphosesis by [plan your mvp](https://www.youtube.com/watch?v=1hHMwLxN6EM). The most important part is to launch quickly and get an initial customer.

Example:

> Launch page (for a high tech product), rebranded product of the competition, or a first minimal web page without the complex parts.

[Write the user stories](https://www.linkedin.com/learning/software-architecture-foundations/requirements-gathering-problem-statements-and-user-stories?u=2108001) by again [talking to users](https://www.youtube.com/watch?v=MT4Ig2uqjTc) and describe **the work of the user (no yours or the computers) and generates actual value for the user (why)**. Then do [vertical slicing/narrowing with workflow isolation](https://www.linkedin.com/learning/software-architecture-foundations/narrowing-vertical-vs-horizontal-splitting?u=2108001) to refine to story to be at max 2 days of work while producing a valuable outcome.

Example:

> <a href="https://www.linkedin.com/learning/software-architecture-foundations/requirements-gathering-problem-statements-and-user-stories?u=2108001"><img src="/img/user-story-sample.png" width="60%"/></a>

Then use the ["inspect and adapt" loop (max 2 days)](https://www.linkedin.com/learning/software-architecture-foundations/what-s-the-job-modern-architects?u=2108001) to iterate on the design, implementation and the idea.

### Operationalize the experiment

- Identify and set [goals and kpis](https://www.youtube.com/watch?time_continue=97&v=lL6GdUHIBsM): Define your primary metric (one!) **revenue** or active users and your [secondary metrics](https://youtu.be/lL6GdUHIBsM?t=717). The goal should be _fast initial growth_, _time to sale should decrease_ and _exponential goals_. **Use the goal to prioritise time** and **identify what is your biggest obstacle to hit the growth rate**.
- Define how you [analyse](https://www.youtube.com/watch?v=LLerCc7MOQo):
  - [Funnel](https://youtu.be/LLerCc7MOQo?t=149)
  - Collect Data
  - 3 Metrics: sign ups per week, retention cohorts, Revenue
- Put this on a dashboard -> data driven team, communicate update to the stackholders
- 43 Minuite email
- don't obsess about tools, but prepare for change

Find the [metrics that fit your business model](https://www.youtube.com/watch?v=PTg3RZPXgLg): Enterprise, SaaS, Usage-based, Subscription, Transactional, Marketplace, E-Commerce, Advertising and Hardware.

## Implementation Design

[Indentify the agents in the system by using event storming and understanding the requirements/business](https://www.linkedin.com/learning/software-architecture-foundations/identifying-bounded-contexts-and-entities?u=2108001).

> [> Event Storming Template](https://www.draw.io/#G1P-QKaQRHFhe5sWsY2tQ4AlTResRbguIo)

**Example:**

> <div style="position:relative;height:0;padding-bottom:56.25%"><iframe width="640" height="360" src="https://www.linkedin.com/learning/embed/software-architecture-foundations/identifying-bounded-contexts-and-entities?claim=AQEhIz-D2Tn0LgAAAWx9KbpTXm-6U9fSScllC7QjDUTabSZAgGPsXyOCULiUpDpJjdRUW0o0094C3zzevvzAjQ9aIE_rM3DnqdUBP-OqH2bkDANcy0aLdqHQJeoFepyhQSZ3QpG97tt7_ulctZoIw7agJkMrE5sQWBsrNS4M-ptmSqcWGhVOtzE1nsKLB2CvAisBxFOF7kVwcN5vrK5_4AZGVkDpUVbqkaqX1U-cJBd_4DTOX8hPgO9yRtV2TX9jODQOpd6sT1fHNDbWCV-OMjCPlIezqQObZWbTGCwO9Fh_0Bf1evt-yccQxjJJeFvpzHg17EtjfCTSAwTswq5li-IwGUOcZOwTMY-gEXgdo162I6WgMpiREO35H9LesY1TT5VE8LWqgukrAFMKkxADhldnmkOyJQ3hD55tV-EY_AWfUznsGLvQb9KcLsuToN1Kt2CLTqIyCRtD-vT0_O6LV0oZ1oGX1EID6kk5DR4UosyovgAr6QFN-BoETgSahEEvHEQdqqF-OU6Ez8X5EGqBWLYOc7MgfoJb5WbG3Fdd3ZWBAbXu0qmtSp5RDCnDRrOAp4UfitzEQeub8jFr2YhqhogDM_VMyjgJheHlMT7KxENeL8kqkBSMof0V7xLttqzO1-VgU0cWc6nPB1QrrLs2-1xLJdVzFAeYcpXN36tD6tm8v5zz5sNa68_rwft49Af2PTsXlIoeBnvGNqwbLN_AQDMkuvd_dKdT_ju2UjKOz3kO" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" frameborder="0" style="position:absolute;width:100%;height:100%;left:0"></iframe></div><p><strong><a href="https://www.linkedin.com/learning/software-architecture-foundations/identifying-bounded-contexts-and-entities?trk=embed_lil" title="Identifying bounded contexts and entities">Identifying bounded contexts and entities</a></strong> from <strong><a href="https://www.linkedin.com/learning/software-architecture-foundations?trk=embed_lil" title="Learn how software architecture can help you build better software in a more agile way. Review the role of the software architect, key theories and concepts, and common architectural patterns.">Software Architecture Foundations</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/allen-holub?trk=embed_lil">Allen Holub</a></strong></p>

## Background

Inform yourself about **startup engineering** and **product design**:

- [Startupschool](https://www.startupschool.org)
- [Startup Engineering](https://gist.github.com/dideler/5796745)
- [Product Design - Udacity/Google](https://blog.prototypr.io/product-design-by-google-part-1-b14e55688b33)

**Event storming**:

- [Event Storming](https://github.com/mariuszgil/awesome-eventstorming)
