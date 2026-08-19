---
title: "Integration Patterns"
---

# Integration Patterns 

### Integration Styles

**_File Transfer_** - The File Transfer integration style is pretty simple, basically one application produces a file, a subsequent system(s) will pick up that file, transform the data and then load it into its system. Sometimes this integration style is challenging due to the fact that some systems cannot produce files in a standard format like JSON or XML, especially older legacy systems. There are also other drawbacks to this approach, such as timing and the fact that it's a snapshot of data in a system at a specific moment in time. In most scenarios it isn't a great idea to use this technique as it cannot hold up to current consumer expectations for receiving their data. That said there are still a one decent scenario for using this approach, replicating data from one system to another for reporting purposes when a system does not support API's and doesn't grant you access to it's data via any other forms.  

**_Unified Data Store_** - This integration style basically has multiple applications rely on a single common database that they all interact with. In today's world this approach isn't really used and likely shouldn't be used, but there are places experimenting with it again due to the concept of data lakes. The problem with this approach is the dependencies between the applications and the unified database, it can also easily create bottlenecks and can be a very expensive solution since many applications are not inherently built to work with a database outside of their own.  

**_Remote Procedure Invocation_** - Remote Procedure Invocation or RPI is a style that is used when you want to call a specific piece of logic housed in another system. Say you have two systems and system A is responsible for leads for new franchises and system B is responsible for generating and sending those leads documentation on how to become a franchise if they are qualified. System A would reach out to System B and just call the exposed method for generating and sending the documentation for those leads. This is most often done via web services.  

**_Messaging_** - Messaging is an asynchronous integration style where two or more systems are tied together via a message bus, which has channels (virtual pipes) that connect the message sender to the message receiver. It uses message routers to determine how to navigate through the channels to deliver the message to the right receiving system. In this style the systems sending and receiving do not have to be up at the same moment in time, also due to the asynchronous nature of this integration style it lends itself to both scalability and flexibility. 

---

### Integration Patterns

Below are a list of integration patterns that you must know how and when to use when presenting your CTA solution (especially the system architecture diagram). MAKE SURE to use the terms listed below, these are the terms they expect to hear when you are presenting, other non-SF sanctioned terms will likely be questioned more than the terms below.  

***

_**Remote Process Invocation (RPI) - Request Reply:**_ 

**Timing:** Synchronous

**Pattern Explanation:** Salesforce invokes a process on a remote system, waits for completion of that process, and then
tracks state based on the response from the remote system.

**When to Select it:** When you need to call out to an external system from SF and wait for it to reply with some data, maybe to update a record. Typically you would only do this in a scenario where you were working with a single record, but you could implement for several hundred potentially. If you get into the thousands of records being sent and updated a different pattern would be more appropriate.  

**How to Implement in SF:** You can potentially use [enhanced external services](https://www.youtube.com/watch?v=xZJqp0DPvcI) to achieve this declaratively via a flow, but you need to ensure you know the limitations of this service (outlined on page 14 of the SF Integration guide linked below). You could also use a custom LWC, Aura or VF Page to do this callout and wait, however you need to ensure incorporate continuations in the event there is latency when calling out to the external service.  

**Notes:** Do not forget to include an error handling strategy, have your solution check for existing records in the system so no dupes are made, and that the remote procedure/api is [idempotent](https://www.restapitutorial.com/lessons/idempotency.html). Do NOT FORGET that this all must be facilitated through middleware.
  
***

_**Remote Process Invocation (RPI) - Fire and Forget:**_  

**Timing:** Asynchronous

**Pattern Explanation:** Salesforce invokes a process in a remote system but doesn’t wait for completion of the process.
Instead, the remote process receives and acknowledges the request and then hands off control
back to Salesforce.

**When to Select it:** When you can callout to an external system and it is not required for anything within SF to wait on that callout to complete.

**How to Implement in SF:** The best course of action would be to use platform events here unless there is a legitimate reason not to (like the external system can't or won't support it). Platform events were basically made for this and can be used 100% declaratively or via apex if the customization is needed. You could also use outbound messaging in SF as well  


**Notes:**  Don't forget that platform events have replay ids to use for retry mechanisms/error handling mechanisms in external systems. Platform Events are stored for 72 hours, so the retry mechanism must handle its issue within that time period or the PE will be lost. External services must integrate via the [Streaming API](https://developer.salesforce.com/docs/atlas.en-us.api_streaming.meta/api_streaming/intro_stream.htm) for PE's, you need to be aware of [its limits](https://developer.salesforce.com/docs/atlas.en-us.196.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_streaming_api.htm). Make sure you are familiar with what [CometD](https://cometd.org/about/) and [Long Polling](https://javascript.info/long-polling) are.  

**Additional PE Notes:**  There are two options when setting up a PE in SF, you can have your PE's publish immediately or only publish after commit. If a subscriber (application outside of SF typically) is reliant on a record or records being stored in the system (for instance you send the sub a contact record and it expects to be able to go back and find that contact record) make sure to use publish after commit for your PE. If your subscriber is completely independent from the publisher and does not rely on data being successfully created in the publishers environment, feel free to use publish immediately.  


***

_**Batch Data Synchronization:**_  

**Timing:** Asynchronous

**Pattern Explanation:** Data stored in Lightning Platform is created or refreshed to reflect updates from an external system,
and when changes from Lightning Platform are sent to an external system. Updates in either
direction are done in a batch manner.

**When to Select it:**  You'll want to select this pattern when moving large chunks of data from one system to another, for instance loading order data from an external system in SF every week, or when you need to keep an external system up to data with any changes to data in your salesforce instance (a data warehouse for instance).

**How to Implement in SF:** If Salesforce is the master of the data (the source of the data) typically the best approach is to use CDC (Change Data Capture), it's an OOTB tool that allows you capture any changes to records on your objects. It also works via the streaming api and functions similar to PE's just with fewer customization options. If an external system is the master, than an ETL tool of some kind (like Mulesoft) is in your best interest to use here in coordination with the SF Bulk API.  

**Notes:**  When importing large amounts of data with master-detail relationships make sure to group (in batches) records by their parent id (for instance group contacts by the accounts they are attached to), failure to do so will likely result in record locking issues when importing data. You need error handling in this scenario. You should try to have these batch operations take place during a specified window of time when users are not using the system, if that's not possible (your business is global 24/7) it's best to use data segmentation techniques to chunk updates to make it less likely that record locking and errors occur.

**Additional LDV Notes:** Make sure you are familiar with LDV concepts when you find yourself using this pattern. Things like skinny tables, custom indexes, the bulk api and pk chunking. These will likely come into play or you may be asked about them in QA. This is a decent trailhead over LDV concepts in SF: [LDV Trailhead](https://trailhead.salesforce.com/content/learn/modules/large-data-volumes)

***

_**Remote Call-In:**_  

**Timing:** Synchronous or Asynchronous

**Pattern Explanation:** Data stored in Lightning Platform is created, retrieved, updated, or deleted by a remote system.

**When to Select it:**  If you have an external system that needs to update data inside Salesforce after an event takes place in it. For example, say you have an external ERP system (maybe SAP) and that system updates an order as shipped, maybe that needs to also inform an order record in Salesforce that it has shipped (update the SF record). In instances like this we should use the remote call-in pattern.

**How to Implement in SF:** The best way to implement the remote call-in pattern is either by using the REST API, the SOAP API, or for bulk transactions, the Bulk 2.0 API. The REST API is best for single record transactions (though it can update up to 200 records in one transaction thanks to the [Composite API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_composite.htm)). The SOAP API is best used if the system either only has the capability to do SOAP transactions, or you need to update thousands of records at a time. The Bulk API is best used if you need to update 2000 records or more in one go.

**Notes:**  Don't forget for the SOAP API you can/typically must either generate an Enterprise or Partner WSDL. A Partner WSDL is more abstract (useable in any org), whereas an Enterprise WSDL is more org specific. You should know when to use which ([you can find more on WSDL selection here](https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_quickstart_intro.htm)). Also it's important to remember that when querying for data using the SOAP or REST API you will only have up to 2000 records returned to you without using the queryMore functionality, this is why the Bulk API is best for transactions over 2000 records. Also, while the SOAP API can update thousands of records, it will only update 200 records per transaction.  

Know your [API Limits](https://developer.salesforce.com/docs/atlas.en-us.242.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm). Salesforce will start rejecting you if your volumes are too large (among other things) so make sure you pick the right approach based on volume. Also DO NOT forget that the REST and SOAP API's can publish platform events, that is often very beneficial and desirable in scenarios where there is variable transaction volume, make sure you know [platform event limits](https://developer.salesforce.com/docs/atlas.en-us.242.0.platform_events.meta/platform_events/platform_event_limits.htm) as well.

***

_**UI Update Based on Data Changes:**_    

**Timing:** Asynchronous

**Pattern Explanation:** The Salesforce user interface must be automatically updated as a result of changes to Salesforce
data by other users elsewhere in the system.

**When to Select it:**  Say you have an experience cloud site that allows users to register and pay for an event, however their card gets declined and they call into the support desk to help them process their payment. It could be helpful for the support rep to have a custom UI on the case record page that shows that order information for the user and have that custom UI update to show them how/why each payment was declined the moment it happened. That way when the customer does something in the community, the support rep can instantly know what happened instead of fishing through pages to find information.

**How to Implement in SF:**  The best way to implement this these days in SF is to use platform events in coordination with an LWC that uses the empAPI. This will allow the LWC to subscribe to the platform events and get updated immediately on the LWC as soon as they come in.

**Notes:**  If you're unfamiliar with the empAPI you should [read up on it here](https://developer.salesforce.com/docs/atlas.en-us.api_streaming.meta/api_streaming/code_sample_lightning_cmp.htm). Also make sure you understand how to setup and use platform events.

***

_**Data Virtualization:**_   

**Timing:** Synchronous

**Pattern Explanation:** Salesforce accesses external data in real time. This removes the need to persist data in Salesforce
and then reconcile the data between Salesforce and the external system.

**When to Select it:** If you want/need to display data in an external system so that users can view it without leaving the platform and without storing it on platform, this is the pattern for you. 

**How to Implement in SF:**  The simplest, most OOTB approach is to use Salesforce Connect (or the cross org adapter if connecting to another SF instance). This allows you to display the data via external objects, query for data, as well as create, update and delete data. However, Salesforce Connect is expensive and may not be necessary if you just need to view small select portions of data from another system or they would like to fully login to and use another systems functionality. It may be more justifiable to use [a mashup](https://developer.salesforce.com/docs/atlas.en-us.salesforce_large_data_volumes_bp.meta/salesforce_large_data_volumes_bp/ldv_deployments_techniques_using_mashups.htm), which just means you either use a custom LWC to callout and retrieve that data for viewing and/or editing, or you use a [Canvas App](https://developer.salesforce.com/docs/atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_intro.htm) to actually display the system within SF. 

**Notes:**  Please be aware of the MANY limitations of External Objects/Salesforce Connect. You can see most of them [here](https://help.salesforce.com/s/articleView?id=sf.platform_connect_considerations_compatibility.htm&type=5) and [here](https://help.salesforce.com/s/articleView?id=sf.platform_connect_considerations_reports.htm&type=5) and everything else [here](https://help.salesforce.com/s/articleView?id=sf.platform_connect_considerations.htm&type=5). The most significant limitations are that there is NO WAY STILL to do record level sharing for external objects, if you have access to the object, you have access to ALL OF ITS RECORDS! Also, if you create reports for these objects, you need to make sure that they will not hit the OData callout limits of 20k per hour, that sounds like a lot, but if you have thousands of users using thousands of reports it may not be.

*** 

Additional Notes:
[Salesforce's Official Guide to Integration Patterns](https://github.com/Coding-With-The-Force/CTA-Study-Guide/blob/main/CTA_Useful_Documentation/Useful_Salesforce_Documentation/integration_patterns_and_practices.pdf)

---

### Integration Tools

**_Point to Point Integration_** - Disclaimer, this approach should **NEVER BE PRESENTED IN A BOARD!!** You should utilize middleware like Mulesoft always, but it's important to understand why you shouldn't use it, so let's go through that.

Problems with P2P Integration:

1) The amount of unique channels established between systems can become enormous. To find out how many P2P integrations may become necessary between systems use the formula N(N-1)/2 replacing N with the number of systems being integrated together with P2P integrations. With just 5 systems we get 10 integrations, with 10 systems we get 45 integrations, so you can see the number exponentially grows with each system in the P2P integration chain.

2) If a system becomes deprecated and another takes its place, it can be very hard to switch all P2P integrations to that new system. Each one could have varying business logic, outdated security standards that the new system won't support, etc. It can become very time consuming and costly.   

3) Each P2P integration needs its own retry mechanisms and error handling. As opposed to a hub and spoke model (middleware) where you could just create this once for all integrations with the system being connected to.

4) Reliability is normally substantially lower for P2P integrations. For instance if you had a chain of systems integrated System A -> System B -> System C the reliability could be calculated by using System A's Reliability * System B's Reliability * System C's Reliability. So if Sys A's reliability was .7 and Sys B's reliability was .8 and Sys C's reliability was .65 then the reliability would be .7 * .8 * .65 = .364. Not super ideal. The hub and spoke model significantly increases reliability. 

As you can see by the above points. It's not a great idea to go with a P2P integration solution, especially for a larger organization. It doesn't scale well with your business, it can be very unreliable and it can lead to some highly dependent applications that slows down technological change in your organization.


**_Extract, Transform, Load (ETL)_** - The ETL method of integration is basically when data is pulled from one or more data sources and then transformed into the format it needs to be to be loaded into one or more systems. After transformation it is then loaded into one or more systems. It's kinda like file transfer, but has some key differences. The basic principles of ETL are as follows:

1) Access and then extract the data from one or many data sources.  
2) Transform the data by formatting the data, validating the data, cleansing the data, etc  
3) Access the system or systems you are loading the data into and then load the data into them. 

Most ETL jobs are scheduled jobs that run on specified intervals, however, they can also be triggered using an HTTP listener in some cases as well.  
Some of the more popular ETL tools available for SF are [Informatica PowerCenter](https://www.informatica.com/), [Informatica Cloud](https://www.informatica.com/), [Talend](https://www.talend.com/), [Jitterbit](https://info.jitterbit.com/Request-your-Free-Data-Loader.html) and [MuleSoft](https://www.mulesoft.com/). 

 
**_Enterprise Service Bus (ESB)_** - ESB is a method of data integration where applications are integrated via a communication bus. All applications only communicate with the bus instead of each other.


  

    