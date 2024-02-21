import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ description, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const metaURL = site.siteMetadata.siteUrl

  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/png" href="./favicon.ico" />
      <title>{defaultTitle}</title>
      <meta name="description" content={metaDescription}></meta>
      <meta name="image" content="./meta-image.png" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content="./meta-image.png" />
      <meta property="og:url" content={metaURL} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content="./meta-image.png" />
    </Helmet>
  )
}

export default Head
