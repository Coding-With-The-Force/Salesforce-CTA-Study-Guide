import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import redirects from './redirects';

const config: Config = {
  title: 'The Salesforce CTA Exam Guide',
  tagline: 'The unofficial complete guide to the Salesforce CTA Review Board',
  favicon: 'img/favicon.svg',

  url: 'https://the-salesforce-cta-exam-guide.com',
  baseUrl: '/',
  // Directory-style URLs (/docs/foo/). GitHub Pages serves foo/index.html
  // directly for these, avoiding a 301 hop, and it matches the trailing-slash
  // style of the old mkdocs URLs our redirects catch.
  trailingSlash: true,

  organizationName: 'Coding-With-The-Force',
  projectName: 'Salesforce-CTA-Study-Guide',

  onBrokenLinks: 'throw',

  markdown: {
    format: 'detect',
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap',
      type: 'text/css',
    },
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects,
      },
    ],
  ],

  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl:
            'https://github.com/Coding-With-The-Force/Salesforce-CTA-Study-Guide/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Social share card (og:image / twitter:image)
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'CTA EXAM GUIDE',
      logo: {
        alt: 'CTA Exam Guide logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/start-here', label: 'Start Here', position: 'left' },
        {
          type: 'dropdown',
          label: 'Exam Overview',
          position: 'left',
          items: [
            { to: '/docs/exam-overview/exam-structure', label: 'Exam Structure' },
            { to: '/docs/exam-overview/the-diagrams', label: 'The Diagrams' },
          ],
        },
        {
          type: 'dropdown',
          label: 'System Arch',
          position: 'left',
          items: [
            { to: '/docs/system-architecture/licenses', label: 'Licenses Guide' },
            { to: '/docs/system-architecture/org-strategy', label: 'Org Strategy (Single vs Multi-Org)' },
            { to: '/docs/system-architecture/multi-currency', label: 'Multi-Currency' },
            { to: '/docs/system-architecture/mobile-solutions', label: 'Mobile Solutions' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Security',
          position: 'left',
          items: [
            { to: '/docs/security/data-security', label: 'Data Security' },
            { to: '/docs/security/object-field-record-security', label: 'Object, Field & Record Security' },
            { to: '/docs/security/session-settings', label: 'Session Settings' },
            { to: '/docs/security/cryptography', label: 'Cryptography' },
            { to: '/docs/security/mtls', label: 'mTLS (Mutual TLS / 2-way SSL)' },
            { to: '/docs/security/networking-basics', label: 'Networking Basics' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Data',
          position: 'left',
          items: [
            { to: '/docs/data/large-data-volumes', label: 'Large Data Volumes' },
            { to: '/docs/data/calculating-data-storage', label: 'Calculating Data Storage' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Solution Arch',
          position: 'left',
          items: [
            { to: '/docs/solution-architecture/sales-cloud', label: 'Sales Cloud' },
            { to: '/docs/solution-architecture/service-cloud', label: 'Service Cloud' },
            { to: '/docs/solution-architecture/cpq-objects', label: 'CPQ Objects' },
            { to: '/docs/solution-architecture/field-service-lightning', label: 'Field Service Lightning' },
            { to: '/docs/solution-architecture/experience-cloud-features', label: 'Experience Cloud Features' },
            { to: '/docs/solution-architecture/knowledge-articles', label: 'Knowledge Articles' },
            { to: '/docs/solution-architecture/entitlement-management', label: 'Entitlement Management' },
            { to: '/docs/solution-architecture/work-orders-without-fsl', label: 'Work Orders (without FSL)' },
            { to: '/docs/solution-architecture/governor-limits-best-practices', label: 'Governor Limits & Best Practices' },
            { to: '/docs/solution-architecture/standard-object-oddities', label: 'Standard Object Oddities' },
            { to: '/docs/solution-architecture/managed-packages', label: 'Managed Packages' },
            { to: '/docs/solution-architecture/partner-relationship-management', label: 'Partner Relationship Management' },
            { to: '/docs/solution-architecture/external-services', label: 'External Services' },
            { to: '/docs/solution-architecture/payment-gateways-chargent', label: 'Payment Gateways & Chargent' },
            { to: '/docs/solution-architecture/document-management-systems', label: 'Document Management Systems' },
            { to: '/docs/solution-architecture/privacy-consent-management', label: 'Privacy & Consent Management' },
            { to: '/docs/solution-architecture/mulesoft-notes', label: 'Mulesoft Notes' },
            { to: '/docs/solution-architecture/reporting', label: 'Reporting' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Integration',
          position: 'left',
          items: [
            { to: '/docs/integration/integration-patterns', label: 'Integration Patterns' },
            { to: '/docs/integration/oauth-flows-iam', label: 'OAuth Flows & IAM' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Dev Lifecycle',
          position: 'left',
          items: [
            { to: '/docs/development-lifecycle/project-governance-coe', label: 'Project Governance (COE)' },
            { to: '/docs/data/large-data-volumes', label: 'Large Data Volumes' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Communication',
          position: 'left',
          items: [
            { to: '/docs/communication/board-presentation-tips', label: 'Board Presentation Tips' },
            { to: '/docs/communication/lucidchart-tips', label: 'Lucidchart Tips' },
          ],
        },
        {
          href: 'https://github.com/Coding-With-The-Force/Salesforce-CTA-Study-Guide',
          position: 'right',
          className: 'header-icon-link header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://www.youtube.com/@CodingWithTheForce',
          position: 'right',
          className: 'header-icon-link header-youtube-link',
          'aria-label': 'YouTube channel',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'THE GUIDE',
          items: [
            { label: 'Start Here', to: '/docs/start-here' },
            { label: 'Exam Structure', to: '/docs/exam-overview/exam-structure' },
            { label: 'The Diagrams', to: '/docs/exam-overview/the-diagrams' },
          ],
        },
        {
          title: 'FREE RESOURCES',
          items: [
            {
              label: "Suzanne Ferguson's CTA AMA",
              href: 'https://youtu.be/CX4TY3bnuYA',
            },
            {
              label: 'Architect Exam Trailmixes',
              href: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-trailmix-master',
            },
            {
              label: 'CTA Gang of Four',
              href: 'https://ctagof.com/',
            },
            {
              label: 'Architect Ohana Slack',
              href: 'https://join.slack.com/t/architectohana/shared_invite/zt-3wtxefn4i-JT~UNx5VHoPbdmScfcv2hA',
            },
          ],
        },
        {
          title: 'COACHING',
          items: [
            {
              label: '1-on-1 CTA Coaching',
              href: 'https://codingwiththeforce.com/cta-1-on-1-coaching/',
            },
            {
              label: 'Schedule a Mock Review Board',
              href: 'https://calendly.com/codingwiththeforce/cta-course-mock-exam-scheduling-clone',
            },
            {
              label: 'CTA Coaching Class',
              href: 'https://www.paypal.com/ncp/payment/8B7SKNP4SYGEG',
            },
          ],
        },
      ],
      copyright: `Made with 🦖 by <a href="https://github.com/Coding-With-The-Force">Coding With The Force</a> &nbsp;|&nbsp; <a href="https://www.paypal.com/donate?business=RNHEF8ZWKKLDG&currency_code=USD">Buy me some Taco Bell? 🌮</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
