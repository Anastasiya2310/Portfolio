import * as React from 'react'
import { Link } from 'gatsby'
import { title } from './layout.module.css'

const Layout = ({ pageTitle,  children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about-me'>About me</Link>
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