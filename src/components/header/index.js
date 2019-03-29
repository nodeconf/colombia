import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Logo from '../images/image-logo';

import './index.scss';

const Header = () => (
  <div className="header-component header">
    <div className="menu-item">
      <Link to="#home" title="Home">
        Speakers
      </Link>
    </div>
    <div className="menu-item">
      <Link to="#about" title="About">
        About
      </Link>
    </div>
    <div className="menu-item">
      <Link to="#venue" title="Venue">
        Venue
      </Link>
    </div>
    <div className="menu-item">
      <Link to="#sponsors" title="Sponsors">
        Sponsors
      </Link>
    </div>
    <Logo className="logo" />
    <div className="menu-item">
      <Link to="#speakers" title="Speakers">
        Speakers
      </Link>
    </div>
    <div className="menu-item">
      <Link to="#tickets" title="Tickets">
        Tickets
      </Link>
    </div>
    <div className="menu-item">
      <Link to="#schedule" title="Schedule">
        Schedule
      </Link>
    </div>
    <div className="menu-item">
      <Link to="#organizer-team" title="Organizer Team">
        Organizer Team
      </Link>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
