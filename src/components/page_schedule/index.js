import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layout'
import Diego from '../images/speaker_diego_paez'
import Andrea from '../images/speaker_andrea_griffiths'
import Miguel from '../images/speaker_miguel_bolivar'
import Anna from '../images/speaker_cropped_anna'
import Erick from '../images/speaker_erick-wendel'
import Bnb from '../images/speaker_bnb'
import Kat from '../images/speaker_kat'
import James from '../images/speaker_james'
import Rauch from '../images/speaker_rauch'

import './schedule.scss'

const PageSchedule = () => (

  <main className="section-schedule  main">
  
    <div class="section-schedule__background"></div>

    <h1 className="section-schedule__title">NodeConf Colombia</h1>
    <h2 className="section-schedule__subtitle">Medellín 2019</h2>

    <section className="section-schedule__content">

      <h3 className="section-schedule__tag">SCHEDULE</h3>  
        
      <ul  className="section-schedule__ul">
        
        <li  className="section-schedule__li">
          <article className="section-schedule__card">
            <div className="section-schedule__data">
              <div className="section-schedule__start-time">12:50pm</div>
              <div className="section-schedule__end-time">01:10pm</div>
            </div>
            <div className="section-schedule__information">
              <h2 className="section-schedule__activity  start-event">WELLCOME</h2>
            </div>
          </article>
        </li>
       
        <li  className="section-schedule__li">
          <article className="section-schedule__card">
            <div className="section-schedule__speaker-content"> 
              <figure className="section-schedule__speaker-img">
                <Diego />
              </figure>
              <h3 className="section-schedule__speaker-name">Diego Paez</h3>
              <div className="section-schedule__speaker-social">
                <a href="https://twitter.com/addaleax" target="_blank" rel="noopener noreferrer" className="section-speakers__icon">
                  <i className="icon-twitter"></i>
                </a>
              </div>
            </div>
            <div className="section-schedule__information">
              <div className="section-schedule__data">
                <div className="section-schedule__start-time">12:50pm</div>
                <div className="section-schedule__icon"><i className="icon-right"></i></div>
                <div className="section-schedule__end-time">01:10pm</div>
              </div>
              <h3 className="section-schedule__activity">Programming Visual Art</h3>
              <p className="section-schedule__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laudantium vel architecto. Molestias, atque architecto minus vero exercitationem incidunt saepe enim quos repellat quaerat aliquid id ipsum velit ipsa sit voluptatum sequi veniam quo reprehenderit delectus cupiditate unde? Beatae, sit?</p>
            </div>
          </article>
        </li>

        <li  className="section-schedule__li">
          <article className="section-schedule__card">
            <div className="section-schedule__speaker-content">
              <figure className="section-schedule__speaker-img">
                <Erick />
              </figure>
              <h3 className="section-schedule__speaker-name">Erick Wendel</h3>
              <div className="section-schedule__speaker-social">
                <a href="https://twitter.com/addaleax" target="_blank" rel="noopener noreferrer" className="section-speakers__icon">
                  <i className="icon-twitter"></i>
                </a>
              </div>
            </div>
            <div className="section-schedule__information">
              <div className="section-schedule__data">
                <div className="section-schedule__start-time">12:50pm</div>
                <div className="section-schedule__icon"><i className="icon-right"></i></div>
                <div className="section-schedule__end-time">01:10pm</div>
              </div>
              <h3 className="section-schedule__activity">Automated Testing for the Modern Web</h3>
              <p className="section-schedule__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nihil inventore neque aliquam maiores tempore?</p>
            </div>
          </article>
         </li>
       
        <li  className="section-schedule__li">
          <article className="section-schedule__card">
            <div className="section-schedule__speaker-content">
              <figure className="section-schedule__speaker-img">
                <Anna />
              </figure>
              <h3 className="section-schedule__speaker-name">Anna Henningsen</h3>
              <div className="section-schedule__speaker-social">
                <a href="https://twitter.com/addaleax" target="_blank" rel="noopener noreferrer" className="section-speakers__icon">
                  <i className="icon-twitter"></i>
                </a>
              </div>
            </div>
            <div className="section-schedule__information">
              <div className="section-schedule__data">
                <div className="section-schedule__start-time">12:50pm</div>
                <div className="section-schedule__icon"><i className="icon-right"></i></div>
                <div className="section-schedule__end-time">01:10pm</div>
              </div>
                <h3 className="section-schedule__activity">IA para videojuegos  con JS</h3>
                <p className="section-schedule__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nihil inventore neque aliquam maiores tempore?</p>
            </div>
          </article>
        </li>
        
        <li  className="section-schedule__li">
          <article className="section-schedule__card">
            <div className="section-schedule__speaker-content">
              <figure className="section-schedule__speaker-img">
                <Miguel />
              </figure>
              <h3 className="section-schedule__speaker-name">Miguel Bolivar</h3>
              <div className="section-schedule__speaker-social">
                <a href="https://twitter.com/addaleax" target="_blank" rel="noopener noreferrer" className="section-speakers__icon">
                  <i className="icon-twitter"></i>
                </a>
              </div>
            </div>
            <div className="section-schedule__information">
              <div className="section-schedule__data">
                <div className="section-schedule__start-time">12:50pm</div>
                <div className="section-schedule__icon"><i className="icon-right"></i></div>
                <div className="section-schedule__end-time">01:10pm</div>
              </div>
                <h3 className="section-schedule__activity">El error de dar un mensaje por error JS</h3>
                <p className="section-schedule__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nihil inventore neque aliquam maiores tempore?</p>
            </div>
          </article>
        </li>
        
        <li  className="section-schedule__li">
          <article className="section-schedule__card">
            <div className="section-schedule__data">
              <div className="section-schedule__start-time">05:50pm</div>
              <div className="section-schedule__end-time">06:00pm</div>
            </div>
            <div className="section-schedule__information">
              <h2 className="section-schedule__activity  end-event">CLOSING EVENT</h2>
            </div>
          </article>
         </li>
      
      </ul>

    </section> 

  </main>

)

export default PageSchedule
