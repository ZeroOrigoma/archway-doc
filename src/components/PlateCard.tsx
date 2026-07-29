import React from 'react';
import Link from '@docusaurus/Link';

/** Grid of plate cards — the four movements, or any set of entry points. */
export function CardGrid({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
        gap: '1rem',
        margin: '1.75rem 0',
      }}
    >
      {children}
    </div>
  );
}

/**
 * One entry point. `no` carries the movement numeral so the card reads as a
 * plate in the run rather than as an app tile.
 */
export default function PlateCard({
  to,
  no,
  title,
  children,
}: {
  to: string;
  no?: string;
  title: string;
  children?: React.ReactNode;
}): React.ReactElement {
  return (
    <Link to={to} className="card-plate">
      {no && <div className="plate-title" style={{ marginBottom: '0.5rem' }}>{no}</div>}
      <div
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.15rem',
          fontWeight: 600,
          color: 'var(--color-ink)',
        }}
      >
        {title}
      </div>
      {/* A div, not a p: MDX already wraps the child text in a paragraph, and a
          nested <p> is invalid HTML — React fails hydration on it. */}
      {children && (
        <div
          style={{
            margin: '0.4rem 0 0',
            fontSize: '0.875rem',
            lineHeight: 1.6,
            color: 'var(--color-muted)',
          }}
        >
          {children}
        </div>
      )}
    </Link>
  );
}
