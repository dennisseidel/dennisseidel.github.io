---
id: buildapi
title: DO: Build the SCS (API + UI Component)
---

After you setup your meta repo and created a subrepo for your self contained system. Start by creating the API with serverless framework - do not use it for infrastructure. Infrastrucuture should be managed seperately through Terraform.

## SCS Components / Repository Structure

- `/infrastructure`: including databases, usw. and the config file of the current state
- `/servcice`: including service configs (e.g. serverless.yaml), infrastructure (e.g. container for serverless functions - should be replacable e.g. with Docker), business (business logic functions)
- `/scripts`: scripts to e.g. deploy infrastructure, build and deploy/release service
- `/ui`: include the ui component
- `api-swagger?`: where? ui? integration with serverless framework? api first?
- `README.md`: ...

## Sample Project

> [Tenant-Management](https://github.com/denseidel/saas-plaform-tenant-management)

## Serverless with typescript

- https://www.jamestharpe.com/serverless-typescript-getting-started/
- https://github.com/prisma/serverless-plugin-typescript

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

Finally you need to **enable the RDS Data API**, this is currently also not possible through terraform. We use the data api over a jdbc because I helps with the scalability issue of connection pools with lambda functions. Follow the instructions [here](https://web.archive.org/save/https://www.jeremydaly.com/aurora-serverless-data-api-a-first-look/).

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

Access Data API from Serverless Function:
- Add IAM Roles
- Implement in function


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
