import * as React from 'react'
import * as LayoutStyle from './../styles/layout.module.css'
import * as AboutStyle from './about.module.css'
import * as TypographyStyle from './../styles/typography.module.css'
import { useStaticQuery, graphql } from 'gatsby'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childDataJson {
            name
            position
            description
          }
        }
      }
    }
  `)

  const aboutInfo = data.allFile.nodes[0].childDataJson;
  return(
    <>
    <div className={`${LayoutStyle.container} ${AboutStyle.containerBio}`}>
      <div className={AboutStyle.bio}>
        <h1 className={`${AboutStyle.heading1} ${TypographyStyle.textWhite} ${AboutStyle.headingBold}`} id="about">{aboutInfo.name}</h1>
        <h2 className={`${TypographyStyle.heading2} ${TypographyStyle.textYellow} ${AboutStyle.textUppercase} ${AboutStyle.position}`}>{aboutInfo.position}</h2>
        <p className={`${AboutStyle.font18} ${TypographyStyle.textWhite} ${AboutStyle.description}`}>{aboutInfo.description}</p>
        <a href="/Anastasiya_Kharitonova.pdf" download rel="noopener noreferrer" className={`${AboutStyle.font18} ${AboutStyle.buttonYellow} ${AboutStyle.buttonShineAnim}`}><span>Download a CV</span></a>
      </div>
      <div className={AboutStyle.bioDecoration}>
        <p className={`${TypographyStyle.font80} ${AboutStyle.headingRegular} ${AboutStyle.textDarkGray}`}>CSS <br /> is <br /> Awesome</p>
      </div>
    </div>
    {/* <div className={`${LayoutStyle.container}`}>
      <ul className={`${TypographyStyle.textWhite} ${AboutStyle.aboutEducation}`}>
        {aboutInfo.education.map((item, index) => (
          <li key={index}>
            {item.title} (<b>{item.school}, <i>{item.years}</i></b>)
          </li>
        ))}
      </ul>

      <ul className={`${TypographyStyle.textWhite} ${AboutStyle.aboutLanguages}`}>
        {aboutInfo.languages.map((language, i) => (
          <li key={i}>
            {language.title} ({language.level})
          </li>
        ))}
      </ul>
    </div> */}
    </>
  )
}

export default About;