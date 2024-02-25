import React from "react";

import styles from "./Button.module.scss";

type ButtonProps = {
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export default function Button(props: ButtonProps) {

  return (
    <button data-full-width={props.fullWidth ? "true" : undefined} className={styles.button}>
      {props.children}
    </button>
  );
}

Button.isMDXComponent = true;