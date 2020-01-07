import PropTypes from "prop-types"
import React from "react"

import Logo from "../images/logo"
import Medellin from "../images/medellin"

import "./header.scss"

const Header = () => (
  <header className="header l-container--full  banner">
    <Medellin className="medellin" />
    <div className="header-container  l-container">

      <div className="header-left  calendar">

        <div className="calendar__content">
          <h3 className="calendar__month">july</h3>
          <p className="calendar__data">day</p>
          <p className="calendar__day">
            10<span className="calendar__th">th</span>
          </p>
        </div>

      </div>
      
      <div className="header-center  header-description">
        <a href="/" className="logo--main" aria-label="Logo NodeConfCO">
          <Logo />
        </a>

        <h1 className="title  header-title">colombia</h1>
        <p className="subtitle  header-subtitle">NodeConfCo 2020</p>

      </div>

      <div className="header-right  calendar">

        <div className="calendar__content">
          <h3 className="calendar__month">july</h3>
          <p className="calendar__data">day</p>
          <p className="calendar__day">
            11<span className="calendar__th">th</span>
          </p>
        </div>
      </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
