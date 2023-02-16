import { GatsbySeo } from 'gatsby-plugin-next-seo'
import React from 'react'
import Layout from '../components/Layout'

const Home = () => (
  <Layout>
    <GatsbySeo title="Home Page" />
    <div className="grid-content--center-4">
      <h1>Hi There!</h1>
      <p>You just hit the home route...</p>
    </div>
  </Layout>
)

export default Home
