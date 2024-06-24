import React from 'react';
import * as FooterStyle from './footer.module.css'
import * as LayoutStyle from './../styles/layout.module.css'
import * as TypographyStyle from './../styles/typography.module.css'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childDataJson {
            contact {
              email
              github
              linkedin
            }
          }
        }
      }
    }
  `)

  const contact = data.allFile.nodes[0].childDataJson.contact;

  return (
    <footer className={`${FooterStyle.footer} ${LayoutStyle.container}`}>
      <ul className={`${TypographyStyle.listStyleNone} ${LayoutStyle.flex} ${LayoutStyle.fRow} ${LayoutStyle.gap10} ${LayoutStyle.fJustifyCenter}`}>
        <li key={contact.email} className={`${FooterStyle.email} ${FooterStyle.iconFooter}`}>
          <a href={contact.email} target="_blank" rel="noreferrer noopener">Email</a>
        </li>
        <li key={contact.github} className={`${FooterStyle.github} ${FooterStyle.iconFooter}`}>
          <a href={contact.github} target="_blank" rel="noreferrer noopener">Github</a>
        </li>
        <li key={contact.linkedin} className={`${FooterStyle.linkedin} ${FooterStyle.iconFooter}`}>
          <a href={contact.linkedin} target="_blank" rel="noreferrer noopener">Linkedin</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
