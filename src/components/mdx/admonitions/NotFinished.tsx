import React from "react";

import Translate from "@docusaurus/Translate";
import Admonition from "@theme/Admonition";

export default function NotFinished() {
  return (
    <Admonition type="caution">
      <Translate>
        Note, this article is not finished! You can help by editing this doc page.
      </Translate>
    </Admonition>
  );
}

NotFinished.isMDXComponent = true;
