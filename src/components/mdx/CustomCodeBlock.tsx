import React, { useRef, useEffect } from "react";
import CodeBlock from "@theme/CodeBlock";
import CodeIcon from "@mui/icons-material/Code";
import createPrependPortal from "@site/src/helper/DOM/createPrependProtal";

type CustomCodeBlockProps = {
  children: React.ReactNode;
  fullCode?: React.ReactNode;
  maxLines?: number;
}

type ExpandCodeButtonProps = {
  onClick: () => void;
}

function ExpandCodeButton(props: ExpandCodeButtonProps) {
  return (
    <button style={{ marginRight: 5, cursor: "pointer" }} title="Show the full source"
      onClick={props.onClick}
    >
      <CodeIcon fontSize="small" />
    </button>
  );
}

type InsideCodeBlockButtonGroupProps = {
  container?: HTMLElement;
  children: React.ReactNode;
}

function InsideCodeBlockButtonGroup(props: InsideCodeBlockButtonGroupProps) {

  if (!props.container) {
    return null;
  }

  const [portalTarget, setPortalTarget] = React.useState<HTMLElement | null>(null);

  const findButtonGroup = (): HTMLElement | null => {
    return props.container.querySelector("pre+div");
  };

  // Wait until the target element is available
  useEffect(() => {
    const interval = setInterval(() => {
      const target = findButtonGroup();
      if (target) {
        setPortalTarget(target);
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, [props.container]);

  return createPrependPortal(
    props.children,
    portalTarget,
  );
}

type ControlButtonsProps = {
  container?: HTMLElement;
  onShowFullCode: () => void;
}

function ControlButtons(props: ControlButtonsProps) {
  return (
    <InsideCodeBlockButtonGroup container={props.container}>
      <ExpandCodeButton onClick={props.onShowFullCode} />
    </InsideCodeBlockButtonGroup>
  );
}

export default function CustomCodeBlock(props: CustomCodeBlockProps) {

  const containerRef = useRef(null);
  const fullCodeRef = useRef(null);
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
    const code = cont.querySelector(".prism-code");
    const codeParent = cont.querySelector(".prism-code").parentNode;
    codeParent.style.display = "flex";
    codeParent.style.height = style.height;
    codeParent.style.overflow = "hidden";
    codeParent.style.resize = "vertical";
    codeParent.style.minHeight = "40px";
    codeParent.style.maxHeight = "90vh";
    codeParent.style.flexDirection = "column";
    code.style.overflowY = "auto";
    code.style.overflowX = "auto";
  };

  useEffect(updateCurrentContainerStyle, [displayFullCode, containerRef, fullCodeRef]);

  const handleFullCodeSwitch = () => {
    const update = () => setDisplayFullCode(!displayFullCode);

    // Fallback for browsers that don't support this API:
    if (!document.startViewTransition) {
      update();
      return;
    }

    // Start transition:
    document.startViewTransition(update);
  };

  return (
    <>
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