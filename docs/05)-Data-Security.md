# Data Security

This section covers data encryption, data masking, data restoration and data destruction.

---

### Data Encryption

Data encryption can be done at rest or in transit. It's goal is to mask the data to avoid data leaks, breaches, etc.

**_Encryption in Transit_**

Encryption in transit is normally achieved by encrypting a message before it is transmitted and decrypting it at its destination. This is done to prevent attackers from intercepting the data in transit ([man in the middle attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)). This is normally dealt with by using a [secure HTTPS channel](https://en.wikipedia.org/wiki/HTTPS)

**_Encryption at Rest_**

Encryption at rest is the act of storing data that is encrypted, which makes it impossible to read or display the data without having an encryption key to decrypt it. This protects the system from attackers who gain access to the database where the data is stored.

**_The difference between Encryption and Masking_**

Encryption is the act of essentially scrambling data in the database itself, the only way to unscramble that data is with a complex key. Masking on the other hand is the act of hiding data from the eyes of an end users (for instance only seeing the last four digits of a credit card), but it does not include encrypting the data in the database, just at the time of viewing.

More info here: [Encryption vs Masking](https://developer.salesforce.com/docs/atlas.en-us.securityImplGuide.meta/securityImplGuide/security_pe_masking.htm)

---
### Salesforce Encryption Options

_If you must use one of these for your solution it should be present on your system landscape diagram._  

**_[Salesforce Classic Encryption](https://help.salesforce.com/articleView?id=sf.fields_about_encrypted_fields.htm&type=5)_**

This is the free data encryption option that comes with Salesforce OOTB. It only allows for 128 bit AES. It is very limited in comparison to Shield encryption (more below). It does however support masking, whereas Shield currently does not. It cannot encrypt standard fields.

**_[Salesforce Shield Platform Encryption](https://help.salesforce.com/articleView?id=sf.security_pe_overview.htm&type=5)_**

Shield is a more robust encryption solution (as opposed to OOTB encryption) that allows you to provide encryption at rest for the data in your Salesforce environment. This encryption can be done to files, records and search index files.

---

**_More Info on Encryption Options_**

[More info on the differences between Shield and Classic encryption](https://developer.salesforce.com/docs/atlas.en-us.securityImplGuide.meta/securityImplGuide/security_pe_vs_classic_encryption.htm)

There are tons of tradeoffs when encrypting data in Salesforce. Make sure to know what you're going to lose by encrypting your fields (classic tradeoffs are listed in the classic link above):  
[Shield Tradeoffs](https://help.salesforce.com/articleView?id=sf.security_pe_considerations_general.htm&type=5)  

---

### Data Restoration

In your data governance strategy you should provide a data restoration (backup and restore) strategy. This could be done using an ETL (extract transfer load) custom solution, but it's preferable to use a product such as [OwnBackup](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N30000007p6RYEAY), [Druva](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000EfHKwUAN) or [Flosum's addon](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FYEFAUA5) for backup and recovery.


