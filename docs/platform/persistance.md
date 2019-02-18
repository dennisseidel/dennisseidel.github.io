---
id: persistance
title: Persistance
---
## Perstistance

Every microservice should use it's own persitance layer. Optimally this will be a SasS solution. The current list of database can be discovered [hear](https://db-engines.com/de/ranking).

**Architectural Decisions**

- I will use what AWS amplify offers, to gain speed.
  - Hosting: https://aws-amplify.github.io/docs/cli/hosting?sdk=js
  - Storage/Blob: https://aws-amplify.github.io/docs/js/storage
  - REST(Dynamodb)/GraphQL: https://aws-amplify.github.io/docs/js/api

## NoSQL vs RDBS

* [Modeling Data for NoSQL Document Databases](https://www.youtube.com/watch?v=IUxT7ZRHlZ4) 
  * critical points:
    * embedding vs referencing data
    * reads vs writes
    * normalized vs denormalized vs mixed 

## Object Store - S3

1. Create S3 Bucket with _bucket name_ `your-globally-unique-bucketname` \(e.g. `notes-app-uploads-ds1`\) and _region_ `eu-central-1` and enable CORS by updating the policy under permissions to 

```text
<CORSConfiguration>
    <CORSRule>
        <AllowedOrigin>*</AllowedOrigin>
        <AllowedMethod>GET</AllowedMethod>
        <AllowedMethod>PUT</AllowedMethod>
        <AllowedMethod>POST</AllowedMethod>
        <AllowedMethod>HEAD</AllowedMethod>
        <MaxAgeSeconds>3000</MaxAgeSeconds>
        <AllowedHeader>*</AllowedHeader>
    </CORSRule>
</CORSConfiguration>
```

## Blockchain

Blockchains are tamper evident and tamper resistant digital ledgers implemented in a distributed fashion (i.e., without a central repository) and usually without a central authority (i.e., a bank, company, or government). At their basic level, they enable a community of users to record transactions in a shared ledger within that community, such that under normal operation of the blockchain network no transaction can be changed once published. ([Source](https://www.nist.gov/publications/blockchain-technology-overview))
![decision tree for blockchain usage](/img/do-you-need-a-blockchain-nist.png)