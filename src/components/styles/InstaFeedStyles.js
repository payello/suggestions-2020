import styled from "styled-components"

export const InstaFeedStyles = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .instaContainer {
    width: 25%;
    height: auto;
    position: relative;
    img {
      width: 100%;
    }

    /* section.instaOverlay {
      display: none;
    }
    .instaContainer:hover {
      section.instaOverlay {
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        z-index: 9999;
        background-color: #333;
        height: 100%;
        color: red;
        padding: 5px;
        transform: translateY(-50%);
      }
    } */
  }
`
