import React from "react";
import styles from "./ClassSummary.module.scss";

import { ClassContext } from "./ClassContext";

type ClassSummaryProps = {
  children?: React.ReactNode;
  namespaces: string | string[];
  name: string,
  folder?: string;
  headerName?: string;
  since?: string;
}

export default function ClassSummary(props: ClassSummaryProps) {
  let namespaces = [];
  if (typeof props.namespaces === "string")
    namespaces.push(props.namespaces);
  else
    namespaces = props.namespaces;

  const ctx = {
    name: props.name,
    folder: props.folder || props.name.toLowerCase()
  };

  const hasMetaInfo = (props.headerName || props.since);

  return (
    <ClassContext.Provider value={ctx}>
      <header>
        <h2 className={styles.className}>
          {namespaces &&
            <span className={styles.namespaceList}>
              {namespaces.join("::")}::
            </span>
          }
          {props.name}
        </h2>
        {hasMetaInfo && (
          <>
            <table className={styles.meta}>
              <tbody>
                {props.headerName && (
                  <tr>
                    <td>Defined in</td>
                    <td>{props.headerName}</td>
                  </tr>
                )}
                {props.since && (
                  <tr>
                    <td>Since</td>
                    <td>{props.since}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        )}
      </header>
      {props.children}
    </ClassContext.Provider>
  );
}

ClassSummary.isMDXComponent = true;