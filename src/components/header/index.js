import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Logo from '../images/image-logo'

import './header.scss'

const Header = () => (
  <div className="header-component header">
    <Logo className="logo" />
    <div className="navigation">
      <div className="menuButton">Menu</div>
      <ul className="menuList">
        <li className="menuItem active">
          <Link to="#home" title="Home">Home</Link>
        </li>
        <li className="menuItem">
          <a href="#about" title="About">About</a>
        </li>
        <li className="menuItem">
          <Link to="#speakers" title="Speakers">Speakers</Link>
        </li>
        <li className="menuItem">
          <Link to="#venue" title="Venue">Venue</Link>
        </li>
        <li className="menuItem">
          <Link to="#sponsors" title="Sponsors">Sponsors</Link>
        </li>
        <li className="menuItem">
          <Link to="#tickets" title="Tickets">Tickets</Link>
        </li>
      </ul>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
