import React from "react";

import styles from "./Columns.module.scss";

type BreakSize = "xs" | "sm" | "md" | "lg" | "xl";

type ColumsProps = {
  children: React.ReactNode;
  style: React.CSSProperties;
  spacing?: number;
  columns?: number[];
  breakAt?: BreakSize;
}

export default function Columns(props: ColumsProps) {
  const style = props.style || {};

  style.gap = props.spacing || 20;

  if (!props.columns)
    style.gridTemplateColumns = "repeat(2, 1fr)";
  else {
    style.gridTemplateColumns = props.columns.map(e => `${e}`).join(" ");
  }

  const divProps = { ...props };
  delete divProps.columns;
  delete divProps.spacing;
  delete divProps.breakAt;

  return (
    <div className={styles.columns} data-break-at={props.breakAt ?? "md"} {...divProps} style={style}>
      {props.children}
    </div>
  );
}

Columns.isMDXComponent = true;