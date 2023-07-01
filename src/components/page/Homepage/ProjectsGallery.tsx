import React from "react";

import "./ProjectsGallery.scss";

function ProjectEntry() {
  return (
    <div className={"projects-gallery-element"}>
      <figure>
        <img src="https://picsum.photos/100" alt="project entry" />
      </figure>
      <p>CppFront</p>
      <p>A language with a refined syntax compiling to C++.</p>
    </div>
  );
}

export default function ProjectsGallery()
{
  return (
    <section className={"homepage-section projects-gallery homepage-browse-section"}>
      <header>
        <h2>Interesting projects</h2>
        <p className={"homepage-section-subtitle"}>
          Projects built with or for C++ that we find interesting.
        </p>
      </header>
      <main>
        {Array.from({ length: 8 }, (_, i) => (
          <ProjectEntry key={i} />
        ))}
        <p>Want to add your project here? Contact me.</p>
      </main>
    </section>
  );
}