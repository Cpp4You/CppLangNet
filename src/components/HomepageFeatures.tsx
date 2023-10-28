import React from "react";
import styles from "./HomepageFeatures.module.scss";

import ThemedImage from "@theme/ThemedImage";

import { translate } from "@docusaurus/Translate";

const VSC_ICONS_FOLDER = "img/icons/vscode";

function vscThemedIcon(light: string, dark: string = light) {
  return {
    default: {
      light: `${VSC_ICONS_FOLDER}/light/${light}.svg`,
      dark: `${VSC_ICONS_FOLDER}/dark/${dark}.svg`,
    },
    color: {
      light: `${VSC_ICONS_FOLDER}/light/${light}-color.svg`,
      dark: `${VSC_ICONS_FOLDER}/dark/${dark}-color.svg`,
    }
  };
}

const FeatureList = [
  {
    title: translate({ message: "Learn", id: "langFeature.Learn" }),
    url: "learn/",
    svgPath: vscThemedIcon("book"),
    description: (
      <>
        None yet.
      </>
    ),
  },
  {
    title: translate({ message: "Docs", id: "langFeature.Docs" }),
    svgPath: vscThemedIcon("repo"),
    url: "docs/",
    description: (
      <>
        None yet.
      </>
    ),
  },
  {
    title: translate({ message: "Tools", id: "langFeature.Tools" }),
    url: "tools/",
    svgPath: vscThemedIcon("tools"),
    description: (
      <>
        None yet.
      </>
    ),
  },
  {
    title: translate({ message: "Community", id: "langFeature.Community" }),
    url: "community/",
    svgPath: vscThemedIcon("community"),
    description: (
      <>
        None yet.
      </>
    ),
  },
];

type ThemedIcon = {
  light: string;
  dark: string;
};

type IconWithColor = { default: ThemedIcon; color: ThemedIcon; };
type FeatureIcon = string | IconWithColor;

type FeatureProps = {
  svgPath: FeatureIcon;
  title: string;
  url: string;
  description: React.ReactNode;
};

function Feature({ svgPath, title, url }: FeatureProps) {
  return (
    <div className={styles.pageCard}>
      <a href={url} className={styles.pageCardInner}>
        <div className={styles.pageCardSvg}>
          {typeof svgPath == "object" &&
            <ThemedImage
              className={styles.normalIcon}
              sources={svgPath.default}
            />
          }
          {typeof svgPath == "string" &&
            <img src={svgPath} alt={title} />
          }
          {isIconWithColor(svgPath) &&
            <ThemedImage
              className={styles.hoverIcon}
              sources={(svgPath as IconWithColor).color}
            />
          }
        </div>
        <div className={styles.pageCardText}>
          <p>{title}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}

function isIconWithColor(svgPath: FeatureIcon) {
  return typeof svgPath === "object" && "color" in svgPath;
}
