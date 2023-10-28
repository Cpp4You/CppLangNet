import React from "react";
import Layout from "@theme-original/DocItem/Layout";
import type LayoutType from "@theme/DocItem/Layout";
import type { WrapperProps } from "@docusaurus/types";
import styles from "./Layout.module.scss";

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <div className={"document-layout-wrapper " + styles.layoutWrapper}>
      <Layout {...props} />
    </div>
  );
}
