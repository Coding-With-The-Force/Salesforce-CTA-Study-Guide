### What is a DMS?

A DMS is a document management system. In many cases you may just opt to use Salesforce as your document management system, but in certain situations your file sizes may be to large to store in Salesforce and would be better stored/more affordable to store in an external system like SharePoint. It's also possible your scenario informs you that they have a DMS that they would like to integrate with Salesforce, in which case you need to know your options and limitations

***

### Files Storage Limits and Calculations 

**Max File Size:** The maximum file size for a file in Salesforce is 2GB (and a maximum of 100mb on Salesforce's mobile app or mobile publisher). If you have a need to upload files larger than that, you will need a DMS.  

**Data Storage Calculations:** Each org comes with 10GB of file storage capacity, and for each internal licensed user (not external community licenses) you will receive an additional 2GB of file storage capacity. So if you have 300 sales cloud users and 300 service cloud users in your org you would end up with 1210GB of file storage space (300*2 + 300*2 + 10 = 1210).


***

### Files Connect  

**What is Files Connect?** - A way to enable your Salesforce org to easily integrate with Sharepoint, Google Drive, Box, or Quip so that you can store your documents there as opposed to on the Salesforce platform.    

**How to Enable Files Connect** - Go to Setup -> FileConnect  -> Check the box to enable filesconnect

**Supported Systems:**  
1) SharePoint  
2) Box  
3) Google Drive  
4) Quip  

***

### Auth Flow Used for DMS Connection via Files Connect  

For all connections to Files Connect you will be using OIDC (Open Id Connect) Web Server Flow. Additionally you will have the option to use either named principle or a per user authentication when setting up your external data source. If you are using this for internal users, and everyone access sharepoint has a sharepoint license, use a per user authentication. If you are using this for a large community, or your internal users do not all have a sharepoint license, use a named principle flow.  

Named principle provides everyone the same level of access to files, you cannot hide or show a file based on a specific user when using named principle, however a community user will only have access to the files they can see on records (same for internal if they don't have access to the files tab).  

Per User will allow you to only show sharepoint documents based on the user permissions setup in sharepoint, however be mindful that this is not feasible for communities.   

***  

### XFiles Pro  

XFiles Pro is a popular appexchange product that you can leverage in a couple of very specific circumstances instead of using custom development. They are listed below:  

1) If you absolutely MUST use a named principle connection, and you MUST also provide security on a file by file basis, XFiles Pro has that capability  
2) If there is an on-prem DMS that you MUST connect to, you can leverage XFiles Pro to connect to it  

I would not personally use it outside of those circumstances.   