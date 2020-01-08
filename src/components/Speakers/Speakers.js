import React from "react"

import Indutny from "./images/indutny"
import Beth from "./images/beth"
import Juan from "./images/juan"
import Guillermo from "./images/guillermo"
import Shelley from "./images/shelley"

import "./Speakers.scss"

const Speakers = () => (

  <section className="speakers-container  l-inner-p" id="speakers">
    <div className="section-speakers">
      <h2 className="section-speakers__title  section__title">speakers</h2>

      <div className="content-figure">
        <article className="section-speakers__content">
          <figure className="section-speakers__img">
            <Beth />
          </figure>
          <div className="section-speakers__data">
            <h3 className="section-speakers__name">Beth Griggs</h3>
            <a
              className="section-speakers__social icon-twitter"
              aria-label="Twitter_Speaker"
              href="https://twitter.com/BethGriggs_"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </article>

        <article className="section-speakers__content">
          <figure className="section-speakers__img">
            <Shelley />
          </figure>
          <div className="section-speakers__data">
            <h3 className="section-speakers__name">Shelley Vohr</h3>
            <a
              className="section-speakers__social icon-twitter"
              aria-label="Twitter_Speaker"
              href="https://twitter.com/codebytere"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </article>

        <article className="section-speakers__content">
          <figure className="section-speakers__img">
            <Indutny />
          </figure>
          <div className="section-speakers__data">
            <h3 className="section-speakers__name">Fødor Indutny</h3>
            <a
              className="section-speakers__social icon-twitter"
              aria-label="Twitter_Speaker"
              href="https://twitter.com/indutny"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </article>

        <article className="section-speakers__content">
          <figure className="section-speakers__img">
            <Guillermo />
          </figure>
          <div className="section-speakers__data">
            <h3 className="section-speakers__name">Guillermo Rauch</h3>
            <a
              className="section-speakers__social icon-twitter"
              aria-label="Twitter_Speaker"
              href="https://twitter.com/rauchg"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </article>

        <article className="section-speakers__content">
          <figure className="section-speakers__img">
            <Juan />
          </figure>
          <div className="section-speakers__data">
            <h3 className="section-speakers__name">Juan Arbol</h3>
            <a
              className="section-speakers__social icon-twitter"
              aria-label="Twitter_Speaker"
              href="https://twitter.com/soyjuanarbol"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </article>
        
      </div>
    </div>
  </section>
)

export default Speakers