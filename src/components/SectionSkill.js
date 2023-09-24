import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHtml5,
  faCss3,
  faBootstrap,
  faJsSquare,
  faReact,
  faVuejs,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"

const SkillItem = styled.div`
  padding: 15px;
  width: calc(25% - 20px);
  color: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  margin: 10px;
  border-radius: 5px;
  text-align: center;
`

export default function About() {
  return (
    <div id="skill" className="container--section container--section-skill primary-bg py-28">
      <div className="container">
        <div className="inner-container flex flex-wrap">
          <SkillItem className="flex flex-col">
            <FontAwesomeIcon
              className="mb-2 text-white"
              icon={faHtml5}
              size="3x"
            />
            HTML
          </SkillItem>
          <SkillItem className="flex flex-col">
            <FontAwesomeIcon
              className="mb-2 text-white"
              icon={faCss3}
              size="3x"
            />
            CSS
          </SkillItem>
          <SkillItem className="flex flex-col">
            <FontAwesomeIcon
              className="mb-2 text-white"
              icon={faBootstrap}
              size="3x"
            />
            Bootstrap
          </SkillItem>
          <SkillItem className="flex flex-col">
            <FontAwesomeIcon
              className="mb-2 text-white"
              icon={faWordpress}
              size="3x"
            />
            Wordpress
          </SkillItem>
          <SkillItem className="flex flex-col">
            <FontAwesomeIcon
              className="mb-2 text-white"
              icon={faBootstrap}
              size="3x"
            />
            Wordpress
          </SkillItem>
          <SkillItem className="flex flex-col">
            <FontAwesomeIcon
              className="mb-2 text-white"
              icon={faJsSquare}
              size="3x"
            />
            JavaScript
          </SkillItem>
          <SkillItem className="flex flex-col">
            <FontAwesomeIcon
              className="mb-2 text-white"
              icon={faReact}
              size="3x"
            />
            React.js
          </SkillItem>
          <SkillItem className="flex flex-col">
            <FontAwesomeIcon
              className="mb-2 text-white"
              icon={faVuejs}
              size="3x"
            />
            Vue.js
          </SkillItem>
        </div>
      </div>
    </div>
  )
}
