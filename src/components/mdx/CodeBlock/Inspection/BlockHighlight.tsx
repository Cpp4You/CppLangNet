import React from "react";
import { Bounds, HighlightVariant } from "./Setup";

// Styles
import "./Inspection.scss";

type BlockHighlightProps = {
  key?: string;
  bounds: Bounds;
  variant?: HighlightVariant;
}

/**
 * Displays a block-shaped highlight.
 */
export function BlockHighlight(props: BlockHighlightProps) {

  const variant = props.variant ?? "default";

  return (
    <div
      key={props.key}
      className={"insp-block-highlight"}
      data-variant={variant}
      style={{
        top: props.bounds.top - 2,
        left: props.bounds.left - 2,
        width: `calc(min(${props.bounds.width + 4}px, 80vw))`,
        height: props.bounds.height + 4,
      }}
    >
    </div>
  );
}

export default BlockHighlight;