# Data Security

This section covers data encryption, data masking, data restoration and data destruction.

---

### Data Encryption

Data encryption can be done at rest or in transit. It's goal is to mask the data to avoid data leaks, breaches, etc.

**_Encryption in Transit_**

Encryption in transit is normally achieved by encrypting a message before it is transmitted and decrypting it at its destination. This is done to prevent attackers from intercepting the data in transit ([man in the middle attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)). This is normally dealt with by using a [secure HTTPS channel](https://en.wikipedia.org/wiki/HTTPS). The current standard protocol version underlying that channel is TLS 1.3. 

**_Mutual TLS (mTLS)_**   

Mutual TLS (also called two-way TLS/SSL) extends standard TLS by having both sides of a connection present and validate a certificate, not just the server. A normal HTTPS handshake only proves the server's identity to the client; mTLS adds proof of the client's identity to the server as well, which is why it's such a common ask for B2B/system-to-system integrations that need stronger assurance than a shared secret or OAuth token alone.

Salesforce supports mTLS in both directions:

* **Outbound (Salesforce calling out to an external system)** - Attach a client certificate (from Certificate and Key Management) to a Named Credential or callout so Salesforce presents it during the TLS handshake with the external endpoint, such as your ESB/integration layer. See [Enhance Integration Security with mTLS for Salesforce and MuleSoft](https://developer.salesforce.com/blogs/2025/10/enhance-integration-security-with-mtls-for-salesforce-and-mulesoft).
* **Inbound (an external API client calling into Salesforce)** - Salesforce can require the calling API client to present a trusted client certificate on port 8443 through your org's My Domain. This is enforced with the "Enforce SSL/TLS Mutual Authentication" user permission on an API-only user, and it's only available for API access, not browser/UI logins. See [Certificates in Mutual Authentication for Salesforce](https://help.salesforce.com/s/articleView?id=000383575&language=en_US&type=1), [Set Up a Mutual Authentication Certificate for API Login](https://help.salesforce.com/s/articleView?language=en_US&id=sf.security_keys_uploading_mutual_auth_cert.htm&type=5), and [Configure Your API Client to Use Mutual Authentication](https://help.salesforce.com/s/articleView?language=en_US&id=sf.security_keys_uploading_mutual_auth_cert_api.htm&type=5).

More info on certificate trust/chain requirements: [Salesforce SSL/TLS Certificate Trust: Supported Root CAs, Client Authentication, and Available Tools](https://help.salesforce.com/s/articleView?id=000385468&language=en_US&type=1)

**You will want to callout and suggest the use of mTLS in the vast majority of your intergrations that move through your ESB, however, remember that event bus transactions (like platform events) do not support mTLS**

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

**_[Full Database Encryption](https://help.salesforce.com/s/articleView?id=xcloud.security_pe_tle_database_encryption.htm&type=5)_** - This is a newer option as of 2026. If your org has a shield license it will enable you to encrypt your entire database instead of select fields. It also comes with the added benefit that none of the field level limits/restrictions for encrypted fields effect you when you enable this option. It's the safest option these days with the fewest drawbacks.

---

**_More Info on Encryption Options_**

[More info on the differences between Shield and Classic encryption](https://developer.salesforce.com/docs/atlas.en-us.securityImplGuide.meta/securityImplGuide/security_pe_vs_classic_encryption.htm)

There are tons of tradeoffs when encrypting data in Salesforce. Make sure to know what you're going to lose by encrypting your fields (classic tradeoffs are listed in the classic link above):  
[Shield Tradeoffs](https://help.salesforce.com/articleView?id=sf.security_pe_considerations_general.htm&type=5)  

---

### Data Restoration

In the data governance requirements on the exam you may need to provide a data restoration (backup and restore) strategy. This could be done using an ETL (extract transfer load) custom solution, but it's preferable to use a product such as [Salesforce Data Backup and Recovery (Previously OwnBackup)](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N30000007p6RYEAY), [Druva](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000EfHKwUAN) or [Flosum's addon](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FYEFAUA5) for backup and recovery.   

You do not need to know these inside and out, just generally that they do exist, they are available pre-built products, and their high level offerings.


