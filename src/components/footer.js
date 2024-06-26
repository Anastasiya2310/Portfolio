import React from 'react';
import * as LayoutStyle from './../styles/layout.module.css'
import * as TypographyStyle from './../styles/typography.module.css'
import * as FooterStyle from './footer.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import GithubIcon from '../images/icons/github.svg'
import EmailIcon from '../images/icons/email.svg'
import LinkedinIcon from '../images/icons/linkedin.svg'

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
      <ul className={`${FooterStyle.contactList} ${TypographyStyle.listStyleNone} ${LayoutStyle.flex} ${LayoutStyle.fRow} ${LayoutStyle.fJustifyCenter} ${LayoutStyle.fAlignItemsCenter}`}>
        <li key={contact.email} className={`${LayoutStyle.flex} ${LayoutStyle.fJustifyCenter} ${LayoutStyle.fAlignItemsCenter}`}>
          <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer noopener">
            <EmailIcon width={38} height={38}/>
          </a>
        </li>
        <li key={contact.github} className={`${LayoutStyle.flex} ${LayoutStyle.fJustifyCenter} ${LayoutStyle.fAlignItemsCenter}`}>
          <a href={contact.github} target="_blank" rel="noreferrer noopener">
            <GithubIcon width={30} height={30}/>
          </a>
        </li>
        <li key={contact.linkedin} className={`${LayoutStyle.flex} ${LayoutStyle.fJustifyCenter} ${LayoutStyle.fAlignItemsCenter}`}>
          <a href={contact.linkedin} target="_blank" rel="noreferrer noopener">
            <LinkedinIcon width={38} height={38}/>
          </a>
        </li>
      </ul>
      <p className={`${FooterStyle.textFooter} ${TypographyStyle.textCenter}`}>Built with <a href="https://www.gatsbyjs.com/" className={`${FooterStyle.linksFooter}`} target="_blank" rel="noreferrer noopener"> Gatsby</a>, deployed with <a href="https://www.netlify.com/" className={`${FooterStyle.linksFooter}`} target="_blank" rel="noreferrer noopener"> Netlify</a></p>
    </footer>
  );
};

export default Footer;
