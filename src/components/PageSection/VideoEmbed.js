import React from "react"
import useWindowDimensions from "../Hooks"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const EmbedContainerStyling = styled.div`
  .embedContainerStyling {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`

const VideoEmbed = () => {
  const VideoEmbed = useStaticQuery(graphql`
    query Videos {
      allContentfulYoutubeEmbeds {
        edges {
          node {
            id
            youtubeEmbedLink {
              youtubeEmbedLink
            }
            youTubeId
          }
        }
      }
    }
  `)

  const { height, width } = useWindowDimensions()

  return (
    <>
      <EmbedContainerStyling>
        {VideoEmbed.allContentfulYoutubeEmbeds.edges.map(youtube => (
          <div className="embedContainerStyling">
            <iframe
              title={youtube.node.youTubeId}
              width={height * 1.5}
              height={height * 0.9}
              src={`https://www.youtube.com/embed/${youtube.node.youTubeId}`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ))}
      </EmbedContainerStyling>
    </>
  )
}

export default VideoEmbed
