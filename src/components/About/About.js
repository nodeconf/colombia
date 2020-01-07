import React from "react"

import "./About.scss"

const About = () => (
  <section className="about-component about  l-inner-p" id="about">
    <h2 className="title  section__title">about</h2>
    <p className="description section__description">
      NodeConf Colombia 2020 is the first international event focused on the
      entire Node.js ecosystem. It’s a non-profit event, where our attendees
      will be sharing in an environment of inclusion and respect, having
      access to relevant information through talks, workshops, and great
      experiences with the Colombian Node community.
    </p>
    <p className="description section__description pictures-2019">
      Want to check out our 2019 event
      <a
        href="https://photos.app.goo.gl/U2KnhMY1g2eksbos8"
        target="_blank"
        className="pictures"
        rel="noopener noreferrer"
      >click here</a>
    </p>
  </section>
)

export default About
