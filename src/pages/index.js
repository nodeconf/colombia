import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Speakers from '../components/section_speakers/'
import Tickets from '../components/section_tickets'
import './index.scss'

const IndexPage = () => (
  <Layout>
    <Speakers />
    <Tickets />
  </Layout>
)

export default IndexPage
