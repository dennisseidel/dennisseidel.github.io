---
id: firebase
title: Firebase
---
```text
# source 
# install node and npm
npm i -g firebase-tools
mkdir firebase-sample
firebase login
firebase init
```

Implement the functions ...

Save configuration: [https://firebase.google.com/docs/functions/config-env](https://firebase.google.com/docs/functions/config-env) 

```text
# config secrets
firebase functions:config:set facebook.healthengineer.verifytoken=$(lpass show facebook-healthengineer --password)
#check
firebase functions:config:get
```

