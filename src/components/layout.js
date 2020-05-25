/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import LogoFacebook from "react-ionicons/lib/LogoFacebook"
import LogoInstagram from "react-ionicons/lib/LogoInstagram"
import MdMail from "react-ionicons/lib/MdMail"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const Footer = styled.footer`
    background: white;

    .footerSocialIconContainer {
      display: flex;
      justify-content: center;
      margin: 0 1rem 1rem;
      padding: 1rem;
      align-content: center;

      .socialLink {
        margin: 1rem;
        padding: 1rem;
      }
    }
    .copyright {
      display: flex;
      justify-content: center;
      padding-bottom: 1rem;

      p {
        color: black;
        text-align: center;
        display: inline-block;
      }
      a {
        color: black;
      }
    }
  `

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0`,
        }}
      >
        <main>{children}</main>
        <Footer>
          <div className="footerContainer">
            <div className="footerSocialIconContainer">
              <a className="socialLink" href="https://facebook.com">
                <LogoFacebook color="#000" fontSize="24px" />
              </a>
              <a className="socialLink" href="https:instagram.com">
                <LogoInstagram color="#000" fontSize="24px" />
              </a>
              <a className="socialLink" href="https:instagram.com">
                <MdMail color="#000" fontSize="24px" />
              </a>
            </div>
            <div className="copyright">
              <p>© {new Date().getFullYear()}, The Suggestions Website - </p>
              <a href="https://peteraw.co.uk"> Peter Ayello-Wright</a>
            </div>
          </div>
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
