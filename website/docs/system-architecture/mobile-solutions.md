---
title: "Mobile Solutions"
---

### Mobile Solution Strategies

There are only 4 mobile solution strategies that you need to consider on the exam and they are:  

1) Salesforce Mobile App (and/or Mobile Publisher)  
2) Native App (Apps Build for iOS or Android specifically in Swift or Kotlin)  
3) Hybrid Apps (Apps build use JS frameworks, phonegap, etc)  
4) HTML5 Apps (Web based apps framed into your phone via an app basically)  

I would suggest trying to stay as OOTB as possible until you can't, so pick the SF mobile and and/or mobile publisher if you can. Some key features for it are in the sections below and LWC's can be used to provide the majority of other features you may want. Below I'll go over when to use Hybrid, Native, or HTML5.  

**When to pick Hybrid:**
1) Enhanced offline capabilities that SF Mobile cannot handle  
2) When you need Bluetooth capabilities   
3) Access to device functionality (This does not include Camera functionality or Geolocation functionality as LWC's can easily provide that in SF Mobile)
4) If you need mobile device management (device monitored by company)  

**When to pick Native:**  
1) If you need background processing (geofencing, real time location)  
2) Pixel perfect UI  
3) The best performance  
4) The best battery usage.

**When to pick HTML 5:**  

1) To be honest I wouldn't, but I will continue to look into this and see if it has some exceptional use case

I would not specify the technology you use for hybrid or native if you use it, not worth the hassle. Instead just justify your hybrid choice and move on.

***

### Preventing user Logins  

In many scenarios there is the mention of making sure that your mobile users don't have to login more than once. There a few things that will make this possible listed below:  

1) Whether it's a custom app, Salesforce Mobile, or Mobile Publisher, you can always prevent this by setting up the connected app in Salesforce to use a refresh token. Then will allow your mobile app too leverage a "remember me" feature and use the refresh token to login when a session token expires, instead of asking users to login with a username and password.  

2) You can supplement this by enabling the session setting "Enable caching and autocomplete on login page" which will save a users username in the username box if they select the "remember me" checkbox on the app when logging in. That way if you set your refresh tokens to expire, they will only need to enter their password.  

NOTE: While Biometric scanning is available via your mobile apps, you cannot actually use biometric scanning (facial recognition for instance) to login to Salesforce via your mobile apps, just to provide extra security when accessing the Salesforce Mobile App. (You can read the rather confusing documentation [here](https://help.salesforce.com/s/articleView?id=sf.salesforce_app_biometric_id.htm&type=5))   

***

### SF Mobile Offline Access  

With SF Mobile users have the ability to cache data for up to 7 objects in their org. They set these caching preferences themselves in their settings -> offline preferences. If a user doesn't setup these preferences SF caches up to 30 records for their last for accessed objects. In addition to this, users tasks and their 5 most recently accessed dashboards are cached. Logging out of the app removes all cached data.  

You cannot do the following in offline mode:  

1) Create new records.  
2) Aside from the Edit and Delete Quick Actions, no other Quick Actions are available.  
3) Dependent lookups & picklists are not supported  
4) Lookup filters aren't supported  
5) Experience Cloud Sites aren't supported offline  

NOTE: Offline access is not available in mobile publisher


***

### Mobile Publisher  

If you want a branded app for your experience cloud sites you can leverage mobile publisher to provide that. So if app branding is a requirement just mention mobile publisher.  
