import React from 'react'

import SingleEvent from './single_event'

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
      <SingleEvent
        from="10:00am"
        to="12:00am"
        text="Workshop by NodeSource"
      />
      <SingleEvent
        from="10:00am"
        to="12:00am"
        text="Workshop by Genius Sports"
      />
      <SingleEvent
        from="10:00am"
        to="12:00am"
        text="Workshop by Genius PSL"
      />
      <SingleEvent
        from="10:00am"
        to="12:00am"
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
