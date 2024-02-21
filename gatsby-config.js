/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/portfolio",
  // siteMetadata: {
  //   title: `SEUNGJUN LEE`,
  //   author: {
  //     name: `SEUNGJUN LEE`,
  //     summary: `FRONT-END DEVELOPER BASED IN METRO VANCOUVER`,
  //   },
  //   description: `SEUNGJUN LEE's website`,
  //   siteUrl: `https://tinodevclumsy.github.io/`,
  //   // social: {
  //   //   twitter: `kylemathews`,
  //   // },
  // },
  siteMetadata: {
    title: "Seungjun Lee - Front-end Developer in Metro Vancouver",
    description: "A skilled and dedicated front end developer from South Korea and curretly in Metro Vancouver. My expertise lies in front-end web development, with proficiency in HTML, CSS, JavaScript, Vue.js, and React.js and strong interests in mobile development as well.",
    siteUrl: "https://tinodevclumsy.github.io/portfolio",
    menuLinks: [
      {
        name: "About",
        link: "/portfolio/#about",
        external: false,
      },
      {
        name: "Skill",
        link: "/portfolio/#skill",
        external: false,
      },
      {
        name: "Work/Project",
        link: "/portfolio/#work-project",
        external: false,
      },
      {
        name: "Contact",
        link: "/portfolio/#contact",
        external: false,
      },
      {
        name: "Blog",
        link: "/",
        external: true,
      },
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-styled-components",
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `${__dirname}/content/project`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-FCEDXCY30L"],
        pluginConfig: {
          head: true,
        },
      },
    },
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
