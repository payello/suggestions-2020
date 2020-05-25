import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import LogoFacebook from "react-ionicons/lib/LogoFacebook"
import { Facebook } from "./Icons"
import { Instagram } from "./Icons"
import { Email } from "./Icons"
import LogoInstagram from "react-ionicons/lib/LogoInstagram"
import MdMail from "react-ionicons/lib/MdMail"
import MdArrowDroprightCircle from "react-ionicons/lib/MdArrowDroprightCircle"

const NavStyles = styled.nav`
  border-bottom: 1px solid #c0c0c0;
  width: 100%;
  background-color: #030708;

  ul {
    display: flex;
    justify-content: flex-start;
    list-style-type: none;
    padding: 1rem 5rem;

    li {
      margin: 1rem 2rem;
      font-weight: 300;
      text-align: center;

      a {
        text-transform: uppercase;
      }

      &:hover {
        a {
          color: #fff;
        }
      }

      a {
        text-decoration: none;
      }
    }
  }
  span.navbar-heading {
    text-transform: uppercase;
    color: #fff;
    display: flex;
    justify-content: center;
    svg {
      margin: 0 1rem;
    }
  }

  @media (max-width: 1200px) {
    .navbar-links {
      flex-wrap: wrap;
      justify-content: center;

      &__item-title {
        width: 100%;
      }
    }
  }

  @media (max-width: 767px) {
    .navbar-links {
      padding: 2rem 0;
    }

    .navbar-links__item {
      width: 66px;
    }

    .navbar-links__item-title {
      width: 100%;
    }
  }
`

const SocialIcons = styled.div`
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);

  svg {
    margin: 0 1rem;

    &:hover {
      fill: #c0c0c0;
    }
  }

  @media (max-width: 767px) {
    top: unset;
    bottom: -5px;
    right: unset;
    left: 50%;
    transform: translate(-50%, 0);
  }
`

const HeaderStyles = styled.header`
  position: relative;
  position: fixed;
  width: 100%;
  z-index: 9999;
`

const Header = ({ siteTitle }) => {
  return (
    <HeaderStyles>
      <NavStyles>
        <ul className="navbar-links">
          <li className="navbar-links__item navbar-links__item-title">
            <a href="#">
              <span className="navbar-heading">
                <MdArrowDroprightCircle color="#fff" />
                The Suggestions
              </span>
            </a>
          </li>
          <li className="navbar-links__item">
            <a href="#bio">Bio</a>
          </li>
          <li className="navbar-links__item">
            <a href="#tracks">Tracks</a>
          </li>
          <li className="navbar-links__item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </NavStyles>
      <SocialIcons>
        <Facebook color="#C4A66A" />
        <Instagram color="#C4A66A" />
        <Email color="#C4A66A" />
      </SocialIcons>
    </HeaderStyles>
  )
}

// gold

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
