import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {StyledHeader, HeaderContainer, MenuItem} from './styled/StyledHeader'

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
                <MenuItem className="py-5 text-white uppercase" href={menu.link}>
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
