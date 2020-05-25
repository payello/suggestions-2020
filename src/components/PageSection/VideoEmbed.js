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
          <div key={youtube.node.id} className="embedContainerStyling">
            <iframe
              title={youtube.node.youTubeId}
              width={width ? width * 0.9 : 700}
              height={height ? height * 0.9 : 500}
              src={`https://www.youtube.com/embed/${youtube.node.youTubeId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </EmbedContainerStyling>
    </>
  )
}

export default VideoEmbed
