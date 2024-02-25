import type { SidebarsConfig } from "./types";

import StdLib from "./docs/std_lib";
import NamedReq from "./docs/named_req";

const sidebars: SidebarsConfig = {
  defaultSidebar: [
    "index",
    "useful-links",
    StdLib,
    NamedReq,
  ],
};
export default sidebars;