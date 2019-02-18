---
id: tools
title: Code Tooling (Editor, Git)
---

## VIM Basics

[Delete from cursor to end of line on VI](https://unix.stackexchange.com/questions/4415/delete-from-cursor-to-end-of-line-on-vi)


## Paring with Visual Studio Live Share

* More Info: https://code.visualstudio.com/blogs/2017/11/15/live-share
* Security: https://docs.microsoft.com/en-us/visualstudio/liveshare/reference/security

Add this to your config: 
```
"liveshare.guestApprovalRequired": true
```

## GIT

Read [Single Branch Development with Git](https://medium.com/learn-git-today/single-branch-development-with-git-f72a052446cf).

### [Github CLI](https://hub.github.com/)

Install:
```
brew install hub
# https://hub.github.com/hub.1.html
git config --global hub.protocol https
```




### Add [Zappr](https://zappr.opensource.zalan.do) Config

Add a `.zappr.yaml` ([Documentation](https://zappr.readthedocs.io/en/latest/setup/#zappr-features-and-their-configuration-options)) in the top-level of the repository:

```yaml
autobranch:
  pattern: '{number}-{title}'
  length: 60
commit:
  message:
    patterns:
      - '#[0-9]+'
approvals:
  minimum: 1
  ignore: none
  pattern: "^(:\\+1:|👍)$"
  veto:
    pattern: "^(:\\-1:|👎)$"
specification:
  title:
    minimum-length:
      enabled: true
      length: 8
  body:
    minimum-length:
      enabled: true
      length: 8
    contains-url: true
    contains-issue-number: true
  template:
    differs-from-body: true
pull-request:
  labels:
    additional: true
```

> CLI: `dcli repo addzappr` (should provide a [template](https://github.com/jondot/hygen) repo for a zappr config)



## Other Tools (List)

* unescape json: [https://www.freeformatter.com/json-escape.html\#ad-output](https://www.freeformatter.com/json-escape.html#ad-output)
* format json: [https://www.freeformatter.com/json-formatter.html](https://www.freeformatter.com/json-formatter.html)
* regex tester: [https://regex101.com/r/I2jhvv/1/](https://regex101.com/r/I2jhvv/1/)