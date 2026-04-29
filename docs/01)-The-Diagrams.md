### The Important Diagrams

When presenting your solution to the CTA Board there are five major diagrams that you must draw for your solution. When creating these diagrams it's important to remember that they are there to assist you in explaining your solution. When you are creating them try to make think about how they all weave together and how you can speak to your solution through them. The 5 major diagrams are listed below.

***

### 1) Actors (User Types) and Licenses Diagram  

This diagram is used to communicate the required Salesforce feature and third party licenses for each user type and what the different user types will do in the system.  
     
_**The purpose of this diagram is the following:**_  
* This allows for an easy understanding of what each user type will be doing in the system and to easily justify their licenses.  
* It is required to include all user types mentioned in the scenario, include all required license types (including feature and 3rd party).  
* This should explain each users role in the system (what their primary function is ex: Sales User, Marketing User, etc). It should answer what these users are doing in the system.  

_**Make sure to consider the following when creating your diagram:**_  
* Include all actors/user groups mentioned in the scenario.  
* Include all required licenses each actor will need. This includes standard, feature and third party licenses. Do not forget to include community actors and licenses and be careful with them.  
* Use the best justified technical solution for these licenses, DO NOT try and cut costs.  
* This should ideally be created using a standard "Actors and Use Cases" diagram, but can just be a bullet point list with the user types and a sub list with their activities to reduce the time spent on it.  

**Example Actors and Licenses Diagram (Need to create):**

___

### 2) The Data Model Diagram (ERD)  

This Diagram is the MOST CRITICAL diagram to get right on the exam. Basically everything hinges on it. This is basically a simplified ERD.  

**_The purpose of this diagram is the following:_**  

* Identifies the custom versus standard objects used in your solution and your planned usage of each of them. Do NOT forget that some standard objects come with pre-built functionality (you need to know them in and out) AND DO NOT FORGET that certain licenses have both standard and custom object limitations. Do not forget about these when applying licenses to actors in your Actors and Licenses diagram or when designing here.    
* To identify Large Data Volume Objects (LDV). You must make sure to label objects that are slated to house millions of records on your diagram.  
* This should also highlight your sharing and visibility requirements. It is crucial to get these points across in this diagram. You need to label an objects OWD settings (Private, Read, Read/Write), whether or not there is a master detail relationship, and who the record owners will be.  
* This data model should support your reporting strategy. It should help make it clear where reporting data is coming from.  
* A solid ERD is key to producing a solid integration strategy.  

**_This Diagram Must Include the Following:_** 
 
* Relationship types (Master-Detail or Lookup)  
* Cardinalities (one to many, many to many, etc)  
* Object Type (Standard vs Custom vs External)  
* OWD (Org Wide Defaults) for each object  
* Mark LDV (Large Data Volume) objects and provide the math to justify it  
* Record Ownership (Who is going to own the records of an object)
* Just showing the key fields on your ERD should be sufficient for the board, don't need to list every single one  

**Example Entity Relationship Diagram (ERD) (Need to create):**

***

### 3) The System Landscape Diagram  

The system landscape diagram will help you illustrate the different systems included within your solution and their relationships with one another. 

**_The purpose of this diagram is the following:_** 

* To articulate what systems will be in use and how the various systems in your CTA scenario will work together
* This diagram should show/illustrate how data flows through the systems involved in your CTA scenario

**_This Diagram Must Include the Following:_**

* It should contain all systems involved in the architecture including third party systems such as appexchange products.  
* Show the systems you are planning to retire, these should be easily identifiable (color code them or mark them as deprecated).  
* Outline the proposed integration interfaces. You need to make sure that you include integration patterns information ([Salesforce integration patterns terminology](https://resources.docs.salesforce.com/sfdc/pdf/integration_patterns_and_practices.pdf) is required here), how you plan to secure your integration (HTTPS, One or two way SSL) and the authentication standard used (OAuth, SAML, OpenID, etc).  
* It must show your SSO setup.   
* It should include any mobile devices that are part of the landscape, you should also put the type of mobile app next to it (this is also [saleforce terminology for mobile app dev styles](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/intro_choose_scenario.htm)).  

_**Extra IMPORTANT Note:**_ You absolutely must also know how to draw all SSO flow diagrams. The judges will likely ask you to draw the diagram for the SSO flow you picked for your SSO setup above. Make sure you know how to draw each one. I have them all outlined here: <a href="https://github.com/Coding-With-The-Force/CTA_Study_Guide/wiki/3)-IAM-Terms-(Identity-and-Access-Management)">SSO Flow Diagrams</a>  

**Example System Landscape Diagram (Need to create):**

***

### 4) The Role Hierarchy Diagram  

The role hierarchy diagram will help you to explain the roles your users will have in the system and how it will impact your sharing and visibility model.

**_The purpose of this diagram is the following:_** 

* To help explain your approach to data sharing and visibility in your CTA scenario  

**_This Diagram Must Include the Following:_**

* This should include a full role hierarchy that shows how each role relates to one another. However in the case where you have multiple identical roles (ex: One role for every country an org does business in) you can just identify the first couple of roles and just indicate that more similar roles would be made for the other countries to save on time.  
* Do not forget your community/experience cloud site roles for cc+ and partner users (even the auto-generated ones)  
* Indicate any license type limitation of users assigned to the roles.  

**Example Role Hierarchy Diagram (Need to create):**

***

### 5) The Environment Diagram

The environment diagram will help to illustrate your approach to the different SF environments you will use and why you intend to use them. I would personally leave this for last and/or draw this on the fly when the board asks you too. It is an easier diagram that is relatively similar in nature in most scenarios.

**_The purpose of this diagram is the following:_** 

* This diagram is used to show how you intend to setup your various environments (dev sandboxes, integration, QA, UAT, Prod, etc) and to help explain why you would setup your environments that way.

**_This Diagram Must Include the Following:_**

* What environment types are being used at each stage of development/deployment  
* Justification as to what sandbox type you select for each environment (dev, partial, full)  
* What will take place in each environment and what kinda testing will be involved  
* What will be deployed to each environment and when that would take place    
* Make sure to study CI/CD concepts and terminology if you've never executed this in a project in the past  
* Include any external applications you are planning to use to get your environment pipeline up and running (ex: github, jenkins, flosum, copado, etc)

**Example Environment Diagram (Need to create):**
     