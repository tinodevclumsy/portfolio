/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    menuLinks: [
      {
        name: 'About',
        link: '#about'
      },
      {
        name: 'Skill',
        link: '#skill'
      },
      {
        name: 'Work/Project',
        link: '#work-project',
      },
      {
        name: 'Contact',
        link: '#contact'
      }
    ]
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/content/work`,
      },
    },
    `gatsby-transformer-remark`,
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
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
