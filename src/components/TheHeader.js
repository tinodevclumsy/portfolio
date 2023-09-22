import React, { useState, useEffect } from "react"
import logo from "../assets/images/logo.png"
import styled, { css } from "styled-components"

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 100;
  -webkit-transition: 0.2s ease-in-out all;
  transition: 0.2s ease-in-out all;

  ${props =>
    props.sticky &&
    css`
      -webkit-box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.1);
    `}
`

const MenuItem = styled.a`
  position: relative;

  &:hover {
    &::before {
      width: 100%;
    }
  }

  &:before {
    height: 2px;
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 0;
    background: var(--primary-color);
    -webkit-transition: 0.2s ease-in-out all;
    transition: 0.2s ease-in-out all;
  }
`

const Logo = styled.div`
  max-width: 75px;
`

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop)
  }
  useEffect(() => {
    window.addEventListener("scroll", updateScroll)
  })

  return (
    <StyledHeader
      sticky={scrollPosition > 0}
      className="header"
    >
      <div className="container flex justify-between items-center">
        <Logo>
          <img src={logo} alt="Seungjun Lee's Portfolio Website - Logo" />
        </Logo>

        <ul className="menu--list-top flex">
          <li className="menu--item inline-block mx-3.5">
            <MenuItem className="py-5" href="#about">
              About
            </MenuItem>
          </li>

          <li className="menu--item inline-block mx-3.5">
            <MenuItem className="py-5" href="#skill">
              Skill
            </MenuItem>
          </li>

          <li className="menu--item inline-block mx-3.5">
            <MenuItem className="py-5" href="#work-project">
              Work/Project
            </MenuItem>
          </li>

          <li className="menu--item inline-block mx-3.5">
            <MenuItem className="py-5" href="#contact">
              Contact
            </MenuItem>
          </li>
        </ul>
      </div>
    </StyledHeader>
  )
}
