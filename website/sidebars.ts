import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guideSidebar: [
    'start-here',
    {
      type: 'category',
      label: 'Exam Overview',
      collapsed: false,
      items: ['exam-overview/exam-structure', 'exam-overview/the-diagrams'],
    },
    {
      type: 'category',
      label: 'System Architecture',
      items: [
        'system-architecture/licenses',
        'system-architecture/org-strategy',
        'system-architecture/multi-currency',
        'system-architecture/mobile-solutions',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/data-security',
        'security/object-field-record-security',
        'security/session-settings',
        'security/cryptography',
        'security/mtls',
        'security/networking-basics',
      ],
    },
    {
      type: 'category',
      label: 'Data',
      items: ['data/large-data-volumes', 'data/calculating-data-storage'],
    },
    {
      type: 'category',
      label: 'Solution Architecture',
      items: [
        'solution-architecture/sales-cloud',
        'solution-architecture/service-cloud',
        'solution-architecture/cpq-objects',
        'solution-architecture/field-service-lightning',
        'solution-architecture/experience-cloud-features',
        'solution-architecture/knowledge-articles',
        'solution-architecture/entitlement-management',
        'solution-architecture/work-orders-without-fsl',
        'solution-architecture/governor-limits-best-practices',
        'solution-architecture/standard-object-oddities',
        'solution-architecture/managed-packages',
        'solution-architecture/partner-relationship-management',
        'solution-architecture/external-services',
        'solution-architecture/payment-gateways-chargent',
        'solution-architecture/document-management-systems',
        'solution-architecture/privacy-consent-management',
        'solution-architecture/mulesoft-notes',
        'solution-architecture/reporting',
      ],
    },
    {
      type: 'category',
      label: 'Integration',
      items: ['integration/integration-patterns', 'integration/oauth-flows-iam'],
    },
    {
      type: 'category',
      label: 'Development Lifecycle & Deployment',
      items: [
        'development-lifecycle/project-governance-coe',
        { type: 'ref', id: 'data/large-data-volumes', label: 'Large Data Volumes' },
      ],
    },
    {
      type: 'category',
      label: 'Communication',
      items: ['communication/board-presentation-tips', 'communication/lucidchart-tips'],
    },
  ],
};

export default sidebars;
