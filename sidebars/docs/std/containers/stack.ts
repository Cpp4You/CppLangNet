import { SidebarItemConfig } from "@site/sidebars/types";
import {
  cat,
  docsClassCat,
} from "../../../common";

const sidebar: SidebarItemConfig = docsClassCat("stack", "std/containers/other/stack", "", [
  "constructors",
  "destructors",
  "op:operator_assign",
  cat("Element access"),
  "m:top",
  cat("Capacity"),
  "m:empty",
  "m:size",
  cat("Modifiers"),
  "m:push",
  ["m:emplace", "since-cpp11"],
  "m:pop",
  ["m:swap", "since-cpp11"],
]);

export default sidebar;