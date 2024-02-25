import { SidebarItemConfig } from "@site/sidebars/types";
import {
  cat,
  docsClassCat,
} from "../../../common";

const sidebar: SidebarItemConfig = docsClassCat("queue", "std/containers/queues/queue", "", [
  "constructors",
  "destructors",
  "op:operator_assign",
  cat("Element access"),
  "m:front",
  "m:back",
  cat("Capacity"),
  "m:empty",
  "m:size",
  cat("Modifiers"),
  "m:push",
  "m:pop",
  ["m:emplace", "since-cpp11"],
  ["m:swap", "since-cpp11"],
]);

export default sidebar;