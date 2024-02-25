import { SidebarItemConfig } from "@site/sidebars/types";
import {
  cat,
  docsClassCat,
} from "../../../common";

const sidebar: SidebarItemConfig = docsClassCat("forward_list", "std/containers/lists/forward-list", "", [
  "constructors",
  "destructor",
  "op:operator_assign",
  "m:assign",
  "m:get_allocator",
  cat("Element access"),
  "m:front",
  cat("Iterators"),
  "m:before_begin",
  "m:begin",
  "m:end",
  cat("Capacity"),
  "m:empty",
  "m:max_size",
  cat("Modifiers"),
  "m:clear",
  "m:insert_after",
  "m:emplace_after",
  "m:erase_after",
  "m:push_front",
  "m:emplace_front",
  "m:pop_front",
  "m:resize",
  "m:swap",
  cat("Operations"),
  "m:merge",
  "m:splice_after",
  "m:remove",
  "m:reverse",
  "m:unique",
  "m:sort",
]);

export default sidebar;