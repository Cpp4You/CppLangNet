export type RangeBase = {
  startLine: number;
  endLine: number;
  startColumn: number;
  endColumn: number;
}

export type Range = RangeBase & {
  kind: "range";
}

export type Block = RangeBase & {
  kind: "block";
}

export type Bounds = {
  top: number;
  left: number;
  width: number;
  height: number;
}

type LineNumber = number;
type HighlightBase = Range | Block | LineNumber;
export type HighlightVariant = "default" | "neutral" | "caution" | "error";

export type Highlight = HighlightBase | {
  kind: "highlight";
  variant: HighlightVariant;
  content: HighlightBase;
};

export type Arrow = {
  line: number;
  variant?: HighlightVariant;
  id?: string;
};

export function getHighlightVariant(highlight: Highlight): HighlightVariant {
  if (typeof highlight !== "object") {
    return "default";
  }

  if (highlight.kind === "highlight") {
    return highlight.variant;
  }

  return "default";
}

export function getHighlightContent(highlight: Highlight): HighlightBase {
  if (typeof highlight !== "object") {
    return highlight;
  }

  if (highlight.kind === "highlight") {
    return highlight.content;
  }

  return highlight;
}

export function makeHighlight(content: HighlightBase, variant?: HighlightVariant): Highlight {
  return {
    kind: "highlight",
    variant: variant ?? "default",
    content,
  };
}

export function makeArrow(line: number, variant?: HighlightVariant, id?: string): Arrow {
  return {
    line,
    variant: variant ?? "default",
    id,
  };
}

export type InspectionStage =
{
  highlights?: Highlight[];
  arrows?: Arrow[];
}

export function makeBlock(startLine: number, endLine: number, startColumn: number, endColumn: number): Block {
  return {
    kind: "block",
    startLine,
    endLine,
    startColumn,
    endColumn,
  };
}

export function makeRange(startLine: number, endLine: number, startColumn: number, endColumn: number): Range {
  return {
    kind: "range",
    startLine,
    endLine,
    startColumn,
    endColumn,
  };
}

export function lineFragment(line: number, startColumn: number, endColumn: number): Range {
  return {
    kind: "range",
    startLine: line,
    endLine: line,
    startColumn,
    endColumn,
  };
}

export type InspectionSetupBase = {
  showControlButtons: boolean;
  runOnStart?: boolean;
  autoPlayInterval?: number;
  replayDelay?: number;

  stages?: InspectionStage[];
}

export type InspectionSetup = InspectionSetupBase &
{
  computedStages: InspectionStage[];
}

/**
 * Returns the bounds of the text in the given range.
 * Bounds are relative to the root container.
 * The container may contain multiple lines and can contain <span> elements.
 * @param rootContainer 
 * @param range 
 */
export function getTextBounds(rootContainer: HTMLElement, range: Range): Bounds {
  let currentLine = 0;
  let currentColumn = 0;
  let startNode: Node | null = null;
  let startNodeTextOffset = 0;
  let endNode: Node | null = null;
  let endNodeTextOffset = 0;

  // let logNumber = 0;
  // This function walks the DOM tree, tracking the current line and column
  // When the start or end of the range is found, it saves the corresponding node
  function walk(node: Node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || "";
      // console.log(logNumber++, `[${currentLine}] Analysing text: `, text);
      for (let i = 0; i < text.length; i++) {
        if (currentLine === range.startLine && currentColumn === range.startColumn) {
          startNode = node;
          startNodeTextOffset = i;
          // console.log(logNumber++, "Found start node at", i, "in", text);
        }

        if (startNode && currentLine === range.endLine && currentColumn === range.endColumn) {
          endNode = node;
          endNodeTextOffset = i;
          // console.log(logNumber++, "Found end node at", i, "in", text);
          return;
        }

        currentColumn++;
      }
    } else {
      for (let i = 0; i < node.childNodes.length; i++) {
        const current = node.childNodes[i];
        walk(current);

        if (current.classList && current.classList.contains("token-line")) {
          // console.log(logNumber++, "Line ended");
          currentLine++;
          currentColumn = 0;
        }

        if (endNode) {
          return;
        }
      }
    }
  }

  walk(rootContainer);

  // This function finds the bounding rectangle of a node
  function getBounds(): Bounds {
    const range = document.createRange();
    // range.selectNode(node);

    // take into account the start and end offsets
    range.setStart(startNode, startNodeTextOffset);
    range.setEnd(endNode, endNodeTextOffset);

    const rect = range.getBoundingClientRect();

    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    };
  }

  // If no nodes are found, return null
  if (!startNode || !endNode) {
    return {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
  }

  // make the bounds relative to the root container
  const bounds = getBounds();
  const rootBounds = rootContainer.getBoundingClientRect();
  return {
    top: bounds.top - rootBounds.top,
    left: bounds.left - rootBounds.left,
    width: bounds.width,
    height: bounds.height
  };
}

function getElementInnerWidth(element: HTMLElement) {
  const cs = getComputedStyle(element);

  const paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);

  const borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);

  // Element width and height minus padding and border
  return element.offsetWidth - paddingX - borderX;
}

export function getAbsoluteLineBounds(rootContainer: HTMLElement, line: number): Bounds | null
{
  let lineCounter = 0;
  let bounds: Bounds | null = null;
  function walk(node: Node) {
    if (node.nodeType === Node.TEXT_NODE) {
      return;
    }

    for (let i = 0; i < node.childNodes.length; i++) {
      const currentNode = node.childNodes[i];
      walk(currentNode);

      if (bounds) {
        return;
      }

      if (currentNode.nodeType !== Node.ELEMENT_NODE) {
        continue;
      }

      const current = currentNode as HTMLElement;

      if (!current.classList.contains("token-line")) {
        continue;
      }

      if (lineCounter === line) {
        const firstChild = current.firstChild;

        const hasLineNumbers = (firstChild.nodeType !== Node.ELEMENT_NODE || !(firstChild as HTMLElement).classList.contains("token"));

        let lineNumbersOffset = 0;
        if (hasLineNumbers) {
          lineNumbersOffset = (firstChild as HTMLElement).getBoundingClientRect().width + 2;
        }

        const rect = current.getBoundingClientRect();
        const width = getElementInnerWidth(current);
        const rootRect = rootContainer.getBoundingClientRect();

        bounds = {
          top: rect.top,
          left: rect.left + lineNumbersOffset,
          width: width - lineNumbersOffset,
          height: rect.height
        };
        return;
      }

      ++lineCounter;
    }
  }

  walk(rootContainer);
  return bounds;
}

export function getLineBoundsRelativeTo(lineContainer: HTMLElement, line: number, relativeTo: HTMLElement): Bounds | null {
  const bounds = getAbsoluteLineBounds(lineContainer, line);
  if (!bounds) {
    return null;
  }

  const relRect = relativeTo.getBoundingClientRect();
  bounds.top -= relRect.top;
  bounds.left -= relRect.left;
  return bounds;
}

export function getLineBounds(rootContainer: HTMLElement, line: number): Bounds | null {
  return getLineBoundsRelativeTo(rootContainer, line, rootContainer);
}

export function getBlockBounds(rootContainer: HTMLElement, block: Block): Bounds | null {
  const startLineBounds = getLineBounds(rootContainer, block.startLine);
  const endLineBounds = getLineBounds(rootContainer, block.endLine);

  if (!startLineBounds || !endLineBounds) {
    return null;
  }

  const oneRem = parseFloat(getComputedStyle(rootContainer).fontSize || "16");
  const oneCharWidth = oneRem * 0.61;

  const containerWidth = getElementInnerWidth(rootContainer);

  const left = startLineBounds.left + (block.startColumn * oneCharWidth);
  const width = (block.endColumn - block.startColumn) * oneCharWidth;

  return {
    top: startLineBounds.top,
    left,
    width: block.endColumn === 0 ? containerWidth : width,
    height: endLineBounds.top + endLineBounds.height - startLineBounds.top
  };
}

export function getHighlightBounds(rootContainer: HTMLElement, highlight: Highlight): Bounds | null {
  if (typeof highlight === "number") {
    const lineBounds = getLineBounds(rootContainer, highlight);
    if (!lineBounds) {
      return null;
    }

    const containerWidth = getElementInnerWidth(rootContainer);
    return {
      top: lineBounds.top,
      left: lineBounds.left,
      width: containerWidth * 0.8,
      height: lineBounds.height
    };
  }

  if (highlight.kind === "block") {
    return getBlockBounds(rootContainer, highlight);
  }
  
  return getTextBounds(rootContainer, highlight);
}

export function compute(setup: InspectionSetupBase): InspectionSetup {
  const result = {
    ...setup,
  } as InspectionSetup;

  return result;
}

export default InspectionSetup;