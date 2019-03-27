import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Guillermo from '../components/images/image-guillermo'
import Anna from '../components/images/image-anna'

import './index.scss'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Guillermo />
      <Anna />
    </div>
    <Link to="/page-2/" className="logo" >Go to page 2</Link>
  </Layout>
)

export default IndexPage
