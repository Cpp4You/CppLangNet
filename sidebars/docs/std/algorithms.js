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
      label: "Searching",
      items: [
        {
          type: "category",
          label: "Rangified",
          items: [
            docsMethod("std/algo/ranges/find", "since-cpp20"),
            docsMethod("std/algo/ranges/find_if", "since-cpp20"),
            docsMethod("std/algo/ranges/find_if_not", "since-cpp20"),
            docsMethod("std/algo/ranges/find_end", "since-cpp20"),
            docsMethod("std/algo/ranges/adjacent_find", "since-cpp20"),
            docsMethod("std/algo/ranges/find_last", "since-cpp20"),
            docsMethod("std/algo/ranges/find_last_if", "since-cpp20"),
            docsMethod("std/algo/ranges/find_last_if_not", "since-cpp20"),
            docsMethod("std/algo/ranges/search", "since-cpp20"),
            docsMethod("std/algo/ranges/search_n", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/find"),
            docsMethod("std/algo/ordinary/find_if"),
            docsMethod("std/algo/ordinary/find_if_not"),
            docsMethod("std/algo/ordinary/find_end"),
            docsMethod("std/algo/ordinary/adjacent_find"),
            docsMethod("std/algo/ordinary/search"),
            docsMethod("std/algo/ordinary/search_n"),
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Determining conditions",
      items: [
        {
          type: "category",
          label: "Rangified",
          items: [
            docsMethod("std/algo/ranges/all_of", "since-cpp20"),
            docsMethod("std/algo/ranges/any_of", "since-cpp20"),
            docsMethod("std/algo/ranges/none_of", "since-cpp20"),
            docsMethod("std/algo/ranges/count", "since-cpp20"),
            docsMethod("std/algo/ranges/count_if", "since-cpp20"),
            docsMethod("std/algo/ranges/mismatch", "since-cpp20"),
            docsMethod("std/algo/ranges/starts_with", "since-cpp20"),
            docsMethod("std/algo/ranges/ends_with", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/all_of", "since-cpp11"),
            docsMethod("std/algo/ordinary/any_of", "since-cpp11"),
            docsMethod("std/algo/ordinary/none_of", "since-cpp11"),
            docsMethod("std/algo/ordinary/count"),
            docsMethod("std/algo/ordinary/count_if"),
            docsMethod("std/algo/ordinary/mismatch"),
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Other non-modifying",
      items: [
        {
          type: "category",
          label: "Rangified",
          items: [
            docsMethod("std/algo/ranges/for_each", "since-cpp20"),
            docsMethod("std/algo/ranges/for_each_n", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/for_each"),
            docsMethod("std/algo/ordinary/for_each_n", "since-cpp17"),
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
            docsMethod("std/algo/ranges/copy", "since-cpp20"),
            docsMethod("std/algo/ranges/copy_if", "since-cpp20"),
            docsMethod("std/algo/ranges/copy_n", "since-cpp20"),
            docsMethod("std/algo/ranges/copy_backward", "since-cpp20"),
            docsMethod("std/algo/ranges/move", "since-cpp20"),
            docsMethod("std/algo/ranges/move_backward", "since-cpp20"),
            docsMethod("std/algo/ranges/transform", "since-cpp20"),
            docsMethod("std/algo/ranges/reverse", "since-cpp20"),
            docsMethod("std/algo/ranges/fill", "since-cpp20"),
            docsMethod("std/algo/ranges/fill_n", "since-cpp20"),
            docsMethod("std/algo/ranges/generate", "since-cpp20"),
            docsMethod("std/algo/ranges/generate_n", "since-cpp20"),
            docsMethod("std/algo/ranges/remove", "since-cpp20"),
            docsMethod("std/algo/ranges/remove_copy", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/copy"),
            docsMethod("std/algo/ordinary/copy_if", "since-cpp11"),
            docsMethod("std/algo/ordinary/copy_n", "since-cpp11"),
            docsMethod("std/algo/ordinary/copy_backward"),
            docsMethod("std/algo/ordinary/move"),
            docsMethod("std/algo/ordinary/move_backward", "since-cpp11"),
            docsMethod("std/algo/ordinary/transform"),
            docsMethod("std/algo/ordinary/reverse"),
            docsMethod("std/algo/ordinary/fill"),
            docsMethod("std/algo/ordinary/fill_n"),
            docsMethod("std/algo/ordinary/generate"),
            docsMethod("std/algo/ordinary/generate_n"),
            docsMethod("std/algo/ordinary/remove"),
            docsMethod("std/algo/ordinary/remove_if"),
            docsMethod("std/algo/ordinary/remove_copy"),
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
