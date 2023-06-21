import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"

export default function About() {
  return (
    <div id="about">
      <div className="container--section container--section-about">
        <div className="container">
          <div className="container--content m-auto text-center">
            <FontAwesomeIcon
              className="mb-5 text-white"
              icon={faCode}
              size="3x"
            />

            <h2 className="header--title text-5xl pb-5 text-white">
              HI There,
            </h2>

            <p className="description">
              As a front-end developer with two years of experience, I have a
              strong understanding of HTML, CSS, and JavaScript, as well as
              popular front-end frameworks such as React and Vue. I am
              passionate about creating beautiful and functional websites and
              web applications that provide a seamless user experience.
              <br />
              <br />I am dedicated to writing clean, maintainable, and scalable
              code while always considering the user experience. I am constantly
              seeking new challenges and opportunities to grow my skills as a
              front-end developer, and I believe my experience with React, Vue,
              and other front-end frameworks gives me a strong foundation to
              build upon.
            </p>

            <a className="btn--tino btn--tino-white" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
