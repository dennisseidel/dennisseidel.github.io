---
id: developmentenvironment
title: Setup
---

## Decisons

<!-- adrlog -->

- [ADR-0001](adr/0001-document-with-readme-md-and-docusaurus) - Document with README.md and Docusaurus

<!-- adrlogstop -->


## Mac Setup 

You can follow the [mac setup guide](http://sourabhbajaj.com/mac-setup/) to setup:
- [Settings](http://sourabhbajaj.com/mac-setup/SystemPreferences/)
- [XCode](http://sourabhbajaj.com/mac-setup/Xcode/)
- [Package Manager](http://sourabhbajaj.com/mac-setup/Homebrew/)
- [Terminal/Zsh](http://sourabhbajaj.com/mac-setup/iTerm/zsh.html)
- [Bash Completion](http://sourabhbajaj.com/mac-setup/BashCompletion/)
- [Git](http://sourabhbajaj.com/mac-setup/Git/)
- [Visual Studio Code](tbd)
- [Python](http://sourabhbajaj.com/mac-setup/Python/)
- [NodeJS](http://sourabhbajaj.com/mac-setup/Node.js/)
- [Docker](http://sourabhbajaj.com/mac-setup/Docker/)

### Setup a template for git to prevent checking in credentials

[Source](https://seesparkbox.com/foundry/git_secrets)

1. Make a directory for the template: 

   ```text
   mkdir ~/.git-template
   ```

2. Install the hooks in the template directory: 

   ```text
   git secrets --install ~/.git-template
   ```

3. Tell git to use it:

   ```text
   git config --global init.templateDir '~/.git-template'
   ```

4. Install AWS patterns globally to be prevented to be checked in to git:

   ```text
   git secrets --register-aws --global
   ```

5. Check the list of secrets `git secrets` will scan for:

   ```text
   git secrets --list
   ```

It should return something like:

```text
ecrets.providers git secrets --aws-provider
secrets.patterns [A-Z0-9]{20}
secrets.patterns ("|')?(AWS|aws|Aws)?_?(SECRET|secret|Secret)?_?(ACCESS|access|Access)?_?(KEY|key|Key)("|')?\s*(:|=>|=)\s*("|')?[A-Za-z0-9/\+=]{40}("|')?
secrets.patterns ("|')?(AWS|aws|Aws)?_?(ACCOUNT|account|Account)_?(ID|id|Id)?("|')?\s*(:|=>|=)\s*("|')?[0-9]{4}\-?[0-9]{4}\-?[0-9]{4}("|')?
secrets.allowed AKIAIOSFODNN7EXAMPLE
secrets.allowed wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

Now every time you run `git init` or `git clone`, your hooks will be copied into the `.git` directory of your freshly created repo. If you don’t want to set the template globally, you can use it as needed with `git init --template ’~/.git-template’`.

That covers new repo creation, and cloning, but we haven’t addressed the problem of _existing repos that weren’t created with the template_. Here we have a couple options:

`git init` is a non-destructive operation, so feel free to run it in existing repos. It’s safe, and will retroactively apply the template you specify. 

OR

If you want to go “all in” and ensure that every repo has the proper hooks, here’s a [script](https://gist.github.com/iAmNathanJ/0ae03dcb08ba222d36346b138e83bfdf) that will recursively walk a directory, such as `~/Projects` and run `git secrets --install` in all repos.

## Setup projects

Look at the **Frontend** or **Service** section. 

Create Repository with [hub](tools.md):

```
# initalize the repo
hub init your-repo-name
# install aws amplify + the extension
npm install -g @aws-amplify/cli
npm install -g amplify-repo-boilerplate
# create the repo on github
hub create
# add README basics
amplify repo add-boilerplate
git add .
git commit -am "add boilerplates"
# add zappr agent
amplify repo add-guideline-agent
git add .
git commit -am "add zappr agent"
# sync & pull request
git push --set-upstream origin master
```

## Document projects

The most important part for a project is the `README.md` therefore document all relevant details there and only reference from other documentation to this file. Use the [new-project template](https://github.com/denseidel/new-project). 

For further documentation use [Docusaurus](https://docusaurus.io/docs/en/installation).