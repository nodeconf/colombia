import React from 'react'

export default function TalkEvent(props) {
  return (
    <li className="section-schedule__li">
      <article className="section-schedule__card">
        <div className="section-schedule__speaker-content">
          <figure className="section-schedule__speaker-img">
            {props.figure()}
          </figure>
          <h3 className="section-schedule__speaker-name">{props.name}</h3>
          <div className="section-schedule__speaker-social">
            <a href={props.twitterUrl} target="_blank" rel="noopener noreferrer" className="section-speakers__icon">
              <i className="icon-twitter"></i>
            </a>
          </div>
        </div>
        <div className="section-schedule__information">
          <div className="section-schedule__data">
            <div className="section-schedule__start-time">{props.from}</div>
          </div>
          <h3 className="section-schedule__activity">{props.talkName}</h3>
          <p className="section-schedule__description" dangerouslySetInnerHTML={{ __html: props.talkDesc }}/>
        </div>
      </article>
    </li>
  )
}
