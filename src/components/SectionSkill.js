import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Icon from "./Icon"

const SkillItem = styled.div`
  padding: 15px;
  width: calc(14% - 20px);
  color: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  margin: 10px;
  border-radius: 5px;
  text-align: center;

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }
`

export default function About() {
  const { skills } = useStaticQuery(graphql`
    {
      skills: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/skills/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              icon
            }
            html
          }
        }
      }
    }
  `)
  return (
    <div
      id="skill"
      className="container--section container--section-skill primary-bg py-28"
    >
      <div className="container">
        <div className="inner-container flex flex-wrap justify-center">
          {skills.edges.map((item, index) => {
            return (
              <SkillItem key={`skill-${index}`} className="flex flex-col">
                <Icon className="text-white" iconName={item.node.frontmatter.icon} size="3x"/>
                <span className="mt-2">{item.node.frontmatter.title}</span>
              </SkillItem>
            )
          })}
        </div>
      </div>
    </div>
  )
}
