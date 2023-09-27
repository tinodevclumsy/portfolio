/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/tino-portfolio",
  siteMetadata: {
    title: `Seungjun Lee - Front end Developer`,
    description: `Welcome to Seungjun's portfolio website!`,
    // twitterUsername: `@gatsbyjs`,
    // image: `/gatsby-icon.png`,
    // siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-postcss',
  ],
}
