const partialSidebar = {
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