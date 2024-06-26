import React from "react"
import styled from "styled-components"
import Icon from "../common/Icon"

const SkillItem = styled.div`
  padding: 15px;
  width: calc(14% - 20px);
  color: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  margin: 10px;
  border-radius: 5px;
  text-align: center;
  background-color: #333;

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }
`

const About = ({ skills }) => {
  return (
    <div
      id="skill"
      className="container--section container--section-skill pb-28"
    >
      <div className="container">
        <div className="inner-container flex flex-wrap justify-center">
          {skills.map((item, index) => {
            return (
              <SkillItem key={`skill-${index}`} className="flex flex-col">
                <Icon
                  className="text-white"
                  iconName={item.frontmatter.icon}
                  size="3x"
                />
                <span className="mt-2">{item.frontmatter.title}</span>
              </SkillItem>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default React.memo(About)
