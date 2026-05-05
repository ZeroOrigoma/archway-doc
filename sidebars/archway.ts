import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  archwaySidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: ['overview/what-is-archway', 'overview/philosophy'],
    },
    {
      type: 'category',
      label: 'Installation',
      items: ['installation/installation'],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/asset-inventory',
        'reference/bp-nodes',
        'reference/components',
        'reference/cpp-interface',
        'reference/exposed-functions',
        'reference/data-structure',
        'reference/glossary',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: ['troubleshooting/troubleshooting'],
    },
  ],
};

export default sidebars;
