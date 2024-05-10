import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from './../components/seo'

const IndexPage = () => {
  return(
    <Layout pageTitle="Home Page">
      <p>Portfolio site for personal usage</p>
      <StaticImage alt="anime dawn sky" src="../images/grid_0_640_N.webp"/>
    </Layout>
  )
}

export const Head = () => <Seo title="Home page"/>

export default IndexPage;