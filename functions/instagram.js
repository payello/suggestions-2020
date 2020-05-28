require("isomorphic-fetch")

const url = `https://www.instagram.com/graphql/query/?query_hash=44efc15d3c13342d02df0b5a9fa3d33f&variables={"id":"3174001547","first":24}`

const cache = {
  lastFetch: 0,
  posts: [],
}

async function getPosts() {
  const timeSinceLastFetch = Date.now() - cache.lastFetch
  if (timeSinceLastFetch <= 1800000) {
    return cache.posts
  }

  const data = await fetch(url).then(res => res.json())
  const posts = slimUpPosts(data)

  cache.lastFetch = Date.now()
  cache.posts = posts
  return posts
}

function slimUpPosts(response) {
  return response.data.user.edge_owner_to_timeline_media.edges.map(edge => ({
    largeImg: edge.node.thumbnail_src,
    thumbnail: edge.node.thumbnail_resources[2].src,
    url: `https://instagram.com/p/${edge.node.shortcode}`,
    caption: edge.node.edge_media_to_caption.edges[0].node.text,
    id: edge.node.id,
  }))
}

exports.handler = async function(event, context, callback) {
  const posts = await getPosts()
  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET",
    },
    body: JSON.stringify(posts),
  })
}
