const {
  docsClass,
  cat,
  docsClassCat,
} = require("../../../common");

module.exports = docsClassCat("initializer_list", "std/containers/arrays/initializer_list", "since-cpp11", [
  "constructor",
  cat("Capacity"),
  "m:size",
  cat("Iterators"),
  "m:begin",
  "m:end",
]);