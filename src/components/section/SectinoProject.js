import React from "react"
import Title from "../common/Title"
import SkillBadge from "../common/Badge"
import Link from "../common/Link"
import Icon from "../common/Icon"
import { Item } from "../styled/StyledProject"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

const Project = () => {
  const { project } = useStaticQuery(graphql`
    {
      project: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/project/" } }
        sort: { frontmatter: { order: ASC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              stack
              description
              url
              github
              img {
                childImageSharp {
                  gatsbyImageData(
                    width: 1200
                    placeholder: BLURRED
                    formats: [WEBP]
                  )
                }
              }
            }
            html
          }
        }
      }
    }
  `)

  console.log(project)

  return (
    <div
      id="work-project"
      className="container--section container--section-experience relative py-10"
    >
      <div className="container">
        <Title className="text-4xl text-center">PROJECT</Title>
        <div className="inner-container flex flex-wrap">
          {project.edges.map((item, index) => {
            const { title, stack, description, url, img, github } =
              item.node.frontmatter
            const mainImage = img.length && img[0]
            console.log(stack)

            return (
              <Item key={`project-${index}`}>
                {mainImage ? (
                  <GatsbyImage image={getImage(mainImage)} alt="Seungjun Lee"></GatsbyImage>
                ) : (
                  <div></div>
                )}
                {/* {img.map((imgItem, imgIndex) => {
                  const image = getImage(imgItem)
                  return (
                    <ImageContainer key={`image-${index}-${imgIndex}`}>
                      <GatsbyImage image={image} alt={title} className="img" />

                      <ImageOverlay />
                    </ImageContainer>
                  )
                })} */}
                <div style={{ padding: "35px" }}>
                  <h3 className="text-2xl">{title}</h3>
                  <p style={{ color: "#999" }}>{description}</p>
                  <div className="flex flex-wrap mt-4">
                    {stack.map((stackItem, stackIndex) => {
                      return <SkillBadge>{stackItem}</SkillBadge>
                    })}
                  </div>
                  <div className="flex flex-wrap mt-2">
                    <Link
                      className="mr-1"
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faUpRightFromSquare}
                        size="sm"
                        className="mr-2"
                      />
                      Visit
                    </Link>

                    {github.map((git, gitIndex) => {
                      return (
                        <Link
                          className="mr-2"
                          href={git}
                          target="_blank"
                          rel="noreferrer"
                          key={`github-${index}-${gitIndex}`}
                        >
                          <Icon
                            className="mr-2"
                            iconName="fa-square-github"
                            size="lg"
                          />
                          <span className="ml-2">
                            View
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </Item>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Project
