import React from "react"
import logo from "../assets/images/logo.png"

export default function Header() {
  return (
    <header className="header fixed top-0 left-0 w-full">
      <div className="container flex justify-between items-center">
        <div className="container--image container--logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul className="menu--list-top flex">
          <li
            className="menu--item inline-block mx-3.5"
            href="#about"
          >
            <a className="py-5">About</a>
          </li>

          <li
            className="menu--item inline-block mx-3.5"
            href="#work"
          >
            <a className="py-5">Work</a>
          </li>

          <li
            className="menu--item inline-block mx-3.5"
            href="#project"
          >
            <a className="py-5">Project</a>
          </li>

          <li
            className="menu--item inline-block mx-3.5"
            href="#contact"
          >
            <a className="py-5">Contact</a>
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
