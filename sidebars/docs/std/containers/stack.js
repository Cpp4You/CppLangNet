const {
  docsClass,
  cat,
  docsClassCat,
} = require("../../../common");

module.exports = docsClassCat("stack", "std/containers/other/stack", "", [
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