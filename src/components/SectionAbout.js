import React from "react"
import StyledButton from "./StyledButton"

export default function About() {
  return (
    <div id="about">
      <div className="container--section container--section-about py-20">
        <div className="container">
          <div className="container--content m-auto text-center">
            <h2 className="text-4xl mb-2">Hi There!</h2>
            <p className="max-w-4xl mx-auto pt-7 pb-4">
              I am a skilled and dedicated developer with over 2 years of
              professional experience. My expertise lies in front-end web
              development, with proficiency in HTML, CSS, JavaScript, Vue.js,
              and React.js and strong interests in mobile development as well.
              <br />
              <br />
              During my career, I have successfully delivered numerous websites
              and web app projects, collaborating with teams to meet project
              requirements. I am continuously honing my grasp of web development
              principles and best practices, striving to create immaculate and
              efficient code that excels in scalability and maintainability.
              <br />
              <br />I am currently seeking new challenges and opportunities to
              grow my skills as a front-end developer, and I believe my
              experience with React.js, Vue,js, and other front-end frameworks
              gives me a strong foundation to build upon.
            </p>

            <StyledButton message='Contact Me' link='#contact'/>
          </div>
        </div>
      </div>
    </div>
  )
}
