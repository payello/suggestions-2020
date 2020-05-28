import React, { useState, useEffect } from "react"
import { InstaFeedStyles } from "../styles/InstaFeedStyles"

// const url = `http://localhost:9000/.netlify/functions/instagram`
const url = `/.netlify/functions/instagram`

function useInstagram() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data => {
        return setPosts(data)
      })
      .catch(err => console.log("err", err))
  }, [])
  return posts
}

export default function InstaFeed() {
  const instagram = useInstagram()

  return (
    <InstaFeedStyles>
      {instagram.map(insta => (
        <div key={insta.id} className="instaContainer">
          <a
            rel="nofollow noreferrer"
            target="_blank"
            href={insta.url}
            key={insta.id}
          >
            <img loading="lazy" src={insta.thumbnail} alt={insta.caption} />
          </a>
        </div>
      ))}
    </InstaFeedStyles>
  )
}
