import type { SidebarItemConfig } from "../../types";

import { docsMethod } from "../../common";

const sidebar: SidebarItemConfig = {
  type: "category",
  label: "Utility",
  items: [
    docsMethod("std/utility/forward", "since-cpp11"),
    docsMethod("std/utility/variant", "since-cpp17"),
  ]
};

export default sidebar;