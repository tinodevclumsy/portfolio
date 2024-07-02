import { useStaticQuery, graphql } from "gatsby"

const useMarkdownData = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { frontmatter: { order: ASC } }) {
        edges {
          node {
            id
            frontmatter {
              title
              category
              #exp
              company
              location
              range
              stack
              duty
              link
              img {
                childImageSharp {
                  gatsbyImageData(
                    width: 2940
                    placeholder: BLURRED
                    formats: [WEBP]
                  )
                }
              }
              #project
              description
              url
              github
              path
              #skill
              icon
            }
            html
          }
        }
      }
    }
  `)

  const categorizedData = data.allMarkdownRemark.edges.reduce((acc, edge) => {
    const { category } = edge.node.frontmatter;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(edge.node);
    return acc;
  }, {});

  return categorizedData;
}

export default useMarkdownData
