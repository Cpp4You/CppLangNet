import React from "react";

import Translate from "@docusaurus/Translate";

export default function Replit(props) {
  let params = "lite=true";
  if (props.embed)
    params = "embed=true";

  let src = "";
  if (props.src)
    src = props.src;
  else {
    src = `https://replit.com/@${props.user}/${props.repl}`;
  }

  const style = props.style || {};

  if (props.fullwidth) {
    style.width = "100%";
  }

  style.minHeight = props.minheight || "560px";

  const processedProps = { ...props };

  delete processedProps.embed;
  delete processedProps.src;
  delete processedProps.style;
  delete processedProps.fullwidth;
  delete processedProps.minheight;

  return (
    <iframe style={style}
      src={`${src}?${params}`}
      {...processedProps}
    />
  );
}

export function ReplitPlayInfo(props) {
  return (
    <>
      <Translate>Press the ▶ button</Translate>
      <br />
      <small><Translate>(May not work in private browser mode)</Translate></small>
      <br />
      <br />
    </>
  );
}

ReplitPlayInfo.isMDXComponent = true;
Replit.isMDXComponent = true;
Replit.PlayInfo = ReplitPlayInfo;