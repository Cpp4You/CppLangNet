import React from "react";

import useBaseUrl from "@docusaurus/useBaseUrl";

import "./SiteFeaturesSlider.scss";

type Feature = {
  heading: string,
  title: string,
  imageUrl: string,
  description: React.ReactNode,
}

const features: Array<Feature> = [
  {
    heading: "Our website is...",
    title: "Up-to-date",
    imageUrl: "img/homepage/Modern.webp",
    description: <>We aim to provide the <a href="#" target="_blank">latest knowledge</a> about C++ with focus on modern practices.</>,
  },
  {
    heading: "Try it out",
    title: "Quizzes",
    imageUrl: "img/homepage/Quiz.webp",
    description: <>You can test your knowledge with our <a href="#" target="_blank">quizzes</a>.</>,
  },
  {
    heading: "What you'll find here",
    title: "Blog posts",
    imageUrl: "img/homepage/Blog.webp",
    description: 
      <>
        We have a <a href="blog" target="_blank">blog</a> where we post interesting stuff about the language.
        Feel free to <a href="contributing" target="_blank">post your own</a> stuff.
      </>,
  }
];


type FeaturePreviewSwitcherProps = {
  numFeatures: number,
  currentIndex: number,
  featureName: string,

  onNext: () => void,
  onPrev: () => void,
}

function FeaturePreviewSwitcher(props: FeaturePreviewSwitcherProps) {
  return (
    <>
      <div className={"homepage-slider-dots"}>
        {Array.from({ length: props.numFeatures }, (_, i) => (
          <span key={i} data-active={`${i === props.currentIndex}`} />
        ))}
      </div>
      <div className={"homepage-slider-controls"}>
        <button onClick={props.onPrev}>&lt;</button>
        <span className="slider-feature-name">{props.featureName}</span>
        <button onClick={props.onNext}>&gt;</button>
      </div>
    </>
  );
}

export default function SiteFeaturesSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const numFeatures = features.length;

  const handleNext = React.useCallback(() => {
    setCurrentIndex((currentIndex + 1) % numFeatures);
  }, [currentIndex]);

  const handlePrev = React.useCallback(() => {
    setCurrentIndex((currentIndex - 1 + numFeatures) % numFeatures);
  }, [currentIndex]);

  // auto change after 5 seconds, reset timer on manual change
  React.useEffect(() => {
    const timer = setTimeout(handleNext, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);
  

  return (
    <div className="homepage-slider-container">
      {/* <h2>{features[currentIndex].heading}</h2> */}
      <figure>
        <img src={useBaseUrl(features[currentIndex].imageUrl)} alt={features[currentIndex].title} />
      </figure>
      <p>{features[currentIndex].description}</p>
      <FeaturePreviewSwitcher
        currentIndex={currentIndex}
        onNext={handleNext}
        onPrev={handlePrev}
        featureName={features[currentIndex].title}
        numFeatures={numFeatures}
      />
    </div>
  );
}