import React from 'react'

import SingleEvent from './single_event'
import TalkEvent from './talk_event'
import { speakers } from '../../constants/speakers'

import './schedule.scss'

const PageSchedule = () => (

  <main className="section-schedule  main">

    <div className="section-schedule__background"></div>

    <h1 className="section-schedule__title">NodeConf Colombia</h1>
    <h2 className="section-schedule__subtitle">Medellín 2019</h2>

    <section className="section-schedule__content">

      <h3 className="section-schedule__tag">SCHEDULE</h3>

      <ul className="section-schedule__ul">

        <SingleEvent
          from="8:00am"
          to="8:30am"
          text="Registration and snacks"
        />
        <TalkEvent
          from="9:00am"
          {...speakers.anna}
          description="Anna re-builds a simple Node.js core feature from scratch on stage, giving insight into the internals of Node.js and the process around making changes to Node core."
        />
        <TalkEvent
          from="9:30am"
          {...speakers.diego}
        />
        <TalkEvent
          from="10:00am"
          {...speakers.matt}
        />

        <SingleEvent
          from="10:30am"
          to="11:00am"
          text="Break y snacks"
        />

        <TalkEvent
          from="11:00am"
          {...speakers.james}
          description="Work is currently underway to develop an implementation of the new QUIC protocol with Node.js core. While still very experimental and new, this protocol will enable exciting new possibilities and applications. This talk will introduce the fundamentals of QUIC and the prototype implementation being developed."
        />
        <TalkEvent
          from="11:30am"
          {...speakers.andrea}
        />
        <TalkEvent
          from="12:00m"
          {...speakers.miguel}
        />

        <SingleEvent
          from="12:30pm"
          to="1:00pm"
          text="Lunch"
        />
        <SingleEvent
          from="1:30pm"
          to="2:00pm"
          text="Panel"
        />

        <TalkEvent
          from="2:30pm"
          {...speakers.tierney}
          description="Your apps are insecure. Not because of third-party dependenceis, but because of the runtime itself. Node.js actively ships security updates, patching publicly disclosed vulnerabilities... and you're not shipping them into production. This talk will go over how you can manage Node.js versions for production to ensure that you're always safe."
        />
        <TalkEvent
          from="3:00pm"
          {...speakers.erick}
        />
        <TalkEvent
          from="3:30pm"
          {...speakers.vladimir}
        />

        <SingleEvent
          from="4:00pm"
          to="4:30pm"
          text="Break y snacks"
        />

        <TalkEvent
          from="4:30pm"
          {...speakers.ujjwal}
        />
        <TalkEvent
          from="5:00pm"
          {...speakers.kat}
        />
        <TalkEvent
          from="5:30pm"
          {...speakers.guillermo}
        />

        <SingleEvent
          from="6:00pm"
          to="7:30pm"
          text="Networking and closing"
          eventColor="end-event"
        />

        <SingleEvent
          from="7:30pm"
          text="After Party"
          eventColor="after-party"
        />

      </ul>

    </section>

  </main>

)

export default PageSchedule
