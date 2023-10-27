import React from "react"
import styled, { css } from "styled-components"

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #1e2f56;
  z-index: 100;
  -webkit-transition: 0.3s ease-in-out all;
  transition: 0.3s ease-in-out all;

  ${props =>
    props.sticky &&
    css`
      top: -100px;
      /* -webkit-box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.1); */
    `}
`

export const HeaderContainer = styled.div`
  height: 100px;
`

export const MenuItem = styled.a`
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
