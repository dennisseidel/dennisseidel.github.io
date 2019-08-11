# 1. Use MS Teams to document and coordinate my projects

Date: 2019-05-25

## Status

Superceded by [2. Use todoist to docuemnt and coordinate my projects](0002-use-todoist-to-docuemnt-and-coordinate-my-projects.md)

## Context

The project needs one space for end to end documentation and colaboration. Starting from the __lean startup__ (business) until __startup engineering__. ADRs and development documentation are best included into the code or near the code - the other parts should be in a seperate single space. It would be best if this space is interactive. 

## Decision

I use MS Teams to document and coordinate my projects. 

## Consequences

With MS Teams it is easy to coordinate with a team, create groups for each product, in each group create a channel for each stage as well as a wiki where things can be documented (e.g. Solution Architecture.). One advantage is that the channel shows the progress and flow of the assets. In the future the create of the group, [channel](https://docs.microsoft.com/de-de/graph/api/channel-post?view=graph-rest-1.0), and assets can be automated with the CLI.  

Alternatives were:

- github wiki - which is not available for private projects, and has not a high usability
- Slack: only offers to search the last 10000 messages
