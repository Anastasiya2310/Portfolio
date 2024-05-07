import * as React from 'react'
import Layout from '../components/layout'

const AboutMe = () => {
  return (
    <main>
      <Layout pageTitle="About me">
        <h2>Anastasiya Kharitonova</h2>
        <h3>Middle Frontend developer</h3>
        <p>Frontend developer with expertise in designing, developing and maintaining the web. Able to effectively self-manage during independent projects.</p>
      </Layout>
    </main>
  )
}

export const Head = () => {
  return (
    <title>About me</title>
  )
}

export default AboutMe