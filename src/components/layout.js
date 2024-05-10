import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { title, siteTitle } from './layout.module.css'

const Layout = ({ pageTitle,  children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about-me'>About me</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={title}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout