import React from "react"
import backgroundVideo from "../assets/videos/test.mp4"

export default function Landing() {
  return (
    <div className="section-container section-landing h-screen flex justify-center items-center">
      <video className="absolute video-bg" autoPlay muted loop id="myVideo">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="relative inner-container">
        <h1 className="text-8xl text-white">
          HI THERE, I'M <br />
          SEUNGJUN LEE <br />
          FRONT END DEVELOPER
        </h1>
      </div>
    </div>
  )
}
