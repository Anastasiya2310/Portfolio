import * as React from 'react'
import * as ProjectsStyle from './projects.module.css'
import * as LayoutStyle from './../styles/layout.module.css'
import * as TypographyStyle from './../styles/typography.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Projects = ({ blockTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      jsonData: allFile(filter: {extension: {eq: "json"}}) {
        nodes {
          childDataJson {
            projects {
              description
              name
              tags
              image
            }
          }
        }
      }
      images: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(width: 450, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `)

  const projectsData = data.jsonData.nodes[0].childDataJson.projects
  const images = data.images.edges

  const getImageByRelativePath = (path) => {
    const imageNode = images.find(({ node }) => node.relativePath === path)
    return imageNode ? getImage(imageNode.node.childImageSharp.gatsbyImageData) : null
  }

  return (
    <div className={`${LayoutStyle.vMargins30} ${LayoutStyle.marginBottom100}`} id="projects">
      <h2 className={`${TypographyStyle.heading2} ${TypographyStyle.textWhite} ${TypographyStyle.textCenter} ${LayoutStyle.yellowBottomLine} ${LayoutStyle.marginBottom50}`}>{blockTitle}</h2>
      <ul className={`${LayoutStyle.flex} ${LayoutStyle.fRow} ${LayoutStyle.fJustifyBetween} ${LayoutStyle.gap30} ${LayoutStyle.padding0}`}>
        {projectsData.map((item, index) => (
          <li key={index} className={`${ProjectsStyle.card}`}>
            {item.image && 
              <GatsbyImage 
                image={getImageByRelativePath(item.image)} 
                alt={item.name}
                className={`${ProjectsStyle.fullWidthImage} ${ProjectsStyle.projectImage}`}
              />
            }
            <div className={`${LayoutStyle.vMargins30} ${ProjectsStyle.cardDescription}`}>
              <h3 className={`${LayoutStyle.hMargins15} ${TypographyStyle.textCenter}`}>
                {item.name}
              </h3>
              <div className={`${LayoutStyle.hMargins15} ${LayoutStyle.hMargins25}`}>
                <h4>{item.description}</h4>
                <ul className={`
                  ${LayoutStyle.flex} 
                  ${LayoutStyle.flexWrap} 
                  ${LayoutStyle.fRow} 
                  ${LayoutStyle.gap10} 
                  ${LayoutStyle.padding0} 
                  ${TypographyStyle.font13} 
                  ${TypographyStyle.textYellow}`
                }>
                  {item.tags.map((tag, index) => (
                    <li key={index} className={`${ProjectsStyle.listStyleNone}`}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
              
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects