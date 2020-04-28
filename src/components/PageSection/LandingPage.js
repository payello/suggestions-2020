import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const LandingImageStyles = styled.img`
  width: 100%;
`

const LandingPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      contentfulAsset {
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
            alt=""
          />
        </div>
      ) : (
        ""
      )}
      <div>Landing page</div>
    </>
  )
}

export default LandingPage
