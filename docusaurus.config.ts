import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, hooks...)

const config: Config = {
  title: 'Archway',
  tagline: 'Documentation du plugin Unreal Engine',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.origoma.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages: set this to your GitHub repo name
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ZeroOrigoma', // GitHub org
  projectName: 'archway-doc', // repo name

  // On uncaught errors you warn when reporting new Crashes to Crashlytics
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is French, you
  // might want to replace "en" with "fr"
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ZeroOrigoma/archway-doc/tree/main/',
          routeBasePath: '/', // serve docs at root URL (no /docs/ prefix)
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Archway',
      logo: {
        alt: 'Archway Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/ZeroOrigoma/archway-doc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ZeroOrigoma/archway-doc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Origoma. Built with Docusaurus.`,
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
