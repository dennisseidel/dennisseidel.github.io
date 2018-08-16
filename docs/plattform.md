---
id: plattform
title: Service Mesh Setup
---
Service Mesh provide the required abstraction while allowing for portable workloads accross clouds.

**Architecture Decisions**

1. [ADR-0001](adr/adr1.html) - ~~Use Serverless with Python and keep an eye on Istio as application runtime~~
2. [ADR-0008](adr/adr8.html) - Use Istio as the plattform over serverless

## Plattform Components

The plattform uses: 

* Kubernetes 
* Helm
* Istio

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

https://nickcharlton.net/posts/kubernetes-terraform-google-cloud.html

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