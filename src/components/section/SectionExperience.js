import React, { useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronRight,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "../common/Link"
import {
  ExperienceListItem,
  SkillBadge,
  ImageContainer,
  ImageOverlay,
  ExpDetailHeader,
  Title,
} from "../styled/StyledExperience"

const Experience = () => {
  const { exp } = useStaticQuery(graphql`
    {
      exp: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/work/" } }
        sort: { frontmatter: { order: ASC } }
      ) {
        edges {
          node {
            frontmatter {
              title
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
            }
            html
          }
        }
      }
    }
  `)

  const detailRefs = useRef([])
  const stackRefs = useRef([])
  const imageRefs = useRef([])

  function onRefHeaderClick(type, index) {
    const targetRef =
      type === "detail" ? detailRefs : type === "stack" ? stackRefs : imageRefs
    const height = targetRef.current[index].scrollHeight
    const maxHeight = targetRef.current[index].style.maxHeight
    targetRef.current[index].style.maxHeight =
      maxHeight === "0px" ? `${height}px` : "0px"
  }

  return (
    <div
      id="work-project"
      className="container--section container--section-experience relative pt-10"
    >
      <div className="container">
        <Title className="text-4xl text-center">WORK</Title>
        <div className="inner-container relative flex flex-wrap items-center mb-20">
          {exp.edges.map((item, index) => {
            const { title, company, duty, location, range, stack, img, link } =
              item.node.frontmatter
            return (
              <div
                key={`work-${index}`}
                className="item-experience relative pl-0 md:pl-4 w-full md:w-full mt-8 mb-10 md:mt-0"
              >
                <div className="work-header mb-5">
                  <h4 className="text-3xl">{title}</h4>
                  <h5 className="title-experience text-2xl mb-1">{company}</h5>
                  <p style={{ fontSize: "14px", color: "#999" }}>{location}</p>
                  <p style={{ fontSize: "14px", color: "#999" }}>{range}</p>
                </div>
                <div className="container--detail">
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginBottom: "15px",
                    }}
                  >
                    {link.map((git, linkIndex) => {
                      return (
                        <Link
                          className="mr-2"
                          href={git}
                          target="_blank"
                          rel="noreferrer"
                          key={`link-${index}-${linkIndex}`}
                        >
                          <FontAwesomeIcon
                            icon={faUpRightFromSquare}
                            size="sm"
                            className="mr-2"
                          />
                          <span className="ml-2">Visit</span>
                        </Link>
                      )
                    })}
                  </div>
                  <ExpDetailHeader
                    onClick={() => onRefHeaderClick("detail", index)}
                  >
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faChevronRight}
                      size="sm"
                    />
                    Details
                  </ExpDetailHeader>
                  <ul
                    ref={ele => (detailRefs.current[index] = ele)}
                    className="mt-3 overflow-hidden transition"
                    style={{ maxHeight: "0px" }}
                  >
                    {duty.map((dutyItem, dutyIndex) => (
                      <ExperienceListItem key={`duty-${index}-${dutyIndex}`}>
                        {dutyItem}
                      </ExperienceListItem>
                    ))}
                  </ul>
                </div>

                <div className="container--badge mt-3">
                  <ExpDetailHeader
                    onClick={() => onRefHeaderClick("stack", index)}
                  >
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faChevronRight}
                      size="sm"
                    />
                    Stacks
                  </ExpDetailHeader>
                  <div
                    className="flex flex-wrap mt-3 overflow-hidden transition"
                    ref={ele => (stackRefs.current[index] = ele)}
                    style={{ maxHeight: "0px" }}
                  >
                    {stack.map((stackItem, stackIndex) => (
                      <SkillBadge key={`stack-${index}-${stackIndex}`}>
                        {stackItem}
                      </SkillBadge>
                    ))}
                  </div>
                </div>

                <div className="container--featured mt-3">
                  <ExpDetailHeader
                    onClick={() => onRefHeaderClick("image", index)}
                  >
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faChevronRight}
                      size="sm"
                    />
                    Featured Images
                  </ExpDetailHeader>
                  <div
                    className="item-screenshot relative w-full overflow-hidden transition mt-3 md:w-full flex flex-wrap"
                    ref={ele => (imageRefs.current[index] = ele)}
                    style={{ maxHeight: "0px" }}
                  >
                    {img.map((imgItem, imgIndex) => {
                      const image = getImage(imgItem)
                      return (
                        <ImageContainer key={`image-${index}-${imgIndex}`}>
                          <GatsbyImage
                            image={image}
                            alt={`Seungjun Lee Front-end Developer in Metro Vancouver - ${title}${imgIndex}`}
                            className="img"
                            style={{ height: "100%" }}
                          />

                          <ImageOverlay />
                        </ImageContainer>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Experience
