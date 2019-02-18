---
id: iam
title: IAM
---
To secure your app and mange user identities you can either build your own secuirty \(which is bad practice unless you are a security startup that sees it advantage in build novel and better security\), use a existing solution like keycloak and integrate it into your application or use a SaaS solution that provides you Identitymanagement.

**Architectural Decisons**
- Use AWS Amplify with Cognito

## Usage / Sample App

* Management API - how to manage keycloak through an api
* Secure an API Backend:
* Integrate with API Gateway:

* Google Sample
  * Playground: [https://developers.google.com/oauthplayground/?error=access\_denied\#](https://developers.google.com/oauthplayground/?error=access_denied#)
  * [https://stackoverflow.com/questions/359472/how-can-i-verify-a-google-authentication-api-access-token](https://stackoverflow.com/questions/359472/how-can-i-verify-a-google-authentication-api-access-token)

[https://www.googleapis.com/oauth2/v1/tokeninfo?access\_token=ya29.GltQBaDL5XGrEinAjYr\_E7WPPvzrHqahgyr5SaglbA6opHQ\_dgy-2WYKcr3sGFePre0zsBN91FjCdQqiko4dl6yvlIep2IVnhyIANT6NA7d7hGp8ETjhax-FEr-w](https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=ya29.GltQBaDL5XGrEinAjYr_E7WPPvzrHqahgyr5SaglbA6opHQ_dgy-2WYKcr3sGFePre0zsBN91FjCdQqiko4dl6yvlIep2IVnhyIANT6NA7d7hGp8ETjhax-FEr-w)

```text
{
 "issued_to": "407408718192.apps.googleusercontent.com",
 "audience": "407408718192.apps.googleusercontent.com",
 "scope": "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/tasks",
 "expires_in": 3441,
 "access_type": "offline"
}
```

access control sollte fühest möglich in der kette statt finden daher neuer token für jeden call

### JWT vs opaque tokens

* JWT: [https://jobs.zalando.com/tech/blog/the-purpose-of-jwt-stateless-authentication/](https://jobs.zalando.com/tech/blog/the-purpose-of-jwt-stateless-authentication/)
* Google uses a central system 

Design the system:

* What type of access:
  * functional \(bring your own data\) - is normally only restricted by utilization \(in some case also by a role\) 
  * self access - is normally done with a 3 legged oauth at login time and later in the background with the refresh token?
  * delegated access \(there might be a solution with [user managed access](https://www.forgerock.com/privacy/user-managed-access).  
* what information does a service need to make a decision in what kind of cenario it is?
  * functional access can be decide at build time: 
  * identity: this needs to be compared if it is the same - then self access 
    * in the token 
    * in the payload 
  * role, group, permission, delegation: 

