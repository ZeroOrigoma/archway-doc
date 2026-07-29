import React from 'react';

/**
 * The atlas spine, at the top of a chapter:
 *
 *   I — INSTALL ————————————————————————————— 01
 *
 * `no` is the movement (I–IV), `folio` the page number in the run.
 */
export default function PlateHead({
  no,
  title,
  folio,
}: {
  no: string;
  title: string;
  folio?: string;
}): React.ReactElement {
  return (
    <div className="plate-head">
      <span className="plate-no">{no}</span>
      <span className="plate-title">{title}</span>
      <span className="plate-rule" aria-hidden="true" />
      {folio && <span className="plate-folio">{folio}</span>}
    </div>
  );
}
