import styled from "styled-components"

const NavStyling = styled.header`
  border-bottom: 2px solid #0057ad;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 9999;

  .nav {
    width: 85%;
  }

  .container {
    margin-left: auto;
    margin-right: auto;
  }

  .logo {
    height: 4.5rem;
    width: 5rem;
    display: block;
  }

  .nav__prime {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: static;
    height: 70px;
  }
`

export default NavStyling
