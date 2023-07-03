import React from "react";
import Details from "@theme-original/Details";
import type DetailsType from "@theme/Details";
import type {WrapperProps} from "@docusaurus/types";

interface Props extends WrapperProps<typeof DetailsType>
{
  size?: "small" | "normal" | "large";
}

export default function DetailsWrapper(props: Props): JSX.Element {
  return (
    <>
      <Details {...props} data-size={props.size || "normal"}/>
    </>
  );
}
