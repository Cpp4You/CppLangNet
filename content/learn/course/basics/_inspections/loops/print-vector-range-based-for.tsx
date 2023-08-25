import { InspectionStage, compute, lineFragment, /*makeArrow,*/ makeHighlight } from "@site/src/components/mdx/CodeBlock/Inspection/Setup";

const loopVar = lineFragment(2, 5, 10);
const vecElements = [
  lineFragment(0, 29, 31), // id 0
  lineFragment(0, 33, 35), // id 1
  lineFragment(0, 37, 39), // ...
  lineFragment(0, 41, 42),
  lineFragment(0, 44, 46),
  lineFragment(0, 48, 50),
];

const loopIteration = (idx: number): InspectionStage[] => {
  return [
    { highlights: [makeHighlight(2, "default")], },
    { highlights: [loopVar, vecElements[idx]] },
    { highlights: [3, vecElements[idx]] },
    { highlights: [4, vecElements[idx]] },
    { highlights: [5, vecElements[idx]] },
  ];
};

const inspection = compute({
  showControlButtons: true,
  runOnStart: false,
  autoPlayInterval: 400,
  stages: [
    {
      highlights: [0],
      // arrows: [
      //   makeArrow(2, "neutral"),
      // ]
    },
    // {
    //   // arrows: [
    //   //   makeArrow(3, "error"),
    //   // ]
    // },
    ...loopIteration(0),
    ...loopIteration(1),
    ...loopIteration(2),
    ...loopIteration(3),
    ...loopIteration(4),
    ...loopIteration(5),
  ]
});

export default inspection;