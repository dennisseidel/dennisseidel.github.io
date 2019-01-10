# 1. Document with README.md and Docusaurus 

* Status: accepted
* Date: 2018-09-26 <!-- optional -->

## Context and Problem Statement

Projects should have a documentation with minimal overhead and in SCM/Github. Gitbook is now close source for the new features, what should replace this as the standard documentation tool. 

## Decision Drivers 

* Usage Simplicity
* Can be manged in SCM
* Can be hosted on Github
* Should be using my current toolstack

## Considered Options

* Gitbook.io (new)
* VuePress
* Docusaurus
* Getsby
* README.md

## Decision Outcome

Chosen option: "Docusaurus" and "README.md", because they were simple to setup and fits with the current toolstack (uses markdown and react) further it is supported by Facebook. Further README.md has been added as it is important to document all relevent components as near to the code as possibile.

Positive Consequences: 
* I can host my blog and all my documentation in one page. 
* I can extend the tool if needed because it used my current Toolstack (React)
* Updates are as simple as writing and commiting a markdown file.
* There are multiple developer from facebook maintaining the project.

Negative consequences: 
* Search is currently not possible maybe use Google for it? 

## Pros and Cons of the Options 

### [Gitbook.io](https://github.com/GitbookIO/gitbook)

* Good, because because the open source version still uses markdown
* Good, because there is an ecosystem around then solution.
* Bad, because it is no longer maintained as gitbook is developing a SaaS based closed source version (with is not portable and extendable)

### [VuePress](https://vuepress.vuejs.org/)


* Good, because it is extendible and should be simple to use
* Bad, because it uses a new toolstack (Vue)
* Bad, because I am not sure if it can be hosted on github pages

### [Docusaurus](https://docusaurus.io/)


* Good, because it is simple to host and maintain
* Good, because it let's me write in simple markdown
* Good, because it is based on my current tool stack
* Good, because with Facebook it as a powerfull maintainer
* Bad, because the UI is not easy extended
* Bad, because the search functionality requires a paid service if one is not an open source project

### [Getsby](https://www.gatsbyjs.org/)


* Good, because it is based on my current toolstack (React)
* Good, because it can also support other products like static landing pages
* Good, because it can be hosted on Github Pages
* Good, because it has a large community
* Bad, because it has not very good templates and therefore requires an UI implementation with some effort

### [README.md](https://github.com/zalando-incubator/new-project)
* Good, because it is close to the code. 
* Good, because it is the most important piece of documentation for GitProjects.
* Good, can be integrated with other documentation options.
* Bad, because it does not fit non code situation

## Links <!-- optional -->

* [Zalando new-project template](https://github.com/zalando-incubator/new-project)
