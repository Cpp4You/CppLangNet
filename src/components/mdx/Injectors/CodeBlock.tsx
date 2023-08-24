import React from "react";
import { LazyInsideContainer, InsideContainerProps } from "./LazyInsideContainer";

const CODE_BLOCK_SELECTOR = ".theme-code-block";

/**
 * Renders children inside a code block `code` (`pre>code`) using a portal.
 */
export function InsideCodeBlockCode(props: InsideContainerProps) {
  const findPre = (): HTMLElement | null => {
    return props.container.querySelector("pre>code");
  };

  return (
    <LazyInsideContainer
      container={props.container}
      getPortalTarget={findPre}
      portalStyle={props.portalStyle}
    >
      {props.children}
    </LazyInsideContainer>
  );
}

/**
 * Renders children along a code block's `pre` element using a portal.
*/
export function AlongCodeBlockPre(props: InsideContainerProps) {
  const findPre = (): HTMLElement | null => {
    return props.container.querySelector(CODE_BLOCK_SELECTOR);
  };

  return (
    <LazyInsideContainer
      container={props.container}
      getPortalTarget={findPre}
      portalStyle={props.portalStyle}
    >
      {props.children}
    </LazyInsideContainer>
  );
}
