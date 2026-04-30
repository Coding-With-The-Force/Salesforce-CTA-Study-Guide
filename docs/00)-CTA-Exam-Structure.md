### Exam Structure

The exam is typically 12-15 and approximately 2400-3000 words in length. There are also typically approximately 60 client requirements you must solve for on the exam. There are two potential formats to the exam these days. The first format you could potentially see on the exam is one that breaks the exam into the following sections:  

* Company Overview   
* Current Systems   
* Business Process Requirements   
* Migration Requirements   
* Accessibility/Visibility Requirements   
* Reporting Requirements   
* Project and Dev Requirements    

A good example of a mock CTA exam that uses this structure is [Universal Safety Technologies](https://github.com/Coding-With-The-Force/Salesforce-CTA-Study-Guide/blob/main/CTA_Practice_Mock_Scenarios/Full%20Scenarios%20-%20Final%20Step/Full%20Scenario%20-%20Universal%20Safety%20Technologies.pdf)   

The second exam format you could potentially run into is one that presents more like just a long list of client requirements as opposed to being broken down into generic requirement sections like above, the second would present sections like:

* Project Overview   
* General Pain Points
* Venue Onboarding   
* Event Sales   
* Order   
* Banner Image Creation   
* Expansion   

A good example of a mock CTA exam that uses this second structure type is [Mega Print](https://github.com/Coding-With-The-Force/Salesforce-CTA-Study-Guide/blob/main/CTA_Practice_Mock_Scenarios/Full%20Scenarios%20-%20Final%20Step/Full%20Scenario%20-%20Mega%20Print.pdf)    

As far as which structure you get on your exam, your guess is as good as mine, but I do believe they are trying to fully transition to the second format, so over time I believe more mocks will start to look like format 2.   

---

### What to expect on the day of your CTA Review Board

It is approximately a 5 hour and 25 minute long exam presented in front of a board of 3 other CTA's as well as one exam proctor, and the exam is broken out in the following way

* 15 minute check-in prior to your exam to make sure your camera is setup right and that your desk area abides by the rules of the exam.   

* 120 minutes of solutioning/solving the scenario   

* 5 minute restroom break   

* 60 minutes to continue solutioning/solving the scenario   

* 15 minute break   

* 45 minutes to present your solution to the CTA judges   

* 15 minute break   

* 40 minutes for Q&A discussion (judges ask questions about your solution you presented)   

* 2 minutes to wrap up with the exam proctor   

After you finish the exam you are not given your results until 2-10 weeks later. This is to prevent CTA candidates from cheating since they often reuse the same CTA for the exam on an ~2 month rotation.    

***

### Technology and Materials allowed on Exam  

During the CTA Exam you can no longer use any physical materials like pens, paper, etc. You can only use the software they make available to you. The only software you can use is:

* Lucid chart
* Google sheets 
* Google slides 
* Google docs 

I would suggest using lucid chart for diagrams, google sheets for any calculations you need to make, and google docs to solve your scenario solutions. I would not waste your time with google slides.    

***

### How the exam is Administered  

The exam is now only administered virtually through webex and you must use a virtual machine that Salesforce sets up for you and allows you to control via webex. You also need to have a camera that is positioned so that they can see all of your screens, your hands, and surroundings while taking the exam, so the camera needs to be moveable within your office/room you are taking the exam in. 

The virtual machine you are controlling is a normal 1080p monitor, so try to practice on a normal sized monitor, not on an ultra wide or curved monitor as it may make exam day challenging for you.   

***

### The 7 Sections Covered/Graded on the Exam

During the exam you will be judged in the 7 areas listed below. These days you must pass every section on the exam to pass the exam. There used to be a concept called "section retakes", but those were removed in 2024, so you must receive a passing score in all 7 sections listed below.   

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

I think most people when they start studying for this exam are completely lost (myself included), the other architecture exams trailheads/trailmixes kinda help but they ultimately throw in a ton of junk that you don't necessarily need for this exam imo. Below are the areas you absolutely must study to prepare for the exam.   

1) You must know Service Cloud, Sales Cloud and Experience Cloud inside and out. You need to know their data model, their config settings, their many OOTB features and their limitations. You also need to know about how reporting works as well as CRM Analytics. 

2) You need to know internal security mechanisms inside and out, record level sharing mechanisms, object and field level sharing mechanisms, etc (Sharing rules, Apex Sharing, Account Teams, Profiles, Perms, Roles, etc)  

3) You need to know how to solution for Large Data Volumes! Should you store it in SF? And if so what steps need to take place for that LDV to not be problematic either because of storage, data skew, etc. Should you store it externally? If you store it externally, how could you see that data in SF (Salesforce Connect, Canvas App, Heroku Connect, etc).  

4) While I have never seen a scenario that requires a multi-org setup, it is still imperative to understand how to identify multi-org scenarios and how to make multiple orgs work together if necessary. Normally multi-org scenarios are valid if SF limits would become an issue, if business processes and/or technology are significantly different (and can't be consolidated), data residency (country location of servers) is an issue due to compliance stipulations (GDPR or similar), or potentially if the scenario has an existing org that cannot easily be migrated in the timeframe the scenario gives you to produce a solution. If you need to merge multiple orgs together for people in both orgs to see data or for reporting data, look into CRM Analytics and/or Salesforce Connect.  

5) Know the high level use cases for every on platform cloud (CPQ, Field Service Lightning, Privacy and Consent, Billing, Salesforce Maps, etc) (you do not need to know B2B Commerce, B2C Commerce, or Industry Clouds), it is unlikely that you will actually NEED to use them, however it is possible you will be asked to justify why you did not use them in the QA portion so you must know what they are, how they work, and their use cases.  

6) Know the high level use cases for every off platform cloud (Marketing, Tableau, Mulesoft), how their integrations with SF work and when you might use them. You do not need significant in depth knowledge of these systems, you only need to know what they're capable of and why people use them.  

7) Know how integrations work, what is an ETL, what is an ERP, what are the different OAuth, OIDC and SAML flows, what are the different integration patterns, what are firewalls, what are reverse proxies, what is an identity provider, what is LDAP, what is SCIM, what is JIT? You must know the answer to all of these things, how they work, and when and why to use them. You also need to know how all OAuth, OIDC and SAML Flows work from memory.   

8) Know absolutely everything about the 6 major license types (Sales, Service, Platform, CC, CC+, and Partner) and know how licensing works for the other products (especially CRM Analytics, Service Cloud Voice, and Digital Engagement).  

9) Know the major 3rd party applications (appexchange products) in the following areas: Document Generation, eSignature, Payment Processing, Data Enrichment & Validation, eCommerce, Scheduling, Project Management, and CTI. You need to know at a very high level how they work, when to use them, and their major objects (aside from doc generation and esig). I would pick one major app in every area and understand at a high level how they work and how they integrate with SF.   
  
10) Governance, ETL, Mobile and Environment strategies must be produced, however these are typically relatively simple if you understand everything above. These four areas can be whipped up quick and can be learned fast, but I would save your time studying these areas last as they are the simplest imo to deal with.  

11) Your end solution needs to be simple and flexible! You are gonna be pretending to present to a CEO or CTO, these are often not ultra technical people, so you need to have a solution that easy to explain, and you need to be able to explain it in a simplistic way that the average person could understand. Do your best not to over complicate it, don't make it too fancy, if you're making it too fancy and too rigid you've done something wrong, try again.      

12) The last thing is to just practice presenting and solving these scenarios at least once every other week until your exam. It will take time to build up the stamina, confidence and knowledge to solve them, and you won't know where to improve if you aren't constantly solving them. Also get someone who will challenge you in QA because so you get practice either justifying or backtracking your scenario in QA. If you are serious about attempting this exam I would highly suggest doing a CTA study program, or finding a CTA who does hourly consultation that will do mock scenarios with you. It is worth it. Their feedback is often lightyears better than any other person you will ever study with.   
