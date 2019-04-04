import React, { Component } from 'react'
import Fb from '../images/image-fb'
import Ig from '../images/image-instagram'
import Tw from '../images/image-twitter'
import './index.scss';

export default class Stay_tuned extends Component{
    render(){
        return(
            <div className="Stay-tuned" id="stay-tuned">
                <h2>STAY TUNED</h2>
                <p>hola@nodeconf.co</p>
                <div className="icons">
                    <div className="fb"> <a href="#!"> <Fb/> </a> </div>
                    <div className="ig"> <a href="#!"> <Ig/> </a> </div>
                    <div className="tw"> <a href="#!"> <Tw/> </a> </div>
                </div>
                
                <div className="Stay-Signup">
                    <p>Sign up for updates</p>
                    <input type="email" className="Stay-input-signup" placeholder="Email Address"></input>
                    <a href="#!" className="Stay-btn-signup" >Sign Up</a> 

                </div> 
            </div>
        )
    }
}