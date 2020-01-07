import React, { Component } from "react"
import "./Footer.scss"

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-component l-container--full  l-inner-p">
        <p>NodeConf Colombia is an event by Mantid LLC -&nbsp;</p> 
        <a
          href="http://jsconf.com/codeofconduct.html"
          target="__blank"
          rel="noopener noreferrer"
        >
          Code of conduct
        </a>
      </footer>
    )
  }
}
