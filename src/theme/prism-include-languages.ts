// import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
// import siteConfig from "@generated/docusaurus.config";
import type * as PrismNamespace from "prismjs";

import ExtendCpp from "@site/src/prism/extend-cpp";
import LangLog from "@site/src/prism/lang-log";
import LangConsole from "@site/src/prism/lang-console";

const plugins = [
  ExtendCpp,
  LangLog,
  LangConsole,
];

export default function prismIncludeLanguages(
  PrismObject: typeof PrismNamespace,
): void {
  // if (!ExecutionEnvironment.canUseDOM) {
  //   return;
  // }

  plugins.forEach(p => p(PrismObject));
}