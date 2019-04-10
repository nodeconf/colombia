import React, { Component } from 'react'

import Rutan from '../images/image-hotel'
import VenueImg from '../images/image-venue-image'
import Hotel10 from '../images/image-10hotels'

import './index.scss';

export default class Venue extends Component{
    render() {
     return (
         <div className="Venue-component" id="venue">
            <div className="Venue-left">
            <h2 className="Venue-title">VENUE</h2>
            <p>Hotels we</p>
            <p>recommend </p>
            <div className="Venue-hotels10">
                <a 
                    href="https://www.diezhotel.com/"
                    target="__blank"
                >
                    <Hotel10 />
                </a>
            </div>
                <a 
                href="https://reservations.travelclick.com/103293?groupID=2323678" 
                className="Venue-btn"
                target="__blank"
                >Reservation...</a>
            </div>
            <div className="Venue-img">
                <VenueImg  />
            </div>
            <div className="Venue-text">
                <div className="Venue-rutan">
                    <a 
                        href="https://www.rutanmedellin.org/es/"
                        target="__blank"
                        >
                        <div className="logo">
                            <Rutan alt="Logo-rutan"/>
                        </div>
                    </a>
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