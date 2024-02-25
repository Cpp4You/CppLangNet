import type * as PrismNamespace from "prismjs";
export default function main(prism: typeof PrismNamespace) {
  prism.languages.console = {
    "console-token": /[\s\S]*/,
  };
}