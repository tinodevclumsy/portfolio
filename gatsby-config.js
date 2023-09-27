/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: `Seungjun Lee - Front end Developer`,
    description: `Welcome to Seungjun's portfolio website!`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-FCEDXCY30L",
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
}
