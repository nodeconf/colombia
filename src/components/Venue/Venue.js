import React from "react"

import RutaN from "../images/ruta-n"
import Hotel10 from "../images/hotel10"
import LogoRutaN from "../images/logo_rutaN"

import "./Venue.scss"

const Venue = () => (
  <section className="venue-component venue" id="venue">
    <div className="rutan-image">
      <RutaN />
    </div>
    <div className="content">
      <div className="title section__title">Venue</div>
      <div>
      <a
        href="https://www.rutanmedellin.org/es/"
        target="__blank"
        rel="noopener noreferrer"
        aria-label="Logo Ruta N"
      >
        <figure className="logo">
          <LogoRutaN />
        </figure>
      </a>
        Complejo Ruta N Calle 67 N° 52-20 Medellín - Colombia. Strategic
        location, with easy access to all of the city's points of interest.
      </div>
      <div className="subtitle">Hotel We Recommend</div>
      <a
        href="https://www.diezhotel.com/"
        target="__blank"
        rel="noopener noreferrer"
        aria-label="Hotel Diez"
      >
        <figure className="hotel">
          <Hotel10 />
        </figure>
      </a>
      <a
        href="https://reservations.travelclick.com/103293?groupID=2323678"
        className="reservation"
        target="__blank"
      >
        Reservations
      </a>
    </div>
  </section>
)

export default Venue
