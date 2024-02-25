import { SidebarItemConfig } from "@site/sidebars/types";
import {
  cat,
  docsClassCat,
} from "../../../common";

const sidebar: SidebarItemConfig = docsClassCat("span", "std/containers/other/span", "", [
  "constructors",
  "op:operator_assign",
  cat("Element access"),
  "m:front",
  "m:back",
  "op:operator_subscript",
  "m:data",
  cat("Iterators"),
  "m:begin",
  "m:end",
  "m:rbegin",
  "m:rend",
  cat("Observers"),
  "m:size",
  "m:size_bytes",
  "m:empty",
  cat("Subviews"),
  "m:first",
  "m:last",
  "m:subspan",
]);

export default sidebar;