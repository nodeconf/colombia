import React from 'react'

export default function TalkEvent(props) {
  return (
    <li className="section-schedule__li">
      <article className="section-schedule__card">
        {props.workshop &&
          <div className="workshop-title">
            <h2 className={`section-schedule__activity start-event ${props.eventColor}`}>{props.workshop}</h2>
          </div>
        }
        <div className="event-info">
          {props.name &&
            <div className="section-schedule__speaker-content">
              {!props.workshop &&
                <figure className="section-schedule__speaker-img">
                  {props.figure()}
                </figure>
              }
              <h3 className="section-schedule__speaker-name">{props.name}</h3>
              {props.twitterUrl &&
                <div className="section-schedule__speaker-social">
                  <a href={props.twitterUrl} target="_blank" rel="noopener noreferrer" className="section-speakers__icon">
                    <i className="icon-twitter"></i>
                  </a>
                </div>
              }
            </div>
          }
          <div className="section-schedule__information">
            <div className="section-schedule__data">
              <div className="section-schedule__start-time">{props.from}</div>
              {props.to &&
                <div className="section-schedule__start-time">{props.to}</div>
              }
            </div>
            <h3 className="section-schedule__activity">{props.talkName}</h3>
            <p className="section-schedule__description" dangerouslySetInnerHTML={{ __html: props.talkDesc }}/>
          </div>
        </div>
      </article>
    </li>
  )
}
