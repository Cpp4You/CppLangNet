import React from "react";

// MUI
import ForwardIcon from "@mui/icons-material/ForwardTwoTone";

import { Arrow, Bounds, HighlightVariant } from "./Setup";

// Styles
import "./Inspection.scss";

type ArrowProps = {
  key?: string;
  arrow: Arrow;
  lineBounds: Bounds;
  variant?: HighlightVariant;
};

/**
 * Displays an arrow pointing to a specified line in a code block.
 */
export function ArrowInspection(props: ArrowProps) {

  const variant = props.variant ?? "default";
  const boundsCenter = props.lineBounds.top + props.lineBounds.height / 2;

  return (
    <span
      key={props.key}
      data-variant={variant}
      className={"insp-code-arrow"}
      style={{
        top: boundsCenter,
        left: `calc(${props.lineBounds.left}px - 2rem)`,
      }}
    >
      <ForwardIcon color="inherit" fontSize="inherit" />
    </span>
  );
}

export default ArrowInspection;