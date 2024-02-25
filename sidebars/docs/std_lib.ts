import type { SidebarItemConfig } from "../types";

import StdMath from "./std/math";
import StdContainers from "./std/containers";
import StdAlgorithms from "./std/algorithms";
import StdMemoryManagement from "./std/memory-management";
import StdUtility from "./std/utility";

const partialSidebar: SidebarItemConfig = {
  type: "category",
  label: "Standard Library",
  collapsed: false,
  link: { type: "doc", id: "std/index" },
  items: [
    StdMath,
    StdContainers,
    StdAlgorithms,
    StdMemoryManagement,
    StdUtility,
  ],
};

export default partialSidebar;