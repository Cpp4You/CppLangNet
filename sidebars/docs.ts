import type { SidebarsConfig } from "./types";

const sidebars: SidebarsConfig = {
  defaultSidebar: [
    "index",
    "useful-links",
    require("./docs/std_lib.ts"),
    require("./docs/named_req"),
  ],
};
export default sidebars;