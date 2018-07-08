---
id: persistance
title: Persistance
---
## Perstistance

Every microservice should use it's own persitance layer. Optimally this will be a SasS solution. The current list of database can be discovered [hear](https://db-engines.com/de/ranking) and the [zalando technology radar](./).

#### Architectural Decisions

### When to use NoSQL and when RDBS?

### NoSQL Best Practices

* [Modeling Data for NoSQL Document Databases](https://www.youtube.com/watch?v=IUxT7ZRHlZ4) 
  * critical points:
    * embedding vs referencing data
    * reads vs writes
    * normalized vs denormalized vs mixed 

{% embed data="{\"url\":\"https://de.slideshare.net/AmazonWebServices/advanced-design-patterns-for-amazon-dynamodb-dat403-reinvent-2017\",\"type\":\"video\",\"title\":\"Advanced Design Patterns for Amazon DynamoDB - DAT403 - re:Invent 2017\",\"description\":\"This session, we go deep into advanced design patterns for DynamoDB. This session is intended for those who already have some familiarity with DynamoDB and are…\",\"icon\":{\"type\":\"icon\",\"url\":\"https://public.slidesharecdn.com/favicon.ico?d8e2a4ed15\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"http://image.slidesharecdn.com/dat403-advanced-design-pattern-20bf280b-7aff-4e1d-8865-82785c9899f7-1982393993-171212185929/95/slide-1-1024.jpg\",\"width\":1024,\"height\":576,\"aspectRatio\":0.5625},\"embed\":{\"type\":\"player\",\"url\":\"https://www.slideshare.net/slideshow/embed\_code/key/1nAt031PqO6eJR\",\"html\":\"<div style=\\\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.2493%; padding-top: 38px;\\\"><iframe src=\\\"https://www.slideshare.net/slideshow/embed\_code/key/1nAt031PqO6eJR\\\" style=\\\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;\\\" allowfullscreen scrolling=\\\"no\\\"></iframe></div>\",\"aspectRatio\":1.7778}}" %}

{% embed data="{\"url\":\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html\",\"type\":\"link\",\"title\":\"Best Practices for DynamoDB - Amazon DynamoDB\",\"description\":\"Best practices for maximizing performance and minimizing throughput costs for working with Amazon DynamoDB.\",\"icon\":{\"type\":\"icon\",\"url\":\"https://docs.aws.amazon.com/images/favicon.ico\",\"aspectRatio\":0}}" %}

{% embed data="{\"url\":\"https://brewing.codes/2017/11/13/dynamo-data-modeling/\",\"type\":\"link\",\"title\":\"Data modeling with DynamoDB \| Brewing Codes\",\"description\":\"DynamoDB is a truly unique and powerful database. It provides a predictable low latency, a vast array of features, tight integration with other AWS services and almost no operational load. The only problem is that its data model can seem …\",\"icon\":{\"type\":\"icon\",\"url\":\"https://brewing.codes/favicon.ico\",\"aspectRatio\":0},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://brewing.codes/wp-content/uploads/2017/11/library.jpeg\",\"width\":1920,\"height\":1279,\"aspectRatio\":0.6661458333333333}}" %}





Why DynamoDB?

pynamodb \(ORM\) - my experience \(ask in stack overflow with a link to my describe esperience and the code\) why cann't I serialize it back?

boto3 - prefered way by amazon.

[https://www.youtube.com/watch?v=ONLKIUFXLcg&t=2s](https://www.youtube.com/watch?v=ONLKIUFXLcg&t=2s)

[https://www.uplift.agency/blog/posts/2016/03/clearcare-dynamodb](https://www.uplift.agency/blog/posts/2016/03/clearcare-dynamodb)

1. Go to the [AWS Console](https://console.aws.amazon.com/console/home) and Search for "DynamoDB"

   ![](/img/search-for-dynamodb-on-aws.png)

2. Create a table e.g. "apis"  
   ![](/img/create-dynamodb-table.png)

   ![](/img/create-dynamodb-table-1.png)

Important: Partition Key Fieldname can not be changed and it must always be included when you insert data to the database. Like:

![](/img/partion-key-must-be-included.png)

Further you validate in your that a valid value was send to your service.



1. Create DynamoDB _table name_ `notes` and _Primary key_ with Partition key `userId` and sort key `noteId` and the default created new _IAM Role_ `DynamoDBAutoscaleRole`.



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



# Container

## Containerized NoSQL - Mongodb

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
