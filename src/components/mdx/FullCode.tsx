import React from "react";
import Translate from "@docusaurus/Translate";
import Details from "@theme/Details";

interface FullCodeProps {
  content: React.ReactNode;
}

export default function FullCode({ content }: FullCodeProps) {

  return (
    <Details summary={<summary><Translate>See full code</Translate></summary>}>
      <div>
        {content}
      </div>
    </Details>
  );
}

FullCode.isMDXComponent = true;