import React from "react";

// Components
import CodeBlock from "@theme/CodeBlock";

// Styles
import "./LanguageOverview.scss";

const bjarne = "https://en.wikipedia.org/wiki/Bjarne_Stroustrup";

const exampleCode =
`// A simple "Hello, World" program.
// Requires C++23 support.
import std;

auto main() -> int {
  std::println("Hello, {}", "World");
}
`;

export default function LanguageOverview() {
  return (
    <section className={"homepage-section homepage-browse-section"}>
      <header>
        <h2>Overview</h2>
        <p className={"homepage-section-subtitle"}>
          C++ is a general-purpose programming language that compiles to a native code, created by <a href={bjarne}>Bjarne Stroustrup</a>.
          Here are a few examples of code written in modern C++.
        </p>
      </header>
      <main>
        <CodeBlock language="cpp">
          {exampleCode}
        </CodeBlock>
      </main>
    </section>
  );
}