import React from 'react'

import Diego from '../images/speaker_diego_paez'
import Andrea from '../images/speaker_andrea_griffiths'
import Miguel from '../images/speaker_miguel_bolivar'
import Anna from '../images/speaker_cropped_anna'
import Erick from '../images/speaker_erick-wendel'
import Bnb from '../images/speaker_bnb'
import Kat from '../images/speaker_kat'
import James from '../images/speaker_james'
import Rauch from '../images/speaker_rauch'
import CountryCol from '../images/country-co'
import CountryVe from '../images/country-ve'
import CountryAr from '../images/country-ar'
import CountryGr from '../images/country-ge'
import CountryBr from '../images/country-br'
import Speaker from './speaker'

import './speakers.scss'

const SectionSpeakers = () => ( 

  <section className="section-speakers" id="speakers">
      
    <h2 className="section-speakers__title">Speakers</h2>

    <div className="inner-wrap-desktop">

      <Speaker
        name="Anna Henningsen"
        twitterUrl="https://twitter.com/addaleax"
        country={CountryGr}
        figure={Anna}
        description="Over the last 2 years, Anna has been one of the most active contributors to Node.js core. Currently pursuing a Master’s degree in mathematics in Germany, she is fueled by a passion for Node and its community."
      />
      <Speaker
        name="Tierney Cyren"
        twitterUrl="https://twitter.com/bitandbang"
        country={CountryGr}
        figure={Bnb}
        description="Tierney is a member of the Node.js Community Committee, a Senior Cloud Developer Advocate at Microsoft, and a contributor to various initiatives in the Node.js project focusing on the continued growth and success of the Node.js community."
      />
      <Speaker
        name="Kat Marchán"
        twitterUrl="https://twitter.com/maybekatz"
        country={CountryGr}
        figure={Kat}
        description="npm CLI maintainer; tc39 delegate; wealljs admin; cat mom"
      />
      <Speaker
        name="James Snell"
        twitterUrl="https://twitter.com/jasnell"
        country={CountryGr}
        figure={James}
        description="nearForm Community Engineering Manager & Node.js TSC"
      />
      <Speaker
        name="Guillermo Rauch"
        twitterUrl="https://twitter.com/rauchg"
        country={CountryGr}
        figure={Rauch}
        description="Founder of ▲ZEIT, creator of Next.js and Socket.io "
      />




      <article className="section-speakers__content">
        <figure className="section-speakers__img">
          <Diego />
        </figure>
        <div className="section-speakers__description">
            Over the last 2 years, Anna has been one of the most active contributors to Node.js core. Currently pursuing a Master’s degree in mathematics in Germany, she is fueled by a passion for Node and its community. 
        </div>
        <div className="section-speakers__data">
          <div className="section-speakers__name">Diego Paes
            <i className="section-speakers__country"><CountryAr /></i>
          </div>
          <div className="section-speakers__social">
            <a href="https://twitter.com/addaleax" target="_blank" rel="noopener noreferrer" className="section-speakers__icon">
              <i className="icon-twitter" />
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
            <i className="section-speakers__country"><CountryCol /></i>
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
            <i className="section-speakers__country"><CountryVe /></i>
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
              <i className="section-speakers__country"><CountryBr /></i>
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