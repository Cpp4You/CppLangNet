import React, { useEffect } from "react";
import { Arrow, Bounds, Highlight, InspectionSetup, InspectionStage, getHighlightBounds, getHighlightContent, getHighlightVariant, getLineBoundsRelativeTo } from "./Setup";
import FlowControlButtons from "./FlowControlButtons";
import ArrowInspection from "./Arrow";
import BlockHighlight from "./BlockHighlight";
import { InsideCodeBlockCode, AlongCodeBlockPre } from "../../Injectors/CodeBlock";

type ArrowDesc = {
  arrow: Arrow;
  bounds?: Bounds;
};

/**
 * @note relative to a container.
 */
const CODE_ELEM_SELECTOR = "pre>code";

type CodeBlockInspectionProps = {
  container?: HTMLElement;
  setup: InspectionSetup;
};

/**
 * Displays an {@link InspectionSetup|inspection setup} for a code block in the given container.
 * This allows to present the code block in a more interactive way, adding highlights and arrows,
 * possibly animated (composed of multiple {@link InspectionStage|stages}).
 * 
 * @note The content will be attached automatically once the
 * {@linkcode CodeBlockInspectionProps.container|container} is available (not `null`).
 */
export function CodeBlockInspection(props: CodeBlockInspectionProps) {

  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);
  const [stepForwardTimer, setStepForwardTimer] = React.useState<NodeJS.Timeout | null>(null);

  let currentStage: InspectionStage | null;
  if (props.setup.stages) {
    currentStage = props.setup.stages[currentStepIndex];
  }

  const currentHighlights: Highlight[] = currentStage?.highlights ?? [];
  const currentArrows: Arrow[] = currentStage?.arrows ?? [];

  const highlightBounds: Array<Bounds | null> = [];
  const arrows: ArrowDesc[] = [];

  if (props.container && currentHighlights.length > 0) {
    const codeElem = props.container.querySelector<HTMLElement>(CODE_ELEM_SELECTOR);
    if (codeElem) {
      collectHighlightBounds(codeElem, currentHighlights, highlightBounds);
      collectArrowDescs(codeElem, props.container, currentArrows, arrows);
    }
  }

  const isRunning = stepForwardTimer !== null;
  const numSteps = props.setup.stages.length;

  const advance = () => {
    setCurrentStepIndex((index) => (index + 1) % numSteps);
  };

  const rewind = () => {
    setCurrentStepIndex((index) => (index - 1 + numSteps) % numSteps);
  };

  const handleResume = () => {
    setStepForwardTimer(setInterval(() => {
      advance();
    }, props.setup.autoPlayInterval || 1000));
  };

  const handlePause = () => {
    if (stepForwardTimer) {
      clearInterval(stepForwardTimer);
      setStepForwardTimer(null);
    }
  };

  useEffect(() => {
    if (props.setup.runOnStart) {
      handleResume();
    }

    return () => {
      handlePause();
    };
  }, []);

  return (
    <>
      {props.setup.showControlButtons &&
        <FlowControlButtons
          running={isRunning}
          onResume={handleResume}
          onPause={handlePause}
          onStepForward={() => { handlePause(); advance(); }}
          onStepBackward={() => { handlePause(); rewind(); }}
          currentStep={currentStepIndex + 1}
          totalSteps={numSteps} />}
      <InsideCodeBlockCode container={props.container}>
        {highlightBounds.map((bounds, idx) => (
          bounds &&
          <BlockHighlight
            key={`hgh-${currentStepIndex}-${idx}`}
            bounds={bounds}
            variant={getHighlightVariant(currentHighlights[idx])} />
        ))}
      </InsideCodeBlockCode>
      <AlongCodeBlockPre container={props.container} portalStyle={{ zIndex: 1, position: "absolute" }}>
        {arrows.map((desc, idx) => (
          <ArrowInspection
            key={`arr-${currentStepIndex}-${idx}`}
            arrow={desc.arrow}
            lineBounds={desc.bounds}
            variant={desc.arrow.variant} />
        ))}
      </AlongCodeBlockPre>
    </>
  );
}

/**
 * Calculates highlight bounds using the content of a `code` element and appends them to the target array.
 * 
 * @param code Code block used to determine bounds of a highlight.
 * @param highlights List of highlights to calculate bounds for.
 * @param target Target array to append bounds to.
 * 
 * @note Target array may contain `null` values.
 */
function collectHighlightBounds(code: HTMLElement, highlights: Highlight[], target: Array<Bounds | null>): void {
  for (const h of highlights) {
    const highlightContent = getHighlightContent(h);
    const bounds = getHighlightBounds(code, highlightContent);

    // Note: maybe null
    target.push(bounds);
  }
}

/**
 * Calculates arrow bounds using the content of a `code` element and appends them to the target array.
 * 
 * @param code Code block used to determine bounds of an arrow.
 * @param container The container that arrows' bounds will be relative to.
 * @param arrows List of arrows to calculate bounds for.
 * @param target Target array to append bounds to.
 */
function collectArrowDescs(code: HTMLElement, container: HTMLElement, arrows: Arrow[], target: ArrowDesc[]): void {
  for (const arrow of arrows) {
    const bounds = getLineBoundsRelativeTo(code, arrow.line, container);
    target.push({ arrow, bounds });
  }
}