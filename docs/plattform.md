---
id: plattform
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

Prerequesits: https://github.com/gopasspw/gopass/blob/master/docs/setup.md

```bash
brew install gopass
gpg --list-keys
git config --global gpg.program gpg
git config --global commit.gpgsign true
git config --global user.signingkey 04D6DA3C77D9CF3E6C7F900BF98FECE5AD76DA11
gopass list
gopass binary cp README.md d10l/README.md / gopass binary mv README.md d10l/README.md
```

gopass private repo either on github or public


gopass                                                                                                                                 f
Failed to initialize mount d10lteam (gpgcli-gitcli-fs+file:///Users/den/.password-store-d10lteam). Ignoring: failed to init sub store: password store d10lteam is not initialized. Try gopass init --store d10lteam --path gpgcli-gitcli-fs+file:///Users/den/.password-store-d10lteam
It seems you are new to gopass. Do you want to run the onboarding wizard? [Y/n/q]: y
[init] Creating a new team ...
[init] [local] Initializing your local store ...
Please select a private key for encrypting secrets:
[0] gpg - 0xF98FECE5AD76DA11 - Dennis A. Seidel <den.seidel@gmail.com>
Please enter the number of a key (0-0, [q]uit) [0]: 0
Use Dennis A. Seidel (den.seidel@gmail.com) for password store git config? [Y/n/q]: y
[init] [local]  -> OK
[init] [local] Configuring your local store ...
[init] [local] Do you want to add a git remote? [y/N/q]: https://gitlab.com/denseidel/secret.git
[init] [local] Do you want to always confirm recipients when encrypting? [y/N/q]: N
[init] [local]  -> OK
[init] Please enter the name of your team (may contain slashes) []: d10lteam
[init] [d10lteam] Initializing your shared store ...
Please select a private key for encrypting secrets:
[0] gpg - 0xF98FECE5AD76DA11 - Dennis A. Seidel <den.seidel@gmail.com>
Please enter the number of a key (0-0, [q]uit) [0]: 0
Use Dennis A. Seidel (den.seidel@gmail.com) for password store git config? [Y/n/q]: Y
[init] [d10lteam]  -> OK
[init] [d10lteam] Configuring the git remote ...
Please enter the git remote for your shared store []: https://gitlab.com/d10l/secret.git
[init] [d10lteam]  -> OK
[init] [d10lteam] Created Team 'd10lteam'


https://github.com/gopasspw/gopass/blob/master/docs/config.md

gopass config autosync true --store d10lteam 

### Terraform Gopass Integration

https://github.com/camptocamp/terraform-provider-pass

```bash
go get github.com/camptocamp/terraform-provider-pass
cd $GOPATH/src/github.com/camptocamp/terraform-provider-pass
dep ensure
make build
# https://www.terraform.io/docs/configuration/providers.html#third-party-plugins
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