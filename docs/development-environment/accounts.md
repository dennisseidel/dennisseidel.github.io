---
id: account
title: Cloud Accounts
---


## Securely store your keys and secrets

You don't want to store your secrets in plain text in a file like `.rshrc`  therefore you can use lpass cli \[[github](https://github.com/lastpass/lastpass-cli) / [documentation](https://helpdesk.lastpass.com/lastpass-command-line-application/)\] and store your secrets in your osx keychain and access them only by reference.

#### Installation

```bash
brew install lastpass-cli --with-pinentry
```

#### Set variables in lastpass

Just create a secret note within lastpass:

<img src="/img/add-secret-to-lastpass.png" width="58%">

#### Login to lpass in the command line

```bash
# login to lastpass# check first if I am allready loggedin and finded the "access-token" folder if [[ $(lpass ls) != *"access-token"* ]]; thenlpass login your@email.comfi
```

#### Set environment variable \(e.g. key\_id \(username\) and secret\(password\)

```bash
export AWS_ACCESS_KEY_ID=$(lpass show aws-serverless-devops --username)
export AWS_SECRET_ACCESS_KEY=$(lpass show aws-serverless-devops --password)
```



### Accessing files in lpass

```text
lpass show xxx-dev-gcp --attach att-7942806310206912061-56085
```

### Setup an ecrypted folder and sync with google drive

```text
/Users/den/Desktop/secret/xxx/key.json
lock-secret-files
unlock-secret-files
```


## AWS

### Signup for an [AWS](https://aws.amazon.com) account
### [Create IAM roles](https://docs.aws.amazon.com/de_de/IAM/latest/UserGuide/best-practices.html)
### Install [AWS CLI](https://docs.aws.amazon.com/de_de/cli/latest/userguide/cli-chap-getting-started.html)

```bash
sudo pip install awscli
# use the access key id and secret access ky as describe above
aws configure
# AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
# AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
# Default region name [None]: eu-central-1
# Default output format [None]:

# for the man pages do
aws configure help
```

#### [Configure multiple Profiles:](https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html)

```text
vi ~/.aws/credentials
```

```text
[default]
aws_access_key_id=XXX
aws_secret_access_key=XXX

[serverless-admin]
aws_access_key_id=AKIAIOSFODNN7EXAMPLE
aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

Set the profile:

```text
export AWS_PROFILE=serverless-admin
```



## GCP

### [Setup Google Cloud](https://serverless.com/framework/docs/providers/google/guide/credentials/):
* Create a Google Cloud Billing Account
* Create a new Google Cloud Project
* Enable the necessary APIs
* Get credentials
* For serverless: Update the `provider` config in `serverless.yml`