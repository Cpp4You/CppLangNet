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
            docsMethod("std/algo/ranges/find_first_of", "since-cpp20"),
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
            docsMethod("std/algo/ordinary/find_first_of"),
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
      label: "Random operations",
      items: [
        {
          type: "category",
          label: "Rangified",
          items: [
            docsMethod("std/algo/ranges/shuffle", "since-cpp20"),
            docsMethod("std/algo/ranges/sample", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/random_shuffle"),
            docsMethod("std/algo/ordinary/shuffle"),
            docsMethod("std/algo/ordinary/sample"),
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
            docsMethod("std/algo/ranges/reverse_copy", "since-cpp20"),
            docsMethod("std/algo/ranges/fill", "since-cpp20"),
            docsMethod("std/algo/ranges/fill_n", "since-cpp20"),
            docsMethod("std/algo/ranges/generate", "since-cpp20"),
            docsMethod("std/algo/ranges/generate_n", "since-cpp20"),
            docsMethod("std/algo/ranges/remove", "since-cpp20"),
            docsMethod("std/algo/ranges/remove_copy", "since-cpp20"),
            docsMethod("std/algo/ranges/remove_copy_if", "since-cpp20"),
            docsMethod("std/algo/ranges/replace", "since-cpp20"),
            docsMethod("std/algo/ranges/replace_if", "since-cpp20"),
            docsMethod("std/algo/ranges/replace_copy", "since-cpp20"),
            docsMethod("std/algo/ranges/swap_ranges", "since-cpp20"),
            docsMethod("std/algo/ranges/rotate", "since-cpp20"),
            docsMethod("std/algo/ranges/rotate_copy", "since-cpp20"),
            docsMethod("std/algo/ranges/shift_left", "since-cpp20"),
            docsMethod("std/algo/ranges/shift_right", "since-cpp20"),
            docsMethod("std/algo/ranges/unique", "since-cpp20"),
            docsMethod("std/algo/ranges/unique_copy", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/swap"),
            docsMethod("std/algo/ordinary/copy"),
            docsMethod("std/algo/ordinary/copy_if", "since-cpp11"),
            docsMethod("std/algo/ordinary/copy_n", "since-cpp11"),
            docsMethod("std/algo/ordinary/copy_backward"),
            docsMethod("std/algo/ordinary/move"),
            docsMethod("std/algo/ordinary/move_backward", "since-cpp11"),
            docsMethod("std/algo/ordinary/transform"),
            docsMethod("std/algo/ordinary/reverse"),
            docsMethod("std/algo/ordinary/reverse_copy"),
            docsMethod("std/algo/ordinary/fill"),
            docsMethod("std/algo/ordinary/fill_n"),
            docsMethod("std/algo/ordinary/generate"),
            docsMethod("std/algo/ordinary/generate_n"),
            docsMethod("std/algo/ordinary/remove"),
            docsMethod("std/algo/ordinary/remove_if"),
            docsMethod("std/algo/ordinary/remove_copy"),
            docsMethod("std/algo/ordinary/remove_copy_if"),
            docsMethod("std/algo/ordinary/replace"),
            docsMethod("std/algo/ordinary/replace_if"),
            docsMethod("std/algo/ordinary/replace_copy"),
            docsMethod("std/algo/ordinary/replace_copy_if"),
            docsMethod("std/algo/ordinary/swap_ranges"),
            docsMethod("std/algo/ordinary/iter_swap"),
            docsMethod("std/algo/ordinary/rotate"),
            docsMethod("std/algo/ordinary/rotate_copy"),
            docsMethod("std/algo/ordinary/shift_left"),
            docsMethod("std/algo/ordinary/shift_right"),
            docsMethod("std/algo/ordinary/unique"),
            docsMethod("std/algo/ordinary/unique_copy"),
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
            docsMethod("std/algo/ranges/is_partitioned", "since-cpp20"),
            docsMethod("std/algo/ranges/partition", "since-cpp20"),
            docsMethod("std/algo/ranges/partition_copy", "since-cpp20"),
            docsMethod("std/algo/ranges/stable_partition", "since-cpp20"),
            docsMethod("std/algo/ranges/partition_point", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/is_partitioned", "since-cpp11"),
            docsMethod("std/algo/ordinary/partition"),
            docsMethod("std/algo/ordinary/partition_copy", "since-cpp11"),
            docsMethod("std/algo/ordinary/stable_partition", "since-cpp11"),
            docsMethod("std/algo/ordinary/partition_point", "since-cpp11"),
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
            docsMethod("std/algo/ranges/stable_sort", "since-cpp20"),
            docsMethod("std/algo/ranges/partial_sort", "since-cpp20"),
            docsMethod("std/algo/ranges/partial_sort_copy", "since-cpp20"),
            docsMethod("std/algo/ranges/nth_element", "since-cpp20"),
            docsMethod("std/algo/ranges/is_sorted", "since-cpp20"),
            docsMethod("std/algo/ranges/is_sorted_until", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/sort"),
            docsMethod("std/algo/ordinary/stable_sort"),
            docsMethod("std/algo/ordinary/partial_sort"),
            docsMethod("std/algo/ordinary/partial_sort_copy"),
            docsMethod("std/algo/ordinary/nth_element"),
            docsMethod("std/algo/ordinary/is_sorted", "since-cpp11"),
            docsMethod("std/algo/ordinary/is_sorted_until", "since-cpp11"),
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
            docsMethod("std/algo/ranges/binary_search", "since-cpp20"),
            docsMethod("std/algo/ranges/lower_bound", "since-cpp20"),
            docsMethod("std/algo/ranges/upper_bound", "since-cpp20"),
            docsMethod("std/algo/ranges/equal_range", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/binary_search"),
            docsMethod("std/algo/ordinary/lower_bound"),
            docsMethod("std/algo/ordinary/upper_bound"),
            docsMethod("std/algo/ordinary/equal_range"),
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
            docsMethod("std/algo/ranges/includes", "since-cpp20"),
            docsMethod("std/algo/ranges/set_union", "since-cpp20"),
            docsMethod("std/algo/ranges/set_intersection", "since-cpp20"),
            docsMethod("std/algo/ranges/set_difference", "since-cpp20"),
            docsMethod("std/algo/ranges/set_symmetric_difference", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/includes"),
            docsMethod("std/algo/ordinary/set_union"),
            docsMethod("std/algo/ordinary/set_intersection"),
            docsMethod("std/algo/ordinary/set_difference"),
            docsMethod("std/algo/ordinary/set_symmetric_difference"),
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
            docsMethod("std/algo/ranges/merge", "since-cpp20"),
            docsMethod("std/algo/ranges/inplace_merge", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/merge"),
            docsMethod("std/algo/ordinary/inplace_merge"),
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
            docsMethod("std/algo/ranges/is_heap", "since-cpp20"),
            docsMethod("std/algo/ranges/is_heap_until", "since-cpp20"),
            docsMethod("std/algo/ranges/make_heap", "since-cpp20"),
            docsMethod("std/algo/ranges/push_heap", "since-cpp20"),
            docsMethod("std/algo/ranges/pop_heap", "since-cpp20"),
            docsMethod("std/algo/ranges/sort_heap", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/is_heap", "since-cpp11"),
            docsMethod("std/algo/ordinary/is_heap_until", "since-cpp11"),
            docsMethod("std/algo/ordinary/make_heap"),
            docsMethod("std/algo/ordinary/push_heap"),
            docsMethod("std/algo/ordinary/pop_heap"),
            docsMethod("std/algo/ordinary/sort_heap"),
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
            docsMethod("std/algo/ranges/minmax", "since-cpp20"),
            docsMethod("std/algo/ranges/max_element", "since-cpp20"),
            docsMethod("std/algo/ranges/min_element", "since-cpp20"),
            docsMethod("std/algo/ranges/clamp", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/min"),
            docsMethod("std/algo/ordinary/max"),
            docsMethod("std/algo/ordinary/minmax"),
            docsMethod("std/algo/ordinary/max_element"),
            docsMethod("std/algo/ordinary/min_element"),
            docsMethod("std/algo/ordinary/clamp"),
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
            docsMethod("std/algo/ranges/equal", "since-cpp20"),
            docsMethod("std/algo/ranges/lexicographical_compare", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/equal"),
            docsMethod("std/algo/ordinary/lexicographical_compare"),
            docsMethod("std/algo/ordinary/lexicographical_compare_three_way"),
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
            docsMethod("std/algo/ranges/is_permutation", "since-cpp20"),
            docsMethod("std/algo/ranges/next_permutation", "since-cpp20"),
            docsMethod("std/algo/ranges/prev_permutation", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/is_permutation", "since-cpp11"),
            docsMethod("std/algo/ordinary/next_permutation"),
            docsMethod("std/algo/ordinary/prev_permutation"),
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
            docsMethod("std/algo/ranges/iota", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/iota", "since-cpp11"),
            docsMethod("std/algo/ordinary/accumulate"),
            docsMethod("std/algo/ordinary/inner_product"),
            docsMethod("std/algo/ordinary/adjacent_difference"),
            docsMethod("std/algo/ordinary/partial_sum"),
            docsMethod("std/algo/ordinary/reduce"),
            docsMethod("std/algo/ordinary/exclusive_scan"),
            docsMethod("std/algo/ordinary/inclusive_scan"),
            docsMethod("std/algo/ordinary/transform_reduce"),
            docsMethod("std/algo/ordinary/transform_exclusive_scan"),
            docsMethod("std/algo/ordinary/transform_inclusive_scan"),
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
            docsMethod("std/algo/ranges/uninitialized_copy", "since-cpp20"),
            docsMethod("std/algo/ranges/uninitialized_copy_n", "since-cpp20"),
            docsMethod("std/algo/ranges/uninitialized_fill", "since-cpp20"),
            docsMethod("std/algo/ranges/uninitialized_fill_n", "since-cpp20"),
            docsMethod("std/algo/ranges/uninitialized_move", "since-cpp20"),
            docsMethod("std/algo/ranges/uninitialized_move_n", "since-cpp20"),
            docsMethod("std/algo/ranges/uninitialized_default_construct", "since-cpp20"),
            docsMethod("std/algo/ranges/uninitialized_default_construct_n", "since-cpp20"),
            docsMethod("std/algo/ranges/uninitialized_value_construct", "since-cpp20"),
            docsMethod("std/algo/ranges/uninitialized_value_construct_n", "since-cpp20"),
            docsMethod("std/algo/ranges/destroy", "since-cpp20"),
            docsMethod("std/algo/ranges/destroy_n", "since-cpp20"),
            docsMethod("std/algo/ranges/destroy_at", "since-cpp20"),
            docsMethod("std/algo/ranges/construct_at", "since-cpp20"),
          ]
        },
        {
          type: "category",
          label: "Ordinary",
          items: [
            docsMethod("std/algo/ordinary/uninitialized_copy"),
            docsMethod("std/algo/ordinary/uninitialized_copy_n"),
            docsMethod("std/algo/ordinary/uninitialized_fill"),
            docsMethod("std/algo/ordinary/uninitialized_fill_n"),
            docsMethod("std/algo/ordinary/uninitialized_move", "since-cpp17"),
            docsMethod("std/algo/ordinary/uninitialized_move_n", "since-cpp17"),
            docsMethod("std/algo/ordinary/uninitialized_default_construct", "since-cpp17"),
            docsMethod("std/algo/ordinary/uninitialized_default_construct_n", "since-cpp17"),
            docsMethod("std/algo/ordinary/uninitialized_value_construct", "since-cpp17"),
            docsMethod("std/algo/ordinary/uninitialized_value_construct_n", "since-cpp17"),
            docsMethod("std/algo/ordinary/destroy", "since-cpp17"),
            docsMethod("std/algo/ordinary/destroy_n", "since-cpp17"),
            docsMethod("std/algo/ordinary/destroy_at", "since-cpp17"),
            docsMethod("std/algo/ordinary/construct_at", "since-cpp20"),
          ]
        }
      ]
    },
    {
      type: "category",
      label: "C algorithms",
      items: [
        docsMethod("std/algo/ordinary/qsort"),
        docsMethod("std/algo/ordinary/bsearch"),
      ]
    }
  ]
};
