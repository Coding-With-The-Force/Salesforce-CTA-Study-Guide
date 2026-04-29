### Data Storage Per Object Record  

**MOST objects take up 2kb of storage per record with the exception of the following objects:**  

1) Person Accounts - 4KB  
2) Knowledge Articles - 4KB  
3) Campaigns - 8KB  
4) Asset - 0KB  
5) Products - 0KB  
6) Pricebooks - 0KB  
7) Pricebook Entry - 0KB  
8) All of the privacy and consent cloud objs - 0KB  

So if you had 2,000,000 person accounts that would take up 8GB of data

***

### Data Allocated to a Salesforce Org  

Each org comes with a default of 10GB of storage space. It is then allotted additional storage space for each user and the amount differs based on their license type:  

**Internal Users (Sales & Service)** - 120MB  
**Customer Community** - 0MB  
**Customer Community Plus** - 2MB  
**Customer Community Plus** - 1MB
**Partner** - 5MB   
**Partner Login** - 1MB    

***

### Example Calculations  

If you had 2 million opportunity records (2KB per Opp) that would take up 4,000,000KB or 4,000MB or 4GB.  
  
If you had 600 internal users and 10,000 CC+ users you would end up with 72GB of data storage for the internal users (600 x 120MB = 72,000MB/1000 = 72GB) and you would end up with 20GB of storage for the CC+ users (2MB x 10,000 = 20,000MB/1000 = 20GB) for a total of 102GB of storage in your org (10GB + 72GB + 20GB = 102GB).  