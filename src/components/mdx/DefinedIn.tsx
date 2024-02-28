import React from "react";

import "./DefinedIn.scss";

type DefinedInProps = {
  headers: string | string[];
}

export default function DefinedIn(props: DefinedInProps) {
  return (
    <p className="defined-in-spec">Defined in: <HeaderList headers={props.headers} /></p>
  );
}

DefinedIn.isMDXComponent = true;

// append with ", " if multiple
function HeaderList(props: { headers: string | string[]} ) {
  if (!Array.isArray(props.headers)) {
    return <SingleHeader header={props.headers} />;
  }

  return (
    <>
      {props.headers.map((header, index) => (
        <React.Fragment key={header}>
          <SingleHeader header={header} />
          {index < props.headers.length - 1 && ", "}
        </React.Fragment>
      ))}
    </>
  );
}

function SingleHeader(props: { header: string }) {
  return <code>{props.header}</code>;
}