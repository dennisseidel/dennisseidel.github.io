---
id: setuptools
title: PLAN: Setup my tools
---

## "Hacker Tools"

Check out the MIT lecture on hackertools including Terminal, VMs, Containers [here](https://hacker-tools.github.io/lectures/).

## Mac

You can follow the [mac setup guide](https://d10l.github.io/mac-setup/) to setup:

- [Settings](https://d10l.github.io/mac-setup/SystemPreferences/)
- [XCode](https://d10l.github.io/mac-setup/Xcode/)
- [Package Manager](https://d10l.github.io/mac-setup/Homebrew/)
- [Terminal/Zsh](https://d10l.github.io/mac-setup/iTerm/zsh.html)
- [Bash Completion](https://d10l.github.io/mac-setup/BashCompletion/)
- [Git](https://d10l.github.io/mac-setup/Git/)
- [Visual Studio Code](https://d10l.github.io/mac-setup/VisualStudioCode/)
- [Python](https://d10l.github.io/mac-setup/Python/)
- [NodeJS](https://d10l.github.io/mac-setup/Node.js/)
- [Docker](https://d10l.github.io/mac-setup/Docker/)
- [Terraform](https://d10l.github.io/mac-setup/Terraform/)

### CLI (AWS Amplify + plugins)

As described in the DevSecOps section I decided to use AWS as my platform. To increase my developer speed I selected AWS Amplify as my CLI and add my own feature through plugins. To install this do:

```bash
# install aws amplify + the extension
npm install -g @aws-amplify/cli
```

Currently I have the following cli extensions:

- Repo Initial Boilerplate: [plugin](https://github.com/denseidel/amplify-repo-boilerplate/blob/master/commands/repo/add-boilerplate.js) | [template](https://github.com/d10l/new-project/tree/master/new)
- Add Zappr Agent: [plugin](https://github.com/denseidel/amplify-repo-boilerplate/blob/master/commands/repo/add-guideline-agent.js) | [template](https://github.com/d10l/new-project/tree/master/agent)

those template could also be used directly with [hygen](http://www.hygen.io/templates/) by cloning the folders into the `_templates` folder and execute hygen.