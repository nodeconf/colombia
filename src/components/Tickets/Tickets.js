import React from "react"

import "./Tickets.scss"

const Tickets = () => (
  <section className="section-tickets  l-container  l-inner-p" id="tickets">
    <h2 className="section-cfp__title  section__title">Tickets</h2>
    <p className="section-tickets__subtitle">
      Early Bird tickets $100
      <a
        href="https://tickets.nodeconf.co/" 
        target="_blank" 
        className="submit"
        rel="noopener noreferrer"
      >Buy</a>
    </p>
  </section>
)

export default Tickets
