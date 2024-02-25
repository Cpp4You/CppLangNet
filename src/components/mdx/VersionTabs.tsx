import React from "react";

// Docusaurus
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

// Custom
import { LanguageVersions } from "./Versions";
import transformEmptyTagElem from "../../helper/TransformEmptyTagElem";

import styles from "./VersionTabs.module.scss";

type VersionTabsContent = {
  value?: string;
  simplified?: React.ReactNode;
  detailed?: React.ReactNode;
  default?: boolean;
}

type VersionTabsProps = {
  content: Record<string, VersionTabsContent | React.ReactNode>;
}


export default function VersionTabs(props: VersionTabsProps) {

  const content = props.content || {};

  return (
    <Tabs>
      {Object.entries(content).map(([key, value], index) => (
        renderVersionTabsItem(key, index, value)
      ))}
    </Tabs>
  );
}

type VersionTabsItemValue = VersionTabsContent | React.ReactNode;

/**
 * **⚠️ Important**  
 * This function isn't meant to be used as a React component.
 * Use a call instead, because in Docusaurus internals, <Tabs> content is
 * [sanitized](https://github.com/facebook/docusaurus/blob/1bbc68bc30d017158bb352cf25552b4791799619/packages/docusaurus-theme-common/src/utils/tabsUtils.tsx#L64)
 * and it explicitly checks the type of children before rendering.
 */
function renderVersionTabsItem(key: string, index: number, value: VersionTabsItemValue) {
  const explicitDefaultOption = (typeof value === "object" && "default" in value) ? value.default : null;
  const defaultOption = explicitDefaultOption ?? index === 0;

  return (
    <TabItem
      value={key}
      label={LanguageVersions.get(key) || key}
      default={defaultOption}
    >
      {isVersionTabsContent(value) ? renderVersionTabsContent(value) : transformEmptyTagElem(value)}
    </TabItem>
  );
}

function isVersionTabsContent(value: unknown): value is VersionTabsContent {
  if (value === null || value === undefined) {
    return false;
  }
  return typeof value === "object" && ("value" in value || "simplified" in value || "detailed" in value);
}

function renderVersionTabsContent(value: VersionTabsContent) {

  if (!value.simplified) {
    return value.value;
  }

  return (
    <Tabs groupId="view_mode" className={styles.smallTabs}>
      <TabItem value="simplified" label="Simplified" default>
        {transformEmptyTagElem(value.simplified)}
      </TabItem>
      <TabItem value="detailed" label="Detailed">
        {transformEmptyTagElem(value.detailed)}
      </TabItem>
    </Tabs>
  );
}
