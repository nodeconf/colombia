import React from 'react';

import Changelog from '../images/sponsor_example_changelog';
import Nodebr from '../images/sponsor_example_nodebr';
import Nodeconfarg from '../images/sponsor_example_nodeconfarg';
import Nodesource from '../images/sponsor_example_nodesource';
import Microsoft from '../images/sponsor_microsoft';
import Github from '../images/sponsor_github';
import Nearform from '../images/sponsor_nearform';
import GetOnBoard from '../images/sponsor_getOnBoard';
import Inalambria from '../images/sponsor_inalambria';
import Monoku from '../images/sponsor_monoku';
import Rutan from '../images/sponsor_example_rutan-grey';
import PSL from '../images/sponsor_psl';
import Genius from '../images/sponsor_genius';
import UruIT from '../images/sponsor_uruit';
import Acamica from '../images/sponsor_acamica';

import './sponsors.scss';

const SectionSponsors = () => (
  <section className="section-sponsors-view" id="sponsors">
    <h2 className="section-sponsors-view__title">Sponsors</h2>

    <article className="section-sponsors-view__content">
      <div className="section-sponsors-view__medal platinum">Platinum</div>
      <div className="section-sponsors-view__data big">
        <a
          className="section-sponsors-view__card"
          href="https://nodesource.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Nodesource />
        </a>
        <a
          className="section-sponsors-view__card"
          href="https://www.rutanmedellin.org/es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Rutan />
        </a>
      </div>
    </article>

    <article className="section-sponsors-view__content">
      <div className="section-sponsors-view__medal gold">Gold</div>
      <div className="section-sponsors-view__data big">
        <a
          className="section-sponsors-view__card psl"
          href="https://www.pslcorp.com/?utm_source=nodeconf&utm_medium=referral&utm_campaign=nodeconfwebsite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PSL />
        </a>
        <a
          className="section-sponsors-view__card genius"
          href="https://www.geniussports.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Genius />
        </a>
      </div>
    </article>

    <article className="section-sponsors-view__content">
      <div className="section-sponsors-view__medal silver">Silver</div>
      <div className="section-sponsors-view__data big">
        <a
          className="section-sponsors-view__card acamica"
          href="https://www.acamica.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Acamica />
        </a>
      </div>
    </article>

    <div className="inner-wrap-desktop">
      <article className="section-sponsors-view__content bottom">
        <h3 className="section-sponsors-view__tag opportunity">Opportunity Supporter</h3>
        <div className="section-sponsors-view__data small">
          <a
            className="section-sponsors-view__card getonboard"
            href="https://www.getonbrd.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GetOnBoard />
          </a>
        
          <a
            className="section-sponsors-view__card inalambria"
            href="https://www.inalambria.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Inalambria />
          </a>
        
          <a
            className="section-sponsors-view__card github"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>

          <a
            className="section-sponsors-view__card monoku"
            href="https://monoku.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Monoku />
          </a>

          <a
            className="section-sponsors-view__card uruit"
            href="https://www.uruit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UruIT />
          </a>
        </div>
      </article>

      <article className="section-sponsors-view__content bottom">
        <h3 className="section-sponsors-view__tag  community">Community Partners</h3>
        <div className="section-sponsors-view__data  small">
          <a
            className="section-sponsors-view__card"
            href="https://changelog.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Changelog />
          </a>
          <a
            className="section-sponsors-view__card"
            href="https://nodeconf.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Nodeconfarg />
          </a>
          <a
            className="section-sponsors-view__card"
            href="https://nodebr.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Nodebr />
          </a>
        </div>
      </article>

      <article className="section-sponsors-view__content bottom">
        <h3 className="section-sponsors-view__tag  travel">Travel Partners</h3>
        <div className="section-sponsors-view__data  small">
          <a
            className="section-sponsors-view__card"
            href="https://www.microsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Microsoft />
          </a>
          <a
            className="section-sponsors-view__card github"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            className="section-sponsors-view__card nearform"
            href="https://www.nearform.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Nearform />
          </a>
        </div>
      </article>
    </div>
  </section>
);

export default SectionSponsors;

// [7:46 AM, 4/8/2019] +1 (941) 914-7392: Y hay una sección para travel partners
// [7:47 AM, 4/8/2019] +1 (941) 914-7392: Ahí pondremos a Microsoft, nearForm y GitHub por ahora