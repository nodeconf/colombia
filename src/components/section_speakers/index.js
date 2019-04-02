import React from 'react'

import Anna from '../images/image-anna'
import Tierney from '../images/image-tierney'
import Kat from '../images/image-kat'
import James from '../images/image-james'
import Guillermo from '../images/image-guillermo'

import './speakers.scss'

const SectionSpeakers = () => ( 

  <section className="section-speakers" id="speakers">

    <h2 className="section-speakers__title">Speakers</h2>

    <div className="inner-wrap-desktop">

      <article className="section-speakers__content">
        <figure className="section-speakers__img">
          <a href="#!" target="_blank" rel="noopener noreferrer" className="section-speakers__img-link">
            <Anna />
          </a>
        </figure>
        <div className="section-speakers__data">
          <a href="http://" target="_blank" rel="noopener noreferrer" className="section-speakers__name">Anna Henningsen</a>
          <p className="section-speakers__description">
            Over the last 2 years, Anna has been one of the most active contributors to Node.js core. Currently pursuing a Master’s degree in mathematics in Germany, she is fueled by a passion for Node and its community.
          </p>
          <a href="https://twitter.com/addaleax" target="_blank" rel="noopener noreferrer" className="section-speakers__social">@ADDALEAX</a>
        </div>
      </article>

      <article className="section-speakers__content">
        <figure className="section-speakers__img">
          <a href="#!" target="_blank" className="section-speakers__img-link">
            <Tierney />
          </a>
        </figure>
        <div className="section-speakers__data">
          <a href="#!" target="_blank" rel="noopener noreferrer" className="section-speakers__name">Tierney Cyren</a>
          <p className="section-speakers__description">
            ierney is a member of the Node.js Community Committee, a Senior Cloud Developer Advocate at Microsoft, and a contributor to various initiatives in the Node.js project focusing on the continued growth and success of the Node.js community.
          </p>
          <a href="https://twitter.com/bitandbang" target="_blank" rel="noopener noreferrer" className="section-speakers__social">@BITANDBANG</a>
        </div>
      </article>

    </div>

    <div className="inner-wrap-desktop">

      <article className="section-speakers__content">
        <figure className="section-speakers__img">
          <a href="#!" target="_blank" rel="noopener noreferrer" className="section-speakers__img-link">
            <Kat />
          </a>
        </figure>
        <div className="section-speakers__data">
          <a href="#!" target="_blank" rel="noopener noreferrer" className="section-speakers__name">Kat Marchán</a>
          <p className="section-speakers__description">
            npm CLI maintainer; tc39 delegate; wealljs admin; cat mom  
          </p>
          <a href="https://twitter.com/maybekatz" target="_blank" rel="noopener noreferrer" className="section-speakers__social">@MAYBEKATZ</a>
        </div>
      </article>

      <article className="section-speakers__content">
        <figure className="section-speakers__img">
          <a href="#!" target="_blank" rel="noopener noreferrer" className="section-speakers__img-link">
            <James />
          </a>
        </figure>
        <div className="section-speakers__data">
          <a href="#!" target="_blank" rel="noopener noreferrer" className="section-speakers__name">James Snell</a>
          <p className="section-speakers__description">
            nearForm Community Engineering Manager & Node.js TSC 
          </p>
          <a href="https://twitter.com/jasnell" target="_blank" rel="noopener noreferrer" className="section-speakers__social">@JASNELL</a>
        </div>
      </article>

    </div>

    <div className="inner-wrap-desktop">

      <article className="section-speakers__content">
      <figure className="section-speakers__img">
        <a href="#!" target="_blank" className="section-speakers__img-link">
          <Guillermo />
        </a>
      </figure>
      <div className="section-speakers__data">
        <a href="#!" target="_blank" className="section-speakers__name">Guillermo Rauch</a>
        <p className="section-speakers__description">
          Founder of ▲ZEIT, creator of Next.js and Socket.io 
        </p>
        <a href="https://twitter.com/rauchg" target="_blank" rel="noopener noreferrer" className="section-speakers__social">@RAUCHG</a>
      </div>
    </article>
    
    </div>

  </section>

)


export default SectionSpeakers