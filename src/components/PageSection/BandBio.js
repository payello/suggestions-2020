import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const BandBioStyles = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

  .bandBioTextContainer {
    width: calc(50% - 10rem);
    padding: 5rem;
    align-self: center;
    border: 2px solid #fff;
    margin: 5rem;
    text-align: left;
  }

  .bandBioImageContainer {
    width: 50%;
  }

  .bandBioImage {
    width: 100%;
  }

  @media (max-width: 1200px) {
    .bandBioTextContainer {
      width: 100%;
    }

    .bandBioImageContainer {
      width: 100%;
    }
  }
`

const BandBio = () => {
  const bandBio = useStaticQuery(graphql`
    query BandBio {
      contentfulBandBio {
        id
        bandBioText {
          content {
            nodeType
            content {
              value
            }
          }
          bandBioText
        }
        bandBioImage {
          fluid {
            src
          }
        }
      }
    }
  `)

  return (
    <BandBioStyles id="bio" className="bandBio">
      <div className="bandBioTextContainer">
        {bandBio.contentfulBandBio.bandBioText.content.map(data => (
          <p>{data.content[0].value}</p>
        ))}
      </div>
      <div className="bandBioImageContainer">
        <img
          className="bandBioImage"
          src={`https://${bandBio.contentfulBandBio.bandBioImage.fluid.src}`}
          alt=""
        />
      </div>
    </BandBioStyles>
  )
}

export default BandBio
