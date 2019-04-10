import React from 'react';
import { navigate, Link } from 'gatsby';
import { Swipeable } from 'react-swipeable'

import Logo from '../images/image-logo';

import './index.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1000,
      mobileMenuActive: false
    };
  }

  componentDidMount() {
    this.setState({ width: window.document.getElementsByClassName('header-component')[0]
    .clientWidth });
    window.addEventListener('resize', this.resize, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.setState({
      width:
        window.document.getElementsByClassName('header-component')[0]
          .clientWidth
    });
  };

  scroll = (e, anchorId, offset = 125) => {
    e.preventDefault();

    const menuItems = document.getElementsByClassName('menu-item');
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove('active');
    }

    if (document.getElementById(anchorId)) {
      const target = document.getElementById(anchorId).offsetTop - offset;
      window.scroll({
        top: offset === 0 ? offset : target,
        behavior: 'smooth'
      });
    } else {
      navigate(`/#${anchorId}`);
    }
  }

  scrollMobile = (e, section, offset) => {
    this.scroll(e, section, offset)
    this.handleToggleMenu();
  }

  handleToggleMenu = () => {
    this.setState({ mobileMenuActive: !this.state.mobileMenuActive });
  }

  activeClass = () => {
    return this.state.mobileMenuActive ? 'active' : '';
  }

  render() {
    if (this.state.width > 768) {
      return (
        <div className="header-component header">
          <div className="menu-item">
            <a href="#home" title="Home" onClick={e => this.scroll(e, 'home', 0)}>
              Home
            </a>
          </div>
          <div className="menu-item">
            <a href="#about" title="About" onClick={e => this.scroll(e, 'about')}>
              About
            </a>
          </div>
          <div className="menu-item">
            <a
              href="#speakers"
              title="Speakers"
              onClick={e => this.scroll(e, 'speakers')}
            >
              Speakers
            </a>
          </div>
          <div className="menu-item">
            <a href="#venue" title="Venue" onClick={e => this.scroll(e, 'venue')}>
              Venue
            </a>
          </div>
          <Logo className="logo" />
          <div className="menu-item">
            <a
              href="#sponsors"
              title="Sponsors"
              onClick={e => this.scroll(e, 'sponsors')}
            >
              Sponsors
            </a>
          </div>
          <div className="menu-item schedule">
            <Link to="/schedule">
              Schedule
            </Link>
          </div>
          <div className="menu-item organizer-team">
            <Link to="/organizers">
              Organizing Team
            </Link>
          </div>
          <div className="menu-item tickets">
            <a
              href="#tickets"
              title="Tickets"
              className="tag-tickets"
              onClick={e => this.scroll(e, 'tickets')}
            >
              Tickets
            </a>
          </div>
        </div>
      );
    }
    return (
      <Swipeable onSwipedLeft={this.handleToggleMenu} className={`header-component header mobile-menu-toggle mobile ${this.activeClass()}`}>
        <i className="icon-menu icon-three-bars" onClick={this.handleToggleMenu} />
        <nav className={`main-nav end-nav ${this.activeClass()}`}>
          <span className="auth-menu mobile-menu">
            <div className="logo-wrap">
              <i className="icon-menu icon-cancel" onClick={this.handleToggleMenu} />
            </div>

            <div className="items">
              <Logo className="logo" />
              <div className="menu-item">
                <a href="#home" title="Home" onClick={e => this.scrollMobile(e, 'home', 0)}>
                  Home
                </a>
              </div>
              <div className="menu-item">
                <a href="#about" title="About" onClick={e => this.scrollMobile(e, 'about')}>
                  About
                </a>
              </div>
              <div className="menu-item">
                <a
                  href="#speakers"
                  title="Speakers"
                  onClick={e => this.scrollMobile(e, 'speakers')}
                >
                  Speakers
                </a>
              </div>
              <div className="menu-item">
                <a href="#venue" title="Venue" onClick={e => this.scrollMobile(e, 'venue')}>
                  Venue
                </a>
              </div>
              <div className="menu-item">
                <a
                  href="#sponsors"
                  title="Sponsors"
                  onClick={e => this.scrollMobile(e, 'sponsors')}
                >
                  Sponsors
                </a>
              </div>
              <div className="menu-item schedule">
                <Link to="/schedule">
                  Schedule
                </Link>
              </div>
              <div className="menu-item organizer-team">
                <Link to="/organizers">
                  Organizing Team
                </Link>
              </div>
              <div className="menu-item">
                <a
                  href="#tickets"
                  title="Tickets"
                  className="tag-tickets-mobile"
                  onClick={e => this.scrollMobile(e, 'tickets')}
                >
                  Tickets
                </a>
              </div>
            </div>
          </span>
        </nav>
      </Swipeable>
    )
  }
}
export default Header;
