import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const RecordSingleStyle = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 3rem;

  h3 {
    text-align: center;
    color: #fff;
    text-transform: uppercase;
  }

  img {
    width: 100%;
    height: auto;
  }

  .no-audio {
    height: 40px;
  }
`

const RecordsStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const RecordsStyling = () => {
  const records = useStaticQuery(graphql`
    query record {
      allContentfulRecords {
        nodes {
          song_name
          id
          recordIcon {
            fixed {
              src
            }
            file {
              contentType
              fileName
              url
              details {
                size
              }
            }
          }
          song {
            title
            file {
              url
            }
          }
        }
      }
    }
  `)
  return (
    <RecordsStyles>
      {records.allContentfulRecords.nodes.map(record => (
        <RecordSingleStyle key={record.id}>
          {record.song && record.song.title ? (
            <h3>{record.song.title}</h3>
          ) : null}
          {!record.song && record.song_name ? (
            <h3>{record.song_name}</h3>
          ) : null}
          {record.recordIcon && record.recordIcon.fixed.src ? (
            <img src={`https:${record.recordIcon.fixed.src}`} alt="" />
          ) : null}
          {record.song && record.song.file.url ? (
            <audio controls>
              <source src={`https:${record.song.file.url}`} type="audio/mpeg" />
            </audio>
          ) : null}
          {!record.song ? (
            <div className="no-audio">No audio to show</div>
          ) : null}
        </RecordSingleStyle>
      ))}{" "}
    </RecordsStyles>
  )
}

export default RecordsStyling
