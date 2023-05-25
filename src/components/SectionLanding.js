import React from "react"
import backgroundVideo from "../assets/videos/test.mp4"

export default function Landing() {
  return (
    <div className="container--section container--section-landing section-landing h-screen flex justify-center items-center">
      {/* <video className="absolute video-bg" autoPlay muted loop id="myVideo">
        <source src={backgroundVideo} type="video/mp4" />
      </video> */}
      <div className="container">
        <h1 className="header--title text-8xl">SEUNGJUN LEE</h1>

        <h2 className="text-6xl pt-2">FRONT-END DEVELOPER <span className="primary-text">.</span></h2>

        <a className="btn--tino">Learn More</a>
      </div>
    </div>
  )
}
