import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"

const SnsContainer = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
`

export default function Landing() {
  return (
    <div className="container--section container--section-landing section-landing relative h-screen flex justify-center items-center overflow-hidden">
      <div className="container flex flex-col">
        <h1 className="header--title text-5xl md:text-8xl primary-text test">SEUNGJUN LEE</h1>

        <h2 className="text-3xl font-light md:text-6xl">FRONT-END DEVELOPER</h2>
        <h2 className="text-3xl font-light md:text-6xl">BASED IN</h2>
        <h2 className="text-3xl md:text-6xl">METRO VANCOUVER</h2>
      </div>

      <SnsContainer className="absolute flex justify-center items-center">
        <a
          className="item--sns d-flex mx-2.5"
          href="https://www.linkedin.com/in/seungjun-martin-lee-tinodevclumsy/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="primary-text" icon={faLinkedin} size="2x" />
        </a>
        <a
          className="item--sns d-flex mx-2.5"
          href="https://github.com/tinodevclumsy"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="primary-text" icon={faGithub} size="2x" />
        </a>
      </SnsContainer>
    </div>
  )
}
