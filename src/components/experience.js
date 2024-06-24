import * as React from 'react'
import * as ExperienceStyle from './experience.module.css'
import * as LayoutStyle from './../styles/layout.module.css'
import * as TypographyStyle from './../styles/typography.module.css'
import { useStaticQuery, graphql } from 'gatsby'

const Experience = ({ blockTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {extension: {eq: "json"}}) {
        nodes {
          childDataJson {
            employment {
              time
              position
              description
              company
            }
          }
        }
      }
    }
  `)

  const experienceData = data.allFile.nodes[0].childDataJson.employment

  return (
    <div className={`${LayoutStyle.vMargins30} ${LayoutStyle.marginBottom100}`} id="experience">
      <h2 className={`${TypographyStyle.heading2} ${TypographyStyle.textWhite} ${TypographyStyle.textCenter} ${LayoutStyle.yellowBottomLine}`}>{blockTitle}</h2>
      <ul className={`${LayoutStyle.flex} ${LayoutStyle.fColumn} ${LayoutStyle.gap30}`}>
        {experienceData.map((item, index) => (
          <li key={index} className={`${LayoutStyle.flex} ${LayoutStyle.fRow} ${ExperienceStyle.listStyleNone}`}>
            <div className={`${LayoutStyle.hMargins15} ${TypographyStyle.headingRegular} ${ExperienceStyle.time}`}>
              {item.time}
            </div>
            <div className={`${LayoutStyle.hMargins15}`}>
              <h4 className={`${TypographyStyle.font20} ${LayoutStyle.margin0} ${ExperienceStyle.position}`}>{item.position}</h4> &bull; 
              <i> {item.company}</i>
              <ul className={`${LayoutStyle.vMargins30} ${ExperienceStyle.listBulletsInside}`}>
                {item.description.map((i, key) => (
                  <li key={key}>{i}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Experience