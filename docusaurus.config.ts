import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Origama Docs',
  tagline: 'Documentation des produits Origama',
  favicon: 'img/favicon.ico',

  url: 'https://docs.origama.com',
  baseUrl: '/',

  organizationName: 'ZeroOrigama',
  projectName: 'archway-doc',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onBrokenMarkdownImages: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

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
        editUrl: 'https://github.com/ZeroOrigama/archway-doc/tree/main/',
        editCurrentVersion: false,
      },
    ],

    // --- Chronoscope docs plugin (placeholder — enable when ready) ---
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'chronoscope',
    //     path: 'docs/chronoscope',
    //     routeBasePath: 'chronoscope',
    //     sidebarPath: './sidebars/chronoscope.ts',
    //     editUrl: 'https://github.com/ZeroOrigama/archway-doc/tree/main/',
    //   },
    // ],
  ],

  themeConfig: {
    navbar: {
      title: 'Origoma Docs',
      logo: {
        alt: 'Origoma Logo',
        src: 'img/logo.svg',
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
            // {
            //   label: 'Chronoscope',
            //   to: '/chronoscope/',
            //   className: 'dropdown__link--disabled',
            // },
          ],
        },
        {
          href: 'https://github.com/ZeroOrigama',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Produits',
          items: [
            { label: 'Archway', to: '/archway/' },
          ],
        },
        {
          title: 'Communauté',
          items: [
            { label: 'GitHub', href: 'https://github.com/ZeroOrigama' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Origama. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
