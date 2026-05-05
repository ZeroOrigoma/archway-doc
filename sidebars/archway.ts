import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  archwaySidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: ['01-overview/what-is-archway', '01-overview/philosophy'],
    },
    {
      type: 'category',
      label: 'Installation',
      items: ['02-installation/installation'],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        '03-reference/asset-inventory',
        '03-reference/bp-nodes',
        '03-reference/components',
        '03-reference/cpp-interface',
        '03-reference/data-structure',
        '03-reference/glossary',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: ['04-troubleshooting/troubleshooting'],
    },
  ],
};

export default sidebars;
