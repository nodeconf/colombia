import React, { useState } from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

import "./ContactUs.scss"

const ContactUs = () => {
  const [email, setEmail] = useState("")
  const [result, setResult] = useState({
    result: '',
    msg: ''
  })

  const _handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(email)
    setResult(result)
  }

  return (
    <section className="contact-us-component contact-us  l-container" id="contactUS">
      <div className="stay-tuned  l-inner-p">
        <a
          className="site-2019"
          href="https://2019.nodeconf.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Take a look at NodeConfCO 2019 website
        </a>
        <h2 className="title  section__title">stay tuned</h2>
        <div className="email">
          <form onSubmit={_handleSubmit}>
            <input
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              aria-required="true"
              aria-label="Email address"
              placeholder="Email address"
            ></input>
            <button type="submit">Sign up</button>
          </form>
          {result.result === 'success' &&
            <div className="success">{result.msg}</div>
          }
          {result.result === 'error' &&
            <div className="error" dangerouslySetInnerHTML={{__html:result.msg}} />
          }
        </div>
        <div className="social">
          <div className="icons">
            <a href="https://twitter.com/NodeConfCo" target="__blank" aria-label="icon-twitter">
              <i className="social-icon icon-twitter"></i>
            </a>
            <a href="https://www.instagram.com/nodeconf_co" target="__blank" aria-label="icon-instagram">
              <i className="social-icon icon-instagram"></i>
            </a>
            <a href="https://www.facebook.com/nodeconfco" target="__blank" aria-label="icon-facebook">
              <i className="social-icon icon-facebook"></i>
            </a>
          </div>
          <div className="text">
            <h3 className="contact-us">CONTACT US</h3>
            <a
              className="nodeconf-email"
              href="mailto:hola@nodeconf.co"
              rel="noopener noreferrer"
            >
              hola@nodeconf.co
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ContactUs
