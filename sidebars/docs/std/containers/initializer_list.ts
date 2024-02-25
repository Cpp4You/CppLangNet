import { SidebarItemConfig } from "@site/sidebars/types";
import {
  cat,
  docsClassCat,
} from "../../../common";

const sidebar: SidebarItemConfig = docsClassCat("initializer_list", "std/containers/arrays/initializer_list", "since-cpp11", [
  "constructor",
  cat("Capacity"),
  "m:size",
  cat("Iterators"),
  "m:begin",
  "m:end",
]);

export default sidebar;