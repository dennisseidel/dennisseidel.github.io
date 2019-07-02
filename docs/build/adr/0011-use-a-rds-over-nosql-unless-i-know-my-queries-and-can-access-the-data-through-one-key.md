# 11. Use a RDS over NoSql unless I know my queries and can access the data through one key

Date: 2019-07-02

## Status

Accepted

## Context

When building services the data can be stored in a nosql vs sql store. The nosql database makes it easy to insert data, scale the database but has challanges when accessing the data expecially when the access pattern is not exactly clear up front and the datastore was design for this access pattern (e.g. access through one key that is know up front). While SQL datastores have challanges with scalability and availability. Further in my sepcific case the nosql store (dynamodb) provides a better free tier then the SQL datastore. But when scaling and having more complex access pattern the nosql store gets expensive.

## Decision

I use a SQL datastore as a default as it is more flexibile, when performance and scalability requirements required this part of the data model can be migrated to a nosql store.

## Consequences

I will to continously check if the access pattern is the services is based on key as well as how the scalability requirements of the data base is. If need I then migrate to a nosql store.

## Links

- https://blog.codebarrel.io/why-we-switched-from-dynamodb-back-to-rds-before-we-even-released-3c2ee092120c
