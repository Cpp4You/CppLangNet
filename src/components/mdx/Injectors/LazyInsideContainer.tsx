import React, { useEffect } from "react";
import createPrependPortal from "@site/src/helper/DOM/createPrependPortal";

/**
 * Interval in milliseconds used to check if the target element is available.
 */
const DETECTION_INTERVAL_MS = 200;

/**
 * Props for the {@linkcode LazyInsideContainer} component.
 */
type LazyInsideContainerProps = {
  container?: HTMLElement;
  children: React.ReactNode;
  portalStyle?: React.CSSProperties;
  getPortalTarget?: () => HTMLElement | null;
};

/**
 * Renders the provided children inside a specified container which might not be available
 * at the time of rendering. The children will be rendered as soon as the container is available.
 */
export function LazyInsideContainer(props: LazyInsideContainerProps) {

  if (!props.container) {
    return null;
  }

  const [portalTarget, setPortalTarget] = React.useState<HTMLElement | null>(null);

  // Wait until the target element is available
  useEffect(() => {
    const interval = setInterval(() => {
      const target = props.getPortalTarget();
      if (target) {
        setPortalTarget(target);
        clearInterval(interval);
      }
    }, DETECTION_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [props.container]);

  return createPrependPortal(
    props.children,
    portalTarget,
    { style: props.portalStyle }
  );
}

/**
 * Base props for a component that injects content inside a certain container.
 * Used only for components that wrap the {@linkcode LazyInsideContainer} component.
 */
export type InsideContainerProps = {
  container?: HTMLElement;
  children: React.ReactNode;
  portalStyle?: React.CSSProperties;
}