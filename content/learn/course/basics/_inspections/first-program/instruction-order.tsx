import { compute } from "@site/src/components/mdx/CodeBlock/Inspection/Setup";

const inspection = compute({
  showControlButtons: true,
  runOnStart: true,
  replayDelay: 2000,
  stages: [
    { highlights: [ 4 ] },
    { highlights: [ 5 ] },
    { highlights: [ 6 ] },
  ]
});

export default inspection;