import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from './../components/layout'
import Seo from './../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog page">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date} <sup><em>Modified: {node.parent.modifiedTime}</em></sup></p>
            <p>{node.excerpt}</p>
            
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
        parent {
          ... on File {
            modifiedTime(fromNow: true)
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="Blog posts page"/>

export default BlogPage