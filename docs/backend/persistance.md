---
id: persistance
title: Persistance
---
## Perstistance

Every microservice should use it's own persitance layer. Optimally this will be a SasS solution. The current list of database can be discovered [hear](https://db-engines.com/de/ranking) and the [zalando technology radar](./).

#### Architectural Decisions


## NOSQL & RDBS
### When to use NoSQL and when RDBS?

### NoSQL Best Practices

* [Modeling Data for NoSQL Document Databases](https://www.youtube.com/watch?v=IUxT7ZRHlZ4) 
  * critical points:
    * embedding vs referencing data
    * reads vs writes
    * normalized vs denormalized vs mixed 

### Containerized NoSQL - Mongodb

**Docker Setup**

* Intro: 
  * [https://hub.docker.com/r/bitnami/mongodb/](https://hub.docker.com/r/bitnami/mongodb/)
  * [https://www.mongodb.com/blog/post/running-mongodb-as-a-microservice-with-docker-and-kubernetes](https://www.mongodb.com/blog/post/running-mongodb-as-a-microservice-with-docker-and-kubernetes)
  * [https://medium.com/@pablo\_ezequiel/creating-a-docker-image-with-mongodb-4c8aa3f828f2](https://medium.com/@pablo_ezequiel/creating-a-docker-image-with-mongodb-4c8aa3f828f2)
  * [http://blog.bejanalex.com/2017/03/running-mongodb-in-a-docker-container-with-authentication/](http://blog.bejanalex.com/2017/03/running-mongodb-in-a-docker-container-with-authentication/)
* ReplicaSets: 

**Working with Mongodb in Python**

* [https://realpython.com/blog/python/introduction-to-mongodb-and-python/](https://realpython.com/blog/python/introduction-to-mongodb-and-python/)
* [https://www.mongodb.com/blog/post/getting-started-with-python-and-mongodb](https://www.mongodb.com/blog/post/getting-started-with-python-and-mongodb)
* [https://docs.mongodb.com/getting-started/python/client/](https://docs.mongodb.com/getting-started/python/client/)
* pymongo authentication: [http://api.mongodb.com/python/current/examples/authentication.html](http://api.mongodb.com/python/current/examples/authentication.html)


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