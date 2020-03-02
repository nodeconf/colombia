import React from "react"

import "./Tickets.scss"

const Tickets = () => (
  <section className="section-tickets  l-container  l-inner-p" id="tickets">
    <div className="section-tickets__data">
      <h2 className="section-cfp__title  section__title">Tickets</h2>
      <h3 className="section-tickets__subtittle">We want to meet you!</h3>
    </div>
    <div className="inner-wrap-desktop">
      <div className="section-tickets__content-ticket">
        <div className="section-tickets__out-ticket" target="_blank">
          <div className="section-tickets__info">Regular Tickets</div>
          <div className="section-tickets__price">$ 125</div>
          <a
              href="https://tickets.nodeconf.co/"
              target="_blank"
              className="submit"
              rel="noopener noreferrer"
            >
              Buy
            </a>
        </div>
      </div>

      <div className="ticket-soul-out">
        <div className="section-tickets__content-ticket">
          <div className="section-tickets__soul-ticket" target="_blank">
            <div className="section-tickets__info">Early Bird Tickets</div>
            <div className="section-tickets__price">$ 100</div>
            <div className="section-tickets__soul">SOLD OUT</div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Tickets
