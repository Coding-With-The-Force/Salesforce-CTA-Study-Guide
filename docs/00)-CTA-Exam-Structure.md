### Exam Structure

The exam is typically no more than 8 pages and it breaks down into the following sections:  

* Company Overview
* Current Systems
* Business Process Requirements
* Migration Requirements
* Accessibility/Visibility Requirements
* Reporting Requirements
* Project and Dev Requirements

It is a 4 hour and 25 minute long exam presented in front of a board of 3 other CTA's, and it consists of the following 3 events:

* 180 minutes to read, solution, design and justify an architectural solution based on the 8 page scenario given to you.

* 45 minutes to present the solution to the judges

* 40 minutes for Q&A discussion (judges ask questions about your solution you presented)

***

### Technology and Materials allowed on Exam  

* During the CTA Exam the only software you can use are google sheets, google slides and google docs.  
* Pens  
* Paper
* Flipchart paper and/or whiteboard
* Phone to take pictures

***

### How the exam is Administered Virtually  

The virtual exam is currently administered through webex and you must use a virtual machine that Salesforce controls. You also need to have a camera the is positioned so that they can see all of your screens, your hands, and surroundings while taking the exam.

***

### The 7 Sections Covered/Graded on the Exam

During the exam you will be judged in the 7 areas listed below. You can fail up to 2 sections and be able to retake the exam for free (referred to as a section retake), however, only failing one section gives you an easier retake with (a smaller scenario) that focuses heavily on the section you failed. If you fail 2 sections you have to retake the entire exam (a full scenario) during your section retake. In either scenario you still must FULLY solve the scenario, not just the section you failed. If you fail more than 2 scenarios you fail the exam, if you  get a section retake and fail any of it, you fail the exam.

**Exam Sections:**  

1) System Architecture  
2) Security  
3) Data Model 
4) Solution Architecture  
5) Integration Architecture
6) Development Life Cycle
7) Communication

***

### Most Important Areas to Cover for the Exam  

I think most people when they start studying for this exam are completely lost (myself included), the other architecture exams trailheads/trailmixes kinda help but they ultimately throw in a ton of junk that you don't necessarily need for this exam imo. Below are the areas you absolutely must study to prepare for the exam. This is purely based on my experience with mock exams and mock QA's

1) You must know Service Cloud, Sales Cloud and Experience Cloud inside and out. You need to know their data model, their config settings, their many OOTB features and their limitations. You also need to know about how reporting works as well as CRM Analytics. 

2) You need to know internal security mechanisms inside and out, record level sharing mechanisms, object and field level sharing mechanisms, etc (Sharing rules, Apex Sharing, Account Teams, Profiles, Perms, Roles, etc)  

3) You need to know how to solution for Large Data Volumes! Should you store it in SF? And if so what steps need to take place for that LDV to not be problematic either because of storage, data skew, etc. Should you store it externally? If you store it externally, how could you see that data in SF (Salesforce Connect, Canvas App, Heroku Connect, etc).  

4) Know how to identify multi-org scenarios and how to make multiple orgs work together if necessary. Normally multi-org scenarios are valid if SF limits would become an issue, if business processes and/or technology are significantly different (and can't be consolidated), data residency (country location of servers) is an issue due to compliance stipulations (GDPR or similar), or potentially if the scenario has an existing org that cannot easily be migrated in the timeframe the scenario gives you to produce a solution. If you need to merge multi-orgs together for people in both orgs to see data or for reporting data, look into CRM Analytics and/or Salesforce Connect.  

5) Know the high level use cases for every on platform cloud (CPQ, Field Service Lightning, Privacy and Consent, Billing, Salesforce Maps, etc) (you do not need to know B2B Commerce), it is unlikely that you will actually NEED to use them, however it is possible you will be asked to justify why you did not use them in the QA portion so you must know how they work and their use cases.  

6) Know the high level use cases for every off platform cloud (Marketing, Tableau, Heroku, Mulesoft), how their integrations with SF work and when you might use them. You do not need significant in depth knowledge of these systems, you only need to know what they're capable of and why people use them.  

7) Know how integrations work, what is an ETL, what is an ERP, what are the different OAuth, OIDC and SAML flows, what are the different integration patterns, what are firewalls, what are reverse proxies, what is an identity provider, what is LDAP, what is SCIM, what is JIT? You must know the answer to all of these things, how they work, and when and why to use them. You also need to know how to draw all OAuth, OIDC and SAML Flows from memory.   

8) Know absolutely everything about the 6 major license types (Sales, Service, Platform, CC, CC+, and Partner) and know how licensing works for the other products (especially CRM Analytics and SF Connect).  

9) Know the major products 3rd party applications (appexchange products) in the following areas: Document Generation, eSignature, Payment Processing, Data Enrichment & Validation, eCommerce, Scheduling, Project Management, and CTI. You need to know how they work, when to use them, their major objects (aside from doc generation and esig), how licensing works, etc. I would pick one major app in every area and understand at a high level how they work and how they integrate with SF.   
  
10) Governance, ETL, Mobile and Environment strategies must be produced, however these are typically relatively simple if you understand everything above. These four areas can be whipped up quick and can be learned fast, but I would save your time studying these areas last as they are the simplest imo to deal with.  

11) Your end solution needs to be simple and flexible! It should be so simple a junior admin could understand it and it needs to be as flexible as a rubber band, because the judges are going to likely slightly alter the scenario in QA to see how you and your solution can respond to it. Don't over complicate it, don't make it too fancy, if you're making it too fancy and too rigid you've done something wrong, try again.  

12) The last thing is to just practice presenting and solving these scenarios at least once per week until your exam. It will take time to build up the stamina, confidence and knowledge to solve them, and you won't know where to improve if you aren't constantly solving them. Also get someone who will challenge you in QA because you need someone who will absolutely destroy you so you get practice either justifying or backtracking your scenario in QA.
