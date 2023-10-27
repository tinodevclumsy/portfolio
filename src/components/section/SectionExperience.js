import React, { useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUpRightFromSquare,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  ExperienceListItem,
  SkillBadge,
  ImageContainer,
  ImageOverlay,
  LinkButton,
  ExpDetailHeader,
  Title,
} from "../styled/StyledExperience"

export default function Experience() {
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
              img {
                childImageSharp {
                  gatsbyImageData(
                    width: 2940
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
    const height = targetRef.current[index].clientHeight
      ? targetRef.current[index].clientHeight
      : targetRef.current[index].scrollHeight
    const maxHeight = targetRef.current[index].style.maxHeight
    targetRef.current[index].style.maxHeight =
      maxHeight === "0px" ? `${height}px` : "0px"
  }

  return (
    <div
      id="work-project"
      className="container--section container--section-experience pt-10"
    >
      <div className="container">
        <Title className="text-4xl text-center">WORK</Title>
        <div className="inner-container relative flex flex-wrap items-center mb-20">
          {exp.edges.map((item, index) => {
            const { title, company, duty, location, range, stack, img } =
              item.node.frontmatter
            return (
              <div
                key={`work-${index}`}
                className="item-experience pl-0 md:pl-4 w-full md:w-full mt-8 mb-10 md:mt-0"
              >
                <div className="work-header mb-5">
                  <h4 className="text-3xl">{title}</h4>
                  <h5 className="title-experience text-2xl mb-1">{company}</h5>
                  <p style={{fontSize: '14px', color: '#999'}}>{location}</p>
                  <p style={{fontSize: '14px', color: '#999'}}>{range}</p>
                </div>
                <div className="container--detail">
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
                      <ExperienceListItem key={`duty-${dutyIndex}`}>
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
                      <SkillBadge key={`stack-${stackIndex}`}>
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
                            alt={title}
                            className="img"
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

/* <div className="container--external mb-2 flex">
              <LinkButton
                className="mr-1"
                href="https://onikon.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" /> Website
              </LinkButton>
              <LinkButton
                href="https://apps.apple.com/ca/app/onikon/id6444296112"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" />{" "}
                Application
              </LinkButton>
            </div> */
