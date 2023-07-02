const {
  docsMethod,
} = require("../../common");


module.exports = {
  type: "category",
  label: "Algorithms",
  link: { type: "doc", id: "std/algo/index" },
  items: [
    {
      type: "category",
      label: "Non-modifying",
      items: [
        {
          type: "category",
          label: "Rangified",
          items: [
            docsMethod("std/algo/ranges/count", "since-cpp20"),
            docsMethod("std/algo/ranges/count_if", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/count"),
            docsMethod("std/algo/ordinary/count_if"),
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Modifying",
      items: [
        {
          type: "category",
          label: "Rangified",
          items: [
            docsMethod("std/algo/ranges/transform", "since-cpp20"),
            docsMethod("std/algo/ranges/reverse", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/transform"),
            docsMethod("std/algo/ordinary/reverse"),
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Partitioning",
      items: [
        {
          type: "category",
          label: "Rangified",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Sorting",
      items: [
        {
          type: "category",
          label: "Rangified",
          items: [
            docsMethod("std/algo/ranges/sort", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/sort"),
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Binary search",
      items: [
        {
          type: "category",
          label: "Rangified",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Other operations on sorted ranges",
      items: [
        {
          type: "category",
          label: "Rangified",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Set",
      items: [
        {
          type: "category",
          label: "Rangified",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Heap",
      items: [
        {
          type: "category",
          label: "Rangified",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Min/max",
      items: [
        {
          type: "category",
          label: "Rangified",
          items: [
            docsMethod("std/algo/ranges/min", "since-cpp20"),
            docsMethod("std/algo/ranges/max", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/min"),
            docsMethod("std/algo/ordinary/max"),
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Comparison",
      items: [
        {
          type: "category",
          label: "Rangified",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Permutation",
      items: [
        {
          type: "category",
          label: "Rangified",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Numeric",
      items: [
        {
          type: "category",
          label: "Rangified",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Operations on uninitialized memory",
      items: [
        {
          type: "category",
          label: "Rangified",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        }
      ]
    },
    {
      type: "category",
      label: "C algorithms",
      items: [
        {
          type: "category",
          label: "Rangified",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/utility/forward", "since-cpp11"),
          ]
        }
      ]
    }
  ]
};