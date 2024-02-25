import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  defaultSidebar: [
    "index",
    "useful-links",
    require("./docs/std_lib.ts"),
    require("./docs/named_req"),
  ],
};
export default sidebars;