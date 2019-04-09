import React from 'react'

import Layout from '../components/layout'
// import Schedule from '../components/page_schedule'

class Schedule extends React.Component {

  componentDidMount() {
    document.querySelectorAll('.header-component .menu-item.schedule')[0].classList.add('active');
    console.log(document.querySelectorAll('.header-component .menu-item.schedule')[0]);
    window.addEventListener('scroll', this.handleScroll);
    console.log('monto');
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
        <div style={{height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px', marginTop: '180px'}}>Coming soon</div>
      </Layout>
    )
  }
}

export default  Schedule
