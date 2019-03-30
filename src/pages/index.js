import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Guillermo from '../components/images/image-guillermo'
import Anna from '../components/images/image-anna'
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
        document.getElementsByClassName('header-component')[0].classList.remove('header-small');
      }
    }
    // console.log(document.querySelectorAll('.header-component .menu-item a'));
    document.querySelectorAll('.header-component .menu-item a').forEach(a => {
      var anchorId = a.getAttribute('href');
      
      // console.log('anchorId', anchorId);
      if (document.querySelector(anchorId)) {
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
        <div className="about" id="about">
          LOS about<br />
          LOS about<br />
          LOS about<br />
          LOS about<br />
          LOS about<br />
          LOS about<br />
          LOS about<br />
          LOS about<br />
          LOS about<br />
          LOS about<br />
          LOS about<br />
          LOS about<br />
          LOS about<br />
          LOS about<br />
          LOS about<br />
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
        <div className="speakers" id="speakers">
          LOS SPEAKERS<br />
          LOS SPEAKERS<br />
          LOS SPEAKERS<br />
          LOS SPEAKERS<br />
          LOS SPEAKERS<br />
          LOS SPEAKERS<br />
          LOS SPEAKERS<br />
          LOS SPEAKERS<br />
          LOS SPEAKERS<br />
          LOS SPEAKERS<br />
          LOS SPEAKERS<br />
          LOS SPEAKERS<br />
          LOS SPEAKERS<br />
          LOS SPEAKERS<br />
          LOS SPEAKERS<br />
        </div>
        <div className="tickets" id="tickets">
          LOS tickets<br />
          LOS tickets<br />
          LOS tickets<br />
          LOS tickets<br />
          LOS tickets<br />
          LOS tickets<br />
          LOS tickets<br />
          LOS tickets<br />
          LOS tickets<br />
          LOS tickets<br />
          LOS tickets<br />
          LOS tickets<br />
          LOS tickets<br />
          LOS tickets<br />
          LOS tickets<br />
        </div>
        
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Guillermo />
          <Anna />
        </div>
        <Link to="/page-2/" className="logo" >Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage;
