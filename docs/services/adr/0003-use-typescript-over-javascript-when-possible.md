# 3. Use Typescript over Javascript when possible

Date: 2019-04-22

## Status

Accepted

## Context

I have to decided if I use the fast and more flexible Javscript or Typescript. While the flexibility of Javascript is good it is "a bad fit for large and complex codebases" [based on the experience of Guido van Rossum](https://www.techrepublic.com/article/the-creator-of-python-on-how-the-programming-language-is-learning-from-typescript/).

## Decision

I choose to use Typescript when ever possible but use a `tsconfig` with `allowJS` and `checkJS` set to true, to get the full typescript experience still with your regular JavScript.

## Consequences

This will add some [overhead](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b) but at the same time give me more structure and make me a better programmer by forcing best pratices and clean code. Further it will also force me to deviate from some of the community implementations, I will have to check if I am searching for a typescript specific solution for too long and then pull the plug and make use of the allowJS in the tsconfig.