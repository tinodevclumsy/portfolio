import React, { useState, useEffect, useMemo } from "react"
import {
  StyledHeader,
  HeaderContainer,
  Menu,
  MenuItem,
  HeaderOverlay,
  Logo,
} from "./TheHeader.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Header = ({ site }) => {

  const menuLinks = useMemo(
    () => site.menuLinks,
    [site.menuLinks]
  )

  const [isSticky, setSticky] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const updateScroll = () => {
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        const sticky = scrollTop > 0
        setSticky(sticky)
      })
    }
    window.addEventListener("scroll", updateScroll)

    return () => {
      window.removeEventListener("scroll", updateScroll)
    }
  }, [])

  return (
    <>
      <StyledHeader $sticky={isSticky} open={isMenuOpen}>
        <HeaderContainer className="container flex justify-between items-center relative">
          <div>
            <Logo href="/portfolio">SEUNGJUN LEE.</Logo>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              onClick={() => setMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)}
              className="block cursor-pointer md:hidden"
              icon={faBars}
              size="lg"
            />
            <Menu className="menu--list-top flex md:block" open={isMenuOpen}>
              {menuLinks.map((menu, index) => {
                return (
                  <li
                    key={`header-menu-${index}`}
                    className="menu--item inline-block mx-3.5"
                  >
                    <MenuItem
                      className="py-5 text-white uppercase "
                      external={menu.external}
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

export default Header
