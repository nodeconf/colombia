import React from 'react'

import SingleEvent from './single_event'
import TalkEvent from './talk_event'
import { speakers } from '../../constants/speakers'

export default function Day2() {
  return (
    <ul className="section-schedule__ul">
      <SingleEvent
        from="8:00am"
        to="8:30am"
        text="Registration and snacks"
      />
      <TalkEvent
        from="9:00am"
        {...speakers.anna}
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
  )
}
