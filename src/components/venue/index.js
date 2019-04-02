import React, { Component } from 'react'
//import Hotel from '../images/image-hotel'
import Rutan from '../images/image-hotel'
import VenueImg from '../images/image-venue-image'
import './index.scss';

export default class Venue extends Component{
    render() {
     return (
         <div className="Venue-component" id="venue">
            <div className="Venue-left">
            <h2 className="Venue-title">VENUE</h2>
            <p>Hotels we</p>
            <p>recommend </p>
            <a href="#!" className="Venue-btn">Moore...</a>
            </div>
            <div className="Venue-img">
                <VenueImg  />
            </div>
            <div className="Venue-text">
                <div className="Venue-rutan">
                    <div className="logo">
                    <Rutan alt="Logo-rutan"/>
                    </div>
                <p>Complejo Ruta N Calle 67 N° 52-20</p>
                <p>Medellin - Colombia. </p>
                <p className="span-venue">Strategic location, whit easy access  to all of </p> 
                <p className="span-venue">the city's points of interest.</p>
                </div>
            </div>
         </div>
     )  
    }
}