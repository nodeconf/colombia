import React from "react";

import Speaker from "./speaker";
import { speakers } from '../../constants/speakers'

import "./speakers.scss";

const SectionSpeakers = () => (
  <section className="section-speakers" id="speakers">
    <h2 className="section-speakers__title">Speakers</h2>

    <div className="inner-wrap-desktop first-row">
      <Speaker {...speakers.anna} />
      <Speaker {...speakers.tierney} />
      <Speaker {...speakers.kat} />
    </div>
    <div className="inner-wrap-desktop additional-row">
      <Speaker {...speakers.james} />
      <Speaker {...speakers.ruben} />
    </div>
    <div className="inner-wrap-desktop additional-row">
      <Speaker {...speakers.diego} />
      <Speaker {...speakers.andrea} />
      <Speaker {...speakers.miguel} />
    </div>
    <div className="inner-wrap-desktop single-speaker-row">
      <Speaker {...speakers.erick} />
      <Speaker {...speakers.matt} />
    </div>
    <div className="inner-wrap-desktop second-speaker-row">
      <Speaker {...speakers.ujjwal} />
      <Speaker {...speakers.vladimir} />
      <Speaker {...speakers.kevin} />
    </div>
  </section>
);

export default SectionSpeakers;
