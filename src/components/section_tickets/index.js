import React from 'react'


import './tickets.scss'

const SectionSpeakers = () => ( 

  <div class="section-tickets__background" id="">

    <section class="section-tickets">

      <div class="section-tickets__data">
        <h2 class="section-tickets__title">Tickets</h2>
        <h3 class="section-tickets__subtittle">We want to meet you!</h3>
        <p class="section-tickets__description">
          Get access to NodeConf Colombia at Ruta N’s complex on June 21st & 22nd with national and international speakers, goodie bag, live translation services (ES ➡︎ EN :: EN ➡︎ ES) and the opportunity to participate in Code+Learn and start contributing to the Node.js project!
        </p>
      </div>

      <div class="inner-wrap-desktop">
        <div class="section-tickets__content-ticket">
          <a href="#!" class="section-tickets__card-ticket" target="_blank">
            <div class="section-tickets__info">Early Bird Tickets</div>            
            <div class="section-tickets__price">$ 100</div>
          </a>
        </div>
        
        <div class="section-tickets__content-ticket">
          <a href="#!" class="section-tickets__card-ticket" target="_blank">
            <div class="section-tickets__info">Second Early Bird Tickets</div>            
            <div class="section-tickets__price">$ 100</div>
          </a>
        </div>
  
        <div class="section-tickets__content-ticket">
          <a href="#!" class="section-tickets__card-ticket" target="_blank">
            <div class="section-tickets__info">Regular Tickets</div>            
            <div class="section-tickets__price">$ 125</div>
          </a>
        </div>
      </div>

      <a href="#!" class="section-tickets__buy-tickets btn" target="_blank">
        Buy Tickets <span class="icon-row-rigth">-></span>
      </a>

    </section>
    
  </div>


)


export default SectionSpeakers