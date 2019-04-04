import React from 'react'

import Diego from '../images/speaker_diego_paez'
import Andrea from '../images/speaker_andrea_griffiths'
import Miguel from '../images/speaker_miguel_bolivar'
import Anna from '../images/speaker_cropped_anna'
import Erick from '../images/speaker_erick-wendel'
import CountryCol from '../images/country-co'
import CountryVe from '../images/country-ve'
import CountryAr from '../images/country-ar'
import CountryGr from '../images/country-ge'
import CountryBr from '../images/country-br'

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
            <i class="section-speakers__country"><CountryAr /></i>
          </div>
          <div className="section-speakers__social">
            <a href="https://twitter.com/addaleax" target="_blank" rel="noopener noreferrer" className="section-speakers__icon">
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
            <i class="section-speakers__country"><CountryCol /></i>
          </div>
          <div className="section-speakers__social">
            <a href="https://twitter.com/addaleax" target="_blank" rel="noopener noreferrer" className="section-speakers__icon">
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
            <i class="section-speakers__country"><CountryVe /></i>
          </div>
          <div className="section-speakers__social">
            <a href="https://twitter.com/addaleax" target="_blank" rel="noopener noreferrer" className="section-speakers__icon">
              <i className="icon-twitter"></i>
            </a>
          </div>
        </div>
      </article>

      <article className="section-speakers__content">
        <figure className="section-speakers__img">
          <Anna />
        </figure>
        <div className="section-speakers__description">
            Over the last 2 years, Anna has been one of the most active contributors to Node.js core. Currently pursuing a Master’s degree in mathematics in Germany, she is fueled by a passion for Node and its community. 
        </div>
        <div className="section-speakers__data">
          <div className="section-speakers__name">Anna Henningsen
            <i class="section-speakers__country"><CountryGr /></i>
          </div>
          <div className="section-speakers__social">
            <a href="https://twitter.com/addaleax" target="_blank" rel="noopener noreferrer" className="section-speakers__icon">
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
              <i class="section-speakers__country"><CountryBr /></i>
            </div>
            <div className="section-speakers__social">
              <a href="https://twitter.com/addaleax" target="_blank" rel="noopener noreferrer" className="section-speakers__icon">
                <i className="icon-twitter"></i>
              </a>
            </div>
          </div>
      </article>
    </div>

  </section>

)


export default SectionSpeakers