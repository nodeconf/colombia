// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Logo from '../images/image-logo';

import './index.scss';

const scroll = (e, anchorId, offset = 125) => {
  e.preventDefault();
  
  const menuItems = document.getElementsByClassName("menu-item");
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove('active');
  }

  if (document.getElementById(anchorId)) {
    const target = document.getElementById(anchorId).offsetTop - offset;
    window.scroll({
      top: offset === 0 ? offset : target,
      behavior: 'smooth'
    })
  }
}

const Header = () => (
  <div className="header-component header">
    <div className="menu-item">
      <a href="#home" title="Home" onClick={e => scroll(e, 'home', 0)}>Home</a>
    </div>
    <div className="menu-item">
      <a href="#about" title="About" onClick={e => scroll(e, 'about')}>About</a>
    </div>
    <div className="menu-item">
      <a href="#venue" title="Venue" onClick={e => scroll(e, 'venue')}>Venue</a>
    </div>
    <div className="menu-item">
      <a href="#sponsors" title="Sponsors" onClick={e => scroll(e, 'sponsors')}>Sponsors</a>
    </div>
    <Logo className="logo" />
    <div className="menu-item">
      <a href="#speakers" title="Speakers" onClick={e => scroll(e, 'speakers')}>Speakers</a>
    </div>
    <div className="menu-item">
      <a href="#tickets" title="Tickets" onClick={e => scroll(e, 'tickets')}>Tickets</a>
    </div>
    <div className="menu-item">
      <a href="#schedule" title="Schedule" onClick={e => scroll(e, 'schedule')}>Schedule</a>
    </div>
    <div className="menu-item">
      <a href="#organizer-team" title="Organizer Team" onClick={e => scroll(e, 'organizer-team')}>Organizer Team</a>
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
