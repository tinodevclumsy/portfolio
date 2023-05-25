import React from "react"
// import problemSolving from "../assets/images/problem-solving.jpg"
// import criticalThinking from "../assets/images/critical-thinking.jpg"
// import responsiveWebsite from "../assets/images/responsive.jpg"
// import collaboration from "../assets/images/collaboration.jpg"
// "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons"
export default function About() {
  return (
    <div>
      <div className="container--section container--section-about">
        <div className="container">
          <div className="container--content m-auto text-center">
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
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="container--item-trait">
          <div className="item--trait">
            <FontAwesomeIcon icon={faPuzzlePiece} size="4xl"/>
          </div>
        </div>
      </div> */}
    </div>
    // <div className="section-container section-about">
    //   <div className="inner-container">
    //     <h2 className="text-6xl text-white title-section">Who I am</h2>
    //   </div>
    //   <div className="inner-container flex flex-wrap justify-center items-center">
    //     <div
    //       className="item-trait w-2/4"
    //       style={{
    //         backgroundImage: `url(${problemSolving})`,
    //         backgroundPosition: "center",
    //         backgroundSize: "cover",
    //         backgroundRepeat: "no-repeat",
    //       }}
    //     >
    //       <div className="overlay-trait">
    //         <h3 className="title-trait">Problem Solving</h3>
    //       </div>
    //     </div>
    //     <div
    //       className="item-trait w-2/4"
    //       style={{
    //         backgroundImage: `url(${criticalThinking})`,
    //         backgroundPosition: "center",
    //         backgroundSize: "cover",
    //         backgroundRepeat: "no-repeat",
    //       }}
    //     >
    //       <div className="overlay-trait">
    //         <h3 className="title-trait">Critical Thinking</h3>
    //       </div>
    //     </div>
    //     <div
    //       className="item-trait w-2/4"
    //       style={{
    //         backgroundImage: `url(${collaboration})`,
    //         backgroundPosition: "center",
    //         backgroundSize: "cover",
    //         backgroundRepeat: "no-repeat",
    //       }}
    //     >
    //       <div className="overlay-trait">
    //         <h3 className="title-trait">Collaborative</h3>
    //       </div>
    //     </div>
    //     <div
    //       className="item-trait w-2/4"
    //       style={{
    //         backgroundImage: `url(${responsiveWebsite})`,
    //         backgroundPosition: "center",
    //         backgroundSize: "cover",
    //         backgroundRepeat: "no-repeat",
    //       }}
    //     >
    //       <div className="overlay-trait">
    //         <h3 className="title-trait">Responsive Website</h3>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
