import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  StyledHeader,
  HeaderContainer,
  Menu,
  MenuItem,
  HeaderOverlay,
} from "./styled/StyledHeader"
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

  const [isSticky, setSticky] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const updateScroll = () => {
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const sticky = scrollTop > 0
      setSticky(sticky);
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", updateScroll)

    return () => {
      window.removeEventListener("scroll", updateScroll)
    }
  }, [])

  return (
    <>
      <StyledHeader $sticky={isSticky} open={isMenuOpen} className="header">
        <HeaderContainer className="container flex justify-between items-center relative">
          <div></div>
          <div className="flex items-center">
            <FontAwesomeIcon
              onClick={() => setMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)}
              className="block cursor-pointer md:hidden"
              icon={faBars}
              size="lg"
            />
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
      <HeaderOverlay open={isMenuOpen} />
    </>
  )
}
