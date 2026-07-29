import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * The four movements mirror the method the product site advertises —
 * Install → Import → Cook → Play. Zero to Hero's chapters are their spine.
 *
 * Within movement I the order is buy → activate → enable: the licence is
 * installed before the editor is initialised, because that is the order a
 * paying customer actually lives.
 *
 * Reference is ordered by when you meet each page, not alphabetically.
 */
const sidebars: SidebarsConfig = {
  archwaySidebar: [
    {
      type: 'category',
      label: 'Découvrir',
      items: ['overview/what-is-archway', 'overview/philosophy'],
    },
    {
      type: 'category',
      label: 'I — Installer',
      items: [
        'installation/installation',
        'installation/activation',
        'installation/initialiser',
      ],
    },
    {
      type: 'category',
      label: 'II — Importer',
      items: [
        'import/premier-monde',
        'import/map-modes',
        'import/division-administrative',
      ],
    },
    {
      type: 'category',
      label: 'III — Cook',
      items: ['cook/landscape-material', 'cook/cook-territoires'],
    },
    {
      type: 'category',
      label: 'IV — Jouer',
      items: ['play/conquerir', 'play/save-load'],
    },
    {
      type: 'category',
      label: 'Référence',
      items: [
        'reference/components',
        'reference/data-structure',
        'reference/exposed-functions',
        'reference/cpp-interface',
        'reference/glossary',
      ],
    },
    {
      type: 'category',
      label: 'Dépannage',
      items: ['troubleshooting/troubleshooting'],
    },
  ],
};

export default sidebars;
