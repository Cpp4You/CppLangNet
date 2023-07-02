module.exports = {
  type: "category",
  label: "Containers",
  link: { type: "doc", id: "std/containers/index" },
  items: [
    {
      type: "category",
      label: "Arrays",
      link: { type: "doc", id: "std/containers/arrays/index" },
      items: [
        require("./containers/array"),
        require("./containers/initializer_list"),
        require("./containers/vector"),
      ]
    },
    {
      type: "category",
      label: "Strings",
      link: { type: "doc", id: "std/containers/strings/index" },
      items: [
        require("./containers/string"),
        require("./containers/string_view"),
      ]
    },
    {
      type: "category",
      label: "Queues",
      link: { type: "doc", id: "std/containers/queues/index" },
      items: [
        require("./containers/queue"),
        require("./containers/deque"),
        require("./containers/priority_queue"),
      ]
    },
    {
      type: "category",
      label: "Maps and dictionaries",
      link: { type: "doc", id: "std/containers/maps/index" },
      items: [
        require("./containers/map"),
        require("./containers/multimap"),
        require("./containers/unordered_map"),
        require("./containers/unordered_multimap"),
      ]
    },
    {
      type: "category",
      label: "Sets",
      link: { type: "doc", id: "std/containers/sets/index" },
      items: [
        require("./containers/set"),
        require("./containers/unordered_set"),
        require("./containers/multiset"),
        require("./containers/unordered_multiset"),
      ]
    },
    {
      type: "category",
      label: "Lists",
      link: { type: "doc", id: "std/containers/lists/index" },
      items: [
        require("./containers/forward_list"),
      ]
    },
    {
      type: "category",
      label: "Other",
      link: { type: "doc", id: "std/containers/other/index" },
      items: [
        require("./containers/span"),
        require("./containers/stack"),
      ]
    }
  ]
};