import React from "react";

import styles from "./TenorGIF.module.scss";

type TenorGIFProps = {
  postid: string,
  aspectRatio: string,
  width?: string,
  centered?: boolean,
  children?: React.ReactNode,
}

export default function TenorGIF(props: TenorGIFProps) {
  return (
    <div
      className={[styles.tenorGIF, "tenor-gif-embed"].join(" ")}
      data-postid={props.postid}
      data-share-method="host"
      data-aspect-ratio={props.aspectRatio}
      data-width={props.width || "100%"}
      data-centered={props.centered ? "true" : "false"}
    >
      {props.children}
    </div>
  );
}