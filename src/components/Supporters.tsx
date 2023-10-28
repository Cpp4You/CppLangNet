import React from "react";

import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./Supporters.module.scss";

const supporters = [
  {
    name: "PJAIT",
    tagline: "Polish-Japanese Academy of Information Technology",
    logo: "img/supporters/pjait.png",
    alt: "PJATK logo",
    siteLink: "https://pja.edu.pl/en/"
  },
];


export default function Supporters() {
  return (
    <div className={styles.container}>
      <h2>Supporters</h2>
      <div className={styles.supportersList}>
        {supporters.map((supporter) => (
          <Supporter
            key={supporter.name}
            name={supporter.name}
            tagline={supporter.tagline}
            logo={useBaseUrl(supporter.logo)}
            alt={supporter.alt}
            siteLink={supporter.siteLink}
          />
        ))}
      </div>
    </div>
  );
}

interface SupporterProps {
  name: string;
  tagline: string;
  logo: string;
  alt: string;
  siteLink: string;
}


export function Supporter(props: SupporterProps) {
  return (
    <a className={styles.supporterCard} href={props.siteLink} target="_blank" rel="noreferrer">
      <div className={styles.supporterCardInner}>
        <figure>
          <img src={props.logo} alt={props.alt} />
        </figure>
        <div>
          <h3>{props.name}</h3>
          <p>{props.tagline}</p>
        </div>
      </div>
    </a>
  );
}