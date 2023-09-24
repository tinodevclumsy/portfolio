import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import Lottie from "lottie-react"
import smilieAnimation from "../assets/smile.json"
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
      <div className="container flex flex-col items-center">
        <h1 className="header--title text-8xl">SEUNGJUN LEE</h1>

        <h2 className="text-6xl pt-2">FRONT-END DEVELOPER</h2>

        <Lottie animationData={smilieAnimation} className="animation-main max-w-sm" />
      </div>

      <SnsContainer className="absolute flex justify-center items-center">
        <a
          className="item--sns d-flex mx-2.5"
          href="https://www.linkedin.com/in/seungjun-martin-lee-tinodevclumsy/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          className="item--sns d-flex mx-2.5" 
          href="https://github.com/tinodevclumsy"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </SnsContainer>
      {/* <div className="container--sns-top absolute flex justify-center items-center"></div> */}
    </div>
  )
}
