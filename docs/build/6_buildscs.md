---
id: buildapi
title: DO: Build the Backend (API)
---

After you setup your meta repo and created a subrepo for your backend. Start creating the documenation `README.md` then by designing the API `/reference`, then build the services `/service` when every you require infrastucture add it to `/infrastructure`.

## Sample Project

> [Tenant-Management](https://github.com/denseidel/saas-plaform-tenant-management)

### Repository Structure

- `azure-pipelines.yml`: The automated build pipeline.
- `/infrastructure`: including databases, usw. and the config file of the current state
- `/service`: including service configs (e.g. serverless.yaml), infrastructure (e.g. container for serverless functions - should be replacable e.g. with Docker), business (business logic functions)
- `/scripts`: scripts to e.g. deploy infrastructure, build and deploy/release service
- `/ui`: include the ui component
- `/reference`: the api definitions
- `README.md`: ...

## Setup inital CI/CD - `./azure.pipelines.yml`

`./azure-pipelines.yml`

```yaml
# https://github.com/denseidel/saas-platform-template/blob/master/devops/frontend-preview/azure-pipelines.yaml
# Add steps that analyze code, save build artifacts, deploy, and more:
# https://docs.microsoft.com/azure/devops/pipelines/languages/javascript

pr:
  branches:
    include:
      - master
  paths:
    include:
      - /
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
      npm install -g serverless
    displayName: "install dependancies"
```

Create a microsoft [devops pipeline](https://azure.microsoft.com/de-de/services/devops/pipelines/), add a new project, add a new pipeline (github -> repo -> existing pipeline).

## Design the APIs / Events - `/reference`

_Your API is the first user interface of your application_: This means there is no feature in your ui's that is not modeled in your API.
Therefor _Your API comes first, then the implementation_: You should interate on the api description to get it right and then keep it stable even when the implemenation changes.
_Your API is described (and maybe even self-descriptive)_: Your API offers an experience therefor documentation and expected behavoir is very important. ([Adobe](https://web.archive.org/web/20190817145357/https://medium.com/adobetech/three-principles-of-api-first-design-fa6666d9f694))

Use the [stoplight studio](https://stoplight.io/p/studio) to create well formed swagger spec graphically you can modify them later ([tutorial](https://idratherbewriting.com/learnapidoc/pubapis_openapi_tutorial_overview)).

```stoplight
# open the repository in stoplight and create the api
# the api will be safed under
./reference/{api-name}/openapi.yaml
```

While designing your API keep in mind idenpotency and transactionality - and opt for a simple solution otherwise you have to think a lot about Resilience (see below). This is part of following the API design best practices of:

- [Microsoft](https://docs.microsoft.com/de-de/azure/architecture/best-practices/api-design)
- [Zalando](https://opensource.zalando.com/restful-api-guidelines/)

You might setup [Zally](https://github.com/zalando/zally) for api validation.

Next implement the services for this api with the serverless framework.

## Build the service - `/service`

### Install the serverless framework

```bash
npm install -g serverless
# or update global pacakage
npm update -g
```

### Create service

```bash
mkdir service && cd service && serverless create --template aws-nodejs-typescript && npm install
```

### Develop, Test and Iterate

Implement the service in Typescirpt following this [guide](https://web.archive.org/web/20190817184129/https://www.jamestharpe.com/serverless-typescript-getting-started/). Use a [hexagonal architecture](https://web.archive.org/web/20190424014125/https://vacationtracker.io/blog/big-bad-serverless-vendor-lock-in/) to reduce switching cost. You can modify the [typescript plugin](https://github.com/prisma/serverless-plugin-typescript). Keep im mind [testing](https://epsagon.com/blog/how-to-test-serverless-apps/)/[testing2](https://serverless.com/framework/docs/providers/aws/guide/testing/).

Deploy the function with `sls deploy -v` make sure you logout the event and create test cases that can be infoke loacally.

Invoke locally

```bash
sls invoke locally -f hello
```

Deploy:

```bash
sls deploy -v
```

### Remove

```bash
sls remove
```

## Add data storage to service

Create a SQL database with terraform:

[`infrastructure/infrastructure.tf`](https://github.com/denseidel/saas-plaform-tenant-management/tree/master/infrastructure):

```terraform
# https://medium.com/swlh/integrating-the-serverless-framework-and-terraform-874215daa8bf

provider "aws" {
  region = "${var.AWS_REGION}"
}

terraform {
  backend "s3" {
    bucket = "saas-platform-terraform-state"
    key    = "tenant-management/terraform.tfstate"
    region = "eu-central-1"
  }
}

locals {
  service_name = "tenant-management"
  #service_stage = "${terraform.workspace}"
  service_stage = "dev"
}

# you might create your own seperate vpc and your subnets
# in this example I use the existing ones.

# add default subnets to rds private subnet group
resource "aws_db_subnet_group" "rds-private-subnet" {
  name       = "rds-private-subnet-group"
  subnet_ids = "${var.rds_subnets}"
}

resource "aws_rds_cluster" "tenant-management" {
  engine_mode          = "serverless"
  master_password      = "${var.mysql_password}"
  master_username      = "${var.mysql_username}"
  cluster_identifier   = "tenant-management"
  skip_final_snapshot  = true
  db_subnet_group_name = "${aws_db_subnet_group.rds-private-subnet.name}"
  scaling_configuration {
    auto_pause               = true
    max_capacity             = 1
    min_capacity             = 1
    seconds_until_auto_pause = 300
  }
}

output "tenant-management_db_arn" {
  value = "${aws_rds_cluster.tenant-management.arn}"
}

output "tenant-management_rds_secret_arn" {
  value = "${var.rds_secret_arn}"
}
```

[`infrastructure/vars.tf`](https://github.com/denseidel/saas-plaform-tenant-management/tree/master/infrastructure):

```terraform
variable "AWS_REGION" {
  type    = "string"
  default = "us-east-1"
}

variable "mysql_username" {
  type    = "string"
  default = "admin"
}

variable "mysql_password" {
  type = "string"
}

variable "rds_subnets" {
  type = list(string)
}

# this is the arn of the secret in the secet-manager that the data api uses, I only integrated it to
# output it into one configiration file. If you generate the secret thorugh terraform it self and not
# thorugh the query manager you export it from there currently the queryeditor does not recognise the secrets
# generated with terraform.
variable "rds_secret_arn" {
  type = "string"
}
```

Finally you need to **enable the RDS Data API**, this is currently not possible through terraform(!). We use the data api over a jdbc because I helps with the scalability issue of connection pools with lambda functions. Follow the instructions [here](https://web.archive.org/save/https://www.jeremydaly.com/aurora-serverless-data-api-a-first-look/).

Create your DB table either through the queryeditor inside of AWS or use the api/cli based on your initialization or update script

[/infrastructure/db.sql](https://github.com/denseidel/saas-plaform-tenant-management/tree/master/infrastructure):

```sql
create database if not exists tenant_management;
create table tenant_management.tenants (
  tenantId varchar(36) primary key,
  tenantName varchar(255),
  plan varchar(255),
  createdAt timestamp not null default current_timestamp
);
create table tenant_management.tenant_members (
  tenantId varchar(36) not null references tenant_management.tenants(teanntId),
  userId varchar(255) not null,
  userRole varchar(255) not null,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  primary key (tenantId, userId)
);
```

Access Data API from Serverless Function as describes [here](https://github.com/denseidel/saas-plaform-tenant-management/commit/bbb67a4a5984da50a164e4ecb397500df27098af#diff-4b5a18024a0822d8479984998a3dc42f):

Add IAM Roles to function:

```yaml
Allow Actions:
  - rds-data:BatchExecuteStatement
  - rds-data:BeginTransaction
  - rds-data:CommitTransaction
  - rds-data:RollbackTransaction
On Rsource (db arn):
Resource:
  - ${file(../infrastructure/config.json):tenant-management_db_arn)}
```

Implement in function using the [data api](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html) with [transactions](https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BeginTransaction.html) using the [aws sdk](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/RDSDataService.html#commitTransaction-property).

```js
import { RDSDataService } from "aws-sdk";

const config = {
  tenant_management_db_arn: process.env.tenant_management_db_arn,
  tenant_management_rds_secret_arn: process.env.tenant_management_rds_secret_arn
};

const rdsDataService = new RDSDataService();

// get / select
getTenantByUserId: (id: string) => Promise<Tenant[]> = async (id: string) => {
    try {
      var selectParams = {
        resourceArn: config.tenant_management_db_arn,
        secretArn: config.tenant_management_rds_secret_arn,
        sql: `select t.tenantId, t.tenantName, t.plan, tm.userId, tm.userRole from tenant_management.tenants as t join tenant_management.tenant_members as tm on t.tenantId = tenant_management.tm.tenantId where tm.userId = '${id}';`
      }
      console.log(selectParams)
      const tenants = await rdsDataService.executeStatement(selectParams).promise();
      const res: Tenant[] = tenants.records.map(tenant => this.createTenantFromRDSResult(tenant))
      return res
    } catch (error) {
      console.log(error)
      return error
    }
  }

// create/insert a tenant with a transaction and multiple sql
createTenant = async (tenant: Tenant) => {
  try {
    const startTransactionParams = {
      resourceArn: config.tenant_management_db_arn /* required */,
      secretArn: config.tenant_management_rds_secret_arn /* required */
    };
    const dbTransaction = await rdsDataService
      .beginTransaction(startTransactionParams)
      .promise();
    const dbTransactionId = dbTransaction.transactionId;
    const insertNewTenantParams = {
      includeResultMetadata: true,
      resourceArn: config.tenant_management_db_arn /* required */,
      secretArn: config.tenant_management_rds_secret_arn /* required */,
      sql: `insert into
        tenant_management.tenants (
          tenantId,
          tenantName,
          plan
        )
      values
        (
          '${tenant.id}',
          '${tenant.name}',
          '${tenant.plan}'
        );` /* required */,
      transactionId: dbTransactionId
    };
    await rdsDataService.executeStatement(insertNewTenantParams).promise();
    const insertNewTenantMemberParams = {
      includeResultMetadata: true,
      resourceArn: config.tenant_management_db_arn /* required */,
      secretArn: config.tenant_management_rds_secret_arn /* required */,
      sql: `insert into
        tenant_management.tenant_members (
          tenantId,
          userId,
          userRole
        )
      values
        (
          '${tenant.id}',
          '${tenant.userId}',
          '${tenant.userRole}'
        );` /* required */,
      transactionId: dbTransactionId
    };
    await rdsDataService
      .executeStatement(insertNewTenantMemberParams)
      .promise();
    const commitParams = {
      resourceArn: config.tenant_management_db_arn /* required */,
      secretArn: config.tenant_management_rds_secret_arn /* required */,
      transactionId: dbTransactionId /* required */
    };
    await rdsDataService.commitTransaction(commitParams).promise();
    return tenant;
  } catch (error) {
    console.log(error);
    return error;
  }
};
```

## Publish API

Finally publish the API specification to the deployed apis on the AWS API gateway([docs](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api-quick-start-import-export.html)) .

## ui component

The frontend section is seprated into **`ui` component section** of a self contained system that is provided by the service and the **frontend interface section** that combines those components into a user experience.

### PLAN: Product Requirement Documentation, User Stories

Create a one pager for the [product requirement documentation - including the user interaction and design](https://web.archive.org/web/20190422164155/https://www.atlassian.com/agile/product-management/requirements) - [TEMPLATE](https://docs.google.com/document/d/1-kKH6L1eHzGRNX_59DEK1D-u7TPns79OVBOkbtdZvsA/edit#). For the User Interaction & Design [create content structure & components](https://developers.google.com/web/fundamentals/codelabs/your-first-multi-screen-site/#create_your_content_and_structure).

### DO: Setup Component Development

We use [storybook](https://www.learnstorybook.com/react/en/get-started/) for component based development. Set it up:

```bash
# Create our application:
npx create-react-app ui --typescript
cd ui
npm install
```

```
# Add Storybook:
# Setup storybook webpack to work with typescript: https://medium.com/@dandobusiness/setting-up-a-react-typescript-storybook-project-5e4e9f540568 (step 4) / https://storybook.js.org/docs/configurations/typescript-config/
npm i -D @storybook/react
npm install @types/storybook__react
# some plugins
npm i -D awesome-typescript-loader
npm i -D react-docgen-typescript-loader
npm i -D react-docgen-typescript-webpack-plugin
```

Create files in `.storybook`:

```bash
.storybook
 - addons.js
 - config.js
 - tsconfig.json
 - webpack.config.js
```

```js
// .storybook/config.js
import { configure } from "@storybook/react";
const req = require.context("../src/components", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);
```

```js
// .storybook/tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./",
    "allowSyntheticDefaultImports": true,
    "module": "es2015",
    "target": "es5",
    "lib": ["es6", "dom"],
    "sourceMap": true,
    "allowJs": false,
    "jsx": "react",
    "moduleResolution": "node",
    "rootDir": "../",
    "outDir": "dist",
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "declaration": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "build",
    "dist",
    "scripts",
    "acceptance-tests",
    "webpack",
    "jest",
    "src/setupTests.ts",
    "**/*/*.test.ts",
    "examples"
  ]
}
```

```js
// .storybook/webpack.config.js

const path = require("path");
const SRC_PATH = path.join(__dirname, "../src");
const STORIES_PATH = path.join(__dirname, "../stories");
//dont need stories path if you have your stories inside your //components folder
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH, STORIES_PATH],
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: {
          configFileName: "./.storybook/tsconfig.json"
        }
      },
      { loader: require.resolve("react-docgen-typescript-loader") }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
```

Add command `"storybook": "start-storybook -p 9001 -c .storybook"` to `package.json`.

Create first component in `src/components`:

```js
import * as React from "react";
export interface IButtonProps {
  children?: React.ReactNode;
  onClick?: (e: any) => void;
}
const styles = {
  border: "1px solid #eee",
  borderRadius: 3,
  backgroundColor: "#FFFFFF",
  cursor: "pointer",
  fontSize: 15,
  padding: "3px 10px",
  margin: 10
};
const Button: React.SFC<IButtonProps> = props => (
  <button onClick={props.onClick} style={styles} type="button">
    {props.children}
  </button>
);
Button.defaultProps = {
  children: null,
  onClick: () => {}
};
export default Button;
```

Create test story `button.stories.tsx`:

```js
import { storiesOf } from "@storybook/react";
import * as React from "react";
import Button from "./Button";
storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with some emoji", () => <Button>😀 😎 👍 💯</Button>);
```

Start storybook: `npm run storybook`

### Run the test runner (Jest) in a terminal:

yarn test

### Start the component explorer on port 9009:

yarn run storybook

### Run the frontend app proper on port 3000:

yarn start

````

Start building your [components](https://www.learnstorybook.com/react/en/simple-component/).

### [Bit](https://docs.bit.dev/docs/quick-start.html)

To share the components we use [bit](https://docs.bit.dev/docs/quick-start.html). You can find a [step instructure here](https://web.archive.org/web/20190622100226/https://medium.com/javascript-in-plain-english/how-to-share-and-reuse-react-components-to-build-apps-faster-4b3b0b542798).

```bash
# Install bit
npm install bit-bin -g

# Init Bit for your project
cd project-directory
bit init

# Track components with Bit
bit add src/components/*

# Defining a compiler (https://bit.dev/bit/envs/compilers/react-typescript)
bit import bit.envs/compilers/react-typescript -c
bit build

# Tagging component versions
bit tag --all 1.0.0

# Export the components
bit login
bit export user-name.collection-name


# Consume components in other projects
npm config set '@bit:registry' https://node.bit.dev
npm i @bit/mui-org.material-ui.button

````

## Background

- [AWS - Implementing Microservices](https://d0.awsstatic.com/whitepapers/microservices-on-aws.pdf)

Info on Azure Pipelines:

- Create your first pipeline based on your github repository [here](https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started/?view=azure-devops).
- [Ignoring path, files or branches for the pipeline trigger](https://docs.microsoft.com/en-us/azure/devops/pipelines/build/triggers?view=azure-devops&tabs=yaml)
