import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

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

const HeaderContainer = styled.div`
  height: 100px;
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

export default function Header() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `
  )

  const [scrollPosition, setScrollPosition] = useState(0)
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop)
  }
  useEffect(() => {
    window.addEventListener("scroll", updateScroll)
  })

  return (
    <StyledHeader sticky={scrollPosition > 0 ? 1 : 0} className="header">
      <HeaderContainer className="container flex justify-between items-center">
        <ul className="menu--list-top flex">
          {site.siteMetadata.menuLinks.map((menu, i) => {
            return (
              <li key={i} className="menu--item inline-block mx-3.5">
                <MenuItem className="py-5" href={menu.link}>
                  {menu.name}
                </MenuItem>
              </li>
            )
          })}
        </ul>
      </HeaderContainer>
    </StyledHeader>
  )
}
