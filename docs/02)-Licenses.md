# Licenses

This page houses all information on the licenses that need to be memorized for the CTA Board and examples of how to present them in the actors and licenses diagram. THESE ARE NOT THE LICENSCES YOU ACTUALLY APPLY TO USERS! They are the marketing licenses. There are nine major license types Sales Cloud, Service Cloud, Salesforce Platform, Salesforce Customer Community, Salesforce Customer Community Plus, Salesforce Partner Community, [Tableau CRM](https://www.salesforce.com/editions-pricing/crm-analytics/?d=cta-body-promo-299), [Marketing Cloud](https://www.salesforce.com/editions-pricing/marketing-cloud/) and [Pardot](https://www.salesforce.com/products/pardot/pricing/). The last three are less likely to be on the exam but do have the potential to be called out depending on your solutions needs.

---

### [Sales Cloud](https://www.salesforce.com/editions-pricing/sales-cloud/)

The Sales and Service cloud licenses have a ton in common, but there are a few key differences. I'll outline everything below.

The Sales Cloud license should be selected if Sales Cloud specific features are in use. Things like Collaborative Forecasting, Territory Management, Quotes, Sales Contracts etc. You also need a Sales Cloud license for CPQ.

_**Features Available with Sales Cloud License (bolded items are unique to Sales License)**_

* Lead Management (Lead Object, Lead History object and more) 
* Lead Assignment and Routing  
* Duplicate Blocking (Duplicate Rules)  
* Web-to-Lead Capture  
* Mass Email  
* Campaign Management (Campaign Object, Campaign History object and more)    
* Email Templates  
* Rules Based Lead Scoring  
* Lead Registration  
* Campaign Influence  
* Account Management (Account Object, Account History object and more)   
* Case Management (Case Object, Case History object and more)   
* Opportunity Management (Opportunity Object, Opportunity History object and more)   
* Customizable Sales Process (Paths)  
* Task Management, Activity Feed  
* Person Accounts  
* Sales Console Apps   
* Sales Teams (Account Teams and Opportunity Teams)  
* Calendar All (Ability to create calendars on any object)  
* Salesforce Mobile App  
* Full Offline Mobile Functionality  
* _**Collaborative Forecasting**_  
* _**Forecasting Mobile App**_  
* _**Custom Opportunity Forecasting Fields**_  
* _**Enterprise Territory Management**_ 
* _**Contracts (Sales Contract Object)**_  
* Sales Orders (Order Object)  
* Products and Price Books (PriceBook Object and Product2 Object)  
* Quotes (Quote objects)  
* Reporting and Dashboards  
* Files  
* Topics and Recommendations  
* Chatter  
* Case Management  
* Knowledge (Read-Only)  
* _**Lightning Sync**_ (This was only listed on Sales... not sure if Service covers this too though)
* Web Services API
* Google Apps Integration
* Email Integration with Outlook
* All dev tools and process automation tools (does vary based on org edition)

[Complete Breakdown of Features for Sales Cloud License by SF Org Edition](https://www.salesforce.com/content/dam/web/en_us/www/documents/pricing/DS_SalesCloud_EdCompare.pdf)

---

### [Service Cloud](https://www.salesforce.com/editions-pricing/service-cloud/)

The Service Cloud license should be selected if Service Cloud specific features are in use. Things like, Omni Channel, Entitlements, Service Contracts, the ability to edit/create Knowledge Articles, etc. Service Cloud licenses are also needed for add-ons like Social Studio, LiveMessage, Live Agent, Einstein Chat Bots, SOS and Mobile Snap-Ins.

**_Features available with Service Cloud License (bolded items are unique to Service License)_**

* Chatter   
* Salesforce Mobile App  
* Files  
* Topics and Recommendations   
* Case Auto-Assignment  
* Web-to-Case  
* Email-to-Case  
* Case Email Auto-Response  
* Case Escalation Rules and Queues  
* Lead Management (Lead Object and basically everything that comes with it)  
* Contact Management (Contact Object)  
* Account Management (Account Object)  
* Service Console Apps  
* Knowledge (Read Only)  
* _**Knowledge (Read-Write)**_  
* _**Omni-Channel Routing (Basic)**_  
* _**Omni-Channel Supervisor**_  
* _**Case Milestone Tracker**_  
* CTI or Lightning Dialer  
* _**Service Order (Work Order Object)**_  
* _**Service Contracts (ServiceContract Object and ContractLineItem Object)**_  
* _**Entitlements (Entitlement Object, Entitlement Processes, etc)**_  
* _**Social Customer Service (Part of Social Studio Add On)**_  
* _**Chat (LiveAgent)**_  
* Next Best Action
* Help Center (Experience Cloud)
* _**Work Order Management (Work Order and Employee Work Order Objects)**_  
* Asset Management and Tracking
* Reports and Dashboards
* Opportunity Tracking (Opportunity Object, Quote Object, Product Object, PriceBook Object)
* Offline Mobile App Access  
* Email Integration with Outlook  
* Google Apps Integration  
* Web Services API  
* All dev tools and process automation tools (does vary based on org edition)

[Complete Breakdown of Features for Service Cloud License by SF Org Edition](https://www.salesforce.com/content/dam/web/en_us/www/documents/pricing/salesforce-service-cloud-pricing-editions.pdf)

---

### [Salesforce Platform](https://www.salesforce.com/editions-pricing/platform/)

This license should basically only be used when users primarily need access to custom objects only (Can only give access to a maximum of 110 custom objects). It also includes access to Accounts, Contacts, Knowledge (Read-Only), Reports and Dashboards and Tasks. 

**_Features available with Salesforce Platform License_**

* Custom Objects (Maximum of 110)  
* Flows and Process Builders  
* Workflow and Approval  
* Lightning App Builder  
* AppExchange  
* Custom Development  
* Web Services API  
* Identity for Employees (SSO)  
* Platform Events  
* Mobile SDK  
* Salesforce Mobile App  
* Chatter  
* Files  
* Experience Builder (Experience Cloud)
* Lightning Console (Console Apps)  
* Custom Profiles  
* Custom Page Layouts  
* Roles and Permissions  
* Record Type  
* Account Object  
* Contact Object  
* Knowledge (Read-Only)  
* Reports and Dashboards  
* Task Management and Activity Feed

[Complete Breakdown of Platform License Features By Org Edition](https://www.salesforce.com/content/dam/web/en_us/www/documents/pricing/salesforce-platform-pricing-editions.pdf)

---

### [Salesforce Customer Community](https://www.salesforce.com/editions-pricing/experience-cloud/self-service/?d=cta-body-promo-142)

The Customer Community License should be used when you have customer community users that need a login, but do not need access to reports and dashboards, delegated administration and Roles and Advanced Sharing. It's very important to note that these users DO NOT have roles assigned to them, they cannot be added to public groups and they cannot have Sharing Rules made for them. The only you can do for them is use [Sharing Sets](https://help.salesforce.com/articleView?id=sf.networks_setting_light_users.htm&type=5), which are very limited. This can be used with person accounts.

Also very important to remember there is a login variety of this license. Depending on the scenario it may be better to choose the login variety (better for low user login probability)

**_Features Available with Customer Community License_**

* Service Objects (Case Object)  
* Standard Objects ([Complete List of Available Standard Object Shown in this article](https://help.salesforce.com/articleView?id=sf.users_license_types_communities.htm&type=5))
* Account Object
* Contact Object
* Knowledge (Read-Only)
* Custom Objects (Max of 10)
* Files  
* Chatter  
* Topics and Recommendations
* Customer Identity Access Management (SSO)

[Complete Breakdown of Customer Community License By Org Edition](https://www.salesforce.com/editions-pricing/experience-cloud/self-service/?d=cta-body-promo-142)

---

### [Salesforce Customer Community Plus](https://www.salesforce.com/editions-pricing/experience-cloud/self-service/?d=cta-body-promo-142)

The customer community plus license should be used when community users need access to reports and dashboards and/or need roles and complex sharing that sharing sets can't accommodate. These users can be added to public groups and they can be person accounts. 

Also very important to remember there is a login variety of this license. Depending on the scenario it may be better to choose the login variety (better for low user login probability).

**_Features Available with Customer Community Plus License (that aren't in the normal Customer Community License)_**

* Roles and Advanced Sharing (Sharing Rules)  
* Delegated Administration ([More Info Here](https://help.salesforce.com/articleView?id=networks_DPUA.htm&type=0))
* Reports and Dashboards
* Data Storage (2mb of storage for regular license, 1mb for login license)
* API Calls/Day (200 for regular license, 10 for login license)

[Complete Breakdown of Customer Community Plus License By Org Edition](https://www.salesforce.com/editions-pricing/experience-cloud/self-service/?d=cta-body-promo-142)

---

### [Salesforce Partner Community](https://www.salesforce.com/editions-pricing/experience-cloud/partner-relationship-management/?d=cta-body-promo-143)

Unlike the other two community license (which are B2C) this license should typically be used in B2B customer scenarios. Specifically when B2B users need access to sales data. There are a handful of objects listed below that are only available to Partner license users. These users cannot be person accounts.

Also very important to remember there is a login variety of this license. Depending on the scenario it may be better to choose the login variety (better for low user login probability).

**_Features Available with Partner Community License (that aren't in either Customer Community License type)_**

* Access to the Campaign object
* Access to the Lead object
* Access to the Opportunity object
* Access to the Quote object
* Increase in storage of 5mb per user for regular licenses
* [Market Development Funds](https://help.salesforce.com/articleView?id=sf.networks_market_dev_funds_intro.htm&type=5)
* Territory Management

[Complete Breakdown of Partner Community License By Org Edition](https://www.salesforce.com/editions-pricing/experience-cloud/partner-relationship-management/?d=cta-body-promo-143)

---
### Sales Engagement

Sales Engagement is an add-on licenses for Sales Cloud users that enables them to leverage omni-channel, Service Cloud Voice, Einstein Activity Capture, and Einstein Lead Scoring

More Info Here: https://resources.docs.salesforce.com/latest/latest/en-us/sfdc/pdf/high_velocity_sales_impl_guide.pdf

***


### More Info

There are a ton more licenses, although these are the ones you absolutely must memorize for the exam. For more info on the constantly changing licenses types, [check here](https://www.salesforce.com/editions-pricing/overview/).

[List of all License Types and Add-Ons and their costs](https://www.salesforce.com/content/dam/web/en_us/www/documents/pricing/all-add-ons.pdf)

[Breakdown of Community Licenses](https://help.salesforce.com/articleView?id=users_license_types_communities.htm&type=0)