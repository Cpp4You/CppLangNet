/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// import Prism from "prism-react-renderer/prism";
// import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import siteConfig from "@generated/docusaurus.config";
import type * as PrismNamespace from 'prismjs';
// import type {Optional} from 'utility-types';

export default function prismIncludeLanguages(
  PrismObject: typeof PrismNamespace,
): void {
  // if (!ExecutionEnvironment.canUseDOM) {
  //   return;
  // }

  const {
    themeConfig: {
      prism: {
        additionalLanguages = [],
        scripts = [],
      } = {}
    },
  } = siteConfig;

  additionalLanguages.forEach((lang) => loadPrismLanguage(PrismObject, lang));
  scripts.forEach((name: string) => loadPrismScript(PrismObject, name));
}

async function loadPrismLanguage(prismContext: typeof PrismNamespace, name: string) {
  return await loadPrismScript(prismContext, `lang-${name}`);
}

async function loadPrismScript(prismContext: typeof PrismNamespace, name: string) {
  try {
    const mod = await import(`/static/prism/${name}`);
    if (mod.default) {;
      mod.default(prismContext);
    } 
  }
  catch (e) {
    console.error(`Failed to load prism plugin "${name}"`, e);
  }
}