---
id: staticfiles
title: Static Files & CDN
---

To host static files I use a blob storage or a webserver like nginx combined with a CDN. As there is less lock in I prefer a blob storage like s3.

## Sample

In this sample I build and bundle my frontend application, create an S3 bucket if not existing, upload the files and configure the CDN and the domain.

Add the following code to the intrastructure automation [starter](setup.md):

```js
"use strict";
const aws = require("@pulumi/aws");
const pulumi = require("@pulumi/pulumi");
const mime = require("mime");
const fs = require("fs");
const AWS = require('aws-sdk');
const glob = require('glob');

aws.config.region = "eu-central-1"

let siteDir = "../../frontend/build"; // directory for content files
let dirs = glob.sync(siteDir + '/**/*', { nodir: true });

// Create an S3 bucket for platform frontend
let siteBucket = new aws.s3.Bucket("saas-platform-frontend", {
  website: {
    errorDocument: "index.html",
    indexDocument: "index.html",
  },
});

// For each file in the directory, create an S3 object stored in `siteBucket`
for (let i in dirs) {
  const dirPath = dirs[i];
  const fileName = dirPath.substring(dirPath.lastIndexOf("/") +1);
  const relativePath = dirPath.substring(dirPath.lastIndexOf("build")+6);
  let object = new aws.s3.BucketObject(fileName, { 
    bucket: siteBucket,
    key: relativePath,
    source: new pulumi.asset.FileAsset(dirPath),     // use FileAsset to point to a file
    contentType: mime.getType(dirPath) || undefined, // set the MIME type of the file
  });
}


function publicReadPolicyForBucket(bucketName) {
  return JSON.stringify({
    Version: "2012-10-17",
    Statement: [{
      Effect: "Allow",
      Principal: "*",
      Action: [
          "s3:GetObject"
      ],
      Resource: [
          `arn:aws:s3:::${bucketName}/*` // policy refers to bucket name explicitly
      ]
    }]
  })
}

// Set the access policy for the bucket so all objects are readable
let bucketPolicy = new aws.s3.BucketPolicy("bucketPolicy", {   
  bucket: siteBucket.bucket, // depends on siteBucket -- see explanation below
  policy: siteBucket.bucket.apply(publicReadPolicyForBucket) 
          // transform the siteBucket.bucket output property -- see explanation below
});

exports.websiteUrl = siteBucket.websiteEndpoint; // output the endpoint as a stack output
exports.region = aws.config.region;
```