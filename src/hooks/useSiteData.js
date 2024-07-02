import { useStaticQuery, graphql } from "gatsby"

const useSiteData = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            menuLinks {
              name
              link
              external
            }
          }
        }
      }
    `
  )


  return site.siteMetadata
}

export default useSiteData
