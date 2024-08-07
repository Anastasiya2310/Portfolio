import React, { useRef, useEffect, useState } from 'react'
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
  const [isVisibleItems, setIsVisibleItems] = useState(new Array(experienceData.length).fill(false));
  const refs = useRef(experienceData.map(() => React.createRef()))

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const refsCurrent = refs.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = refsCurrent.indexOf(entry.target)
        if(entry.isIntersecting) {
          setIsVisibleItems(prevVisibleItems => {
            const newVisibleItems = [...prevVisibleItems];
            newVisibleItems[index] = true;
            return newVisibleItems;
          });
          observer.unobserve(entry.target)
        }
      });
    }, options);

    refsCurrent.forEach(ref => {
      if(ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refsCurrent.forEach(ref => {
        if(ref.current) {
          observer.unobserve(ref.current);
        }
      });
    }
  }, [])

  return (
    <div className={`${LayoutStyle.vMargins30} ${LayoutStyle.marginBottom100}`} id="experience">
      <h2 className={`${TypographyStyle.heading2} ${TypographyStyle.textWhite} ${TypographyStyle.textCenter} ${LayoutStyle.yellowBottomLine}`}>{blockTitle}</h2>
      <section className={`${LayoutStyle.displayBlock} ${LayoutStyle.flex} ${LayoutStyle.fColumn} ${LayoutStyle.gap30}`}>
        {experienceData.map((item, index) => (
          <article ref={refs.current[index]} key={index} className={`${LayoutStyle.displayBlock} ${LayoutStyle.flex} ${LayoutStyle.fRow} ${ExperienceStyle.listStyleNone} ${ExperienceStyle.experienceArticle} ${isVisibleItems[index] ? 'visible' : 'hidden'}`}>
            <div className={`${LayoutStyle.hMargins15} ${TypographyStyle.headingRegular} ${ExperienceStyle.time}`}>
              {item.time}
            </div>
            <div className={`${LayoutStyle.hMargins15}`}>
              <h4 className={`${TypographyStyle.font20} ${LayoutStyle.margin0} ${ExperienceStyle.position}`}>{item.position}</h4> &bull; 
              <i> {item.company}</i>
              <ul className={`${LayoutStyle.vMargins30} ${ExperienceStyle.listBulletsInside}`}>
                {item.description.map((i, key) => (
                  <li key={key} className={`${ExperienceStyle.experienceItem}`}>{i}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Experience