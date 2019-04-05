import React from 'react'

export default class speaker extends React.Component {
  render() {
    return (
      <article className="section-speakers__content">
        <figure className="section-speakers__img">
          {this.props.figure()}
        </figure>
        <div className="section-speakers__description">
          {this.props.description}
        </div>
        <div className="section-speakers__data">
          <div className="section-speakers__name">{this.props.name}
            <i className="section-speakers__country">{this.props.country()}</i>
          </div>
          <div className="section-speakers__social">
            <a href={this.props.twitterUrl} target="_blank" rel="noopener noreferrer" className="section-speakers__icon">
              <i className="icon-twitter"></i>
            </a>
          </div>
        </div>
      </article>
    )
  }
}
