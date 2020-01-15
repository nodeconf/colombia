import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tickets from "../components/Tickets/Tickets"
import CFP from "../components/CFP/CFP"
import Speakers from "../components/Speakers/Speakers"
import Venue from "../components/Venue/Venue"
import About from "../components/About/About"
import Team from "../components/Team/Team"
import ContactUs from "../components/ContactUs/ContactUs"
import "./styles.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Tickets />
    <CFP />
    <Speakers />
    <Venue />
    <About />
    <Team />
    <ContactUs />
  </Layout>
)

export default IndexPage
