import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export default function createPrependPortal(component: React.ReactNode, container?: Element): React.ReactPortal
{
  const portalContainer = React.useRef(document.createElement("div"));
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