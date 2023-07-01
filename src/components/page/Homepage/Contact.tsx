import React from "react";
import "./Contact.scss";

const PROFILE_PIC = "https://i.imgur.com/31E5neo.jpg";

const CONTACT_LINKS = {
  LinkedIn: "https://www.linkedin.com/in/pawe%C5%82-syska-b00155227/",
  Discord: "https://discord.gg/NvBNvpgUHZ",
};

export default function Contact() {

  const linkedIn = <a href={CONTACT_LINKS.LinkedIn} target="_blank">LinkedIn</a>;
  const discord = <a href={CONTACT_LINKS.Discord}>Discord</a>;

  return (
    <section className={"homepage-section homepage-contact-section"}>
      <header>
        <h2>Contact</h2>
      </header>
      <main>
        <figure>
          <img src={PROFILE_PIC} alt="Paweł's profile picture" />
        </figure>
        <p>
          Hi, my name is Paweł Syska and I'm the maintainer of the Cpp-Lang.net website.
          <br />
          You can contact me via {linkedIn} or our {discord} server.
        </p>
      </main>
    </section>
  );
}