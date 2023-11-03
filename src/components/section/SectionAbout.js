import React from "react"
import Button from '../common/Button'

function About() {
  return (
    <div id="about">
      <div className="container--section container--section-about py-20">
        <div className="container">
          <div className="container--content m-auto text-center">
            <h2 className="text-3xl mb-2 md:text-4xl">
              Transforming visions into compelling user interfaces - <span className="primary-text test">
              Front-end Developer</span> with a passion for creating seamless web experiences.
            </h2>
            <p className="max-w-4xl mx-auto pt-7 pb-4">
              I am a skilled and dedicated developer with over <span className="primary-text font-bold">2+ years</span> of
              professional experience. My expertise lies in front-end web
              development, with proficiency in HTML, CSS, JavaScript, Vue.js,
              and React.js and strong interests in mobile development as well.
            </p>
            <Button message="Contact Me" link="#contact" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(About)
