---
title: "Field Service Lightning"
---

### Setting up a User for Field Service Lightning

After purchasing Field Service Lightning and enabling it in Salesforce (via Setup -> Field Service Settings), you only need to check the "Service Cloud User" and "Knowledge User" checkboxes on most users that will be accessing your Field Service System. However, there are some exceptions here:  

1) **Field Service Dispatcher** - If a user needs access to the FSL Dispatcher console, they will need to have this permission set license given to them to grant them access.  
   
2) **Field Service Scheduling** - This allows a user to be shown on the dispatcher console Gantt chart. So if you need a field tech (or someone similar) to show up there, then they will need this license.  

3) **Field Service Mobile** - Any resource that needs access to the special Salesforce Field Service Mobile app will need this license applied to them.  

***

### Field Service Objects  

**Service Resource** - This represents a user or an asset that someone can schedule time with.  

**Operating Hours** - This is kind of a shell/parent object that represents the different operating hours for every region your business operates in around the world. The "Time Slot" object records and "Operating Hours Holiday" records associated with your operating hours record actually represent the hours your business is available.  

**Time Slots** - This is a child record of the operating hours object that represents the times your business is open each day.  

**Operating Hours Holiday** - This is a child record of the operating hours object that represents times and days that your business is not available due to holidays.  

**Service Territories** - These records represent a region/territory, you will associate your operating hours, and each service resource in a territory, to that territory. This ensures that each territory you do business in can only be serviced by service resources in that area, and during time frames appropriate for that area. You can create service territory hierarchies to break larger regions into smaller sub regions.     

**Service Territory Resource** - This object is a junction object between service territory and service resource. It exists because a service resource can work in multiple service territories at once in some instances.  

**Service Appointment** - This represents an appointment scheduled with a service resource to complete a job.
  

**Work Type** - This object is used to define a work type which can then be assigned to work orders and work order line items to ensure that we match the right service resource to the work order. Work Types have Skill records associated to them to define the skills needed to get a work order done right. These essentially act as a template for common jobs.  

**Skill** - This represents a skill that a service resource has or that is required for a work order to be completed. **Note:** You can only create skills in the Field Service Admin Guided Setup, or via SF Classic and you cannot delete skills after you have created them!   

[Skill Setup Documentation](https://help.salesforce.com/s/articleView?id=sf.fs_create_skills.htm&type=5)   

**Product Required** - This object is a junction between work type and product (the OOTB Product Object) to determine what products are needed to complete a work type

**Timesheets** - This represents a timesheet for a specific period of time for a service resource (note you can only setup timesheets for "technician" service resources).   

**Timesheet Entry** - These are daily timesheet entries that service resources will fill out to log the hours their worked each day against their timesheet.   

**Work Order** - Work Orders represent a customer request to for a service or product to be delivered to them.  

**Work Order Line Items** - This object represents the individual tasks that need to be completed in order to fulfill the parent work order records request.   

**Product Consumed** - This object is a junction between a product item and a work order. When you create one of these Product Consumed records Salesforce will automatically decrement the "Quantity on Hand" field on the product item record based on how much product you denoted as consumed on your Product Consumed record.   

***

### The Field Service Managed Package  

Field Service has an optional manage package installation that will give you the following improvements to the Field Service Lightning Experience:  

1) Guided Setup: This tool walks you through key setup tasks, including assigning permission sets, creating service resources, and customizing appointment booking settings.   

2) Scheduling and optimization: Optimize your team’s schedule in a way that enforces your business objectives. Assign appointments according to your rules and priorities, such as worker skills, location, and availability.   

3) Dispatcher console: Give dispatchers and supervisors a view of your field service operations. The dispatcher console includes a customizable appointment list, easy-to-reach scheduling actions, dynamic Gantt chart, and interactive map. Dispatchers can check that jobs are routed to the right people, receive alerts, and monitor appointments in real time.  

4) Administration app: Manage optimization, customize the dispatcher console, and update your managed package settings in one place.  

**Crew Management** - After you install the managed package, you will be able to grant your users access to do crew management via the crew management tab. To grant your users access to the crew management tab you need to do the following:

1) Give them either the "FSL Admin Permissions", or "FSL Dispatcher Permissions" permission set   
2) Setup a custom Lightning Page and drop the custom Lightning component onto the page.  
3) Create a new permission set that grants users access to all of the following:  
*     The Crew Management tab you made in step 2 
*     FSL.CrewManagement Visualforce page  
*     FSL.CrewsResourceLightbox Visualforce page  
*     FSL.CrewsSaLightbox Visualforce page  
*     FSL.CrewsWorkorderLightbox Visualforce page  
*     FSL.CrewsWorkorderLineItemLightbox Visualforce page  
*     FSL.CrewManagement Apex class   