### Standard Objects Where Quick Actions are Not Available

**Exp Cloud Notes:** Quick Actions are available in exp cloud sites, but must be added to the page layouts, dynamic actions are not available.  

**Disclaimer:** These objects can still use buttons and links, but the flow for those are different. They can't pop modals, just redirect to another page.  

1) Order Products  
2) Opportunity Products  
3) Quote Line Items  
4) Account Team Member  
5) Activity (This can be added on events and tasks however)  
6) Campaign Member  
7) Entitlements  

***

### Standard Objects that can have Queue's Own Them  

1) Cases   
2) Leads  
3) Tasks  
4) Contact requests  
5) Orders  
6) Service contracts  
7) Knowledge articles  
8) All Custom objects  

***

### Standard Objects that can't have their Object CRUD updated in Profiles or Perm Sets

**Notes:** These are all TRUE OOTB details in a master detail relationship. More of these exist for other SF products but these are the main ones for Sales and Service. Additionally any updates made to these objects will fire triggers (and flows) on it and its parent due to all of their parents having rollup summary fields on them.  

1) Campaign Member  
2) Order Product  
3) Opportunity Product  
4) Quote Line Item  
5) Price Book Entry  
6) Account Team  
7) Work Order Items  

***

### Standard Objects thats records take up Zero Storage Space  

1) Asset  
2) Products  
3) Pricebooks  
4) Pricebook Entry  
5) All of the privacy and consent cloud objs  

***

### Standard Objects that can't be used in a Lookup Relationship Field  

1) Pricebook Entry (PBE)  
2) Campaign Member  
3) Account Team Member  
4) Account Contact Relationship
5) Case Team Member
6) Opportunity Team Member

***

### Standard Objects that can use Dynamic Forms  

**Note:** Dynamic forms are not available in experience cloud sites.

1) Accounts  
2) Contact  
3) Person Account  
4) Opportunities  
5) Leads  
6) Cases  
7) Custom Objects  

***

### Standard Object With Special Team Sharing  

1) Account (Account Teams)
2) Opportunity (Opportunity Teams)
3) Case (Case Teams)
4) Account (Account Contact Relationship) - This is particularly important for community users and sharing sets using related account

***

### Important Pricebook, Product & PBE Sharing Information  

1) Pricebook Entry visibility is controlled by Pricebook  
2) Product Sharing rules only work for guest users, they are not available to normal users  
3) Pricebook sharing can only be done via the sharing button, they do not support sharing rules
4) None of these objects have a share table in Salesforce (ex: Pricebook2Share does not exist)  
5) Restriction of product visibility must go through pricebooks or by using LWC  
6) Must have a standard pricebook entry for every currency for a product before you can add that product with a particular currency to a custom pricebook
7) Triggers not allowed on PBE    

***

### Standard Objects That Can Be Controlled By Parent  

1) Asset  
2) Contact  
3) Order  
4) Activity (Tasks & Events)

NOTE: Contract also has an odd master detail relationship to Account that very closely mimics the controlled by parent setup but this cannot be altered like those listed above. 
