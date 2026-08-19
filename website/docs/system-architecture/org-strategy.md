---
title: "Org Strategy (Single vs Multi-Org)"
---

### The Importance of Org Strategy  

In practice this is incredibly important to understand and get right. Making sure you understand when and why you would choose a single or multi-org is incredibly important when making a decision for the business you are working on behalf of, however, on the exam it is extremely unlikely you will be given a multi-org scenario. There are no practice exams that feature multi-org scenarios, and frankly I think they would be far too complex to solve for in a 3 hour sitting (the length of this exam), so I highly doubt you will see them for the exam. That said, you STILL MUST KNOW HOW TO JUSTIFTY YOUR SINGLE OR MULTI ORG DECISION and you need to discuss why you chose a single org approach for your solution! If you do not you will miss critical points that may cost you the exam. 

***

### What To Present on Your CTA Board for Org Strategy   

While technically optional, on the CTA board I would strongly suggest you to have a lucid chart tab that covers both a brief overview of your CTA scenario as well as your proposed org strategy and why you chose it. It should list all of the reasons with supporting information from the scenario as to why you believe your proposed org strategy is right for the customer. (This is also covered/discussed in the "01)-The-Diagrams" section of this guide).   

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
* Easier to build a more robust view of the customer (360)  

Cons:  

* Different regulations for different countries may make this difficult in a multi country SF org  
* The single org can get complex with many business units in it  
* There is a potential for larger orgs to potentially hit governor limits  
* If you do not design your code/config carefully delivery time for new stories could start to slow down.  
* Different teams could end up breaking each others functionalities without proper oversight and a good environment setup/ ci/cd setup.    

***

### Multi-Org Considerations  

Below is a list of multi-org pros and cons (This is not comprehensive, but lists some of the major considerations that would be valuable to research and touch on in an exam scenario, and consider in a real life scenario).

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