# 10. Use multirepos over monorepos and integrate them using meta

Date: 2019-06-12

## Status

Accepted

## Context

Projects can be structured either in one or multiple repositories. This has certain advantages and downside:
* https://medium.com/@mattklein123/monorepos-please-dont-e9a279be011b



## Decision

Use multirepos over monrepos and integrate them using [meta](https://github.com/mateodelnorte/meta).

## Consequences

To make multirepos less painful there are multiple [tools](https://medium.com/outbrain-engineering/mono-repository-or-poly-repo-we-go-hybrid-314e1e17a7dd) like [meta](https://medium.com/@patrickleet/mono-repo-or-multi-repo-why-choose-one-when-you-can-have-both-e9c77bd0c668), [submodules](https://medium.com/@porteneuve/mastering-git-submodules-34c65e940407) and [sourcegraph](https://sourcegraph.com/start) as well as [repo](https://source.android.com/setup/develop/repo). I choose meta here as it seems to have the highest usability. But I need to review if this apporach scales.