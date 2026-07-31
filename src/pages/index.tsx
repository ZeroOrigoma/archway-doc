import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const PRODUCT_URL = 'https://archway.origoma.com';

type Product = {
  name: string;
  kicker: string;
  description: string;
  href: string;
  available: boolean;
};

const products: Product[] = [
  {
    name: 'Archway',
    kicker: 'Unreal Engine 5.6+',
    description:
      'Le socle de carte pour les jeux de stratégie : frontières dessinées en shader, territoires dynamiques, map modes.',
    href: '/archway/',
    available: true,
  },
  {
    name: 'World Generator',
    kicker: 'Windows 10 / 11',
    description:
      "L'outil qui dessine la carte qu'Archway importe : terrain procédural, sculpture à la main, provinces, hiérarchie de territoires.",
    href: '/world-generator/',
    available: true,
  },
];

export default function Home(): React.ReactElement {
  return (
    <Layout
      title="Documentation"
      description="Documentation des produits Origoma"
    >
      <main className="container-page" style={{ maxWidth: 960, margin: '0 auto', padding: '4rem 1.5rem 5rem' }}>
        <div className="plate-head">
          <span className="plate-no">—</span>
          <span className="plate-title">Origoma</span>
          <span className="plate-rule" aria-hidden="true" />
          <span className="plate-folio">Docs</span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 1.4rem + 2.6vw, 2.9rem)',
            lineHeight: 1.12,
            fontWeight: 600,
            color: 'var(--color-ink)',
            margin: 0,
          }}
        >
          Documentation
        </h1>
        <p
          style={{
            marginTop: '0.75rem',
            maxWidth: '38rem',
            fontSize: '1.05rem',
            lineHeight: 1.65,
            color: 'var(--color-ink-soft)',
          }}
        >
          Les guides, références et parcours d'apprentissage des produits Origoma.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
            gap: '1rem',
            marginTop: '2.5rem',
          }}
        >
          {products.map((p) =>
            p.available ? (
              <Link key={p.name} to={p.href} className="card-plate">
                <ProductBody {...p} />
              </Link>
            ) : (
              <div
                key={p.name}
                className="card-plate"
                aria-disabled="true"
                style={{ opacity: 0.45 }}
              >
                <ProductBody {...p} />
              </div>
            ),
          )}
        </div>

        <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'var(--color-muted)' }}>
          Vous cherchez les licences, l'activation ou le téléchargement ?{' '}
          <a href={PRODUCT_URL}>archway.origoma.com</a>
        </p>
      </main>
    </Layout>
  );
}

function ProductBody({ name, kicker, description }: Product): React.ReactElement {
  return (
    <>
      <div className="plate-title" style={{ marginBottom: '0.6rem' }}>
        {kicker}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.4rem',
          fontWeight: 600,
          color: 'var(--color-ink)',
        }}
      >
        {name}
      </div>
      <div
        style={{
          margin: '0.5rem 0 0',
          fontSize: '0.9rem',
          lineHeight: 1.6,
          color: 'var(--color-muted)',
        }}
      >
        {description}
      </div>
    </>
  );
}
