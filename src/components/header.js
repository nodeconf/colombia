import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Logo from './images/image-logo'

import styles from './header.module.scss'

const Header = () => (
  <div className={styles.header}>
    <Logo className={styles.logo} />
    <div className={styles.navigation}>
      <div className={styles.menuButton}>Menu</div>
      <ul className={styles.menuList}>
        <li className="active">
          <Link to="#home" title="Home" className={`${styles.menuItem} active`}>Home</Link>
        </li>
        <li className="">
          <a href="#about" title="About" className={styles.menuItem}>About</a>
        </li>
        <li className="">
          <Link to="#speakers" title="Speakers" className={styles.menuItem}>Speakers</Link>
        </li>
        <li className="">
          <Link to="#venue" title="Venue" className={styles.menuItem}>Venue</Link>
        </li>
        <li>
          <Link to="#sponsors" title="Sponsors" className={styles.menuItem}>Sponsors</Link>
        </li>
        <li>
          <Link to="#tickets" title="Tickets" className={styles.menuItem}>Tickets</Link>
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
