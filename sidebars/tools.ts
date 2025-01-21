import type { SidebarsConfig } from "./types";
import { lessonsSeparator } from "./common";

const sidebars: SidebarsConfig = {
  defaultSidebar: [
    "index",
    "editors",
    "compilers",
    {
      type: "category",
      label: "Online tools",
      items: [
        "online/comparison",
        "online/replit",
        "online/wandbox",
        "online/godbolt",
        "online/ideone",
      ]
    },
    {
      type: "category",
      label: "Standalone tools",
      items: [
        {
          type: "category",
          label: "Editors",
          items: [
            "standalone/editors/setup-vscode",
            {
              type: "category",
              label: "Visual Studio 2022",
              items: [
                "standalone/editors/vs2022/setup",
                "standalone/editors/vs2022/creating-projects",
                "standalone/editors/vs2022/using-debugger",
                "standalone/editors/vs2022/managing-projects",
              ]
            },
            "standalone/editors/setup-emacs",
            "standalone/editors/setup-clion",
            "standalone/editors/setup-qtcreator",
          ]
        },
        {
          type: "category",
          label: "Compilers",
          items: [
            "standalone/compilers/setup-gcc-windows",
            "standalone/compilers/setup-gcc-linux",
            "standalone/compilers/setup-gcc-macos",
            "standalone/compilers/setup-clang-linux",
            "standalone/compilers/setup-clang-macos",
          ]
        },
        {
          type: "category",
          label: "Environments",
          items: [
            {
              type: "category",
              label: "Nix",
              link: { type: "doc", id: "standalone/environments/nix" },
              items: [
                lessonsSeparator,
                "standalone/environments/nix/shells",
              ]
            }
          ]
        },
      ]
    }
  ],
};

export default sidebars;
