module.exports = {
  siteMetadata: {
    title: `NodeConf Colombia 2019 | June 21st and 22nd, 2019 - Medellín`,
    titleShort: `NodeConf Colombia 2019`,
    description: `NodeConf Colombia 2019 is the first international event focused on the entire Node.js ecosystem.
    It’s a non-profit event, where our attendees will be sharing in an environment of inclusion and respect, having access to relevant information through talks, workshops, and great experiences with the Colombian Node community.`,
    author: `@NodeConfCo`,
    image: 'https://colombia.nodeconf.com/assets/images/social.png',
    url: 'https://colombia.nodeconf.com/'
  },
  pathPrefix: "/colombia",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline'
  ],
}
