import React from 'react'

import Changelog from '../images/sponsor_example_changelog'
import Nodebr from '../images/sponsor_example_nodebr'
import Nodeconfarg from '../images/sponsor_example_nodeconfarg'
import Nodesource from '../images/sponsor_example_nodesource'
import Rutan from '../images/sponsor_example_rutan-grey'


import './sponsors.scss'

const SectionSponsors = () => ( 

  <section className="section-sponsors" id="sponsors">

    <h2 className="section-sponsors__title">Sponsors</h2>

    <article className="section-sponsors__content">
      <div className="section-sponsors__medal  platinum">Platinum</div>
      <div className="section-sponsors__data  big">
        <div className="section-sponsors__card">
          <Nodesource />
        </div>
        <div className="section-sponsors__card">
          <Rutan />
        </div>
      </div>
    </article> 

    <article className="section-sponsors__content">
      <div className="section-sponsors__medal  gold">Gold</div>
      <div className="section-sponsors__data  medium">
        <div className="section-sponsors__card">
          <Changelog />
        </div>
        <div className="section-sponsors__card">
          <Nodebr />
        </div>
      </div>
    </article> 

    <article className="section-sponsors__content">
      <div className="section-sponsors__medal  silver">Silver</div>
      <div className="section-sponsors__data  small">
        <div className="section-sponsors__card">
          <Changelog />
        </div>
        <div className="section-sponsors__card">
          <Nodeconfarg />
        </div>
      </div>
    </article>

    <div className="inner-wrap-desktop">
    
      <article className="section-sponsors__content">
        <h3 className="section-sponsors__tag  opportunity">Opportunity Supporter</h3>
        <div className="section-sponsors__data  small">
          <div className="section-sponsors__card">
              <Changelog />
          </div>
          <div className="section-sponsors__card">
              <Nodeconfarg />
          </div>
        </div>
      </article>
        
      <article className="section-sponsors__content">
        <h3 className="section-sponsors__tag  community">Community Parners</h3>
        <div className="section-sponsors__data  small">
          <div className="section-sponsors__card">
            <Changelog />
          </div>
          <div className="section-sponsors__card">
            <Nodeconfarg />
          </div>
        </div>
      </article>

      <article className="section-sponsors__content">
        <h3 className="section-sponsors__tag  travel">Travel Parners</h3>
        <div className="section-sponsors__data  small">
          <div className="section-sponsors__card">
            <Changelog />
          </div>
          <div className="section-sponsors__card">
            <Nodeconfarg />
          </div>
        </div>
      </article>
        
    </div>

  </section>
 
)


export default SectionSponsors