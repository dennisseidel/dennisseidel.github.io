---
id: serverless
title: DO: Serverless (NodeJS)
---

Using serverless allows for great scalability and low cost of bootstraping while leading to some lock in. I use serverless for components in the "innovation phase". Currently I use AWS Lambda.

<!-- adrlog -->

- [ADR-0002](adr/0002-use-pulumi-localstack-over-aws-sam-as-serverless-deployment.md) - Use pulumi+localstack over AWS SAM as serverless deployment

<!-- adrlogstop -->

## Setup & Installation

Make sure you have your [Developer Environment Setup](../development-environment/). Then you are required to setup your [service runtime](../platform/runtime.md). Next start the [design of your service](_index_design.md) and the first and then start with [implementing your first functions](https://blog.pulumi.com/serverless-on-aws-with-pulumi-simple-event-based-functions).

```bash
# In your respository create a services folder
mkdir services && cd services
# In your services folder you create your pulumi deployment including your infrastructure DB, API Gateway (keep in mind to include the API definition of the service from the design phase), functions ...
# Follow the project initialization: https://pulumi.io/quickstart/aws/tutorial-rest-api.html
pulumi new hello-aws-javascript --dir ahoy-pulumi
cd ahoy-pulumi
code swagger.yaml
# I suggest your seperate each function into a seperate xxx.function.js file

# Deploy
pulumi login
pulumi stack select denseidel/tenent-management/dev
pulumi up

```

## Deploy API on API Gateway

- Add Request Validation to your OpenAPI Spec [AWS API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-validation-sample-api-swagger.html).


### Compile non-pure Python modules \(e.g. C?\)

To compile non-pure Python modules, install [Docker](https://docs.docker.com/engine/installation/), the [Lambda Docker Image](https://github.com/lambci/docker-lambda) and [serverless-python-requirements](https://serverless.com/blog/serverless-python-packaging/) . Enable **dockerizePip** in **serverless.yml** and `serverless deploy` again.

```bash
npm init
npm install --save serverless-python-requirements
```

To configure our `serverless.yml` file to use the plugin, we'll add the following lines in our `serverless.yml`:

{% code-tabs %}
{% code-tabs-item title="serverless.yml" %}
```yaml
plugins: 
    - serverless-python-requirements 
custom: 
    pythonRequirements: 
        dockerizePip: non-linux
```
{% endcode-tabs-item %}
{% endcode-tabs %}

## Implementation

### Create virtual env local, activate and deactivate

```text
#http://sourabhbajaj.com/mac-setup/Python/virtualenv.html
virtualenv venv
source venv/bin/activate
deactivate
```

### Install python dependency for this function:

```python
pip install boto3 google-api-python-client requests
```

### Store a reference to my dependencies:

```python
pip freeze > requirements.txt
```

Optional: Re-install the dependencies from the `requirements.txt`:

```python
pip install -r requirements.txt
```

### Implement the function

1. Define the function in the `serverless.yml` including the events \(e.g. http\) that trigger the function and the handler
2. Implement the unit test: what is the best serverless unit test framework for python?
3. Implement the handler function in `handler.py`
4. Test the function locally

```text
sls invoke local --function create_api --path tests/create-api-event.json
sls invoke local -f hello
```

Run the unit tests

```python
python -m unittest discover -s tests
```

### Protect Endpoint with API Key

{% embed data="{\"url\":\"https://serverless.com/framework/docs/providers/aws/events/apigateway/\#setting-api-keys-for-your-rest-api\",\"type\":\"link\",\"title\":\"Serverless Framework - AWS Lambda Events - API Gateway\",\"description\":\"Setting up AWS API Gateway Events with AWS Lambda via the Serverless Framework\",\"icon\":{\"type\":\"icon\",\"url\":\"https://serverless.com/\_/src/assets/images/favicon.5f5203c17067db61d37d21dd073835f4.ico\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/logos/Serverless\_mark\_black\_400x400\_v3%402x.jpg\",\"width\":800,\"height\":800,\"aspectRatio\":1}}" %}



### Examples

{% embed data="{\"url\":\"https://github.com/serverless/examples\",\"type\":\"link\",\"title\":\"serverless/examples\",\"description\":\"Serverless Examples – A collection of boilerplates and examples of serverless architectures built with the Serverless Framework and AWS Lambda\",\"icon\":{\"type\":\"icon\",\"url\":\"https://github.com/fluidicon.png\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://avatars3.githubusercontent.com/u/13742415?s=400&v=4\",\"width\":400,\"height\":400,\"aspectRatio\":1}}" %}

## Testing

* [GCP Best Practices for serverless](https://cloud.google.com/functions/docs/bestpractices/testing)


## Deployment

### Deploy a project

```text
sls deploy
```

![](/img/deployment.png)

The deployment takes very long. I have to see how to optimize this.

#### Test the deployed function

You can use the endpoint endpoint and use Postman to make a "real world" request: ![](/img/test-with-postman.png)

Or you can use the CLI and use:

```text
sls invoke -f create_api --path tests/create-api.json
```

![](/img/test-with-cli-at-runtime.png)

### Deploy single function

```text
sls deploy function --function hello
```

## Sources:

* [https://github.com/serverless/examples/tree/master/aws-python-pynamodb-s3-sigurl](https://github.com/serverless/examples/tree/master/aws-python-pynamodb-s3-sigurl) 
* [https://github.com/AnomalyInnovations/serverless-python-starter](https://github.com/AnomalyInnovations/serverless-python-starter)
* [https://serverlesscode.com/post/python-3-on-serverless-framework/](https://serverlesscode.com/post/python-3-on-serverless-framework/)
