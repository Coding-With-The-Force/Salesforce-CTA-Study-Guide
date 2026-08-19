import React, { useCallback, useRef, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import SchematicDiagram, { type DomainKey } from '@site/src/components/SchematicDiagram';

import styles from './index.module.css';

type Domain = {
  key: DomainKey;
  no: string;
  name: string;
  desc: string;
  count: string;
  to: string;
};

const DOMAINS: Domain[] = [
  {
    key: 'exam-overview',
    no: '§ 00',
    name: 'Exam Overview',
    desc: 'Board structure & the seven exam diagrams.',
    count: '2 GUIDES',
    to: '/docs/exam-overview/exam-structure',
  },
  {
    key: 'system-architecture',
    no: '§ 01',
    name: 'System Architecture',
    desc: 'Licenses, org strategy, multi-currency, mobile.',
    count: '4 GUIDES',
    to: '/docs/system-architecture/licenses',
  },
  {
    key: 'security',
    no: '§ 02',
    name: 'Security ★',
    desc: 'Record security, sessions, crypto, mTLS, networking.',
    count: '6 GUIDES',
    to: '/docs/security/data-security',
  },
  {
    key: 'data',
    no: '§ 03',
    name: 'Data',
    desc: 'Large data volumes & data storage math.',
    count: '2 GUIDES',
    to: '/docs/data/large-data-volumes',
  },
  {
    key: 'solution-architecture',
    no: '§ 04',
    name: 'Solution Architecture',
    desc: 'Sales, Service, CPQ, FSL, Experience Cloud & more.',
    count: '18 GUIDES',
    to: '/docs/solution-architecture/sales-cloud',
  },
  {
    key: 'integration',
    no: '§ 05',
    name: 'Integration',
    desc: 'Integration patterns, OAuth flows & IAM.',
    count: '2 GUIDES',
    to: '/docs/integration/integration-patterns',
  },
  {
    key: 'development-lifecycle',
    no: '§ 06',
    name: 'Development Lifecycle',
    desc: 'Project governance (COE) & deployment planning.',
    count: '2 GUIDES',
    to: '/docs/development-lifecycle/project-governance-coe',
  },
  {
    key: 'communication',
    no: '§ 07',
    name: 'Communication',
    desc: 'Board presentation tips & Lucidchart hotkeys.',
    count: '2 GUIDES',
    to: '/docs/communication/board-presentation-tips',
  },
];

export default function Home(): React.ReactElement {
  const [selectedDomain, setSelectedDomain] = useState<DomainKey | null>(null);
  const clearHighlightTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSelectDomain = useCallback((domain: DomainKey) => {
    setSelectedDomain(domain);
    document
      .getElementById(`domain-${domain}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (clearHighlightTimer.current) {
      clearTimeout(clearHighlightTimer.current);
    }
    clearHighlightTimer.current = setTimeout(() => setSelectedDomain(null), 2600);
  }, []);

  return (
    <Layout description="The free, unofficial complete guide to the Salesforce Certified Technical Architect Review Board — study guides, exam diagrams, and practice scenarios.">
      <main>
        <header className={styles.hero}>
          <span className={styles.kicker}>
            THE COMPLETE GUIDE TO THE SALESFORCE CERTIFIED TECHNICAL ARCHITECT REVIEW BOARDS · FREE FOREVER
          </span>
          <h1 className={styles.title}>
            The complete guide to the Salesforce CTA exam - Everything you need to know, all in one place 
          </h1>
          <p className={styles.subtitle}>
            The CTA board tests how the pieces connect, not just the pieces. Trace all 7
            domains through 38 study guides, 7 exam diagram templates, and 16 practice
            scenarios ranked by realism — every step shown.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryBtn} to="/docs/start-here">
              OPEN THE PAD →
            </Link>
            <Link className={styles.secondaryBtn} to="/docs/exam-overview/the-diagrams">
              TRACE THE DIAGRAMS
            </Link>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>38</span>
              <span className={styles.statLabel}>STUDY GUIDES</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>16</span>
              <span className={styles.statLabel}>MOCK SCENARIOS</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>7</span>
              <span className={styles.statLabel}>DIAGRAM TEMPLATES</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>$0</span>
              <span className={styles.statLabel}>FOREVER</span>
            </div>
          </div>
        </header>

        <div className={styles.figureWrap}>
          <figure className={styles.figure} style={{ margin: 0 }}>
            <div className={styles.figureHead}>
              <span className={styles.figureLabel}>FIG 1 — THE SALESFORCE CTA REVIEW BOARD, TRACED ON THE PAD</span>
              <span className={styles.figureNote}>ALL THE INFO YOU NEED IN ONE PLACE</span>
            </div>
            <SchematicDiagram onSelectDomain={handleSelectDomain} selectedDomain={selectedDomain} />
          </figure>
        </div>

        <section className={styles.section}>
          <span className={styles.sectionLabel}>SECTION INDEX — OVERVIEW + 7 DOMAINS</span>
          <div className={styles.domainGrid}>
            {DOMAINS.map((d) => (
              <Link
                key={d.key}
                id={`domain-${d.key}`}
                to={d.to}
                className={clsx(
                  styles.domainCard,
                  selectedDomain === d.key && styles.domainCardSelected,
                )}
              >
                <span className={styles.domainNo}>{d.no}</span>
                <span className={styles.domainName}>{d.name}</span>
                <span className={styles.domainDesc}>{d.desc}</span>
                <span className={styles.domainCount}>{d.count}</span>
              </Link>
            ))}
          </div>

          <div className={styles.twoCol}>
            <div className={styles.workedCard}>
              <span className={styles.workedTitle}>
                WORKED EXAMPLE — "USERS MUST NOT RE-ENTER CREDENTIALS"
              </span>
              <div className={styles.workedSteps}>
                <span className={styles.workedStep}>
                  <code>1.</code>
                  <span>Name the standard → SAML 2.0 or OpenID Connect</span>
                </span>
                <span className={styles.workedStep}>
                  <code>2.</code>
                  <span>Name the flow → SP-initiated SSO</span>
                </span>
                <span className={styles.workedStep}>
                  <code>3.</code>
                  <span>Name the IdP → and say why it holds the identities</span>
                </span>
                <span className={clsx(styles.workedStep, styles.workedConclusion)}>
                  <code>∴</code>
                  <span>All three, every time — that is how you pass Q&amp;A.</span>
                </span>
              </div>
            </div>
            <div className={styles.coachCard}>
              <span className={styles.workedTitle}>MARGIN NOTE — COACHING</span>
              <span className={styles.coachText}>
                Check your work with a full 3-hour mock review board — presentation, Q&amp;A,
                and detailed feedback, at half the price of any other CTA coach.
              </span>
              <div className={styles.coachActions}>
                <Link
                  className={styles.coachBtn}
                  href="https://calendly.com/codingwiththeforce/cta-course-mock-exam-scheduling-clone"
                >
                  SCHEDULE A MOCK →
                </Link>
                <Link
                  className={styles.coachBtnGhost}
                  href="https://codingwiththeforce.com/cta-1-on-1-coaching/"
                >
                  1-ON-1 COACHING
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
