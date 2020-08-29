import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavbarLinkStyle = styled.li`
  margin: 2rem;
  font-size: 2rem;
  list-style-type: none;
  height: 2rem;

  a:focus:after,
  a:hover:after {
    background-color: #0057ad;
    background-image: #0057ad;
    content: "";
    display: block;
    height: 0.21111em;
    width: 100%;
  }

  .navbar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  a {
    color: #0057ad;
    text-decoration: none;
    font-weight: 300;
  }

  a:hover {
    fill: #222;
  }

  .content {
    margin: 3rem 5rem;
  }
`

const NavbarLinks = () => (
  <>
    <NavbarLinkStyle className="navbar__item">
      <Link to="/about">About</Link>
    </NavbarLinkStyle>
    {/* <NavbarLinkStyle className="navbar__item">
      <Link to="/blog">Blog</Link>
    </NavbarLinkStyle> */}
    <NavbarLinkStyle className="navbar__item">
      <Link to="experience">CV</Link>
    </NavbarLinkStyle>
    <NavbarLinkStyle className="navbar__item">
      <Link to="/projects">Projects</Link>
    </NavbarLinkStyle>
    <NavbarLinkStyle className="navbar__item">
      <Link to="/contact">Contact</Link>
    </NavbarLinkStyle>
  </>
)
export default NavbarLinks
