import { SidebarItemConfig } from "./types";

export const CodeElements = {
  Class: "sidebar-code sidebar-class-name",
  Func: "sidebar-code sidebar-function",
  Method: "sidebar-code sidebar-method",
  Operator: "sidebar-code sidebar-operator-function",
};

type Flags = string | string[];

export function parseFlags(flags: Flags): string {
  if (typeof flags === "string")
    return " sidebar-flag-" + flags;
  else if (Array.isArray(flags))
    return " " + flags.map(e => "sidebar-flag-" + e).join(" ");
  return "";
}

export function docsClass(id: string, flags: Flags = []): SidebarItemConfig {
  return ({
    id,
    type: "doc",
    className: CodeElements.Class + parseFlags(flags)
  });
}
export function docsMethod(id: string, flags: Flags = []): SidebarItemConfig {
  return ({
    id,
    type: "doc",
    className: CodeElements.Method + parseFlags(flags)
  });
}
export function docsFunction(id: string, flags: Flags = []): SidebarItemConfig {
  return ({
    id,
    type: "doc",
    className: CodeElements.Func + parseFlags(flags)
  });
}
export function docsOperator(id: string, flags: Flags = []): SidebarItemConfig {
  return ({
    id,
    type: "doc",
    className: CodeElements.Operator + parseFlags(flags)
  });
}

export function separatorBase(content = "<span/>", classes = "sidebar-separator"): SidebarItemConfig {
  return ({
    type: "html",
    value: content,
    className: classes,
    defaultStyle: true,
  });
}

export const sep: SidebarItemConfig = separatorBase();
export function cat(name: string): SidebarItemConfig {
  return separatorBase(`<span>${name}</span>`, "sidebar-separator sidebar-category");
}

export const lessonsSeparator = cat("Lessons:");
export const additionalSeparator = cat("Additional:");

export function parseClassItemShorthand(id: string, e, flags: Flags = []): SidebarItemConfig {
  if (typeof e !== "string") {
    if (Array.isArray(e))
      return parseClassItemShorthand(id, e[0], e[1]);
    else
      return e;
  }

  if (e.startsWith("f:")) // function
    return docsFunction(`${id}/${e.substr(2)}`, flags);
  else if (e.startsWith("m:")) // method
    return docsMethod(`${id}/${e.substr(2)}`, flags);
  else if (e.startsWith("op:")) // method
    return docsOperator(`${id}/${e.substr(3)}`, flags);

  else
    return `${id}/${e}`;
}

export function docsClassCat(label: string, id: string, flags: Flags, contents): SidebarItemConfig {
  return {
    type: "category",
    className: CodeElements.Class + parseFlags(flags),
    label,
    link: { type: "doc", id: id },
    items: contents.map(e => parseClassItemShorthand(id, e))
  };
}
