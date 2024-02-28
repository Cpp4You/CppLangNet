import React from "react";

import "./HiddenHeading.scss";

type HiddenHeadingProps = {
  children: React.ReactNode;
};

export default function HiddenHeading({ children }: HiddenHeadingProps) {
  return (
    <div className="hidden__heading">
      {children}
    </div>
  );
}

HiddenHeading.isMDXComponent = true;
