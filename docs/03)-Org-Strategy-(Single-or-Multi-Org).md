### The Importance of Org Strategy  

Not only is this important in practice, but if you get this wrong on your CTA exam there is often little you can do to recover from it. If you have to switch the org strategy during your QA session it is often impossible to right that wrong as too many pieces come falling down in your data model and system architecture strategies. You need to be very sure about your org strategy before proceeding with anything else in your scenario.   

In most scenarios you will likely have a single org scenario, but definitely not all. Start with a single org approach and adjust when you find something in the requirements that would force you into a multi-org situation.

***

### Single Org Considerations  

Below are a list of pros and cons for a single org strategy.  

Pros:  

* Users can collaborate across teams on the same set of records easier.  
* Unified processes (such as sales or service processes) are easier to introduce.  
* It is easier to build reports because all of the data resides in the same SF instance.  
* Security is all managed in the same place  
* Sharing is much easier to manage  
* Users would only need one SF license and only one set of login credentials  
* Integrations are easier to maintain/deal with if we only have one org  
* Easier to build a more robust view of the custom (360)  

Cons:  

* Different regulations for different countries may make this difficult in a multi country SF org  
* The single org can get complex fast with many business units in it  
* You are more likely to potentially hit governor limits  
* If you do not design your code/config carefully delivery time for new stories could start to slow down.  
* Different teams could end up breaking each others functionalities without proper oversight  

***

### Multi-Org Considerations  

Below is a list of multi-org pros and cons.

Pros:  

* Fewer chances to hit governor limits  
* Innovation and time to market are often faster due to the orgs being independent  
* Conflicts between business units is lower  
* Less complexity in each org  
* Easier to administer  
* Easier to facilitate different regulatory requirements  
* More flexible release cycle schedule  

Cons:  

* Challenging to get unified processes between orgs (sales and service processes)  
* Limited collaboration capabilities across orgs  
* Will become challenging to maintain the integration interfaces (either between the orgs or between the orgs and external systems they integrate with)  
* Need to introduce SSO to make login experience better for users that have access to more than one of the orgs. Also need more licenses for those users  
* Third party costs and licensing may increase if used in multiple systems  
* Must use Tableau, CRM Analytics or another alternative to merge data between systems for reporting  
* Potentially multiple release strategies and tools  