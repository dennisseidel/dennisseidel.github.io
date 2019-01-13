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
  - React + Serverless: `npm install -g create-react-app serverless`
- [Docker](http://sourabhbajaj.com/mac-setup/Docker/)

[Automated script setup](#)

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

## Document projects

The most important part for a project is the `README.md` therefore document all relevant details there and only reference from other documentation to this file. Use the [new-project template](https://github.com/denseidel/new-project). 

For further documentation use [Docusaurus](https://docusaurus.io/docs/en/installation).