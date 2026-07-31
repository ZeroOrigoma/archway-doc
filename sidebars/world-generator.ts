import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Four movements, mirroring Archway's spine — but the pipeline this tool
 * actually is: Générer → Sculpter → Découper → Exporter. Each movement reads
 * the one before it, and the last one hands its output to Archway's
 * movement II.
 *
 * Installation is not a movement here. Unzipping a folder is one page, not a
 * chapter, so it sits under Découvrir with the rest of the orientation.
 *
 * Reference is ordered by when you meet each page, not alphabetically.
 */
const sidebars: SidebarsConfig = {
  worldGeneratorSidebar: [
    {
      type: 'category',
      label: 'Découvrir',
      items: ['overview/qu-est-ce-que', 'overview/installation'],
    },
    {
      type: 'category',
      label: 'I — Générer',
      items: ['generer/premier-monde', 'generer/terrain'],
    },
    {
      type: 'category',
      label: 'II — Sculpter',
      items: ['sculpter/sculpter'],
    },
    {
      type: 'category',
      label: 'III — Découper',
      items: ['decouper/provinces', 'decouper/hierarchie'],
    },
    {
      type: 'category',
      label: 'IV — Exporter',
      items: ['exporter/export'],
    },
    {
      type: 'category',
      label: 'Référence',
      items: [
        'reference/interface',
        'reference/raccourcis',
        'reference/masques',
        'reference/fichiers',
        'reference/glossaire',
      ],
    },
    {
      type: 'category',
      label: 'Dépannage',
      items: ['depannage/depannage'],
    },
  ],
};

export default sidebars;
