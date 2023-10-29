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
        <SwitchViewItem key={key} value={value} index={index}/>
      ))}
    </Tabs>
  );
}

type SwitchViewItemProps = {
  key: string;
  index: number;
  value: SwitchViewContent | React.ReactNode;
}

function SwitchViewItem({key, index, value}: SwitchViewItemProps) {

  if (typeof value === "object" && ("value" in value || "simplified" in value || "detailed" in value))
  {
    return (
      <TabItem value={key}
        label={LanguageVersions.get(key)}
        default={value.default || index == 0}
      >
        {value.simplified
          ?
          (
            <>
              <Tabs groupId="view_mode" className={styles.smallTabs}>
                <TabItem value="simplified" label="Simplified" default>
                  {transformEmptyTagElem(value.simplified)}
                </TabItem>
                <TabItem value="detailed" label="Detailed">
                  {transformEmptyTagElem(value.detailed)}
                </TabItem>
              </Tabs>
            </>
          )
          :
          value.value
        }
      </TabItem>
    );
  }

  return (
    <TabItem
      value={key}
      label={LanguageVersions.get(key)}
      default={index == 0}
    >
      {transformEmptyTagElem(value)}
    </TabItem>
  );
}