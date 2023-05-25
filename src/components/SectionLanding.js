import React from "react"
// import backgroundVideo from "../assets/videos/test.mp4"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// import {
//   faLinkedIn
// } from '@fortawesome/free-brands-svg-icons'

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Landing() {
  return (
    <div className="container--section container--section-landing section-landing h-screen flex justify-center items-center">
      {/* <video className="absolute video-bg" autoPlay muted loop id="myVideo">
        <source src={backgroundVideo} type="video/mp4" />
      </video> */}
      <div className="container">
        <h1 className="header--title text-8xl">SEUNGJUN LEE</h1>

        <h2 className="text-6xl pt-2">
          FRONT-END DEVELOPER <span className="primary-text">.</span>
        </h2>

        <a className="btn--tino" href="#about">
          Learn More
        </a>
      </div>

      <div className="container--sns-top">
        <a
          className="item--sns d-flex"
          href="www.linkedin.com/in/seungjun-martin-lee-tino-dev"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          className="item--sns d-flex"
          href="https://github.com/tinodevclumsy"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
  )
}
