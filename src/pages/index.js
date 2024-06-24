import * as React from 'react'
//import { StaticImage } from 'gatsby-plugin-image'
import * as LayoutStyle from './../styles/layout.module.css'
import * as TypographyStyle from './../styles/typography.module.css'

import Header from '../components/header'
import About from '../components/about'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Footer from '../components/footer'
import Seo from './../components/seo'

const IndexPage = () => {
  return(
    <div>
      <Header />
      <About />
      <main className={`${LayoutStyle.container} ${TypographyStyle.textWhite}`}>
        <Projects blockTitle="Projects"/>
        <Experience blockTitle="Experience"/>
      </main>
      <Footer />
    </div>
  )
}

export const Head = () => <Seo title="Home page"/>

export default IndexPage;