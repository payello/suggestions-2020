import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const BandBioStyles = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;

  .bandBioTextContainer {
    width: 50%;
    padding: 5rem;
    align-self: center;
    border: 2px solid #fff;
    margin: 5rem;
    text-align: left;
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
    <BandBioStyles className="bandBio">
      <div className="bandBioTextContainer">
        {bandBio.contentfulBandBio.bandBioText.content.map(data => (
          <p>{data.content[0].value}</p>
        ))}
      </div>
      <img
        src={`https://${bandBio.contentfulBandBio.bandBioImage.fluid.src}`}
        alt=""
      />
    </BandBioStyles>
  )
}

export default BandBio
