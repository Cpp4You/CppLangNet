import React from "react";
import Translate from "@docusaurus/Translate";
import Layout from "@theme/Layout";

import Supporters from "../components/Supporters";
import { HomepageFeatures } from "../components/HomepageFeatures";
import styles from "./index.module.scss";

import Contact from "../components/page/Homepage/Contact";
// import ProjectsGallery from "../components/page/Homepage/ProjectsGallery";
import LanguageOverview from "../components/page/Homepage/LanguageOverview";
import Links from "../components/page/Homepage/Links";
import SiteFeaturesSlider from "../components/page/Homepage/SiteFeaturesSlider";


function HomepageHeader() {

  return (
    <div className={"site-hero-banner"}>
      <section className={"site-hero-text-part " + styles["main-part"]}>
        <div className={styles["main-part-container"]}>
          <h1 className={styles.title}>
            <span className={styles["title-verb"]}>Learn</span> <span className={styles.outlined}>C++</span> on
            <br />
            Cpp-Lang.Net
          </h1>
          <p className={styles.subtitle}>
            <Translate>Your completely free, </Translate>
            <a href="https://github.com/Cpp4You/CppLangNet" target="_blank" rel="noreferrer">
              <Translate>open source</Translate>
            </a>, <Translate>all-in-one website about C++.</Translate>
          </p>
          <HomepageFeatures />
        </div>
      </section>
      <section className={styles["supporters-part"]}>
        <Supporters />
      </section>
      <section className={styles["features-part"]}>
        <SiteFeaturesSlider />
        <div className={styles["background-circle"]}><div></div></div>
      </section>
      <section className={styles["links-part"]}>
        <Links />
      </section>
      <div className={styles["background-strip"]} />
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      description="The modern website for C++ language to improve its accessibility.">
      <main className={"homepage-main-wrapper"}>
        <HomepageHeader />
        <LanguageOverview />
        {/* <ProjectsGallery /> */}
        <Contact />
      </main>
    </Layout>
  );
}
