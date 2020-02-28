import React from "react"

import "./CFP.scss"

const CFP = () => (
  <section className="section-cfp  l-container  l-inner-p" id="cfp">
    <h2 className="section-cfp__title  section__title">call for speakers</h2>
    <p className="section-cfp__subtitle">
      Got a talk idea? We want to see it!
      <a
        href="https://sessionize.com/nodeconfco2020" 
        target="_blank" 
        className="submit"
        rel="noopener noreferrer"
      >Submit yours</a>
    </p>
    <div className="dates">
      <div className="when">
        <div>CFP opens at 9:00 AM</div>
        <div className="date">08 Jan 2020</div>
      </div>
      <div className="when closes">
        <div>CFP closes at 11:59 PM</div>
        <div className="date">12 Apr 2020</div>
      </div>
    </div>
    <div className="text-muted">This event is in UTC-05:00 - Bogotá, Lima, Quito. Rio Branco time zone.</div>
    <p className="section-cfp__description">
      We want you to be part of NodeConf
    Colombia 2020; We are the first exclusive Node.js conference in
    Colombia, where community members from around the world come together to
    learn and share information about the latest trends and technologies in
    Node.js development. Apply now. This call for presenters closes at 11:59
    PM EST on April 12th, 2020.
    </p>
  </section>
)

export default CFP
