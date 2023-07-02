const {
  docsClassCat,
} = require("../../common");


module.exports = {
  type: "category",
  label: "Memory",
  collapsed: true,
  link: { type: "doc", id: "std/memory/memory_management_index" },
  items: [
    {
      type: "category",
      label: "Smart Pointers",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Pointer Categories",
          collapsed: true,
          items: [
            docsClassCat("unique_ptr", "std/memory/unique_ptr", "", []),
            docsClassCat("shared_ptr", "std/memory/shared_ptr", "", []),
            docsClassCat("weak_ptr", "std/memory/weak_ptr", "", []),
            docsClassCat("auto_ptr", "std/memory/auto_ptr", "", []),
          ],
        },
        {
          type: "category",
          label: "Helper classes",
          collapsed: true,
          items: [
            {
              type: "category",
              label: "owner_less",
              collapsed: true,
              link: { type: "doc", id: "std/memory/owner_less" },
              items: [
                docsClassCat("owner_less_void", "std/memory/owner_less_void", "", []),
              ],
            },
            docsClassCat("enable_shared_from_this", "std/memory/enable_shared_from_this", "", []),
            docsClassCat("bad_weak_ptr", "std/memory/bad_weak_ptr", "", []),
            docsClassCat("default_delete", "std/memory/default_delete", "", []),
          ],
        },
        {
          type: "category",
          label: "Smart pointer adaptors",
          collapsed: true,
          items: [
            docsClassCat("out_ptr_t", "std/memory/out_ptr_t", "", []),
            docsClassCat("out_ptr", "std/memory/out_ptr", "", []),
            docsClassCat("inout_ptr_t", "std/memory/inout_ptr_t", "", []),
            docsClassCat("inout_ptr", "std/memory/inout_ptr", "", []),
          ],
        },
      ]
    },
    {
      type: "category",
      label: "Allocators",
      collapsed: true,
      items: [
        docsClassCat("allocator", "std/memory/allocator", "", []),
        docsClassCat("allocator_traits", "std/memory/allocator_traits", "", []),
        docsClassCat("allocation_result", "std/memory/allocation_result", "", []),
        docsClassCat("allocator_arg", "std/memory/allocator_arg", "", []),
        docsClassCat("uses_allocator", "std/memory/uses_allocator", "", []),
        docsClassCat("uses_allocator_construction_args", "std/memory/uses_allocator_construction_args", "", []),
        docsClassCat("make_obj_using_allocator", "std/memory/make_obj_using_allocator", "", []),
        docsClassCat("uninitialized_construct_using_allocator", "std/memory/uninitialized_construct_using_allocator", "", []),
        docsClassCat("scoped_allocator_adaptor", "std/memory/scoped_allocator_adaptor", "", []),
        docsClassCat("polymorphic_allocator", "std/memory/polymorphic_allocator", "", []),
      ],
    },
  ]
};