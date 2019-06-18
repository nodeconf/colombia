import React from 'react'

import SingleEvent from './single_event'
import TalkEvent from './talk_event'
import { speakers } from '../../constants/speakers'

export default function Day1() {
  return (
    <ul className="section-schedule__ul">
      <h2>June 21st</h2>
      <SingleEvent
        from="9:00am"
        to="10:00am"
        text="Registration and snacks"
        eventColor="red"
      />
      <TalkEvent
        workshop="Workshop by NodeSource"
        from="10:00am"
        to="12:00m"
        {...speakers.ns}
      />
      <TalkEvent
        workshop="Workshop by Genius Sports"
        from="10:00am"
        to="12:00m"
        {...speakers.geniusSports}
      />
      <TalkEvent
        workshop="Workshop by Rappi"
        from="10:00am"
        to="12:00m"
        {...speakers.rappi}
      />
      <TalkEvent
        workshop="Workshop by PSL"
        from="10:00am"
        to="12:00m"
        {...speakers.jesus}
      />
      <SingleEvent
        from="10:00am"
        to="12:00m"
        text="NodeSchool by MedellinJS"
        eventColor="green"
      />
      <SingleEvent
        from="12:00pm"
        to="2:00pm"
        text="Lunch"
        eventColor="red"
      />
      <SingleEvent
        from="2:00pm"
        to="6:00pm"
        text="Code + Learn"
        eventColor="green"
      />

    </ul>
  )
}
