import React from "react"

import Adrian from "./images/team-adrian"
import Julian from "./images/team-julian"
import Alejandro from "./images/team-alejandro"
import Sebastian from "./images/team-sebastian"
import Maleja from "./images/team-maleja"
import Diego from "./images/team-diego"
import Nicole from "./images/team-nicole"
import Jhonatan from "./images/team-jhonatan"
import Hamilton from "./images/team-hamilton"
import Stiwar from "./images/team-stiwar"
import Jorman from "./images/team-jorman"

import "./Team.scss"

const Team = () => (
  <section className="team-component team" id="team">
    <h2 className="title  section__title">team</h2>
    <div className="images  l-container">
      <article className="section-team__content">
        <figure className="section-team__img">
          <Adrian />
        </figure>
        <div className="section-team__data">
          <h3 className="section-team__name">Adrian Estrada</h3>
          <a
            className="section-team__social"
            href="https://twitter.com/edsadr"
            aria-label="Twitter_Team"
            target="__blank"
          >
            <i className="icon-twitter"></i>
          </a>
        </div>
      </article>
      <article className="section-team__content">
        <figure className="section-team__img">
          <Julian />
        </figure>
        <div className="section-team__data">
          <h3 className="section-team__name">Julián Duque</h3>
          <a
            className="section-team__social"
            href="https://twitter.com/julian_duque"
            aria-label="Twitter_Team"
            target="__blank"
          >
            <i className="icon-twitter"></i>
          </a>
        </div>
      </article>
      <article className="section-team__content">
        <figure className="section-team__img">
          <Alejandro />
        </figure>
        <div className="section-team__data">
          <h3 className="section-team__name">Alejandro Estrada</h3>
          <a
            className="section-team__social"
            href="https://twitter.com/estrada9166"
            aria-label="Twitter_Team"
            target="__blank"
          >
            <i className="icon-twitter"></i>
          </a>
        </div>
      </article>
      <article className="section-team__content">
        <figure className="section-team__img">
          <Sebastian />
        </figure>
        <div className="section-team__data">
          <h3 className="section-team__name">Sebastian Velez</h3>
          <a
            className="section-team__social"
            href="https://twitter.com/jvelezpo"
            aria-label="Twitter_Team"
            target="__blank"
          >
            <i className="icon-twitter"></i>
          </a>
        </div>
      </article>
      <article className="section-team__content">
        <figure className="section-team__img">
          <Maleja />
        </figure>
        <div className="section-team__data">
          <h3 className="section-team__name">Alejandra Giraldo</h3>
          <a
            className="section-team__social"
            href="https://twitter.com/maleja111"
            aria-label="Twitter_Team"
            target="__blank"
          >
            <i className="icon-twitter"></i>
          </a>
        </div>
      </article>
      <article className="section-team__content">
        <figure className="section-team__img">
          <Diego />
        </figure>
        <div className="section-team__data">
          <h3 className="section-team__name">Diego Rodríguez B.</h3>
          <a
            className="section-team__social"
            href="https://twitter.com/DiegoRBaquero"
            aria-label="Twitter_Team"
            target="__blank"
          >
            <i className="icon-twitter"></i>
          </a>
        </div>
      </article>
      <article className="section-team__content">
        <figure className="section-team__img">
          <Nicole />
        </figure>
        <div className="section-team__data">
          <h3 className="section-team__name">Nicolle Jimenez</h3>
          <a
            className="section-team__social"
            href="https://twitter.com/nicole_jimenez"
            aria-label="Twitter_Team"
            target="__blank"
          >
            <i className="icon-twitter"></i>
          </a>
        </div>
      </article>
      <article className="section-team__content">
        <figure className="section-team__img">
          <Jhonatan />
        </figure>
        <div className="section-team__data">
          <h3 className="section-team__name">Jonathan Avendaño</h3>
          <a
            className="section-team__social"
            href="https://twitter.com/jdavidavendano"
            aria-label="Twitter_Team"
            target="__blank"
          >
            <i className="icon-twitter"></i>
          </a>
        </div>
      </article>
      <article className="section-team__content">
        <figure className="section-team__img">
          <Hamilton />
        </figure>
        <div className="section-team__data">
          <h3 className="section-team__name">Hamilton Galeano</h3>
          <a
            className="section-team__social"
            href="https://twitter.com/miltoncodeyt"
            aria-label="Twitter_Team"
            target="__blank"
          >
            <i className="icon-twitter"></i>
          </a>
        </div>
      </article>
      <article className="section-team__content">
        <figure className="section-team__img">
          <Stiwar />
        </figure>
        <div className="section-team__data">
          <h3 className="section-team__name">Stiwar Asprilla</h3>
          <a
            className="section-team__social"
            href="https://twitter.com/AsprillaStiwar"
            aria-label="Twitter_Team"
            target="__blank"
          >
            <i className="icon-twitter"></i>
          </a>
        </div>
      </article>
      <article className="section-team__content">
        <figure className="section-team__img">
          <Jorman />
        </figure>
        <div className="section-team__data">
          <h3 className="section-team__name">Jorman Bustos</h3>
          <a
            className="section-team__social"
            href="https://twitter.com/Coderboy44"
            aria-label="Twitter_Team"
            target="__blank"
          >
            <i className="icon-twitter"></i>
          </a>
        </div>
      </article>
    </div>
  </section>
)

export default Team
