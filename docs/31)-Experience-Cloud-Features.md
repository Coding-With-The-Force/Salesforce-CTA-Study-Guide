### What is Experience Cloud  



***

### Experience Cloud Licensing  

There are 6 license types for exp cloud users. There is more info on each one in the Licenses section of this wiki:  

1) Customer Community - If your users login a ton, they don't need access to reports, and sharing sets are sufficient for their needs, this is the choice to go with. It's also the cheapest option.  
2) Customer Community Login - Same as above, but should be used when users infrequently login (like maybe 5-10 times a year or less).  
3) Customer Community Plus - If users login a ton and they either need access to reports & dashboards, or more advanced sharing mechanisms, this is the license to choose.  
4) Customer Community Plus Login - Same as above, but should be used when users infrequently login (like maybe 5-10 times a year or less).  
5) Partner User License - If users need to collaborate on the following OOTB objects: Leads, Opportunities, Campaigns, Quotes and/or Market Development Funds, they have to have a Partner User License. Make sure to think long and hard about this as these are very expensive licenses compared to the two above.  
6) Partner User Login License - Same as above, but should be used when users infrequently login (like maybe 5-10 times a year or less).


***

### Guest User Sharing  



***

### Sharing Sets  

Sharing Sets are THE ONLY sharing option available for Customer Community (CC) licenses users. They give you the ability to share records that a CC user doesn't own with them via a record related to their user (Account, Contact, Related Account (ACR), Manager Account & Manager Contact). You can only setup ONE sharing set per object! You can also use this for CC+ & Partner users.  

***

### Sharing Groups  

Sharing Groups are a mechanism to share records owned by Customer Community (CC) members with internal users and CC+ & Partner users. One each sharing set you can add a sharing group where you can share the records in the sharing set with any internal user as well as any external user with the same parent account.

NOTE: These cannot be used with guest users

***

### Exp Site User Roles

CC+ & Partners can have up to 3 roles available to them (roles are not used for CC licensed users). You can set up how many roles are available to CC+ and/or Partner in Digital Experiences by specifying whether they will have 1, 2, or 3 roles. The three roles made available by default are the following: Partner Executive -> Partner Manager -> Partner User (for CC+ replace Partner with Customer). You can alter, on a site by site basis, the name of the first part of the role. For instance you can change the name "Partner" to "Taco" for a particular site, and then your roles would be: Taco Executive -> Taco Manager -> Taco User.   

When you convert a Contact record into an experience cloud site user, you will need to manually select one of the roles for your user.  

It's important to note that for each Account a new group of roles gets created, so for instance if you had a group of exp site users that were all tied to the "Taco Bell" account they would fall under the role "Taco Bell Partner User", and if you had another group of users tied to the "Burger King" account they would fall under the "Burger King Partner User" role.

CC+ & Partner users account specific roles fall beneath the role of the first internal user that converted the first contact for that account into an experience site user. So for instance if an internal user that had the role of "Sales Associate" was the first user to convert a contact that was associated to the account "Taco Bell" into an exp site user, the "Taco Bell Executive", "Taco Bell Manager", and "Taco Bell User" roles would all be created underneath the "Sales Associate" role in the role hierarchy.    

**NOTE:** Be wary of the number of roles you would be creating when suggesting roles. More than 2 million roles will cause performance issues at which point Account Role Optimization may be considered, as well as alternative licensing/setup options for your users.  

***  

### Account Role Optimization (ARO)  

If you have multiple roles enabled for your CC+ or Partner users, when a new contact is enabled for the first time for an account, up to 3 new roles are automatically created for those users. If you are anticipating you will likely have many CC+ or Partner users and are concerned that you might meet the 50k role limit (which can be pushed to an absolute maximum of 500k roles), you should consider using ARO. ARO only creates a single role for an account until multiple users are activated for that account. Meaning you can cut back on unnecessary roles until they actually become necessary.  

***

### Exp Site Translations  



***

### Super Users  

Super User Access is available to CC+ & Partner licensed users in an experience cloud site. When this feature is enabled it allows users to view and edit (based on object permissions) all cases, leads, opps, and custom object records of all users in the same role as them, as well as any roles beneath them. 

***

### Topics In Exp Sites  



***

### CMS in Exp Sites  



***

### Account Relationships  

Account Relationships allow you to share object records from one accounts users to another accounts users. This feature only is available to Partner & CC+ licensed users. You can share the following objects records that are associated with the accounts:  

1) Order  
2) Contact  
3) Account  
4) Campaign  
5) Case  
6) Lead  
7) Opportunity  
8) Partner Fund Allocation  
9) Custom Objects     

To set this up you'll do the following:   
1) Go to Settings -> Digital Experience Settings -> Check the "Enable Account Relationships" checkbox.   
2) You'll then go to your account rec, place the account relationships related list on the page and create a relationship.    
3) Finally in Setup you'll go to "Account Relationship Data Sharing Rule Settings" and create the sharing rules for you account relationship records on an object by object basis.   

***

### Delegated Account Management  

This feature allows you to give external users (CC+ & Partner) the ability to manage their account members and their account brand information. Basically they get the following capabilities:  

1) Create and Edit Users/Members  
2) Reset a Users Password  
3) Activate or Deactivate a User  
4) Upload Brand Logos  
5) Create Co-Branded Emails 
6) Create Marketing Campaigns  

You allow users this functionality by assigning the permission "Delegated External User Administrator" via a profile or perm set.  

***

### External Managed Accounts  

This allows you to designate a user (CC+ or Partner) the ability to manage users on an account that is not directly tied to them. Maybe someone is the owner of one business and a co-owner of another, they might wanna manage the users for both businesses despite only being linked to one of them directly on their contact. This is an OOTB way to do just that.   

To enable this feature do the following:   
1) Go to a profile or perm set and enable the "Manage External Users" Permission.  
2) On that same permission set or prof enable read access to the "External Managed Accounts" Object  
3) Add the External Managed Account object to the related lists on Account page layouts.  
4) Give the user the "Account Switcher User" permission on their user record.  
5) Put the Account Switcher component in a community.   

[More info here](https://www.learnexperiencecloud.com/s/article/External-Managed-Accounts)
***

### Approval Processes in Exp Sites  

CC+ & Partner users can be assigned as approvers in an approval process or part of a queue that is assigned as an approver. Everything else works exactly the same as any other standard approval process setup.    

***

### Content Moderation



***

### Experience Cloud Gamification



***

### Experience Cloud on Mobile  



***

### Self-Registration & Login Pages   



*** 

### Login Discovery Handlers  



***

### Features not available in Exp Sites  

Below is a list of internal SF features that cannot be leveraged in exp sites.

1) Dynamic Forms
2) Dynamic Actions