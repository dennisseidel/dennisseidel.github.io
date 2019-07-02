---
id: buildfrontend
title: DO: Build Frontend Inteface
---

The frontend section is seprated into **`ui` component section** of a self contained system that is provided by the service. While the **frontend interface section** combines those components into a user experience. In this section we focus on combining and customizing the components into a frontend interface.

## PLAN: Product Requirement Documentation, User Stories

Create a one pager for the [product requirement documentation - including the user interaction and design](https://web.archive.org/web/20190422164155/https://www.atlassian.com/agile/product-management/requirements) - [TEMPLATE](https://docs.google.com/document/d/1-kKH6L1eHzGRNX_59DEK1D-u7TPns79OVBOkbtdZvsA/edit#).

## DO: Create wireframe or sketch

- For the User Interaction & Design [create content structure & components](https://developers.google.com/web/fundamentals/codelabs/your-first-multi-screen-site/#create_your_content_and_structure).
- Use [Figma](https://web.archive.org/web/20190702182848/https://blog.nicolesaidy.com/how-to-streamline-your-ui-ux-workflow-with-figma-b72c30596435?gi=63b99c4f1c0c) or sketches on paper/ipad for mocking & design a first wireframe.

## DO: Build first prototype

> Sample Project: [SaaS-Platform-Frontend](https://github.com/denseidel/saas-platform-frontend)

### Project Structure

Setup the project with the typescript create react starter and then follow the conventions from the [react-redux-typescript-starter](https://github.com/microsoft/TypeScript-React-Redux-Starter).

### Install [antd](https://ant.design/docs/react/use-in-typescript)

Use [create-react-app with antd](https://ant.design/docs/react/use-with-create-react-app)

```bash
# add antd
npm install antd
# configure the build to work with scss https://ant.design/docs/react/use-with-create-react-app#Advanced-Guides (required for antd)
```

### Build your components

I keep the project structure and architecture (about state) in mind. Also I sketch the app out first!
The I [build the components](https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8108994?start=0), [add routing](https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8145908?start=0) and [add redux for state management](https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8211904?start=0).

### Add authentication

Use [AWS amplify](https://aws-amplify.github.io/docs/js/authentication#manual-setup) with the [generated identity provider config](../platform/iam.md#saas-aws-cognito):

```js
import Amplify from "aws-amplify";

Amplify.configure({
  Auth: {
    region: config.region,
    userPoolId: config.userPoolId,
    userPoolWebClientId: config.userPoolWebClientId,
    mandatorySignIn: true
  }
});

const currentConfig = Auth.configure();
```

### More topics

- Serverside Rendering: [https://github.com/phodal/serverless-react-server-side-render/blob/master/src/index.js](https://github.com/phodal/serverless-react-server-side-render/blob/master/src/index.js)

### Build & Deploy Frontend

#### CI/CD Serverless Frontend

```yaml
# Node.js
# Build a general Node.js project with npm.
# Add steps that analyze code, save build artifacts, deploy, and more:
# https://docs.microsoft.com/azure/devops/pipelines/languages/javascript

pr:
  branches:
    include:
      - master
  paths:
    exclude:
      - README.md
      - /adr/*
      - .adr-dir

pool:
  vmImage: "Ubuntu-16.04"

steps:
  - task: NodeTool@0
    inputs:
      versionSpec: "8.x"
    displayName: "Install Node.js"
  - task: UsePythonVersion@0
    inputs:
      versionSpec: "3.6"
      architecture: "x64"
  - script: |
      echo 'everything should be there'
    displayName: "setup credentials & dependencies"
  - script: |
      cd ./scripts && pip install -r requirements.txt && python deploy-infrastructure.py -c infrastructure -ni True
    env:
      AWS_ACCESS_KEY_ID: $(aws.accesskey)
      AWS_SECRET_ACCESS_KEY: $(aws.accesssecret)
      CYPRESS_TEST_USER_PW: $(CYPRESS_TEST_USER_PW)
      CYPRESS_TEST_USER: $(CYPRESS_TEST_USER)
    displayName: "setup infrastructure"
  - script: |
      cp ./infrastructure/config.json ./src/config.json
  - script: |
      npm config set '@bit:registry' https://node.bit.dev
      npm install 
      npm run build
    displayName: "install dependencies and build"
  - script: |
      npm run e2e
    env:
      CYPRESS_TEST_USER_PW: $(CYPRESS_TEST_USER_PW)
      CYPRESS_TEST_USER: $(CYPRESS_TEST_USER)
    displayName: "run e2e tests"
  - script: |
      # setup preview environment & artifact bucket & upload to artifiact bucket
      pip3 install awscli --upgrade
      cd ./scripts && ./deploy-infrastructure.py -c website
    env:
      AWS_ACCESS_KEY_ID: $(aws.accesskey)
      AWS_SECRET_ACCESS_KEY: $(aws.accesssecret)
    displayName: "Deploy to preview environment"
```

## DO: Frontend Testing

Use [Efficient Testing](https://medium.com/@darioghilardi/end-to-end-testing-on-a-react-redux-app-10f5a26f2f61) and be [economical](https://jobs.zalando.com/tech/blog/economic-perspective-testing/). Whenever your code base changes signifficantly you have to adapt your unit test. Therefore: Use a typed language. Focus on integration and end-to-end tests. Use unit tests only where they make sense (e.g. pure algorithmic code with complex corner cases). Be economic. Be lean.

Use [cypress](https://www.valentinog.com/blog/cypress/) for frontend end-2-end testing as in this [sample](https://github.com/denseidel/saas-platform-frontend/blob/master/cypress/integration/landingpage.js).

## Knowledge

### Javascript & React

- [Javascript](https://www.freecodecamp.org/news/beaucarnes/learn-javascript-full-course--j4Va5cR1p) Basics
- [Penetration-Testing](https://www.freecodecamp.org/news/beaucarnes/web-app-penetration-testing-full-course--pena5cR1p)
- [React Ecosytem](https://github.com/enaqx/awesome-react) / ([Course](https://www.udemy.com/react-the-complete-guide-incl-redux/)) and [React Best Practices](https://www.zerrtech.com/blog/react-design-best-practices).

- Application Architecture
  - [MVVM](https://medium.cobeisfresh.com/level-up-your-react-architecture-with-mvvm-a471979e3f21) vs Redux
  - Code: [Redux General](https://redux.js.org/faq/codestructure), [ducks](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be)
    - Tutorial Basics: https://learn.freecodecamp.org/front-end-libraries/redux
    - Docs !: https://redux.js.org/basics/usagewithreact#implementing-components
    - Redux - Ducks: https://github.com/erikras/ducks-modular-redux
    - Redux - Saga: https://github.com/redux-saga/redux-saga / https://flaviocopes.com/redux-saga/

### Design & CSS

The foundations of UI design is [CSS3, Flexbox, and CSS grid](https://developer.mozilla.org/en-US/docs/Web/Guide) extended by [React Best Practices and Patterns](https://www.sitepoint.com/react-architecture-best-practices/). Suplement this with **Ant Design** as a UI Framework for [Desktop](https://ant.design) and [Mobile](https://mobile.ant.design/docs/react/introduce). Some Samples can be found [here](https://github.com/ant-design/ant-design/issues/477).

- [7 Practical Tips for Cheating at Design](https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886)

[58 bytes of css to look great nearly everywhere](https://jrl.ninja/etc/1/)

```css
main {
  max-width: 38rem;
  padding: 2rem;
  margin: auto;
}
```
