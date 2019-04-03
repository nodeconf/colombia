import React from 'react'

import Diego from '../images/speaker_diego_paez'
import Andrea from '../images/speaker_andrea_griffiths'
import Miguel from '../images/speaker_miguel_bolivar'
import Anna from '../images/speaker_cropped_anna'
import Erick from '../images/speaker_erick-wendel'
import Country_col from '../images/country-co'
import Country_ve from '../images/country-ve'
import Country_ar from '../images/country-ar'
import Country_gr from '../images/country-ge'
import Country_br from '../images/country-br'

import './speakers.scss'

const SectionSpeakers = () => ( 

  <section className="section-speakers" id="speakers">
      
    <h2 className="section-speakers__title">Speakers</h2>

    <div className="inner-wrap-desktop">
      <article className="section-speakers__content">
        <figure className="section-speakers__img">
          <Diego />
        </figure>
        <div className="section-speakers__description">
            Over the last 2 years, Anna has been one of the most active contributors to Node.js core. Currently pursuing a Master’s degree in mathematics in Germany, she is fueled by a passion for Node and its community. 
        </div>
        <div className="section-speakers__data">
          <div className="section-speakers__name">Diego Paes
            <i class="section-speakers__country"><Country_ar /></i>
          </div>
          <div className="section-speakers__social">
            <a href="https://twitter.com/addaleax" target="_blank" className="section-speakers__icon">
              <i className="icon-twitter"></i>
            </a>
          </div>
        </div>
      </article>
      
      <article className="section-speakers__content">
        <figure className="section-speakers__img">
          <Andrea />
        </figure>
        <div className="section-speakers__description">
          Over the last 2 years, Anna has been one of the most active contributors to Node.js core. Currently pursuing a Master’s degree in mathematics in Germany, she is fueled by a passion for Node and its community. 
        </div>
        <div className="section-speakers__data">
          <div className="section-speakers__name">Andrea Griffinths
            <i class="section-speakers__country"><Country_col /></i>
          </div>
          <div className="section-speakers__social">
            <a href="https://twitter.com/addaleax" target="_blank" className="section-speakers__icon">
              <i className="icon-twitter"></i>
            </a>
          </div>
        </div>
      </article>
  
      <article className="section-speakers__content">
        <figure className="section-speakers__img">
          <Miguel />
        </figure>
        <div className="section-speakers__description">
          Over the last 2 years, Anna has been one of the most active contributors to Node.js core. Currently pursuing a Master’s degree in mathematics in Germany, she is fueled by a passion for Node and its community. 
        </div>
        <div className="section-speakers__data">
          <div className="section-speakers__name">Miguel Bolivar
            <i class="section-speakers__country"><Country_ve /></i>
          </div>
          <div className="section-speakers__social">
            <a href="https://twitter.com/addaleax" target="_blank" className="section-speakers__icon">
              <i className="icon-twitter"></i>
            </a>
          </div>
        </div>
      </article>

    </div>

    <div className="inner-wrap-desktop  margin-top">
      <article className="section-speakers__content">
        <figure className="section-speakers__img">
          <Anna />
        </figure>
        <div className="section-speakers__description">
            Over the last 2 years, Anna has been one of the most active contributors to Node.js core. Currently pursuing a Master’s degree in mathematics in Germany, she is fueled by a passion for Node and its community. 
        </div>
        <div className="section-speakers__data">
          <div className="section-speakers__name">Anna Henningsen
            <i class="section-speakers__country"><Country_gr /></i>
          </div>
          <div className="section-speakers__social">
            <a href="https://twitter.com/addaleax" target="_blank" className="section-speakers__icon">
              <i className="icon-twitter"></i>
            </a>
          </div>
        </div>
      </article>

      <article className="section-speakers__content">
          <figure className="section-speakers__img">
            <Erick />
          </figure>
          <div className="section-speakers__description">
              Over the last 2 years, Anna has been one of the most active contributors to Node.js core. Currently pursuing a Master’s degree in mathematics in Germany, she is fueled by a passion for Node and its community. 
          </div>
          <div className="section-speakers__data">
            <div className="section-speakers__name">Erick Wendel
              <i class="section-speakers__country"><Country_br /></i>
            </div>
            <div className="section-speakers__social">
              <a href="https://twitter.com/addaleax" target="_blank" className="section-speakers__icon">
                <i className="icon-twitter"></i>
              </a>
            </div>
          </div>
      </article>
    </div>

  </section>

)


export default SectionSpeakers