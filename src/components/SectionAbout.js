import React from "react"
import problemSolving from "../assets/images/problem-solving.jpg"
import criticalThinking from "../assets/images/critical-thinking.jpg"
import responsiveWebsite from "../assets/images/responsive.jpg"
import collaboration from "../assets/images/collaboration.jpg"

export default function About() {
  return (
    <div className="section-container section-about">
      <div className="inner-container">
        <h2 className="text-6xl text-white title-section">Who I am</h2>
      </div>
      <div className="inner-container flex flex-wrap justify-center items-center">
        <div
          className="item-trait w-2/4"
          style={{
            backgroundImage: `url(${problemSolving})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay-trait">
            <h3 className="title-trait">Problem Solving</h3>
          </div>
        </div>
        <div
          className="item-trait w-2/4"
          style={{
            backgroundImage: `url(${criticalThinking})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay-trait">
            <h3 className="title-trait">Critical Thinking</h3>
          </div>
        </div>
        <div
          className="item-trait w-2/4"
          style={{
            backgroundImage: `url(${collaboration})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay-trait">
            <h3 className="title-trait">Collaborative</h3>
          </div>
        </div>
        <div
          className="item-trait w-2/4"
          style={{
            backgroundImage: `url(${responsiveWebsite})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay-trait">
            <h3 className="title-trait">Responsive Website</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
