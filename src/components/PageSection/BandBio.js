import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import LogoFacebook from "react-ionicons/lib/LogoFacebook"
import LogoInstagram from "react-ionicons/lib/LogoInstagram"
import MdMail from "react-ionicons/lib/MdMail"

const BandBioStyles = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

  .bandBioTextContainer {
    width: calc(50% - 10rem);
    padding: 0 5rem;
    align-self: center;
    text-align: left;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .innerTextContainer {
      border: 2px solid #fff;
      padding: 2rem;
      margin: 2rem 0;
    }

    p {
      color: #fff;
    }
  }

  .bandBioContactContainer {
    color: #fff;

    h3 {
      text-align: center;
      text-transform: uppercase;
    }

    .bandBioDesc {
      margin: 1rem 0;
      color: #fff;
    }
    a {
      color: #fff;
      margin: 0 auto;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 1rem;
      border-radius: 5px;
      width: 125px;
      text-align: center;

      svg {
        margin-right: 5px;
      }

      &:hover {
        background: gold;
        color: black;

        svg {
          fill: black;
        }
      }
    }
  }

  .bandBioImageContainer {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
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
        <div className="innerTextContainer">
          {bandBio.contentfulBandBio.bandBioText.content.map(data => (
            <p>{data.content[0].value}</p>
          ))}
        </div>

        <div className="bandBioContactContainer">
          <div className="innerTextContainer">
            <h3>Contact us</h3>
            <p className="bandBioDesc">
              To book our soul funk cover band for your party, do get in touch
              with us.
            </p>
            <div className="socialContainer">
              <a href="https://facebook.com">
                <LogoFacebook color="#fff" fontSize="24px" /> Facebook
              </a>
              <a href="https:instagram.com">
                <LogoInstagram color="#fff" fontSize="24px" /> Instagram
              </a>
              <a href="https:instagram.com">
                <MdMail color="#fff" fontSize="24px" /> Email
              </a>
            </div>
          </div>
        </div>
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
