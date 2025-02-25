import { SidebarItemConfig } from "./types";

/**
 * Base CSS classes for sidebar items that represent code elements.
 */
export const SidebarCodeItemClasses = {
  Class: "sidebar-code sidebar-class-name",
  Func: "sidebar-code sidebar-function",
  Method: "sidebar-code sidebar-method",
  Operator: "sidebar-code sidebar-operator-function",
};

/**
 * Flags that can be used to customize the appearance of sidebar items.
 * Each flag represents a CSS class that will be added to the sidebar item, prefixed with `sidebar-flag-`
 * e.g. `since-cpp11` will be converted to `sidebar-flag-since-cpp11`.
 */
type SidebarElementFlags = string | string[];

/**
 * A function that generates a sidebar item configuration for a code element.
 */
type SidebarElementGenerator = (id: string, flags: SidebarElementFlags) => SidebarItemConfig;

function convertFlagsToClassNames(flags: SidebarElementFlags): string {
  if (typeof flags === "string")
    return " sidebar-flag-" + flags;
  else if (Array.isArray(flags))
    return " " + flags.map(e => "sidebar-flag-" + e).join(" ");
  return "";
}

function createSidebarCodeItemGenerator(
  baseCssClass: string
) {
  return (id: string, flags: SidebarElementFlags = []): SidebarItemConfig => ({
    id,
    type: "doc",
    className: baseCssClass + convertFlagsToClassNames(flags)
  });
}

export const docsClass = createSidebarCodeItemGenerator(SidebarCodeItemClasses.Class);
export const docsMethod = createSidebarCodeItemGenerator(SidebarCodeItemClasses.Method);
export const docsFunction = createSidebarCodeItemGenerator(SidebarCodeItemClasses.Func);
export const docsOperator = createSidebarCodeItemGenerator(SidebarCodeItemClasses.Operator);

export function separatorBase(content = "<span/>", classes = "sidebar-separator"): SidebarItemConfig {
  return {
    type: "html",
    value: content,
    className: classes,
    defaultStyle: true,
  };
}

export const sep: SidebarItemConfig = separatorBase();
export function cat(name: string): SidebarItemConfig {
  return separatorBase(`<span>${name}</span>`, "sidebar-separator sidebar-category");
}

/**
 * Creates an ID for a class element: `classId/elementName`.
 * @note Omits the trailing slash if it's already present in `id`.
 * 
 * @param classId 
 * @param elementName 
 * @returns 
 */
function createClassElementId(classId: string, elementName: string): string {
  if (classId.endsWith("/"))
    return `${classId}${elementName}`;
  return `${classId}/${elementName}`;
}

/**
 * A shorthand for defining a class element in the sidebar.
 * 
 * - If a string is provided, it will be parsed as a shorthand.
 * - If an array is provided, the first element will be parsed as a shorthand and the second element will be used as flags.
 */
type SidebarClassElementShorthand = string | [string, SidebarElementFlags];

/**
 * A sidebar element that represents a class member.
 * 
 * - If a {@linkcode SidebarClassElementShorthand} shorthand is provided, it will be parsed.
 * - If an object is provided, it will be used as-is.
 */
type SidebarClassElement = SidebarClassElementShorthand | SidebarItemConfig;

enum ClassElementType {
  Function = "f",
  Method = "m",
  Operator = "op",
}

function parseClassElementShorthand(
  element: string
): [ClassElementType, string] | null {
  if (element.startsWith(ClassElementType.Function)) // function
    return [ClassElementType.Function, element.substring(2)];
  else if (element.startsWith(ClassElementType.Method)) // method
    return [ClassElementType.Method, element.substring(2)];
  else if (element.startsWith(ClassElementType.Operator)) // operator
    return [ClassElementType.Operator, element.substring(3)];
  return null;
}

function selectClassElementGenerator(type: ClassElementType): SidebarElementGenerator {
  switch (type) {
  case ClassElementType.Function: return docsFunction;
  case ClassElementType.Method: return docsMethod;
  case ClassElementType.Operator: return docsOperator;
  }
}

function generateClassElementFromShorthand(
  shorthand: string,
  classId: string,
  flags: SidebarElementFlags
): SidebarItemConfig {
  const parsed = parseClassElementShorthand(shorthand);
  if (!parsed) {
    // Couldn't parse, return a nested element as-is (string)
    return createClassElementId(classId, shorthand);
  }

  const [type, elementName] = parsed;
  const elementId = createClassElementId(classId, elementName);
  const gen = selectClassElementGenerator(type);
  return gen(elementId, flags);
}

function parseClassElement(classId: string, element: SidebarClassElement, flags: SidebarElementFlags = []): SidebarItemConfig {
  if (Array.isArray(element)) {
    return parseClassElement(classId, element[0], element[1]);
  }
  else if (typeof element === "object") {
    return element;
  }

  return generateClassElementFromShorthand(element, classId, flags);
}

type SidebarClassContent = SidebarClassElement[];

export function docsClassCat(label: string, id: string, flags: SidebarElementFlags, contents: SidebarClassContent): SidebarItemConfig {
  return {
    type: "category",
    className: SidebarCodeItemClasses.Class + convertFlagsToClassNames(flags),
    label,
    link: { type: "doc", id: id },
    items: contents.map(e => parseClassElement(id, e))
  };
}
