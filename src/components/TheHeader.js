import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StyledHeader, HeaderContainer, Menu, MenuItem } from "./styled/StyledHeader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

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
  const [isSticky, setSticky] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)

  const updateScroll = () => {
    setSticky((window.scrollY || document.documentElement.scrollTop) > scrollPosition)
    // const direction =(window.scrollY || document.documentElement.scrollTop) > scrollPosition ? 'down' : 'up'
    setScrollPosition(window.scrollY || document.documentElement.scrollTop)
    if(scrollPosition > 0) setMenuOpen(false)
  }
  useEffect(() => {
    window.addEventListener("scroll", updateScroll)
  })

  return (
    <StyledHeader sticky={isSticky} className="header">
      <HeaderContainer className="container flex justify-between items-center relative">
        <div></div>
        <div className="flex items-center">
          <FontAwesomeIcon onClick={() =>setMenuOpen(!isMenuOpen)} className="block cursor-pointer md:hidden" icon={faBars} size="lg" />
          <Menu className="menu--list-top flex md:block" open={isMenuOpen}>
            {site.siteMetadata.menuLinks.map((menu, i) => {
              return (
                <li key={i} className="menu--item inline-block mx-3.5">
                  <MenuItem
                    className="py-5 text-white uppercase"
                    href={menu.link}
                    onClick={() => setMenuOpen(false)}
                  >
                    {menu.name}
                  </MenuItem>
                </li>
              )
            })}
          </Menu>
        </div>
      </HeaderContainer>
    </StyledHeader>
  )
}
