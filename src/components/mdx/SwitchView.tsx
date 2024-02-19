import React from "react";

// Docusaurus
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

// Custom
import { LanguageVersions } from "./Versions";
import transformEmptyTagElem from "../../helper/TransformEmptyTagElem";

import styles from "./SwitchView.module.scss";

type SwitchViewContent = {
  value?: string;
  simplified?: React.ReactNode;
  detailed?: React.ReactNode;
  default?: boolean;
}

type SwitchViewProps = {
  content: Record<string, SwitchViewContent | React.ReactNode>;
}


export default function SwitchView(props: SwitchViewProps) {

  const content = props.content || {};

  return (
    <Tabs>
      {Object.entries(content).map(([key, value], index) => (
        renderSwitchViewItem(key, index, value)
      ))}
    </Tabs>
  );
}

type SwitchViewItemValue = SwitchViewContent | React.ReactNode;

/**
 * **⚠️ Important**  
 * This function isn't meant to be used as a React component.
 * Use a call instead, because in Docusaurus internals, <Tabs> content is
 * [sanitized](https://github.com/facebook/docusaurus/blob/1bbc68bc30d017158bb352cf25552b4791799619/packages/docusaurus-theme-common/src/utils/tabsUtils.tsx#L64)
 * and it explicitly checks the type of children before rendering.
 */
function renderSwitchViewItem(key: string, index: number, value: SwitchViewItemValue) {
  const explicitDefaultOption = (typeof value === "object" && "default" in value) ? value.default : null;
  const defaultOption = explicitDefaultOption ?? index === 0;

  return (
    <TabItem
      value={key}
      label={LanguageVersions.get(key) || key}
      default={defaultOption}
    >
      {isSwitchViewContent(value) ? renderSwitchViewContent(value) : transformEmptyTagElem(value)}
    </TabItem>
  );
}

function isSwitchViewContent(value: any): value is SwitchViewContent {
  return typeof value === "object" && ("value" in value || "simplified" in value || "detailed" in value);
}

function renderSwitchViewContent(value: SwitchViewContent) {

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
