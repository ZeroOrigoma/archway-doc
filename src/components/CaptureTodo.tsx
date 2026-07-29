import React from 'react';

/**
 * An empty capture plate: holds the layout where a screenshot belongs and says
 * so out loud, rather than shipping a step that silently lacks its image.
 *
 * Grep `CaptureTodo` to list every capture still owed.
 */
export default function CaptureTodo({
  what,
  fig,
}: {
  what: string;
  fig?: string;
}): React.ReactElement {
  return (
    <figure className="media-frame media-frame--todo">
      <div className="media-frame-inner media-frame-inner--todo">
        <span className="media-frame-todo-label">Capture à venir</span>
        <span className="media-frame-todo-what">{what}</span>
      </div>
      <figcaption className="media-frame-caption">
        <span>En attente de capture</span>
        {fig && <span>{fig}</span>}
      </figcaption>
    </figure>
  );
}
