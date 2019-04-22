import React from 'react'

export default function SingleEvent(props) {
  return (
    <li className="section-schedule__li">
      <article className="section-schedule__card single">
        <div className="section-schedule__data">
          <div className="section-schedule__start-time">{props.from}</div>
          {props.to &&
            <div className="section-schedule__end-time">{props.to}</div>
          }
        </div>
        <div className="section-schedule__information">
          <h2 className={`section-schedule__activity start-event ${props.eventColor}`}>{props.text}</h2>
        </div>
      </article>
    </li>
  )
}
