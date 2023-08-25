import { compute, makeBlock } from "@site/src/components/mdx/CodeBlock/Inspection/Setup";

const inspection = compute({
  showControlButtons: false,
  runOnStart: true,
  stages: [
    { highlights: [ makeBlock(2, 4, 0, 25) ] },
  ]
});

export default inspection;