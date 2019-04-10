import React from 'react'


import './tickets.scss'

const SectionSpeakers = () => ( 

  <div className="section-tickets__background" id="tickets">

    <section className="section-tickets">

      <div className="section-tickets__data">
        <h2 className="section-tickets__title">Tickets</h2>
        <h3 className="section-tickets__subtittle">We want to meet you!</h3>
        <p className="section-tickets__description">
          Get access to NodeConf Colombia at Ruta N’s complex on June 21st & 22nd with national and international speakers, goodie bag, live translation services (ES ➡︎ EN :: EN ➡︎ ES) and the opportunity to participate in Code+Learn and start contributing to the Node.js project!
        </p>
      </div>

      <div className="inner-wrap-desktop">
        <div className="section-tickets__content-ticket">
          <a href="https://ti.to/nodeconfco/2019" className="section-tickets__card-ticket" target="_blank">
            <div className="section-tickets__info">Regular Tickets</div>            
            <div className="section-tickets__price">$ 125</div>
          </a>
        </div>
      <div className="ticket-soul-out">
        <div className="section-tickets__content-ticket">
          <a href="" className="section-tickets__out-ticket" target="_blank">
            <div className="section-tickets__info">Early Bird Tickets</div>            
            <div className="section-tickets__price">$ 100</div>
            <div className="section-tickets__soul">SOUL OUT</div>
            
          </a>
        </div>
        
        <div className="section-tickets__content-ticket">
          <a href="" className="section-tickets__out-ticket" target="_blank">
            <div className="section-tickets__info">Second Early Bird Tickets</div>            
            <div className="section-tickets__price">$ 100</div>
            <div className="section-tickets__soul">SOUL OUT</div>
          </a>
        </div>
        </div>
      </div>

      <a href="https://ti.to/nodeconfco/2019" className="section-tickets__buy-tickets btn" target="_blank" rel="noopener noreferrer">
        Buy Tickets <span className="icon-row-rigth"> ➡︎</span>
      </a>

    </section>
    
  </div>


)


export default SectionSpeakers