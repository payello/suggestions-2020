import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const EmbedContainerStyling = styled.div`
  .embedContainerStyling {
    display: flex;
    justify-content: center;
    margin: 0 auto;

    iframe {
      width: 100%;
      height: 80vh;
    }
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

  return (
    <>
      <EmbedContainerStyling>
        {VideoEmbed.allContentfulYoutubeEmbeds.edges.map(youtube => (
          <div key={youtube.node.id} className="embedContainerStyling">
            <iframe
              title={youtube.node.youTubeId}
              src={`https://www.youtube.com/embed/${youtube.node.youTubeId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
        ))}
      </EmbedContainerStyling>
    </>
  )
}

export default VideoEmbed
