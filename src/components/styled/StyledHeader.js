import React from "react"
import styled, { css } from "styled-components"

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: transparent;
  -webkit-transition: 0.3s ease-in-out all;
  transition: 0.3s ease-in-out all;

  ${props =>
    props.sticky &&
    css`
      background-color: #1e2f56;
      -webkit-box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.1);
    `}
  @media (max-width: 768px) {
    ${props =>
      props.open &&
      css`
        background-color: transparent !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
      `}
  }
`

export const HeaderContainer = styled.div`
  height: 100px;
  z-index: 100;
`

export const Menu = styled.ul`
  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 100%;
    right: 0;
    flex-direction: column;
    text-align: right;
    transform: translateX(100%);
    -webkit-transition: 0.2s ease-in-out all;
    transition: 0.2s ease-in-out all;

    ${props =>
      props.open &&
      css`
        transform: translateX(0);
      `}
  }
`

export const MenuItem = styled.a`
  position: relative;
  display: inline-block;

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

export const HeaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: background 0.3s;
  @media (max-width: 768px) {
    ${props =>
      props.open &&
      css`
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
      `}
  }
`
