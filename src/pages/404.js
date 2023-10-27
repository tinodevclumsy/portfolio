import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"
import Button from "../components/common/Button"

const SnsContainer = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
`

export default function Landing() {
  return (
    <div className="container--section container--section-landing section-landing relative h-screen flex justify-center items-center overflow-hidden">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-4xl">NOT FOUND</h1>

        <Button message="Back to Home" link="/" />
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
    </div>
  )
}
