import React from 'react';

/**
 * Map-sheet frame: outer rule + inner keyline.
 * Used for the Objective / Duration / Prerequisites block at the head of each
 * Zero-to-Hero chapter, and for anything that should read as a plate rather
 * than as body copy.
 */
export default function Sheet({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div className="sheet">
      <div className="sheet-pad">{children}</div>
    </div>
  );
}
