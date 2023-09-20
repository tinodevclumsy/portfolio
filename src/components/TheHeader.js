import React, { useState, useEffect } from "react"
import logo from "../assets/images/logo.png"

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop)
  }
  useEffect(() => {
    window.addEventListener("scroll", updateScroll)
  })

  return (
    <header
      className={
        scrollPosition > 0
          ? "header--sticky header fixed top-0 left-0 w-full"
          : "header fixed top-0 left-0 w-full"
      }
    >
      <div className="container flex justify-between items-center">
        <div className="container--image container--logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul className="menu--list-top flex">
          <li className="menu--item inline-block mx-3.5">
            <a className="py-5" href="#about">
              About
            </a>
          </li>

          <li className="menu--item inline-block mx-3.5">
            <a className="py-5" href="#skill">
              Skill
            </a>
          </li>

          <li className="menu--item inline-block mx-3.5">
            <a className="py-5" href="#work-project">
              Work/Project
            </a>
          </li>

          <li className="menu--item inline-block mx-3.5">
            <a className="py-5" href="#contact">
              Contact
            </a>
          </li>
          {/* <a
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
          </a> */}
        </ul>
      </div>
    </header>
  )
}
