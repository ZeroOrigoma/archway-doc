import MDXComponents from '@theme-original/MDXComponents';
import PlateHead from '@site/src/components/PlateHead';
import Sheet from '@site/src/components/Sheet';
import Capture from '@site/src/components/Capture';
import CaptureTodo from '@site/src/components/CaptureTodo';
import PlateCard, { CardGrid } from '@site/src/components/PlateCard';

/**
 * Registered globally so .mdx pages can use the atlas components without an
 * import line at the top of every file — which matters once Zero to Hero's
 * chapters land and every one of them opens with a Sheet.
 */
export default {
  ...MDXComponents,
  PlateHead,
  Sheet,
  Capture,
  CaptureTodo,
  PlateCard,
  CardGrid,
};
