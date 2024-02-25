import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  defaultSidebar: [
    "index",
    "initial-setup",
    "folder-structure",
    "new-documents",
    "editing-sidebar",
    {
      type: "category",
      label: "✍ Writing guide",
      collapsed: false,
      items: [
        "writing-guide/improving",
        "writing-guide/general-rules",
        "writing-guide/using-components",
        "writing-guide/translating",
      ]
    },
    {
      type: "category",
      label: "📝 Guidelines",
      collapsed: false,
      items: [
        "guidelines/lesson",
      ]
    },
  ],
};

export default sidebars;