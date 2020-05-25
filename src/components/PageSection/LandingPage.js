import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const LandingImageStyles = styled.img`
  width: 100%;
  margin-top: 5rem;

  @media (max-width: 1200px) {
    margin-top: 10rem;
  }
  @media (max-width: 767px) {
    margin-top: 15rem;
  }
`

const LandingPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      contentfulAsset(title: { eq: "header-logo" }) {
        title
        fixed(width: 1700) {
          src
          width
        }
      }
    }
  `)

  return (
    <>
      {data.contentfulAsset && data.contentfulAsset.fixed ? (
        <div>
          <LandingImageStyles
            src={`https:${data.contentfulAsset.fixed.src}`}
            alt={data.contentfulAsset.title}
          />
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default LandingPage
