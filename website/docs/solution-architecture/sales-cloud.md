---
title: "Sales Cloud"
---

### What is Sales Cloud

Sales Cloud is really Salesforce's core product, and it will absolutely be included in your CTA scenarios, so you MUST know its functionality inside and out. Its primary focus is streamlining the sales process for Sales reps as well as some functionality via the campaign object that is commonly utilized by marketing teams to track marketing events and campaigns. We will go over each object, what it's used for as well as the major OOTB config features for marketing cloud (like lead conversion, enterprise territory management and sales forecasting) below.  

_**Note:**_ Unless otherwise stated, all objects have the ability to have sharing rules, sharing sets, sharing groups and OWD access set for record visibility.

Additionally, unless otherwise noted, all objects are Full objects, meaning they can have profiles and/or perm sets setup for users to restrict object and field visibilities. 

***

### Core Sales Cloud Objects ERD (Entity Relationship Diagram)

![Core Sales Cloud Objects ERD](/img/CTA_OOTB_Object_ERDs/sales-cloud-overview-data-model.png)  

### Core Sales Cloud Object Guide

Below is a list of every object related to sales cloud functionality, why and when it should be used, what its OOTB relationships are, how much data is stored per record, OOTB ways to share records for the object, and the licenses required to use it without significant custom builds.

***

### Account Object 

The account object records represent an organization or an individual that your company is involved with in some way. It is not really a Sales Cloud specific object as it is utilized in the vast majority of Salesforce implementations. It is also the most critical object to understand as it has many unique OOTB features (especially sharing features).

**Record Storage:**  Accounts take up the typical 2kb of storage.

**License Requirements:** Accounts can be used by every license type

**Required Fields:**  
1) Name  
2) LastName (If it is a person account)

**OOTB Lookups:**  

1) _**ParentId**_ - Used for account hierarchies (for instance if you had an account that represented Coca-Cola and you wanted to tie their child company Dasani to it).
2) _**MasterRecordId**_ - Used only if account was merged by the OOTB merge tool into another account.
3) _**Operating Hours**_ - Represents the operating hours/business hours for the account.

**OOTB Objects That Have Lookups To Account:**  

1) Assets  
2) Territories (ObjectTerritory2Association)  
3) Campaigns   
5) [ChannelProgramMember](https://help.salesforce.com/s/articleView?id=sf.networks_channel_programs.htm&type=5) - This object stores members of a channel program, channel programs allow channel managers to create programs for different types of partner users like resellers, distributors, etc.    
6) Community Member - List of contacts tied to an account that were a member of a community  
7) [Contact Roles](https://help.salesforce.com/s/articleView?id=sf.sales_core_contact_roles.htm&type=5) - This object is used to store information on the role a contact plays for an account, case, contract or opportunity. It helps your internal team know who to contact and when.  
8) Contracts  
9) Entitlements  
10) [External Managed Accounts](https://www.learnexperiencecloud.com/s/article/External-Managed-Accounts) - This object allows customer community plus or partner users to access and manage multiple accounts and their users, instead of just one account. More info in the article linked above.  
11) [Orders](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_order.htm)  
12) [Partner Fund Allocation](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnerfundallocation.htm)   
13) [Partner Fund Claims](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnerfundclaim.htm)   
14) [Partner Fund Requests](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnerfundrequest.htm) - Used by partners when they need/want to request funds.
15) [Partner Marketing Funds](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_partnermarketingbudget.htm) - Used to represent funds available to channel partners for selling and marketing products and services.  
16) [Service Contract](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_servicecontract.htm) - Represents a customer support contract.

**Salesforce Field Service Lightning and/or Lightning Scheduler Objects That Lookup to Account:**  

It is unlikely that you will be required to use FSL or Lightning Scheduler in your CTA scenarios, however it is likely you may be asked why you didn't leverage it in your solution if it could've potentially be leveraged to solve the problem, so you need to know enough about the package to justify your decisions.

1) [Resource Preference](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_resourcepreference.htm) (A standard object originally part of FSL) - Used to allow accounts to have preferences for which field service agents perform field service work for them.  
2) Service Appointments - Represents an in person service appointment in the field.  
3) [AssociatedLocation](https://developer.salesforce.com/docs/atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_associatedlocation.htm#:~:text=Represents%20a%20link%20between%20an,may%20have%20multiple%20customer%20accounts.)   

**Salesforce CPQ & Billing Objects That Lookup to Account:**  

It is unlikely that you will be required to use CPQ & Salesforce Billing ([Billing cannot exist in your org without CPQ](https://help.salesforce.com/s/articleView?id=sf.blng_install_billing_package.htm&type=5)), but it is likely in the QA that you may be asked why you didn't use them and you will need to know them to justify your choice to not leverage them.  

1) [Credit Memos](https://help.salesforce.com/s/articleView?id=sf.om_billing_objects.htm&type=5) - Object is used for issuing refunds after and invoice has been generated. 
2) [Invoices](https://help.salesforce.com/s/articleView?id=sf.om_billing_objects.htm&type=5) - Object is used to represent an amount to be paid for an order.  

**Privacy and Consent Objects That Lookup to Account:**

There are a ton of these and I'm gonna list them below, HOWEVER, _**it is unlikely you will be required**_ to know or use any of them on your exam, but it's possible you may be asked about their existence and why you didn't choose to use them. More information on [Privacy and Consent Management and how to use it here](https://www.linkedin.com/pulse/managing-consent-should-you-do-salesforceand-how-saurabh-gupta/).

1) [Communication Subscription Consents](https://help.salesforce.com/s/articleView?id=sf.individuals_store_data_privacy.htm&type=5) - This is part of the privacy and communication cloud suite of objects (which is just part of SF now). It's used to store what channels of communication accounts have consented to.  
2) [ContactPointAddress](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactpointaddress.htm) - This object can be used to store multiple addresses for an Individual record (an object used for privacy and consent management designed to be a golden record for data on an individual in your system).   
3) ContactPointEmails - This object is used for storing multiple emails and is tied to the individual record or account record.  
4) ContactPointPhones - This object is used for storing multiple phone numbers.  

**Sharing Options:**  

1) Account Teams -    
2) Implicit Sharing -   
3) Explicit Sharing -   
4) Account Hierarchy Sharing -  
5) Territory Sharing - 
6) External Managed Accounts - 
7) Account Relationships -  

**Unique Configuration Options:** - 
  

***

### Contact Object 

**Record Storage:**  

**License Requirements:**

**Required Fields:**

**OOTB Lookups:**

**OOTB Objects That Have Lookups To Contact:** 

**Sharing Options:** 

***

### Person Account Object 

**Record Storage:**  

**License Requirements:**

**Required Fields:**

**OOTB Lookups:**

**OOTB Objects That Have Lookups To Person Account:** 

**Sharing Options:** 

***

### Opportunity Object 

**Record Storage:**  

**License Requirements:**

**Required Fields:**

**OOTB Lookups:** 

**OOTB Objects That Have Lookups To Opportunity:** 

**Sharing Options:**

***

### Product Object 

**Record Storage:**  

**License Requirements:**

**Required Fields:**

**OOTB Lookups:**

**OOTB Objects That Have Lookups To Product:**  

**Sharing Options:**

***

### Campaign Object

Campaigns are built for and represent marketing campaigns, shows, promotions, webinars, events, etc. It allows you to track the cost of the event, the opportunities generated from that event, the people who went to that marketing event, leads generated from that event, etc. You can also use the parent campaign functionality for large campaigns that have multiple events attached to them (for instance a tradeshow that has 10 webinars and 20 promotional emails and 5 shows) to get visibility into the profitability of the entire marketing campaign.

**Record Storage:** Campaign is an object that is unique in that **it uses 8kb of storage per record** instead of the typical 2kb that most object records take up.  

**License Requirements:** Campaigns are accessible to the **Sales, Service and Partner Licensed** Salesforce users.

**Required Fields:**  
1) Name  

**OOTB Lookups:**  

1) _**ParentId**_ - This lookup allows you to link a campaign to a parent campaign.  
2) **_TentantId (Only relevant if you use pardot)_** - Gives you the ability to associate a campaign to a pardot business unit.

**OOTB Objects That Have Lookups To Campaign:**  

1) Campaign Member
2) Opportunities  
3) [Partner Fund Requests](https://help.salesforce.com/s/articleView?id=sf.networks_market_dev_request.htm&type=5)

**Sharing Options/Considerations:**  

1) For a user to be able to do ANYTHING OOTB (create, edit, delete, transfer) aside from view a campaign, they must have the "Marketing User" checkbox checked on their user record.   
2) If you use Campaign Hierarchies, anyone with access to the parent record can see all statistical campaign data for campaigns lower in the hierarchy.  
3) Campaigns have a unique OWD options where you can give all users in your org FULL ACCESS, as in they can all view, edit, transfer, delete and report on every record. This is uncommon and not typically suggested, but good to know it exists. It also can be private, public read, and public read/write.

***

### Campaign Member Object   

**Record Storage:**  

**License Requirements:**

**Required Fields:**

**OOTB Lookups:**

**OOTB Objects That Have Lookups To Campaign Member:**  

**Sharing Options:**

***

### Asset Object  

An asset represents an item of commercial value that a customer (account or a contact with an associated account) has purchased. Basically anything on of your consumers now actually owns and is relevant for you to track should be housed in this table.

**Record Storage:** The Asset object is sometimes referred to as a magic object because it DOES NOT COUNT AGAINST STORAGE AT ALL! That's right, it takes up 0kb of storage to store asset records... wyld. There is no documentation over this, I was informed by Johann Furmann, could only find this [idea post](https://ideas.salesforce.com/s/idea/a0B8W00000GdpGKUAZ/salesforce-tips-tricks-data-storage) discussing it and tested it myself. Turns out, it's true lol.

**License Requirements:** Asset is an object that is accessible via both Sales, Service, CC, CC+, and Partner license types. It is NOT available for SF Platform licenses. 

**Required Fields:**  
1) Name   
2) AccountId OR ContactId (but the contact must have an associated account record)

**OOTB Lookups:** 
1) **_ParentId_** - Used if there is a parent asset (for instance you have a headset that came with a computer).   
2) **_Product2Id_** - Used optionally if a product is associated with the asset.   
3) **_AccountId (required if ContactId not filled out)_** - used to determine the account the asset is owned by.  
4) **_ContactId (required if AccountId not filled out)_** - Used to determine the contact the asset is owned by.  
5) **_RootAssetId_** - Used to determine the absolute parent of an asset (for instance if the asset is 3 levels deep in the asset parent chain it shows the top level asset).

**OOTB Objects That Have Lookups To Asset:**   
1) Case  
2) Work Order  
3) Work Order Line Items
4) Contract Line Items (requires engagement management being enabled)  
5) Entitlements (requires engagement management being enabled)  
6) Locations (Only relevant for Field Service Lightning)

**Sharing Options:** 
1) Asset has the ability in the OWD to be controlled by parent (contact or account id) or be public read, public read/write, or private, but ONLY if Asset Sharing is enabled in Asset settings in setup! If it's not enabled than access can only be determined by parent object records.  
2) Assets are now what's referred to as a full object (can control its object and field level access in profiles).   

***

### Quote Object

**Quote Overview**

The Quote object allows your sales reps a mechanism to haggle with the customer. If you need a way to provide a variety of pricing options for a customer, quotes are the way to go.  

**Quote Unique Features**  

Quotes have a couple unique features that are worth mentioning:

1) You can sync a quote with its parent opportunity by clicking the "Sync Quote" button on the Quotes record page. Quote syncing keeps products (QLI's & OLI's) sync'd between the two records. You can only have one quote on an opportunity sync'd at a time. More on Quote Syncing [here](https://help.salesforce.com/s/articleView?id=sf.quotes_synch_overview.htm&type=5).  

2) There is an OOTB feature/button that allows you to generate a PDF for a Quote. This is unique to the quote object. You can also setup multiple Quote templates for that PDF generation. More about Quote Templates [here](https://help.salesforce.com/s/articleView?id=sf.quotes_templates_supplemental.htm&type=5).

**Quote Oddities:**  

The weirdest thing about quotes are that the following:

1) Quote syncing, Quote PDFs, and Quote PDF generation are not available on SF Mobile. Also QLI addition and deletion must be one by one on mobile instead of multiple QLI updates at a time.  

2) Quotes have a master detail relationship to Opportunity (in Fall 2023 I believe this will cease to be true/be optional).  

***

### Price Book Objects

![Price Book Objects ERD](/img/CTA_OOTB_Object_ERDs/sales-cloud-product-price-book-data-model.png)  

***

### Opportunity Forecasting Objects  

![Opportunity Forecasting Objects ERD](/img/CTA_OOTB_Object_ERDs/sales-cloud-opportunity-forecasting-data-model.png)


### Enterprise Territory Management Objects  

![Enterprise Territory Management Objects ERD](/img/CTA_OOTB_Object_ERDs/sales-cloud-territory-management-data-model.png) 