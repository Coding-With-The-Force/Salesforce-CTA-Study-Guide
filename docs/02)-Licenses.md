# Licenses

This page houses all information on the licenses that need to be memorized for the CTA Board and examples of how to present them in the actors and licenses diagram. There are six major license types you need to memorize and know like the back of your hand. They are the Sales Cloud, Service Cloud, Salesforce Platform, Salesforce Customer Community, Salesforce Customer Community Plus, Salesforce Partner Community licenses.   

You should also have an understanding of when add-on features like CRM Analytics, Digital Engagement, Service Cloud voice, etc require an additional license. You cannot forget to callout the licensing requirements for these add-on features as well (basically you just need to know that they are paid add-ons and you need to list their license by the actor in the actors and licenses diagram described in "The Diagrams" section of this guide).   

### How to read the tables below

Each of the six core licenses gets two tables:

1. **Exclusive features** - capability that only that license provides, among these six.
2. **Full capability set** - every feature available on that license, including ones shared with others, with an **Also Available Via** column showing which other licenses also grant it.

"Exclusive" is scoped to just these six license types, not every Salesforce SKU that exists (Chatter Free/External, Identity, CRM Analytics, Field Service, CPQ, Industry Cloud licenses, etc. aren't cross-checked). A few named capabilities (Field Service, CPQ, Service Cloud Voice) are technically separate add-on licenses, but ones that can only be layered on top of a specific base license are called out inline. License entitlements shift between releases, so re-verify anything exam-critical against the linked Salesforce docs.

**Abbreviations used in the "Also Available Via" columns:**

| Abbr. | License |
|---|---|
| SC | Sales Cloud |
| SVC | Service Cloud |
| PLT | Salesforce Platform |
| CC | Customer Community |
| CCP | Customer Community Plus |
| PC | Partner Community |

---

### [Sales Cloud](https://www.salesforce.com/editions-pricing/sales-cloud/)

The Sales and Service Cloud licenses have a ton in common. Salesforce now sells them off a unified base, and a "Service Cloud User" checkbox is what layers in service-specific tooling on top of the same core standard objects. So the real differentiator isn't object access, it's the sales-specific feature bundle: Collaborative Forecasting, Territory Management, Quotes, Sales Contracts, Opportunity Splits. You also need a Sales Cloud license for CPQ.

**Exclusive to Sales Cloud**

| Feature | What it is |
|---|---|
| Collaborative / Advanced Forecasting | Forecast types, quotas, manager adjustments and rollups. |
| Enterprise Territory Management (now "Sales Territories") | Model-based territory hierarchies with rule-based account/opportunity/lead assignment. (while some ETM functionality is technically available for all licenses, many features of ETM are locked behind a Sales cloud license) |
| Opportunity Splits & overlay Opportunity Teams | Revenue/overlay credit splitting across reps on one opportunity. |
| Quotes & Quote Templates | Native Quote object and PDF quote generation from an Opportunity. |
| Sales Contracts | Contract object used on the sales side of the deal. |
| Lightning Sync | Contact/event sync with Exchange or Google. |
| Sales Cloud Einstein | Lead/Opportunity scoring, Account & Opportunity Insights. |
| Salesforce CPQ eligibility *(add-on)* | Separate SKU, but only installable for Sales Cloud users. |   

**Full capability set**

| Feature | Description | Also Available Via |
|---|---|---|
| Accounts & Contacts | Core account/contact management. | All 6 |
| Leads | Lead object, assignment rules, web-to-lead, scoring, conversion. | SVC, PC |
| Opportunities | Pipeline object, stages, products/line items. | SVC, PC |
| Campaigns | Campaign membership & influence. | SVC, PC |
| Cases (basic) | Case object for cross-functional visibility. | SVC (full), CC, CCP, PC |
| Products, Price Books, Orders | Order-to-cash adjacent standard objects. | SVC |
| Knowledge (read-only) | Search/read published articles, no authoring. | CC, CCP, PC *(full authoring is Service Cloud-exclusive)* |
| Reports & Dashboards | Build/view analytics. | SVC, PLT, CCP, PC |
| Chatter | Feed, groups, files, approvals-in-feed. | All 6 |
| Custom Objects & Apps | Custom data model, Lightning apps. | All 6 (cap varies: org-level for SC/SVC, 10/110 per user for PLT, 10 per user for CC/CCP/PC) |
| Automation (Flow, Apex, Approvals) | Declarative and programmatic automation. | All 6 |
| Person Accounts | B2C-style consumer accounts. | SVC, PLT, CC, CCP *(person accounts are not supported for Partner Community users, meaning a partner community user CANNOT be a person account, they must be a normal contact linked to a business account)* |

**Official Salesforce references**
* [Salesforce Forecasting (Collaborative Forecasts) overview](https://help.salesforce.com/s/articleView?language=en_US&id=sales.forecasts3_intro.htm&type=5)
* [Sales Territories (formerly Enterprise Territory Management)](https://help.salesforce.com/s/articleView?language=en_US&id=tm2_intro.htm&type=5)
* [Complete Breakdown of Features for Sales Cloud License by SF Org Edition (PDF)](https://www.salesforce.com/content/dam/web/en_us/www/documents/pricing/DS_SalesCloud_EdCompare.pdf)

---

### [Service Cloud](https://www.salesforce.com/editions-pricing/service-cloud/)

The Service Cloud license should be selected when Service Cloud specific features are in use such as Omni-Channel, Entitlements, Service Contracts, full Knowledge authoring, etc. Service Cloud licenses are also the base requirement for add-ons like Field Service, Service Cloud Voice, and Digital Engagement channels - several of these are separately-licensed/paid add-ons that can only be layered on top of Service Cloud, not features bundled into the base license itself.

**Exclusive to Service Cloud**

| Feature | What it is |
|---|---|
| Omni-Channel Routing | Skills/queue/capacity-based work distribution across channels, with Presence. |
| Entitlement Management | Entitlements, Entitlement Processes, and Milestones for SLA enforcement. |
| Knowledge Article full authoring lifecycle | Create, publish, version, and translate articles (Sales Cloud only gets read access). |
| Case Milestone Tracker | Milestone tracking tied to entitlement processes. |
| Service Console productivity tools | Macros, Quick Text, Interaction Log, split-view console. |
| CTI / Lightning Dialer | Native telephony/computer-telephony-integration framework. |
| Enhanced Chat (formerly Messaging for In-App and Web) | Asynchronous, persistent real-time chat routed as work items. |
| Service Order / Work Order objects | Work Order & Employee Work Order objects. |
| Field Service eligibility *(paid add-on)* | Work Orders, Service Appointments, Dispatcher Console - separate SKU, layerable only on Service Cloud. |
| Service Cloud Voice eligibility *(paid add-on)* | Native cloud telephony with call transcription and real-time agent guidance - requires its own Service Cloud Voice user license/permission set license on top of base Service Cloud, not included by default. |

> **Retired/renamed - don't cite these as current:** Legacy **Chat (LiveAgent)** was retired February 14, 2026, in favor of **Enhanced Chat**. **Social Customer Service / Social Studio** was retired November 18, 2024, with no direct first-party replacement bundled into Service Cloud.

**Full capability set**

| Feature | Description | Also Available Via |
|---|---|---|
| Accounts & Contacts | Core account/contact management. | All 6 |
| Cases (full) | Full case lifecycle, assignment/escalation rules, Web-to-Case, Email-to-Case. | SC (basic), CC, CCP, PC |
| Leads | Base lead object access. | SC, PC |
| Opportunities | Pipeline object access ("Opportunity Tracking"). | SC, PC |
| Campaigns | Campaign membership. | SC, PC |
| Service Contracts, Assets | Entitlement-adjacent standard objects. | SC (Contracts) |
| Reports & Dashboards | Build/view analytics. | SC, PLT, CCP, PC |
| Chatter | Feed, groups, files. | All 6 |
| Custom Objects & Apps | Custom data model + Lightning apps. | All 6 |
| Automation (Flow, Apex, Approvals) | Declarative & programmatic automation. | All 6 |
| Next Best Action | Recommendation strategies surfaced in-console. | SC |
| Person Accounts | B2C-style consumer accounts. | SC, PLT, CC, CCP *(not supported on Partner Community)* |

**Official Salesforce references**
* [Route Work with Omni-Channel](https://help.salesforce.com/s/articleView?id=sf.omnichannel_intro.htm&language=en_US&type=5)
* [Set Up and Manage Entitlements and Milestones](https://help.salesforce.com/s/articleView?id=service.entitlements_parent_admin.htm&language=en_US&type=5)
* [Legacy Chat Is Being Retired (Feb 14, 2026) - Replace with Enhanced Chat](https://help.salesforce.com/s/articleView?id=release-notes.rn_chat_retirement.htm&language=en_US&release=250&type=5)
* [Replace Legacy Chat with Enhanced Chat - considerations](https://help.salesforce.com/s/articleView?id=service.miaw_replacing_chat_considerations.htm&language=en_US&type=5)
* [Social Studio Is Being Retired (Nov 18, 2024)](https://help.salesforce.com/s/articleView?id=release-notes.rn_marketing_engagement_ss_retirement.htm&language=en_US&release=252&type=5)
* [Assign Contact Center Permission Sets for Salesforce/Service Cloud Voice (separate license)](https://help.salesforce.com/s/articleView?id=service.voice_setup_assign_permissions.htm&language=en_US&type=5)
* [Complete Breakdown of Features for Service Cloud License by SF Org Edition (PDF)](https://www.salesforce.com/content/dam/web/en_us/www/documents/pricing/salesforce-service-cloud-pricing-editions.pdf)

---

### [Salesforce Platform](https://www.salesforce.com/editions-pricing/platform/)

This license should basically only be used when users primarily need access to custom objects and custom apps - not the native CRM sales/service objects. Architecturally, Platform is a strict *subset* of Sales Cloud and Service Cloud: everything it grants, those two also grant. Its real differentiator is commercial - a much lower cost per user for people who don't need Opportunities, Leads, Cases, or Campaigns.

**Exclusive to Salesforce Platform**

| Item | What it is |
|---|---|
| None, functionally | No object or feature here is out of reach for Sales Cloud or Service Cloud users. |
| Low-cost custom-app seat | *Commercial* characteristic, not a feature: cheapest way to give an internal user a full custom-app experience without CRM sales/service objects. |

> **Important Note:** Opportunities/Leads/Cases/Campaigns and effectively all other standard objects aside from the Account and Contact objects are not available for platform licensed users. So MAKE SURE your platform licensed users do not need access to them prior to suggesting this license.

**Full capability set**

| Feature | Description | Also Available Via |
|---|---|---|
| Accounts & Contacts | Core account/contact objects. | All 6 |
| Custom Objects & Apps | Custom data model, Lightning apps, custom tabs. | All 6 (capped at 10 per user on Starter, 110 per user on Plus - SC/SVC users aren't capped this way) |
| Reports & Dashboards | Build/view analytics. | SC, SVC, CCP, PC |
| Chatter | Feed, groups, files. | All 6 |
| Automation (Flow, Apex, Approvals) | Full declarative & programmatic automation. | All 6 |
| Standard & mass email | Individual and list emailing. | SC, SVC |
| Identity for Employees (SSO) | Employee single sign-on. | SC, SVC |
| Person Accounts | B2C-style consumer accounts. | SC, SVC, CC, CCP |
| Opportunities / Leads / Cases / Campaigns | <strong style="color:#d32f2f">Excluded by default on this license.</strong> | SC, SVC *(Opportunities/Leads/Campaigns also PC)* |

**Official Salesforce references**
* [Licenses Overview (Salesforce Platform)](https://help.salesforce.com/s/articleView?id=platform.users_licenses_overview.htm&language=en_US&type=5)
* [Features Available with Lightning Platform Starter, Plus, and Login Licenses](https://help.salesforce.com/s/articleView?id=platform.users_license_types_communities_lightning_platform_details.htm&language=en_US&type=5)
* [Complete Breakdown of Platform License Features By Org Edition (PDF)](https://www.salesforce.com/content/dam/web/en_us/www/documents/pricing/salesforce-platform-pricing-editions.pdf)

---

### [Salesforce Customer Community](https://www.salesforce.com/editions-pricing/experience-cloud/self-service/?d=cta-body-promo-142)

Use this license for community users who need a login but don't need Reports & Dashboards, delegated administration, or Roles/Advanced Sharing. These users also have **no roles**, can't be added to public groups, and can't have Sharing Rules written for them - the only sharing mechanism available is [Sharing Sets](https://help.salesforce.com/articleView?id=sf.networks_setting_light_users.htm&type=5), which is comparatively limited. Person Accounts are supported (as in you can use a person account when creating a customer community user). There's also a login-based variant of this license, better suited to low login-frequency populations.

Like Salesforce Platform, this is a strict *subset* - Customer Community Plus and Partner Community include everything it offers and more.

**Exclusive to Customer Community**

| Item | What it is |
|---|---|
| None, functionally | Customer Community Plus and Partner Community are supersets - anything CC grants, they grant too. |
| Lowest-cost, highest-scale login | *Commercial* characteristic: cheapest per-login price point, often used for sites with very large (often 6-7 figure), low-complexity external users that don't need roles or reporting. |

**Full capability set**

| Feature | Description | Also Available Via |
|---|---|---|
| Accounts (read/limited edit) | View own account, limited edit. | SC, SVC, PLT, CCP, PC |
| Contacts | Can view and manage the contact linked to their account (or contacts made available to them by sharing sets). | All 6 |
| Cases | Log/view/comment on support cases. | SC, SVC, CCP, PC |
| Knowledge (read-only) | Search/read published articles. | SC, CCP, PC |
| Chatter (community-scoped) | Groups/feed within the experience. | All 6 |
| Sharing Sets | Criteria-based record sharing without a role hierarchy. | CCP, PC *(optional for these two)* |
| Custom Objects | Custom data exposed to external users. | All 6 (10 per user - same cap as CCP/PC) |
| Customer Identity & Access Management (SSO) | External identity/SSO for community users. | CCP, PC |
| Reports & Dashboards | <strong style="color:#d32f2f">Not included on this tier.</strong> | SC, SVC, PLT, CCP, PC |
| Leads / Opportunities / Campaigns | <strong style="color:#d32f2f">Not included on this tier.</strong> | PC only (Opportunities/Leads also SC, SVC internally) |

**Official Salesforce references**
* [Experience Cloud User Licenses (Customer Community, Plus, Partner Community comparison)](https://help.salesforce.com/s/articleView?id=users_license_types_communities.htm&language=en_US&type=5)
* [Set Sharing Rules for Community/Portal Users (Sharing Sets)](https://help.salesforce.com/articleView?id=sf.networks_setting_light_users.htm&type=5)

---

### [Salesforce Customer Community Plus](https://www.salesforce.com/editions-pricing/experience-cloud/self-service/?d=cta-body-promo-142)

Use this license when community users need Reports & Dashboards and/or Roles + Advanced Sharing that Sharing Sets can't accommodate. These users can be added to public groups and can be Person Accounts. There's also a login-based variant, better suited to low login-frequency populations.

**Exclusive to Customer Community Plus**

| Feature | What it is |
|---|---|
| Person Accounts + role-based sharing, together | The only one of these six licenses combining Person Account support with a role hierarchy and Reports & Dashboards for external users - Partner Community explicitly can't be used with Person Accounts at all. |
| Standard sharing model at B2C price | Role-based sharing and reporting at a materially lower per-login cost than Partner Community, for orgs that need "Plus"-level sharing without paying for sales-pipeline objects. |
| Delegated Administration | External-user administration delegated to non-admin community members. |

**Full capability set (everything in Customer Community, plus:)**

| Feature | Description | Also Available Via |
|---|---|---|
| Roles and Advanced Sharing (Sharing Rules) | Roles nested under the account owner's role; owner/criteria-based sharing rules. | PC *(internal SC/SVC/PLT always have roles too)* |
| Delegated Administration | Non-admin community members manage other external users. | - *(exclusive)* |
| Reports & Dashboards | Build/view analytics on exposed objects. | SC, SVC, PLT, PC |
| Person Accounts | B2C-style consumer accounts. | SC, SVC, PLT, CC *(Partner Community cannot use Person Accounts)* |
| Increased data storage & API calls/day | 2 MB storage / 200 API calls per day (regular license); 1 MB / 10 calls (login license). | - |
| Leads / Opportunities / Campaigns | <strong style="color:#d32f2f">Not included on this tier.</strong> | PC only (Opportunities/Leads also SC, SVC internally) |

**Official Salesforce references**
* [Experience Cloud User Licenses (Customer Community, Plus, Partner Community comparison)](https://help.salesforce.com/s/articleView?id=users_license_types_communities.htm&language=en_US&type=5)
* [Delegated Administration for Communities](https://help.salesforce.com/articleView?id=networks_DPUA.htm&type=0)
* [Experience Cloud Site User Account Ownership Limitations](https://help.salesforce.com/s/articleView?id=sf.networks_person_accounts_limitation.htm&language=en_US&type=5)

---

### [Salesforce Partner Community](https://www.salesforce.com/editions-pricing/experience-cloud/partner-relationship-management/?d=cta-body-promo-143)

Unlike the other two community licenses (which are B2C-oriented), this license is typically used for B2B scenarios where external users need access to sales data. It's the only community license with Lead/Opportunity/Campaign access. These users **cannot be Person Accounts** - a real architectural trade-off to remember when a B2B2C org tries to license consumer-account partners this way. There's also a login-based variant, better suited to low login-frequency populations.

**Exclusive to Partner Community**

| Feature | What it is |
|---|---|
| Leads for external users | Only community license letting external partners work Leads. |
| Opportunities for external users | Full pipeline visibility/edit - stage, amount, close date - for a partner's deals. |
| Campaigns for external users | Partner-facing campaign membership and co-marketing tracking. |
| Quotes for external users | Quote object access for partner-driven deals. |
| Market Development Funds | MDF/co-branded fund requests tied to partner campaigns. |
| Territory Management | Partner account/territory alignment for channel sales. |
| Deepest external role-hierarchy mirroring | Can mirror an internal channel-sales org structure (Partner User → Partner Manager → Partner Executive) across partner account teams. |
| Increased data storage | +5 MB per user over Customer Community Plus (regular license). |

**Full capability set (everything in Customer Community Plus, minus Person Accounts, plus:)**

| Feature | Description | Also Available Via |
|---|---|---|
| Leads | Lead object, work & convert. | SC, SVC |
| Opportunities | Pipeline object. | SC, SVC |
| Campaigns | Campaign membership. | SC, SVC |
| Quotes | Quote object for partner-driven deals. | SC |
| Market Development Funds | Co-branded/partner marketing fund tracking. | - *(exclusive)* |
| Territory Management (partner-facing) | Channel account/territory alignment. | - *(exclusive)* |
| Role Hierarchy (external) | Roles under the account owner's role. | CCP |
| Reports & Dashboards | Build/view analytics. | SC, SVC, PLT, CCP |
| Chatter, Custom Objects, Flow automation | Same foundation as every other tier. | All 6 |
| Person Accounts | While Partner users can view person accounts, <strong style="color:#d32f2f">Partner users are not allowed to be created from person accounts. They must be regular contacts tied to a business account.</strong> | SC, SVC, PLT, CC, CCP |

**Official Salesforce references**
* [Experience Cloud User Licenses (Customer Community, Plus, Partner Community comparison)](https://help.salesforce.com/s/articleView?id=users_license_types_communities.htm&language=en_US&type=5)
* [Create Partner Accounts](https://help.salesforce.com/s/articleView?language=en_US&id=sf.networks_partner_community_create_account.htm&type=5)
* [Market Development Funds overview](https://help.salesforce.com/articleView?id=sf.networks_market_dev_funds_intro.htm&type=5)
* [Experience Cloud Site User Account Ownership Limitations (Person Accounts restriction)](https://help.salesforce.com/s/articleView?id=sf.networks_person_accounts_limitation.htm&language=en_US&type=5)

---
### Sales Engagement

Sales Engagement is an add-on license for Sales Cloud users that enables them to leverage omni-channel, Service Cloud Voice, Einstein Activity Capture, and Einstein Lead Scoring

More Info Here: https://resources.docs.salesforce.com/latest/latest/en-us/sfdc/pdf/high_velocity_sales_impl_guide.pdf

***


### More Info

There are a ton more licenses, although these are the ones you absolutely must memorize for the exam. For more info on the constantly changing licenses types, [check here](https://www.salesforce.com/editions-pricing/overview/).

[List of all License Types and Add-Ons and their costs](https://www.salesforce.com/content/dam/web/en_us/www/documents/pricing/all-add-ons.pdf)

[Breakdown of Community Licenses](https://help.salesforce.com/articleView?id=users_license_types_communities.htm&type=0)
