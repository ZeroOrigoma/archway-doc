import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const products = [
  {
    name: 'Archway',
    icon: '🏗️',
    description: 'Plugin Unreal Engine',
    href: '/archway/',
    available: true,
  },
  {
    name: 'Chronoscope',
    icon: '🔮',
    description: 'Documentation à venir',
    href: '#',
    available: false,
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Origama Documentation" description="Documentation des produits Origama">
      <main style={{ maxWidth: 960, margin: '0 auto', padding: '4rem 2rem' }}>
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
            Bienvenue sur {siteConfig.title}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--ifm-color-emphasis-700)' }}>
            {siteConfig.tagline}
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {products.map((p) => (
            <Link
              key={p.name}
              to={p.href}
              style={{
                border: `1px solid ${p.available ? 'var(--ifm-color-emphasis-300)' : 'var(--ifm-color-emphasis-200)'}`,
                borderRadius: '12px',
                padding: '1.5rem',
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                opacity: p.available ? 1 : 0.5,
                cursor: p.available ? 'pointer' : 'default',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              onClick={(e) => !p.available && e.preventDefault()}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{p.icon}</div>
              <h3 style={{ margin: '0 0 0.25rem 0' }}>{p.name}</h3>
              <p style={{ margin: 0, color: 'var(--ifm-color-emphasis-600)' }}>
                {p.description}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
