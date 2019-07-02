# 15. Use web over native for UIs

Date: 2019-03-10

## Status

Accepted

## Context

When building UIs we need to decide if we build them as native apps for each devices (iOS, Android, OSX, Windows, Linux) or one progressive web app.

## Decision

We use progressive web apps for our UI given the don't profit significantly form native features e.g. sensors or location.

## Consequences

This allows us to build once and run everywhere as well as make the [app searchable through the internet instead of depending on the app store which is most of the time hard to promote](https://www.atrium.co/blog/founders-should-build-website-not-mobile-app/).
