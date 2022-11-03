import React from "react"

export default function Header() {
  return (
    <div className="header fixed top-0 left-0 w-full">
      <div className="inner-header inner-container flex justify-between items-center">
        <div className="image-container logo-container">
          <img src="" alt="Logo" />
        </div>

        <div className="header-menu flex">
          <a
            className="menu-item inline-block py-5 mx-3.5 text-white"
            href="#home"
          >
            Home
          </a>
          <a
            className="menu-item inline-block py-5 mx-3.5 text-white"
            href="#about"
          >
            About
          </a>
          <a
            className="menu-item inline-block py-5 mx-3.5 text-white"
            href="#skill"
          >
            Skill
          </a>
          <a
            className="menu-item inline-block py-5 mx-3.5 text-white"
            href="#work"
          >
            Work
          </a>
          <a
            className="menu-item inline-block py-5 mx-3.5 text-white"
            href="#project"
          >
            Project
          </a>
          <a
            className="menu-item inline-block py-5 mx-3.5 text-white"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}
