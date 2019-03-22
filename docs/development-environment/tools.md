---
id: tools
title: Code Tooling (Editor, Git)
---

## "Hacker Tools"

Check out the MIT lecture on hackertools including Terminal, VMs, Containers [here](https://hacker-tools.github.io/lectures/).

### VIM Basics

* [Delete from cursor to end of line on VI](https://unix.stackexchange.com/questions/4415/delete-from-cursor-to-end-of-line-on-vi)

## Paring with Visual Studio Live Share

* More Info: https://code.visualstudio.com/blogs/2017/11/15/live-share
* Security: https://docs.microsoft.com/en-us/visualstudio/liveshare/reference/security

Add this to your config:

```json
"liveshare.guestApprovalRequired": true
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

> CLI: `amplify repo add-guideline-agent`

## Other Tools (List)

* unescape json: [https://www.freeformatter.com/json-escape.html\#ad-output](https://www.freeformatter.com/json-escape.html#ad-output)
* format json: [https://www.freeformatter.com/json-formatter.html](https://www.freeformatter.com/json-formatter.html)
* regex tester: [https://regex101.com/r/I2jhvv/1/](https://regex101.com/r/I2jhvv/1/)