import React, { Component } from "react";
import Alejandro from "../images/team-alejandro";
import Julian from "../images/team-julian";
import Maleja from "../images/team-maleja";
import Adrian from "../images/team-adrian";
import Diego from "../images/team-diego";
import Nicole from "../images/team-nicole";
import Jhonatan from "../images/team-jhonatan";
import Sebastian from "../images/team-sebastian";
import Hamilton from "../images/team-hamilton";
import Stiwar from "../images/team-stiwar";

import "./index.scss";
export default class Team extends Component {
  render() {
    return (

      <div className="Team-component" id="team">

        <div className="team-top"></div>

        <h2>ORGANIZING TEAM</h2>

        <div className="team-content">

          <article className="team-members">

            <div className="team-data">

              <figure className="team-avatar">
                <Alejandro />
              </figure>

              <div className="team-description">
                <h3>Alejandro Estrada</h3>
                <p>Open source enthusiast, creating some GraphQL tools @easygraphql - Co-Organizer at NodeConfCO </p>

                <div className="team-role">
                  <h4> Sponsorships </h4>
                  <div className="Social">
                    <a href="https://twitter.com/estrada9166" rel="noopener noreferrer">
                      <i className="icon-twitter" />
                    </a>
                  </div>

                </div>

              </div>

            </div>

          </article>

          <article className="team-members">

            <div className="team-data">

              <figure className="team-avatar">
                <Julian />
              </figure>

              <div className="team-description">
                <h3>Julián Duque</h3>
                <p>
                  Developer and Educator - Engineer at @NodeSource - Co-Organizer
                  at @Colombia_Dev, @JSConfCO, @NodeConfCO, @Suncoastjs, &
                  @MedellinJS - #EStreamerCoders <span role="img" aria-label="emoji">😈</span>
                </p>

                <div className="team-role">
                  <h4> Finance / Logistics </h4>
                  <div className="Social">
                    <a href="https://twitter.com/julian_duque" rel="noopener noreferrer">
                      <i className="icon-twitter" />
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </article>


          <article className="team-members">

            <div className="team-data">

              <figure className="team-avatar">
                <Maleja />
              </figure>

              <div className="team-description">
                <h3>Alejandra Giraldo</h3>
                <p>
                  Co-Organizer @SheCodesAngular and{" "}
                  <a href="http://nodeconf.co" rel="noopener noreferrer">
                    NodeConfCo
                  </a>{" "}
                  Fullstack developer at: @wearebunnyinc - auth0 ambassador
                </p>
                <div className="team-role">
                  <h4> Communication / Logistics </h4>
                  <div className="Social">
                    <a
                      href="https://twitter.com/maleja111"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </article>

          <article className="team-members">

           <div className="team-data">

            <figure className="team-avatar">
              <Adrian />
            </figure>

            <div className="team-description">
              <h3>Adrian Estrada</h3>
              <p>
                Developer in love with Node.js, thirsty for new technologies,
                working at @NodeSource - organizer @MedellinJS, @JSConfCO and
                @NodeConfCO
              </p>
                <div className="team-role">
                  <h4> Finances / Content </h4>

                <div className="Social">
                  <a
                    href="https://twitter.com/edsadr"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter" />
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="team-members">

            <div className="team-data">

              <figure className="team-avatar">
                <Diego />
              </figure>

              <div className="team-description">
                <h3>Diego Rodriguez</h3>
                <p>
                  Software Engineer & Researcher. Node.js and Open Source Advocate
                </p>
                <div className="team-role">
                  <h4> Content </h4>
                  <div className="Social">
                    <a
                      href="https://twitter.com/DiegoRBaquero"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-twitter" />
                    </a>
                  </div>
                </div>
              </div>
              </div>
          </article>

          <article className="team-members">
            <div className="team-data">

              <figure className="team-avatar">
                <Nicole />
              </figure>

              <div className="team-description">
                <h3>Nicole Jimenez</h3>
                <p>
                  Full stack software engineer at Elizabeth&Clarke
                </p>
                <div className="team-role">
                  <h4> Opportunity / Communication </h4>

                  <div className="Social">
                    <a
                      href="https://twitter.com/nicole_jimenez"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="team-members">
            <div className="team-data">
              <figure className="team-avatar">
                <Jhonatan />
              </figure>

              <div className="team-description">
                <h3>Jonathan Avendaño</h3>
                <p>
                  Coderiser (@coderiseorg) . Developer. Co-Organizer at
                  @scaleconfco, @mde_devops, @jsconfco& @nodeconfco. Warrior &
                  Weirdo <span role="img" aria-label="emoji">💛</span>
                </p>
                <div className="team-role">
                  <h4> Logistics / Opportunity </h4>
                  <div className="Social">
                    <a
                      href="https://twitter.com/jdavidavendano"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="team-members">
            <div className="team-data">
              <figure className="team-avatar">
                <Sebastian />
              </figure>

              <div className="team-description">
                <h3>Sebastian Velez</h3>
                <p>
                  JS dev, Open source, Bicycle Downhill rider, Digital nomad -
                  Co-Organizer @NodeConfCO
                </p>
                <div className="team-role">
                  <h4> Communication / Content </h4>
                  <div className="Social">
                    <a
                      href="https://twitter.com/jvelezpo"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-twitter" />
                    </a>
                  </div>
                  </div>
                </div>
              </div>
          </article>

          <article className="team-members">
           <div className="team-data">
              <figure className="team-avatar">
                <Hamilton />
              </figure>

              <div className="team-description">
                <h3>Hamilton G. Moreno</h3>
                <p>
                  #Developer web<span role="img" aria-label="emoji">🌐</span> and # Programmer.💻 Passionate about the Design and active tracking of #SoftwareLibre. <span role="img" aria-label="emoji">🐧</span>
                </p>
                  <div className="team-role">
                    <h4> Team Web </h4>

                  <div className="Social">
                    <a
                      href="https://twitter.com/MiltonCode"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="team-members">
            <div className="team-data">
              <figure className="team-avatar">
                <Stiwar />
              </figure>

              <div className="team-description">
                <h3>Stiwar Asprilla</h3>
                <p>
                  Developer web in progress <span role="img" aria-label="emoji">💻</span> passionate for the design web and app desktop <span role="img" aria-label="emoji">🖌️  </span>
                </p>
                  <div className="team-role">
                    <h4> Team Web </h4>

                  <div className="Social">
                    <a
                      href="https://twitter.com/AsprillaStiwar"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-twitter" />
                    </a>
                 </div>
                </div>
              </div>
            </div>
          </article>

        </div>

      </div>
    );
  }
}
