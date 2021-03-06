/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"
import { Facebook } from "./Icons"
import { Instagram } from "./Icons"
import { Email } from "./Icons"

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
              <Facebook color="#000" />
              <Instagram color="#000" />
              <Email color="#000" />
            </div>
            <div className="copyright">
              <p>© {new Date().getFullYear()}, The Suggestions Website - </p>
              <a
                rel="noopener noreferrer nofollow"
                target="_blank"
                href="https://peteraw.co.uk"
              >
                {" "}
                Peter Ayello-Wright
              </a>
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
