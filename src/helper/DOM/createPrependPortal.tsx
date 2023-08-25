import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export default function createPrependPortal(component: React.ReactNode, container?: Element, portalProps: any): React.ReactPortal
{
  const createElement = () => {
    const elem = document.createElement("div");
    if (portalProps.style) {
      for (const key in portalProps.style) {
        elem.style[key] = portalProps.style[key];
      }
    }
    return elem;
  };

  const portalContainer = React.useRef( createElement() );
  useEffect(() => {
    if (!container) {
      return;
    }

    container.prepend(portalContainer.current);
    return () => {
      container.removeChild(portalContainer.current);
    };
  }, [container, portalContainer]);

  if (!container) {
    return null;
  }

  return createPortal(
    component,
    portalContainer.current,
  );
}