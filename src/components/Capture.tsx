import React, { useCallback, useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

/**
 * The canonical wrapper for an Unreal Editor capture.
 *
 * The dark well (--color-media-well) is what lets a screenshot of a dark
 * editor sit on beige paper without fighting it — same device the product
 * site uses for its figure plates.
 *
 *   <Capture src="/img/z2h/01-plugin-manager.png" caption="Plugin Manager" fig="Fig. 1.1" />
 *
 * `src` is a path under static/, resolved through useBaseUrl so the pages keep
 * working if the site ever moves off the domain root.
 *
 * Sizing lives in CSS (.media-frame-inner img): captures are never upscaled and
 * are height-capped. Pass `zoom` for detail-heavy panels — the plate then opens
 * a closable overlay at full size, on the same page.
 */
export default function Capture({
  src,
  alt,
  caption,
  fig,
  zoom = false,
}: {
  src: string;
  alt?: string;
  caption?: string;
  fig?: string;
  zoom?: boolean;
}): React.ReactElement {
  const url = useBaseUrl(src);
  const [open, setOpen] = useState(false);
  const label = alt ?? caption ?? '';

  const close = useCallback(() => setOpen(false), []);

  // Esc closes, and the page behind must not scroll while the plate is open.
  useEffect(() => {
    if (!open) return undefined;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);

    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open, close]);

  const img = <img src={url} alt={label} loading="lazy" />;

  return (
    <>
      <figure className="media-frame">
        <div className="media-frame-inner">
          {zoom ? (
            <button
              type="button"
              className="media-frame-trigger"
              onClick={() => setOpen(true)}
              aria-label={
                label ? `Agrandir : ${label}` : 'Agrandir la capture'
              }
            >
              {img}
            </button>
          ) : (
            img
          )}
        </div>
        {(caption || fig || zoom) && (
          <figcaption className="media-frame-caption">
            <span>
              {caption}
              {zoom && (
                <>
                  {' — '}
                  <span className="media-frame-zoom">cliquer pour agrandir</span>
                </>
              )}
            </span>
            {fig && <span>{fig}</span>}
          </figcaption>
        )}
      </figure>

      {open && (
        <div
          className="capture-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={label || 'Capture agrandie'}
          onClick={close}
        >
          <button
            type="button"
            className="capture-overlay-close"
            onClick={close}
            aria-label="Fermer"
          >
            ✕
          </button>
          {/* Stop propagation so clicking the image itself doesn't dismiss. */}
          <figure
            className="capture-overlay-figure"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={url} alt={label} />
            {(caption || fig) && (
              <figcaption className="capture-overlay-caption">
                <span>{caption}</span>
                {fig && <span>{fig}</span>}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}
