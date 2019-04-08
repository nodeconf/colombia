import React from 'react';

import Changelog from '../images/sponsor_example_changelog';
import Nodebr from '../images/sponsor_example_nodebr';
import Nodeconfarg from '../images/sponsor_example_nodeconfarg';
import Nodesource from '../images/sponsor_example_nodesource';
import Microsoft from '../images/sponsor_microsoft';
import Github from '../images/sponsor_github';
import Nearform from '../images/sponsor_nearform';
import Rutan from '../images/sponsor_example_rutan-grey';

import './sponsors.scss';

const SectionSponsors = () => (
  <section className="section-sponsors-view" id="sponsors">
    <h2 className="section-sponsors-view__title">Sponsors</h2>

    <article className="section-sponsors-view__content">
      <div className="section-sponsors-view__medal  platinum">Platinum</div>
      <div className="section-sponsors-view__data  big">
        <div className="section-sponsors-view__card">
          <Nodesource />
        </div>
        <div className="section-sponsors-view__card">
          <Rutan />
        </div>
      </div>
    </article>

    <article className="section-sponsors-view__content">
      <div className="section-sponsors-view__medal  gold">Gold</div>
      <div className="section-sponsors-view__data  medium">
        <div className="section-sponsors-view__card">
          <Changelog />
        </div>
        <div className="section-sponsors-view__card">
          <Nodebr />
        </div>
      </div>
    </article>

    <article className="section-sponsors-view__content">
      <div className="section-sponsors-view__medal  silver">Silver</div>
      <div className="section-sponsors-view__data  small">
        <div className="section-sponsors-view__card">
          <Changelog />
        </div>
        <div className="section-sponsors-view__card">
          <Nodeconfarg />
        </div>
      </div>
    </article>

    <div className="inner-wrap-desktop">
      <article className="section-sponsors-view__content">
        <h3 className="section-sponsors-view__tag  opportunity">Opportunity Supporter</h3>
        <div className="section-sponsors-view__data  small">
          <div className="section-sponsors-view__card">
            <Changelog />
          </div>
          <div className="section-sponsors-view__card">
            <Nodeconfarg />
          </div>
        </div>
      </article>

      <article className="section-sponsors-view__content">
        <h3 className="section-sponsors-view__tag  community">Community Parners</h3>
        <div className="section-sponsors-view__data  small">
          <div className="section-sponsors-view__card">
            <Changelog />
          </div>
          <div className="section-sponsors-view__card">
            <Nodeconfarg />
          </div>
        </div>
      </article>

      <article className="section-sponsors-view__content">
        <h3 className="section-sponsors-view__tag  travel">Travel Parners</h3>
        <div className="section-sponsors-view__data  small">
          <div className="section-sponsors-view__card">
            <Microsoft />
          </div>
          <div className="section-sponsors-view__card">
            <Github />
          </div>
          <div className="section-sponsors-view__card">
            <Nearform />
          </div>
        </div>
      </article>
    </div>
  </section>
);

export default SectionSponsors;

// [7:46 AM, 4/8/2019] +1 (941) 914-7392: Y hay una sección para travel partners
// [7:47 AM, 4/8/2019] +1 (941) 914-7392: Ahí pondremos a Microsoft, nearForm y GitHub por ahora