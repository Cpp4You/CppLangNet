const {
  docsMethod,
} = require("../../common");

module.exports = {
  type: "category",
  label: "Utility",
  items: [
    docsMethod("std/utility/forward", "since-cpp11"),
    docsMethod("std/utility/variant", "since-cpp17"),
  ]
};