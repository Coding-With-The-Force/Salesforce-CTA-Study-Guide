import React from 'react';

import styles from './SchematicDiagram.module.css';

const MONO = "'IBM Plex Mono', ui-monospace, monospace";

export type DomainKey =
  | 'exam-overview'
  | 'system-architecture'
  | 'security'
  | 'data'
  | 'solution-architecture'
  | 'integration'
  | 'development-lifecycle'
  | 'communication';

type SchematicDiagramProps = {
  onSelectDomain?: (domain: DomainKey) => void;
  selectedDomain?: DomainKey | null;
};

type BoxProps = {
  x: number;
  y: number;
  label: string;
  domain: DomainKey;
  selected?: boolean;
  onSelect?: (domain: DomainKey) => void;
};

function DomainBox({ x, y, label, domain, selected, onSelect }: BoxProps) {
  const select = () => onSelect?.(domain);
  return (
    <g
      className={styles.node}
      role="button"
      tabIndex={0}
      aria-label={`Show ${label.replace(/^§\d+ /, '')} in the section index`}
      onClick={select}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          select();
        }
      }}
    >
      <rect
        x={x}
        y={y}
        width={170}
        height={52}
        rx={3}
        strokeWidth={selected ? 2.5 : 1.4}
        fill={selected ? 'var(--schematic-fill-hot)' : 'var(--pad-card)'}
      />
      <text
        x={x + 85}
        y={y + 30}
        textAnchor="middle"
        fill={selected ? 'var(--schematic-ink-strong)' : 'var(--pad-text)'}
        stroke="none"
        fontFamily={MONO}
        fontSize={11}
        fontWeight={selected ? 600 : 400}
        style={{ pointerEvents: 'none' }}
      >
        {label}
      </text>
    </g>
  );
}

/**
 * The homepage hero: the exam overview and the 7 exam domains wired into
 * the review board.
 * Geometry mirrors design-mockups/21-merge-schematic-on-pad-home.html.
 * Clicking a domain box notifies the parent so it can highlight the
 * matching card in the section index.
 */
export default function SchematicDiagram({
  onSelectDomain,
  selectedDomain,
}: SchematicDiagramProps): React.ReactElement {
  const boxProps = (domain: DomainKey) => ({
    domain,
    selected: selectedDomain === domain,
    onSelect: onSelectDomain,
  });
  return (
    <svg
      viewBox="0 0 1200 380"
      role="img"
      aria-label="Schematic diagram showing the exam overview and the 7 CTA exam domains wired into the review board"
      fill="none"
      stroke="var(--schematic-ink)"
      strokeWidth={1.4}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      {/* Wires first so the clickable boxes paint (and click) above them */}
      <path d="M230 66h50v100h220" />
      <circle cx={500} cy={166} r={3.5} fill="var(--schematic-ink)" stroke="none" />
      <path d="M230 190h270" />
      <circle cx={500} cy={190} r={3.5} fill="var(--schematic-ink)" stroke="none" />
      <path d="M230 314h50v-100h220" strokeWidth={2} />
      <circle cx={500} cy={214} r={3.5} fill="var(--schematic-ink)" stroke="none" />
      <path d="M415 92v50h135v8" />
      <circle cx={550} cy={150} r={3.5} fill="var(--schematic-ink)" stroke="none" />
      <path d="M415 288v-50h135v-8" />
      <circle cx={550} cy={230} r={3.5} fill="var(--schematic-ink)" stroke="none" />
      <path d="M785 92v74h-85" />
      <circle cx={700} cy={166} r={3.5} fill="var(--schematic-ink)" stroke="none" />
      <path d="M785 288v-74h-85" />
      <circle cx={700} cy={214} r={3.5} fill="var(--schematic-ink)" stroke="none" />
      <path d="M970 190h-270" />
      <circle cx={700} cy={190} r={3.5} fill="var(--schematic-ink)" stroke="none" />

      <rect
        x={500}
        y={150}
        width={200}
        height={80}
        rx={3}
        strokeWidth={2.5}
        fill="var(--schematic-fill)"
      />
      <text
        x={600}
        y={185}
        textAnchor="middle"
        fill="var(--schematic-ink-strong)"
        stroke="none"
        fontFamily={MONO}
        fontSize={16}
        fontWeight={600}
      >
        THE CTA
      </text>
      <text
        x={600}
        y={208}
        textAnchor="middle"
        fill="var(--pad-text-soft)"
        stroke="none"
        fontFamily={MONO}
        fontSize={10}
      >
        REVIEW BOARD
      </text>

      <DomainBox x={60} y={40} label="§00 EXAM OVERVIEW" {...boxProps('exam-overview')} />
      <DomainBox x={60} y={164} label="§01 SYSTEM ARCH" {...boxProps('system-architecture')} />
      <DomainBox x={60} y={288} label="§02 SECURITY ★" {...boxProps('security')} />
      <DomainBox x={330} y={40} label="§03 DATA" {...boxProps('data')} />
      <DomainBox x={330} y={288} label="§04 SOLUTION ARCH" {...boxProps('solution-architecture')} />
      <DomainBox x={700} y={40} label="§05 INTEGRATION" {...boxProps('integration')} />
      <DomainBox x={700} y={288} label="§06 DEV LIFECYCLE" {...boxProps('development-lifecycle')} />
      <DomainBox x={970} y={164} label="§07 COMMUNICATION" {...boxProps('communication')} />

      <text x={288} y={130} fill="var(--schematic-label)" stroke="none" fontFamily={MONO} fontSize={9}>
        7 DIAGRAMS
      </text>
      <text x={288} y={255} fill="var(--schematic-label)" stroke="none" fontFamily={MONO} fontSize={9}>
        6 GUIDES
      </text>
      <text x={875} y={182} fill="var(--schematic-label)" stroke="none" fontFamily={MONO} fontSize={9}>
        PRESENT + Q&amp;A
      </text>
    </svg>
  );
}
