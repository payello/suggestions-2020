import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import MobileImage from "../data/mobileImage"

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

const LandingImageContainer = styled.div`
  .landingImageMobile {
    display: none;
  }

  .landingImageDesktop {
    display: block;
  }

  @media (max-width: 767px) {
    .landingImageDesktop {
      display: none;
    }

    .landingImageMobile {
      display: block;
    }
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

  const mobileImage = MobileImage()

  return (
    <>
      {console.log(MobileImage(), data)}
      {data.contentfulAsset && data.contentfulAsset.fixed ? (
        <LandingImageContainer>
          <LandingImageStyles
            src={`https:${data.contentfulAsset.fixed.src}`}
            alt={data.contentfulAsset.title}
            class="landingImageDesktop"
          />
          <h1>The Suggestions</h1>
          <h3>Funk, soul and party music.</h3>
          <LandingImageStyles
            src={`https:${mobileImage.contentfulAsset.fixed.src}`}
            alt={mobileImage.contentfulAsset.title}
            class="landingImageMobile"
          />
        </LandingImageContainer>
      ) : (
        ""
      )}
    </>
  )
}

export default LandingPage
