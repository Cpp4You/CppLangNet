import type { SidebarItemConfig } from "../../types";

// Arrays
import StdArray from "./containers/array";
import StdInitializerList from "./containers/initializer_list";
import StdVector from "./containers/vector";

// Strings
import StdString from "./containers/string";
import StdStringView from "./containers/string_view";

// Queues
import StdQueue from "./containers/queue";
import StdDeque from "./containers/deque";
import StdPriorityQueue from "./containers/priority_queue";

// Maps and dictionaries
import StdMap from "./containers/map";
import StdMultimap from "./containers/multimap";
import StdUnorderedMap from "./containers/unordered_map";
import StdUnorderedMultimap from "./containers/unordered_multimap";

// Sets
import StdSet from "./containers/set";
import StdUnorderedSet from "./containers/unordered_set";
import StdMultiset from "./containers/multiset";
import StdUnorderedMultiset from "./containers/unordered_multiset";

// Lists
import StdForwardList from "./containers/forward_list";

// Other
import StdSpan from "./containers/span";
import StdStack from "./containers/stack";

const sidebar: SidebarItemConfig = {
  type: "category",
  label: "Containers",
  link: { type: "doc", id: "std/containers/index" },
  items: [
    {
      type: "category",
      label: "Arrays",
      link: { type: "doc", id: "std/containers/arrays/index" },
      items: [
        StdArray,
        StdInitializerList,
        StdVector,
      ]
    },
    {
      type: "category",
      label: "Strings",
      link: { type: "doc", id: "std/containers/strings/index" },
      items: [
        StdString,
        StdStringView,
      ]
    },
    {
      type: "category",
      label: "Queues",
      link: { type: "doc", id: "std/containers/queues/index" },
      items: [
        StdQueue,
        StdDeque,
        StdPriorityQueue,
      ]
    },
    {
      type: "category",
      label: "Maps and dictionaries",
      link: { type: "doc", id: "std/containers/maps/index" },
      items: [
        StdMap,
        StdMultimap,
        StdUnorderedMap,
        StdUnorderedMultimap,
      ]
    },
    {
      type: "category",
      label: "Sets",
      link: { type: "doc", id: "std/containers/sets/index" },
      items: [
        StdSet,
        StdUnorderedSet,
        StdMultiset,
        StdUnorderedMultiset,
      ]
    },
    {
      type: "category",
      label: "Lists",
      link: { type: "doc", id: "std/containers/lists/index" },
      items: [
        StdForwardList,
      ]
    },
    {
      type: "category",
      label: "Other",
      link: { type: "doc", id: "std/containers/other/index" },
      items: [
        StdSpan,
        StdStack,
      ]
    }
  ]
};

export default sidebar;