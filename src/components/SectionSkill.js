import React from "react"

export default function About() {
  return (
    <div className="section-container section-skill">
      <div className="inner-container">
        <h2 className="text-6xl text-white title-section">
          What I can
        </h2>
      </div>
      <div className="inner-container flex flex-wrap">
        <span className="item-skill text-white">HTML</span>
        <span className="item-skill text-white">CSS</span>
        <span className="item-skill text-white">Bootstrap</span>
        <span className="item-skill text-white">tailwindCSS</span>
        <span className="item-skill text-white">JavaScript</span>
        <span className="item-skill text-white">React.js</span>
        <span className="item-skill text-white">Vue.js</span>
      </div>
    </div>
  )
}
