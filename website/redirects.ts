/**
 * Redirects from the old mkdocs URLs (directory-style paths derived from the
 * original numbered filenames) to the new clean Docusaurus routes, so the
 * pages Google has indexed — and any bookmarks/backlinks — keep working
 * after the migration. Consumed by @docusaurus/plugin-client-redirects in
 * docusaurus.config.ts.
 *
 * If a doc ever moves again, add its old route here rather than deleting it.
 */
const redirects: { from: string; to: string }[] = [
  { from: '/00)-CTA-Exam-Structure', to: '/docs/exam-overview/exam-structure' },
  { from: '/01)-The-Diagrams', to: '/docs/exam-overview/the-diagrams' },
  { from: '/02)-Licenses', to: '/docs/system-architecture/licenses' },
  { from: '/03)-Org-Strategy-(Single-or-Multi-Org)', to: '/docs/system-architecture/org-strategy' },
  { from: '/04)-Project-Governance-(COE)', to: '/docs/development-lifecycle/project-governance-coe' },
  { from: '/05)-Data-Security', to: '/docs/security/data-security' },
  { from: '/06)-OAuth-Flows-&-Identity-and-Access-Management', to: '/docs/integration/oauth-flows-iam' },
  { from: '/07)-Mobile-Solutions', to: '/docs/system-architecture/mobile-solutions' },
  { from: '/08)-Integration-Patterns', to: '/docs/integration/integration-patterns' },
  { from: '/09)-Cryptography', to: '/docs/security/cryptography' },
  { from: '/10)-Reporting', to: '/docs/solution-architecture/reporting' },
  { from: '/11)-Sales-Cloud', to: '/docs/solution-architecture/sales-cloud' },
  { from: '/12)-Service-Cloud', to: '/docs/solution-architecture/service-cloud' },
  { from: '/13)-CPQ-Objects', to: '/docs/solution-architecture/cpq-objects' },
  { from: '/14)-Field-Service-Lightning', to: '/docs/solution-architecture/field-service-lightning' },
  { from: '/15)-Mulesoft-Notes', to: '/docs/solution-architecture/mulesoft-notes' },
  { from: '/16)-Large-Data-Volume-Notes', to: '/docs/data/large-data-volumes' },
  { from: '/17)-Google-Slides-Hotkey-Notes', to: '/docs/communication/lucidchart-tips' },
  { from: '/18)-CTA-Board-Presentation-Tips', to: '/docs/communication/board-presentation-tips' },
  { from: '/19)-Managed-Packages-(Useful-to-the-CTA)', to: '/docs/solution-architecture/managed-packages' },
  { from: '/20)-Governor-Limits-and-Suggested-Best-Practices', to: '/docs/solution-architecture/governor-limits-best-practices' },
  { from: "/21)-Standard-Objects-Oddities-(No-CRUD,-No-Quick-Action,-Can't-Be-Lookups,-Etc)", to: '/docs/solution-architecture/standard-object-oddities' },
  { from: '/22)-Session-Settings', to: '/docs/security/session-settings' },
  { from: '/23)-Partner-Relationship-Management-(Indirect-Sales)', to: '/docs/solution-architecture/partner-relationship-management' },
  { from: '/24)-Multi-Currency', to: '/docs/system-architecture/multi-currency' },
  { from: '/25)-Entitlement-Management-(Service-Cloud)', to: '/docs/solution-architecture/entitlement-management' },
  { from: '/26)-Mutual-Transport-Layer-Security-(mTLS-or-2-way-SSL)', to: '/docs/security/mtls' },
  { from: '/27)-Work-Order-and-Work-Order-Items-(Without-Field-Service-Lightning!)', to: '/docs/solution-architecture/work-orders-without-fsl' },
  { from: "/28)-Networking-Basics-(Firewalls,-DMZ's,-Reverse-Proxies,-etc)", to: '/docs/security/networking-basics' },
  { from: '/29)-Object,-Field-&-Record-Security', to: '/docs/security/object-field-record-security' },
  { from: '/30)-Knowledge-Articles', to: '/docs/solution-architecture/knowledge-articles' },
  { from: '/31)-Experience-Cloud-Features', to: '/docs/solution-architecture/experience-cloud-features' },
  { from: '/32)-External-Services', to: '/docs/solution-architecture/external-services' },
  { from: '/33)-Payment-Gateways-&-Processors---Chargent', to: '/docs/solution-architecture/payment-gateways-chargent' },
  { from: '/34)-Document-Management-Systems-(DMS)', to: '/docs/solution-architecture/document-management-systems' },
  { from: '/35)-Calculating-Data-Storage-In-Salesforce', to: '/docs/data/calculating-data-storage' },
  { from: '/36)-Privacy-and-Consent-Management-Options', to: '/docs/solution-architecture/privacy-consent-management' },
];

export default redirects;
