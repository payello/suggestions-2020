module.exports = {
  siteMetadata: {
    title: `The Suggestions`,
    description: `Funk / Soul / Disco band based in London, UK. Available for parties, weddings, birthdays etc. Playing music from the den age of soul to the present day.`,
    author: `@thesuggestions`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `uvd4088c8cmx`,
        accessToken: `Q7XCRnmY1yiAQt6yH-EQmOG6kq0219zE0bOq4osSOKA`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/recordSquare.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
