import React from "react"
import Title from "../common/Title"
import SkillBadge from "../common/Badge"
import Link from "../common/Link"
import Icon from "../common/Icon"
import { Item, ProjectThumbnail } from "./Project.styled"
import { getImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import Button from "../common/Button"

const Project = ({ projects }) => {
  return (
    <div
      id="work-project"
      className="container--section container--section-experience relative py-10"
    >
      <div className="container">
        <Title className="text-4xl text-center">PROJECT</Title>
        <div className="inner-container flex flex-wrap">
          {projects.map((item, index) => {
            const { title, stack, description, url, img, github, path } =
              item.frontmatter
            const mainImage = img.length && img[0]

            return (
              <Item key={`project-${index}`}>
                {mainImage ? (
                  <ProjectThumbnail
                    style={{
                      background: `url(${
                        getImage(mainImage).images.fallback.src
                      })`,
                    }}
                  ></ProjectThumbnail>
                ) : (
                  <div></div>
                )}
                <div style={{ padding: "35px" }}>
                  <h3 className="text-2xl">{title}</h3>
                  <p style={{ color: "#999", fontSize: "14px" }}>
                    {description}
                  </p>
                  <div className="flex flex-wrap mt-4">
                    {stack.map((stackItem, stackIndex) => {
                      return (
                        <SkillBadge key={`skill-${index}-${stackIndex}`}>
                          {stackItem}
                        </SkillBadge>
                      )
                    })}
                  </div>
                  <div className="flex flex-wrap mt-2">
                    {url && (
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
                    )}

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
                          <span className="ml-2">View</span>
                        </Link>
                      )
                    })}
                  </div>

                  <div className="text-center">
                    <Button
                      link={`/portfolio/${path}`}
                      message="View Details"
                      additionalStyles={{ fontSize: "14px" }}
                    />
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
