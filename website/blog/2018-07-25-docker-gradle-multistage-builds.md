---
title: Building Java Docker images with Gradle and Docker multistage builds
author: Den
authorURL: http://twitter.com/denseidel
authorFBID: 1440692838
---

Today I had the challange that I needed to build java images. Most of the examples I found where building the artefact on the host and then copying it into the image. I don't like this because it creates some dependencies on the host. Better is build the artefact in another docker container. I found the following [article](http://paulbakker.io/java/docker-gradle-multistage/). 

A dockerfile would look like: 

```yaml
FROM gradle:jdk8-alpine as builder

COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle build

FROM openjdk:8-jdk-alpine
EXPOSE 9080
COPY src/main/resources/api/zally-api.yaml /zalando-apis/zally-api.yaml
COPY --from=builder /home/gradle/src/build/libs/zally.jar /
CMD java -Dspring.profiles.active=dev -jar /zally.jar
```
