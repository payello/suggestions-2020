import PropTypes from "prop-types"
import React, {useState} from "react"
import styled from "styled-components"
import { Facebook } from "./Icons"
import { Instagram } from "./Icons"
import { Email } from "./Icons"
import { Link } from "gatsby"
import MdArrowDroprightCircle from "react-ionicons/lib/MdArrowDroprightCircle"
import NavbarLinks from '../components/styles/NavbarLinks'
import NavStyling from '../components/styles/NavStyling'

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
const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 2rem;

  @media (max-width: 768px) {
    display: flex;
  }
`
const Hamburger = styled.div`
  background-color: #0057ad;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #0057ad;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 1rem;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`


const Header = ({ siteTitle }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
       <>
      <NavStyling>
      <div className="nav nav__prime container">
        <div className="logo__wrapper">
          <Link to="/" className="logo">
            Peter A-W
          </Link>
        </div>
        <nav className="nav__list">
          <ul className="navbar"></ul>
          {navbarOpen ? (
            <Navbox>
              <NavbarLinks />
            </Navbox>
          ) : (
            <Navbox open>
              <NavbarLinks />
            </Navbox>
          )}
          <Toggle
            navbarOpen={navbarOpen}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? <Hamburger open /> : <Hamburger />}
          </Toggle>
        </nav>
      </div>
    </NavStyling>
     </>
  )
}



export default Header
