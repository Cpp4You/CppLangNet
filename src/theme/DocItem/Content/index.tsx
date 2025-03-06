import React from "react";
import Content from "@theme-original/DocItem/Content";
import type ContentType from "@theme/DocItem/Content";
import type { WrapperProps } from "@docusaurus/types";
import { useDoc } from "@docusaurus/plugin-content-docs/client";

import NotFinished from "@site-comps/admonitions/NotFinished";
import DocSettings from "@site/src/components/DocSettings";
import CppRefAttribution from "@site-comps/CppRefAttribution";
import DefinedIn from "@site-comps/DefinedIn";

import BrowserOnly from "@docusaurus/BrowserOnly";

import { setCookie, getCookie } from "@site/src/helper/Cookies";

import styles from "./Content.module.scss";

interface FrontMatterData {
  "cppreference_origin"?: string;
  "cppreference_origin_rel"?: string;

  "arrow_jumping"?: string;
  "arrow_jumping_preset"?: string;

  "defined_in_headers"?: string | string[];

  "completion"?: boolean;
  // Possibly other
}

type DocMetadata = {
  frontMatter: FrontMatterData;
};

type Props = WrapperProps<typeof ContentType>;

/**
 * Wraps the content of a document with extra features, like {@linkcode DocSettings}
 * or extra FrontMatter-based features e.g. {@linkcode CppRefAttribution}.
 */
export default function ContentWrapper(props: Props): JSX.Element {
  const { metadata } = useDoc() as { metadata: DocMetadata };

  const [textSize, setTextSize] = React.useState(5);
  React.useEffect(() => {
    setTextSize(Number.parseInt(getCookie("sizeMode") || "5"));
  }, []);

  const handleTextSizeChanged = React.useCallback(
    (newSize: number) => {
      setTextSize(newSize);
      setCookie("sizeMode", newSize, 180);
    },
    [textSize]
  );


  // Setup arrow jumping:
  let arrowJumping = metadata.frontMatter["arrow_jumping"];

  if (!arrowJumping && metadata.frontMatter["arrow_jumping_preset"]) {
    arrowJumping = arrowJumpingQueryFromPreset(metadata.frontMatter["arrow_jumping_preset"]);
  }

  return (
    <div className={`document-content-wrapper ${styles[`sizeMode-${textSize}`]}`}>
      <BrowserOnly>
        {() => (
          <DocSettings
            onTextSizeChanged={handleTextSizeChanged}
            arrowJumping={arrowJumping}
          />
        )}
      </BrowserOnly>
      <FrontMatterDefinedIn frontMatter={metadata.frontMatter} />
      {
        metadata.frontMatter.completion === false &&
        <NotFinished />
      }
      <Content {...props} />
      <FrontMatterCppRefAttribution frontMatter={metadata.frontMatter} />
    </div>
  );
}

type FrontMatterProps = {
  frontMatter: FrontMatterData;
}

function FrontMatterDefinedIn(props: FrontMatterProps) {
  const headers = props.frontMatter.defined_in_headers;

  if (!headers) {
    return null;
  }
  return (
    <DefinedIn headers={headers} />
  );
}

function FrontMatterCppRefAttribution(props: FrontMatterProps) {
  const absolute = props.frontMatter["cppreference_origin"];
  const relative = props.frontMatter["cppreference_origin_rel"];

  if (absolute) {
    return (
      <CppRefAttribution fullUrl={absolute} />
    );
  }

  if (relative) {
    return (
      <CppRefAttribution lang="en" relativeUrl={relative} />
    );
  }

  return null;
}

function arrowJumpingQueryFromPreset(preset: string) {
  switch (preset.toLowerCase()) {
  case "overloads":
    return "h2.anchor";
  default:
    return undefined;
  }
}

