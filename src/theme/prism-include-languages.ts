import type * as PrismNamespace from "prismjs";

import * as langs from "@site/src/prism/langs";

const plugins = [
  langs.cpp,
  langs.log,
  langs.console,
];

export default function prismIncludeLanguages(
  PrismObject: typeof PrismNamespace,
): void {
  plugins.forEach(p => p(PrismObject));
}