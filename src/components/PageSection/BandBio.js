import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import LogoFacebook from "react-ionicons/lib/LogoFacebook"
import LogoInstagram from "react-ionicons/lib/LogoInstagram"
import MdMail from "react-ionicons/lib/MdMail"
import { Facebook, Instagram, Email } from "../Icons"

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
      padding: 1rem;
      border-bottom: 1px solid rgb(119, 119, 119);
    }

    .bandBioDesc {
      color: #fff;
      text-align: center;
      margin: 1rem 0;
      font-family: "Crimson Text", serif;
      font-size: 18px;
    }
  }

  .bandBioContactContainer {
    color: #fff;

    h3 {
      text-align: center;
      text-transform: uppercase;
      font-weight: 300;
    }
    .socialLink {
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
      font-weight: 300;

      svg {
        margin-right: 5px;
      }

      &:hover {
        background: #c4a66a;
        color: #000;

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
            <p className="bandBioDesc">{data.content[0].value}</p>
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
              <Facebook color="#fff" title="Facebook" />
              <Instagram color="#fff" title="Instagram" />
              <Email color="#fff" title="Email" />
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
