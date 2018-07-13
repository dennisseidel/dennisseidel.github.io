---
id: adr
title: Architecture Decsion Record
---
This page documents all my architecture decisions. I document the desicions for later discussions and to guide the technical improvement process. 

## Documentation of Architecutral Decisions

Architectural decision should be documented in a [light weight architecture decision record](https://github.com/CloudNativeTraining/architecture_decision_record). My private decision are located here in [github](https://github.com/denseidel/developer-playbook/tree/master/adr) based on this [template](https://github.com/CloudNativeTraining/architecture_decision_record/edit/master/adr_template_madr.md).

Use the [adr tool](https://github.com/npryce/adr-tools) and [MADR](https://github.com/adr/madr)

```bash
brew install adr-tools
npm install madr && mkdir -p docs/adr && cp node_modules/madr/template/* docs/adr
npm i -g adr-log
# init in root of project
 adr init doc/architecture/decisions
```

### Create a new ADR 
```bash
adr new Implement as Unix shell scripts
```


### Replace an ADR
```bash
 adr new -s 9 Use Rust for performance-critical functionality
```