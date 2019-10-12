# 20. Implement backends in Typescript

Date: 2019-10-12

## Status

Accepted

## Context

The backends can be implemented in many languages like typescript, which whould have the benefit that it is the same language as the frontend as well as beeing a typed language. It would also allow me to focus my developer skills on one language where I can become very good. Others include Golang, Python and Java. The advantage with golang is that it is very performant and has a great community and is strongly typed and a very limited language from a feature set which makes it easier to learn. Java is what is used in Germany within most enterprise setting and in the health area that is very intersting to me. Python is a very popular option especially in connection with machine learning but it is not strongly typed. Further the performance in AWS lambda currently best in python and nodejs over golang [part1](https://medium.com/the-theam-journey/benchmarking-aws-lambda-runtimes-in-2019-part-i-b1ee459a293d) and [part2](https://medium.com/the-theam-journey/benchmarking-aws-lambda-runtimes-in-2019-part-ii-50e796d3d11b).

## Decision

Implement backends in typescript.

## Consequences

I can focus on typescript and improve my skills in this language. I will need to keep an eye on the performance of the different languages in AWS lambda, and give that golang improves further I expect to take another look at it in 2020. Also I have to watchout for performance of more complex functions. 
