import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

/** The product site. Docs are a continuation of it, not a separate property. */
const PRODUCT_URL = 'https://archway.origoma.com';
const GITHUB_ORG = 'https://github.com/ZeroOrigoma';

const config: Config = {
  title: 'Origoma Docs',
  tagline: 'Documentation des produits Origoma',
  favicon: 'img/favicon.ico',

  url: 'https://docs.origoma.com',
  baseUrl: '/',

  organizationName: 'ZeroOrigoma',
  projectName: 'archway-doc',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      // Moved out of siteConfig — the top-level option is deprecated in v3
      // and removed in v4.
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  // Same three faces as the product site, loaded the same way, so the docs
  // and archway.origoma.com render in identical type.
  stylesheets: [
    { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&family=IBM+Plex+Mono:wght@400;500&display=swap', rel: 'stylesheet' },
  ],

  headTags: [
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' } },
    // Paper, so the browser chrome matches the sheet — same value as the product site.
    { tagName: 'meta', attributes: { name: 'theme-color', content: '#e2ddd3' } },
  ],

  presets: [
    [
      'classic',
      {
        docs: false, // disable default docs instance; we use custom instances below
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // --- Archway docs plugin ---
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'archway',
        path: 'docs/archway',
        routeBasePath: 'archway',
        sidebarPath: './sidebars/archway.ts',
        editUrl: 'https://github.com/ZeroOrigoma/archway-doc/tree/main/',
        editCurrentVersion: false,
      },
    ],

    // --- Archway World Generator docs plugin ---
    // The desktop tool that authors the province map Archway imports. Its own
    // instance rather than a chapter of the Archway docs: it is a separate
    // application, installed separately, and someone can have a reason to read
    // about one without the other.
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'world-generator',
        path: 'docs/world-generator',
        routeBasePath: 'world-generator',
        sidebarPath: './sidebars/world-generator.ts',
        editUrl: 'https://github.com/ZeroOrigoma/archway-doc/tree/main/',
        editCurrentVersion: false,
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    navbar: {
      title: 'Origoma Docs',
      logo: {
        alt: 'Archway',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        // Product selector
        {
          type: 'dropdown',
          label: 'Produits',
          position: 'left',
          items: [
            {
              label: 'Archway',
              to: '/archway/',
            },
            {
              label: 'World Generator',
              to: '/world-generator/',
            },
          ],
        },
        {
          href: `${PRODUCT_URL}/#pricing`,
          label: 'Licences',
          position: 'right',
        },
        {
          href: PRODUCT_URL,
          label: 'archway.origoma.com',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Archway', to: '/archway/' },
            { label: 'World Generator', to: '/world-generator/' },
          ],
        },
        {
          title: 'Produit',
          items: [
            { label: 'archway.origoma.com', href: PRODUCT_URL },
            { label: 'Licences', href: `${PRODUCT_URL}/#pricing` },
            { label: 'Activation', href: `${PRODUCT_URL}/activate` },
            { label: 'Renvoyer une licence', href: `${PRODUCT_URL}/reissue` },
          ],
        },
        {
          title: 'Légal & support',
          items: [
            { label: 'EULA', href: `${PRODUCT_URL}/eula` },
            { label: 'Confidentialité', href: `${PRODUCT_URL}/privacy` },
            { label: 'Remboursement', href: `${PRODUCT_URL}/refund` },
            { label: 'contact@origoma.com', href: 'mailto:contact@origoma.com' },
            { label: 'GitHub', href: GITHUB_ORG },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ORIGOMA. Tous droits réservés.`,
    },
    prism: {
      // Code lives in the dark well in both modes — the same well the media
      // frames use for editor captures. So: a dark syntax theme either way.
      theme: prismThemes.nightOwl,
      darkTheme: prismThemes.nightOwl,
    },
    colorMode: {
      // The product site is light-only. Respecting prefers-color-scheme would
      // send every OS-dark visitor to a page that looks nothing like the site
      // they just came from, which is the problem this refit exists to fix.
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
