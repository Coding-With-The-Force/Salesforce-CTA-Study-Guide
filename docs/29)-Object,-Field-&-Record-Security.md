# Record Security  

### Internal User Implicit Sharing

MAKE SURE TO READ THIS THOROUGHLY! THERE ARE MANY VERY INCORRECT DEFINITIONS OF IMPLICIT SHARING EVERYWHERE! EVEN IN SF DOCS!   

Implicit sharing is sharing that is managed/done automatically behind the scenes in Salesforce. This sharing is ONLY relevant to the following standard objects: Account, Case, Contact, Opportunity, Contract, and Order.

There are two types of implicit sharing, parent implicit sharing and child implicit sharing. We will go over both below.  

**Parent Implicit Sharing** -  Parent implicit sharing is when a user gains access to an account parent record (this ONLY applies to accounts) because of their access to an accounts child records. You gain parent implicit shares in the following ways for the following objects ONLY!  

1) Contract - If you are the OWNER of a contract record, you will gain access to the parent account.  
2) Order - If you are the OWNER of an order record, you will gain access to the parent account.  
3) Contact - If you have at least read access to a Contact you will gain access to its parent account.  
4) Opportunity - If you have at least read access to an Opportunity you will gain access to its parent account.  
5) Case - If you have at least read access to a Case you will gain access to its parent account.

That's it, there is nothing else for parent implicit sharing, I have tested this very thoroughly with all standard Sales & Service Cloud objects.  

**Child Implicit Sharing** - Child implicit sharing is when a user gains access to child records (Contacts, Opportunities, and Case records ONLY!) of a parent Account record (this ONLY applies to accounts) when they are the OWNER of the account record. Unlike parent implicit sharing you actually have the ability to turn the object access on and off via your roles. In each role you can determine how you want child implicit shares distributed on an object by object basis for Cases, Opps, and Contacts (this is also the case in territory hierarchies).  

NOTE: These child implicit shares only take place if you change Contacts, Opportunities and Case OWD record access from "Controlled By Parent". Otherwise these records get shared in a similar way to a master detail relationship, with the exception that they can have different owners than their account master record.

DISCLAIMER: I believe a ton of people also include contracts, orders and assets in child implicit sharing because by default in sharing settings, orders and assets are set to "controlled by parent" which means record access for those objects are controlled by the Account record they are tied to. Additionally, contracts is "controlled by parent" as well, but you cannot alter this setting in "sharing settings" like you can for orders and assets. However this is completely different from child implicit sharing, it works a bit closer to master detail relationships, with the exception that these records can have different owners than their parent records (which is not normally possible with normal master detail relationships).  


***

### External User Implicit Sharing

There are two types of implicit sharing for experience site/portal users. They are the following:

1) An experience cloud user (CC+ or Partner) can see all contacts, that have been enabled as community users, associated to the account their user is linked to. If you want them to be able to see all contacts linked to the account, regardless of whether they are community users, you must enable that in the exp sites settings: Setup -> Digital Experience -> Settings -> Check the box ""Allow users to see contacts that have not been enabled for partner or customer accounts".

2) If an experience cloud site user (CC+ or Partner) is a contact on a case, then the user will gain read and write access to it. You can turn this off in Setup -> Sharing Settings -> uncheck the "Grant site users access to related cases" checkbox. 

**NOTE:** I have tested these for CC users, they DO NOT work for them, this is super important as you will need to either grant them visibility via sharing sets or ownership instead of implicit shares.

***
### Master-Detail Sharing Considerations  

Objects with a master-detail relationship will have their record sharing determined by their parent record (master record). A user will not be able to see a child record (detail record) unless they can see the master record. For objects that have 2 master detail relationships, a user must have access to both master records to be able to view the detail record.

Child objects (detail objects) will also always be controlled by parent in the OWD, and you cannot create sharing rules or sharing sets for them. 

***
### Explicit Sharing  

***

### Roles  

***  

### Team Sharing   

***

### Territory Sharing  

