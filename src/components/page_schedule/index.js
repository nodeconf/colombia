import React from 'react'

import Day1 from './day1'
import Day2 from './day2'

import './schedule.scss'

class PageSchedule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      day: 1
    }
    this.pickDay = this.pickDay.bind(this)
  }

  pickDay(e, day) {
    e.preventDefault()
    this.setState({ day })
  }

  render() {
    return (
      <main className="section-schedule  main">

        <div className="section-schedule__background"></div>

        <h1 className="section-schedule__title">NodeConf Colombia</h1>
        <h2 className="section-schedule__subtitle">Medellín 2019</h2>

        <section className="section-schedule__content">

          <h3 className="section-schedule__tag">SCHEDULE</h3>

          <div className="day-picker">
            <button className="pick-day" onClick={e => this.pickDay(e, 1)}>
              Day 1
            </button>
            <button className="pick-day" onClick={e => this.pickDay(e, 2)}>
              Day 2
            </button>
          </div>

          {this.state.day === 1 ? (
            <Day1 />
          ) : (
            <Day2 />
          )}

        </section>

      </main>
    )
  }
}

export default PageSchedule
