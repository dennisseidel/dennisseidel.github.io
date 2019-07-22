# 16. Frontend components that share state (e.g. like redux) should be created by on team

Date: 2019-07-22

## Status

Accepted

## Context

In the context of building the frontend components for the saas platform (tenant management) the component for creating as well as the overview component need to share state if they are displayed on the same page (otherwise a new created tenant is not instantly displayed in the overview). There are the option to integrate the components by implementing a shared dependency / prop that is a redux store or message bus. Or to use Custom Events (witch are less performant) or to make sure that the `tenant overview` and the `tenant creating` component are also offered as a shared `tenant management` component that allready include the shared state. This has the advantage that the code is simpler, but it limits the flexibility in the design as a larger part is provided by the backend team.

## Decision

Frontend components that share state (e.g. redux) are created by one team as composed components.

## Consequences

The backend team has more responsibilities to create the required components, and the frontend designers have less freedom. If they require the freedom they have to make sure that the individual components are not on the same page or live with the fact that they do not sync.