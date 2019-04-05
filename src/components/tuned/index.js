import React from 'react';

import './index.scss';

export default class Tuned extends React.Component {
  render() {
    return (
      <div className="tuned-section">
        <div className="social">
          <div className="tuned">Stay Tuned</div>
          <div className="email">hola@nodeconf.co</div>
          <div className="networks" />
        </div>
        <form
          action="https://nodeconf.us18.list-manage.com/subscribe/post?u=33c93ca7e73c6c27cd0325b9f&amp;id=e71faec96c"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div className="enter-email">
            <div className="signup">Sign up for updates</div>
            <input
              type="email"
              className="email-input"
              placeholder="Email address"
            />
            <button type="submit" className="signup-button">
              Sign up
            </button>
          </div>
          <div id="mce-responses" className="clear">
            <div
              className="response"
              id="mce-error-response"
              style={{display: 'none'}}
            />
            <div
              className="response"
              id="mce-success-response"
              style={{display: 'none'}}
            />
            <div style={{position: 'absolute', left: -5000}} aria-hidden="true">
              <input type="text" name="name" tabIndex="-1" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
