import React from 'react'

import Layout from '../components/layout'
import Team from '../components/team'

class OrganizerTeam extends React.Component {

  componentDidMount() {
    document.querySelectorAll('.header-component .menu-item.organizer-team')[0].classList.add('active');
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll() {
    const position = window.pageYOffset;

    if (window.innerWidth > 678) {
      if (position > 160) {
        document.getElementsByClassName('header-component')[0].classList.add('header-small');
      } else {
        document.getElementsByClassName('header-component').length > 0 && document.getElementsByClassName('header-component')[0].classList.remove('header-small');
      }
    }
  }

  render() {
    return (
      <Layout>
        <Team />
      </Layout>
    )
  }
}

export default OrganizerTeam
