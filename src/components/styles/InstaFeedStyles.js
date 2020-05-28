import styled from "styled-components"

export const InstaFeedStyles = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  justify-content: center;
  margin: 0 auto;
  margin-top: 1rem;

  .instaContainer {
    width: calc(100% / 3 - 6px);
    height: auto;
    position: relative;
    margin: 0 3px;
    img {
      width: 100%;
    }
  }
`
