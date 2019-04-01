import React from 'react'

import Layout from '../components/layout'
import About from '../components/about'
import Speakers from '../components/section_speakers/'
import Tickets from '../components/section_tickets'
import TopInfo from '../components/top-info'

import './index.scss'

class IndexPage extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const offset = 130;
  
    const position = window.pageYOffset;

    if (window.innerWidth > 678) {
      if (position > 160) {
        document.getElementsByClassName('header-component')[0].classList.add('header-small');
      } else {
        document.getElementsByClassName('header-component').length > 0 && document.getElementsByClassName('header-component')[0].classList.remove('header-small');
      }
    }
    // console.log(document.querySelectorAll('.header-component .menu-item a'));
    document.querySelectorAll('.header-component .menu-item a').forEach(a => {
      var anchorId = a.getAttribute('href');
      
      // console.log('anchorId', anchorId);
      if (anchorId && document.querySelector(anchorId)) {
        const target = document.querySelector(anchorId).offsetTop - offset;
        const targetHeight = document.querySelector(anchorId).offsetHeight + target;
        if (position >= target && position < targetHeight) {
          const menuItems = document.querySelectorAll('.header-component .menu-item');
          for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove('active');
          }
          a.parentElement.classList.add('active');
        }
      }
    });
  }

  render() {
    return (
      <Layout>
        <TopInfo />
        <About />
        <Speakers />
        <div className="Venue" id="venue">
          LOS venue<br />
          LOS venue<br />
          LOS venue<br />
          LOS venue<br />
          LOS venue<br />
          LOS venue<br />
          LOS venue<br />
          LOS venue<br />
          LOS venue<br />
          LOS venue<br />
          LOS venue<br />
          LOS venue<br />
          LOS venue<br />
          LOS venue<br />
          LOS venue<br />
        </div>
        <div className="Sponsors" id="sponsors">
          LOS Sponsors<br />
          LOS Sponsors<br />
          LOS Sponsors<br />
          LOS Sponsors<br />
          LOS Sponsors<br />
          LOS Sponsors<br />
          LOS Sponsors<br />
          LOS Sponsors<br />
          LOS Sponsors<br />
          LOS Sponsors<br />
          LOS Sponsors<br />
          LOS Sponsors<br />
          LOS Sponsors<br />
          LOS Sponsors<br />
          LOS Sponsors<br />
        </div>
        <Tickets />
      </Layout>
    )
  }
}

export default IndexPage;
