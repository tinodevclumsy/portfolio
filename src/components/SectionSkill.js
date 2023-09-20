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

export default function About() {
  return (
    <div id="skill" className="container--section container--section-skill">
      <div className="container">
        <div className="inner-container flex flex-wrap">
          <span className="item-skill flex flex-col">
            <FontAwesomeIcon
              className="mb-2 text-white"
              icon={faHtml5}
              size="3x"
            />
            HTML
          </span>
          <span className="item-skill flex flex-col">
            <FontAwesomeIcon
              className="mb-2 text-white"
              icon={faCss3}
              size="3x"
            />
            CSS
          </span>
          <span className="item-skill flex flex-col">
            <FontAwesomeIcon
              className="mb-2 text-white"
              icon={faBootstrap}
              size="3x"
            />
            Bootstrap
          </span>
          <span className="item-skill flex flex-col">
            <FontAwesomeIcon
              className="mb-2 text-white"
              icon={faWordpress}
              size="3x"
            />
            Wordpress
          </span>
          <span className="item-skill flex flex-col">
            <FontAwesomeIcon
              className="mb-2 text-white"
              icon={faJsSquare}
              size="3x"
            />
            JavaScript
          </span>
          <span className="item-skill flex flex-col">
            <FontAwesomeIcon
              className="mb-2 text-white"
              icon={faReact}
              size="3x"
            />
            React.js
          </span>
          <span className="item-skill flex flex-col">
            <FontAwesomeIcon
              className="mb-2 text-white"
              icon={faVuejs}
              size="3x"
            />
            Vue.js
          </span>
        </div>
      </div>
    </div>
  )
}
