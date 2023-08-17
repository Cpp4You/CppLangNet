import { compute, lineFragment, makeBlock } from "@site/src/components/mdx/CodeBlock/Inspection/Setup";

// This is example of a simple inspection.

const inspection = compute({
  showControlButtons: true,
  runOnStart: true,
  stages: [
    {
      highlights: [
        lineFragment(2, 2, 11),
      ],
    },
    {
      highlights: [
        lineFragment(2, 15, 16),
      ],
    },
    {
      highlights: [
        makeBlock(0, 2, 10, 20),
      ],
    },
    {
      highlights: [ 0 ],
    },
    {
      highlights: [ 1 ],
    },
    {
      highlights: [ 2 ],
    },
    {
      highlights: [ 3 ],
    },
  ]
});

export default inspection;