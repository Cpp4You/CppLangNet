import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import { LazyInsideContainer, InsideContainerProps } from "../Injectors/LazyInsideContainer";

/**
 * Props for the {@linkcode ExpandCodeButton} component.
 */
type ExpandCodeButtonProps = {
  onClick: () => void;
};

/**
 * Displays a button that is used to expand the code in a code block.
 */
function ExpandCodeButton(props: ExpandCodeButtonProps) {
  return (
    <button style={{ marginRight: 5, cursor: "pointer" }} title="Show the full source"
      onClick={props.onClick}
    >
      <CodeIcon fontSize="small" />
    </button>
  );
}

/**
 * Renders children inside a button group that is placed inside a code block.
 * @note The button group is already maintained by the original Docusaurus theme.
 */
function InsideCodeBlockButtonGroup(props: InsideContainerProps) {
  const findButtonGroup = (): HTMLElement | null => {
    return props.container.querySelector("pre+div");
  };

  return (
    <LazyInsideContainer
      container={props.container}
      getPortalTarget={findButtonGroup}
      portalStyle={props.portalStyle}
    >
      {props.children}
    </LazyInsideContainer>
  );
}

/**
 * Props for the {@linkcode ControlButtons} component.
 */
type ControlButtonsProps = {
  container?: HTMLElement;
  onShowFullCode: () => void;
};

/**
 * Renders additional control buttons for the code block using a portal.
 */
export function ControlButtons(props: ControlButtonsProps) {
  return (
    <InsideCodeBlockButtonGroup container={props.container}>
      <ExpandCodeButton onClick={props.onShowFullCode} />
    </InsideCodeBlockButtonGroup>
  );
}

export default ControlButtons;