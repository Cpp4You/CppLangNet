import type { SidebarsConfig as DocusaurusSidebarsConfig } from "@docusaurus/plugin-content-docs";

export type SidebarsConfig = DocusaurusSidebarsConfig;

export type SidebarConfig = SidebarsConfig[string];

export type SidebarItemConfig = ExtractArrayType<SidebarConfig>;

export type SidebarCategoriesShorthand = ExtractObjectType<SidebarItemConfig>;

// Helpers

/**
 * Extracts the type of the array from a union type:
 * 
 * ```ts
 * type X = SomeObjectType | SomeTypeWithinArray[];
 * //                        ^^^^^^^^^^^^^^^^^^^
 * ```
 */
type ExtractArrayType<T> = T extends (infer U)[] ? U : never;

/**
 * Extracts the object type from a union type:
 * 
 * ```ts
 * type X = SomeObjectType | SomeTypeWithinArray[];
 * //       ^^^^^^^^^^^^^^
 * ```
 */
type ExtractObjectType<T> = T extends object ? T : never;


