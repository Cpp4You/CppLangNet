import React from "react";

import "./Links.scss";

type SingleLink = {
  title: string,
  url: string,
}

type LinksContent = {
  pinned: Array<SingleLink>,
  tools: Array<SingleLink>,
  blogPosts: Array<SingleLink>,
}

const LINKS_CONTENT: LinksContent = {
  pinned: [
    {
      title: "Standard: latest draft",
      url: "https://eel.is/c++draft/",
    },
    {
      title: "Papers: browse",
      url: "https://isocpp.org/std/status",
    },
    {
      title: "Books: show listing",
      url: "https://stackoverflow.com/questions/388242/the-definitive-c-book-guide-and-list",
    },
    {
      title: "Cpp Quiz: test yourself",
      url: "https://cppquiz.org/",
    },
  ],
  tools: [
    {
      title: "Compiler Explorer",
      url: "https://compiler-explorer.com/",
    },
    {
      title: "Cpp Insights",
      url: "https://cppinsights.io/",
    },
    // {
    //   title: "Lorem ipsum dolor sit amet",
    //   url: "https://example.com/",
    // }
  ],
  blogPosts: [
    // {
    //   title: "Idioms for polymorphism",
    //   url: "https://example.com/",
    // },
    // {
    //   title: "Covariant Return Type",
    //   url: "https://example.com/",
    // },
  ],
};

export default function Links() {
  const displaySection = (s: Array<SingleLink>) => (
    <ul>
      {s.map((link) => (
        <li key={link.url + link.title}>
          <a href={link.url} target="_blank" rel="noreferrer">
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
  return (
    <div className={"homepage-links-container"}>
      <h2>Links</h2>
      {displaySection(LINKS_CONTENT.pinned)}
      {displaySection(LINKS_CONTENT.tools)}
      {displaySection(LINKS_CONTENT.blogPosts)}
    </div>
  );
}