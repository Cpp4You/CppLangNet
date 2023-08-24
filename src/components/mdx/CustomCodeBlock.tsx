import React, { useRef, useEffect } from "react";
import CodeBlock from "@theme/CodeBlock";
import { InspectionSetup } from "./CodeBlock/Inspection/Setup";

import ControlButtons from "./CodeBlock/ControlButtons";
import { CodeBlockInspection } from "./CodeBlock/Inspection/Inspection";

type CustomCodeBlockProps = {
  children: React.ReactNode;
  fullCode?: React.ReactNode;

  /**
   * The number of lines to show by default.
   * @note This is only an estimate and may not be completely accurate.
   * This may change in the future.
   */
  maxLines?: number;
  inspectionSetup?: InspectionSetup;
}

/**
 * A wrapper for a code block with more features.
 * 
 * ### Additional features
 * 
 * - display {@link CodeBlockInspection|inspections} (e.g. animated arrows pointing to certain lines, highlights)
 * - switch between to a full code
 * - limit the default height to show only certain number of lines ({@linkcode CustomCodeBlockProps.maxLines|maxLines})
 * 
 * ### Example
 * 
 * ```tsx
 * // Comps
 * import CustomCodeBlock from "@site-comps/CustomCodeBlock";
 * 
 * // Both contain a fenced code block inside
 * import MyFullCode from "./MyFullCode.mdx";
 * import MyCode from "./MyCode.mdx";
 * 
 * // exports an InspectionSetup
 * import myInspection from "./_inspections/myInspection.ts";
 * 
 * <CustomCodeBlock
 *   fullCode={<MyFullCode />}
 *   inspectionSetup={myInspection}
 * >
 *   <MyCode />
 * </CustomCodeBlock>
 * ```
 */
export default function CustomCodeBlock(props: CustomCodeBlockProps) {

  const containerRef = useRef<HTMLDivElement>(null);
  const fullCodeRef = useRef<HTMLDivElement>(null);
  const [displayFullCode, setDisplayFullCode] = React.useState(false);
  const [currentContainer, setCurrentContainer] = React.useState<HTMLElement | null>(null);
  const [currentFullCodeContainer, setCurrentFullCodeContainer] = React.useState<HTMLElement | null>(null);

  // Update container
  useEffect(() => {
    setCurrentContainer(containerRef.current);
  }, [containerRef]);

  // Update full code container
  useEffect(() => {
    setCurrentFullCodeContainer(fullCodeRef.current);
  }, [fullCodeRef]);

  const limitLines = typeof props.maxLines === "number";
  const style: React.CSSProperties = {};

  if (limitLines) {
    const initialHeight = (Math.max(5, props.maxLines)) * 1.43;
    style.height = `${initialHeight}em`;
  }

  const updateCurrentContainerStyle = () => {
    const cont = displayFullCode ? fullCodeRef.current : containerRef.current;
    // Valid target?
    if (!cont) {
      return;
    }

    const code = cont.querySelector<HTMLElement>(".prism-code");
    if (code) {
      code.style.overflowY = "auto";
      code.style.overflowX = "auto";
    }

    const codeParent = cont.querySelector<HTMLElement>(".prism-code")?.parentNode as HTMLElement;
    if (codeParent) {
      codeParent.style.display = "flex";
      codeParent.style.height = `${style.height}`;
      codeParent.style.overflow = "hidden";
      codeParent.style.resize = "vertical";
      codeParent.style.minHeight = "40px";
      codeParent.style.maxHeight = "90vh";
      codeParent.style.flexDirection = "column";
    }
    
  };

  useEffect(updateCurrentContainerStyle, [displayFullCode, containerRef, fullCodeRef]);

  const handleFullCodeSwitch = () => {
    const update = () => setDisplayFullCode(!displayFullCode);

    type DocumentWithStartViewTransition = Document & {
      startViewTransition: (callback: () => void) => void;
    };

    const doc = document as DocumentWithStartViewTransition;

    // Fallback for browsers that don't support this API:
    if (!doc.startViewTransition) {
      update();
      return;
    }

    doc.startViewTransition(update);
  };

  return (
    <>
      {props.inspectionSetup &&
        <CodeBlockInspection container={currentContainer} setup={props.inspectionSetup} />
      }
      <div ref={containerRef} style={{ display: displayFullCode ? "none" : "block" }}>
        {props.children}
      </div>
      {props.fullCode &&
        <>
          <ControlButtons container={currentContainer}
            onShowFullCode={handleFullCodeSwitch}
          />
          <div ref={fullCodeRef} style={{ display: displayFullCode ? "block" : "none" }}>
            {typeof props.fullCode === "string" ?
              <CodeBlock language="cpp">
                {props.fullCode}
              </CodeBlock>
              :
              props.fullCode
            }
          </div>
          <ControlButtons container={currentFullCodeContainer}
            onShowFullCode={handleFullCodeSwitch}
          />
        </>
      }
    </>
  );
}

CustomCodeBlock.isMDXComponent = true;