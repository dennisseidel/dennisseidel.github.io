---
id: platform
title: Service Mesh Setup
---

**Architecture Decisions**

1. [ADR-0001](adr/adr1.html) - ~~Use Serverless with Python and keep an eye on Istio as application runtime~~
2. [ADR-0008](adr/adr8.html) - Use Istio as the plattform over serverless
3. JenkinsX 
4. Add Kuberenetes

JenkinsX for speed and portability based on Kubernetes/Helm/Docker + Istio. Istio as a service mesh provide the required abstraction while allowing for portable workloads accross clouds. The prefered way is to develop in the cloud.

## Local Tooling 

https://jenkins-x.io/getting-started/install/

```bash
brew tap jenkins-x/jx
brew install jx 
```


## Infrastructure setup

First try to use JenkinsX + Cloud with minimal overhead for myself. I might need to extract the base setup to Terraform (e.g. getting a cluster with preemtive instances, adding and configuring a url/dns). I have to decide if this setup needs to be documented in its own repostitory - Infrastructure as Code.  

Generate repo with minkikube template. You can access this directory and apply the config with `terraform`

```
jx create cluster gke terraform
```

```bash
terraform init
terraform apply
```


Then you can install the JenkinsX files with: https://jenkins-x.io/getting-started/install-on-cluster/#installing-jenkins-x-on-a-cloud

https://jenkins-x.io/developing/git/#using-a-different-git-provider-for-environments
```
#get kubectl config: 
gcloud container clusters get-credentials drifterdune --zone=us-central1-a
jx install --provider=gke
```

add istio: 

jx create addon istio


https://itnext.io/deploy-a-basic-python-application-using-jenkins-x-kubernetes-4adace2fe345



jx with tls 
* https://github.com/jenkins-x/jx-docs/issues/259
* https://github.com/jenkins-x/jx-docs/blob/master/content/commands/jx_install.md
* https://jenkins.io/blog/2018/04/16/jenkins-x-explained-part1/




https://github.com/jenkins-x/cloud-environments


https://github.com/jenkins-x/jx-tutorial/blob/master/tutorials/install-jx-on-gke-with-terraform/lesson.md
https://github.com/jenkins-x/vscode-jx-tools
https://github.com/jenkins-x/terraform-provider-jx





The plattform is manage in a central mono repo based on a [template](link-to-service-mesh-quickstarter). Clone it and follow the `README.md` in the root directory to setup either a local or a cluster in the cloud.

## Local Setup

Install a local cluster including Kubernetes and Istio on OSX with the following script: 

```
git clone https://github.com/denseidel/service-mesh-config-starter.git
export KUBE_ENV=osx
./service-mesh-config-starter/devops/machine-setup.sh
```

For more infos read the [README](https://github.com/denseidel/service-mesh-config-starter).

### build container images directly in minikube

To build images directly in minikube use minikube's built-in docker daemon:

```text
eval $(minikube docker-env)
docker ps
```

## Cloud Setup 

Install a cluster including Kubernetes and Istio on GCP with the following script: 

```
git clone https://github.com/denseidel/service-mesh-config-starter.git
export KUBE_ENV=gcp
./service-mesh-config-starter/devops/machine-setup.sh
```

### Automate Infrastructure with Terraform

https://nickcharlton.net/posts/kubernetes-terraform-google-cloud.html & do the scripting according to the [devsecops](devsecops.md) chapter.

## Kubernetes Basics

### create secret

[https://kubernetes.io/docs/concepts/configuration/secret/](https://kubernetes.io/docs/concepts/configuration/secret/) -&gt; use `Creating a Secret Manually`

Encode the values base64 / better use visual studio code plugin Encode Decode \(`Convert Section)`

```text
echo -n "admin" | base64
```

! in kubernetes the env variables are authomatically decoded !

create secret file in a folder without version control

```text
apiVersion: v1
kind: Secret
metadata:
  name: mysecret
type: Opaque
data:
  username: YWRtaW4=
  password: MWYyZDFlMmU2N2Rm
```

encrypt the folder with gpg

install gpg tools: [https://gpgtools.org/](https://gpgtools.org/)

[https://www.gnupg.org/documentation/manuals/gnupg/gpg\_002dzip.html](https://www.gnupg.org/documentation/manuals/gnupg/gpg_002dzip.html)

create to following aliases in `.zshrc`:

```text
alias lock-secret-files="cd ~/Desktop/ && gpg-zip -e -o secret-files -r den.seidel@gmail.com secret && mv -f ~/Desktop/secret-files ~/Google\ Drive/backupx/ && rm -rf ~/Desktop/secret"

alias unlock-secret-files="cd ~/Desktop && gpg-zip -d ~/Google\ Drive/backupx/secret-files -r den.seidel@gmail.com"
```

create secret in kubernetes \(secrets muss be in the same namespace as the pod!\)

```text
kubectl create --namespace=default -f ./secret.yaml
```

## Register your DOMAIN

[https://console.aws.amazon.com/route53](https://console.aws.amazon.com/route53)