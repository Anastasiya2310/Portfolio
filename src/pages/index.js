import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return(
    <Layout pageTitle="Home Page">
      <p>Portfolio site for personal usage</p>
      <StaticImage alt="anime dawn sky" src="../images/grid_0_640_N.webp"/>
    </Layout>
  )
}

export const Head = () => {
  return (
    <title>Home Page</title>
  )
}

export default IndexPage;