import React, { Component } from 'react'
import './index.scss';

export default class About extends Component {
render(){
    return(
        <div className="About-component" id="about">
        <h2 className="About-title"> About </h2>
            <p> NodeConf Colombia 2019 is the first international event focused on the entire Node.js ecosystem. It’s a non-profit event, where our attendees will be sharing in an environment of inclusion and respect, having access to relevant information through talks, workshops, and great experiences with the Colombian Node community.</p>
        </div>
    )
}
}