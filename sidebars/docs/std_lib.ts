import type { SidebarItemConfig } from "../types";

const partialSidebar: SidebarItemConfig = {
  type: "category",
  label: "Standard Library",
  collapsed: false,
  link: { type: "doc", id: "std/index" },
  items: [
    require("./std/math"),
    require("./std/containers"),
    require("./std/algorithms"),
    require("./std/memory-management"),
    require("./std/utility"),
  ],
};

export default partialSidebar;