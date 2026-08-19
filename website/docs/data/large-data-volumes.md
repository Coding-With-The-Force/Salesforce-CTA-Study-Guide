---
title: "Large Data Volumes"
---

### What Qualifies as LDV? 

Typically anytime you see an object that will hit or exceed 1 million records it should be pointed out as an LDV object. Salesforce has a recommendation of no more than 50 million records per object, so when you see an object has or very likely will hit 50 million records you absolutely need to provide a way to offload/archive that data.  

NOTE: If you have LDV on the Contact and/or Account object and those records are associated with an experience cloud user I would NOT suggest archiving them. Instead I would state that you would monitor them and look out for any account or ownership skew, and any performance slowdowns due to the large volume, and leverage custom indices and skinny tables to deal with any slowdowns should they occur. Archiving a contact related to a user is a dangerous road to go down unless it's absolutely mandatory.      

***

### Skinny Tables  

Skinny tables are a mechanism you can deploy to speed up read only operations on tables with millions of records. For instance, if your contact object has 100 million records in it, and you notice that reports and list views are loading slower due to that volume, you can contact Salesforce support to setup a skinny table for your object to improve your performance in those read only areas.  

There are drawbacks to skinny tables however, for instance, if you add a new field to your object and you add that to your list views, reports, etc, your skinny table will not be automatically updated to include that field, you must contact SF Support to have them manually add that new field to the skinny table.   

Additionally Skinny Tables can only be used on the following objects:  

1) Account  
2) Contact  
3) Opportunity  
4) Lead  
5) Case  
6) Custom Objects  

And skinny tables can only contain the following field types:  

1) Checkbox  
2) Date  
3) Date and time  
4) Email  
5) Number  
6) Percent  
7) Phone  
8) Picklist (multi-select)  
9) Text  
10) Text area  
11) Text area (long)  
12) URL   

***

### Standard and Custom Indexes  

Understanding how both standard and custom indexes work is important, especially when it comes to LDV. There is an excellent SF Help article that goes all of the details you'll need to understand for your CTA Board here: [Standard and Custom Index Docs](https://developer.salesforce.com/docs/atlas.en-us.salesforce_large_data_volumes_bp.meta/salesforce_large_data_volumes_bp/ldv_deployments_infrastructure_indexes.htm)


***

### Account Skew  

Account Skew is a huge potential issue in many LDV scenarios. Having more than 10k records associated with a single account can cause record locking and sharing issues, so you need to know that it exists and how to avoid it when approaching LDV in your CTA Scenarios. Here is a good Salesforce dev blog post covering what Account Skew is and how to potentially avoid it: [Account Data Skew Post](https://developer.salesforce.com/blogs/engineering/2012/04/avoid-account-data-skew-for-peak-performance)


***

### Owner Skew  

Ownership data skew is similar to account data skew in that, if you have more than 10k records associated to a single user in your Salesforce system you are likely to run into performance problems specifically around sharing calculations. For instance, if a user owns 10k records and moves from one role in the role hierarchy to another, the sharing recalculations for those records will likely take much longer than normal.

You can find more details on ownership skew and how to avoid it here in this SF Help Doc: [How to avoid ownership skew](https://developer.salesforce.com/docs/atlas.en-us.draes.meta/draes/draes_group_membership_data_skew.htm) 

***

### Data Warehouses

If you have enormous amounts of data constantly being added to a particular object (or objects) in Salesforce, you may want to consider implementing an archival process for that data when it becomes irrelevant to the current system, but important to maintain for historical purposes. In these instances you'll want to make sure to point out that you will work with the data steward and data custodians that are part of your governance board to come up with an archival schedule for these LDV objects. You can read more about what data warehouses are and when you might want to implement them in a scenario here: [Data Warehouse Info](https://developer.salesforce.com/docs/atlas.en-us.draes.meta/draes/draes_group_membership_data_skew.htm)