import React from "react"
import styled from "styled-components"

export const Title = styled.h2`
  position: relative;
  margin-bottom: 50px;
  font-weight: 700;
  &::before {
    content: "";
    width: 25px;
    height: 5px;
    background-color: var(--primary-color);
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 3px;
  }
`

export const ExperienceListItem = styled.li`
  position: relative;
  list-style-type: none;
  padding-left: 20px;

  &::before {
    content: "•";
    position: absolute;
    top: 0;
    left: -0;
  }
`
export const SkillBadge = styled.div`
  padding: 5px;
  border-radius: 5px;
  margin-right: 3px;
  margin-bottom: 3px;
  /* background-color: var(--primary-color); */
  background-color: #333;
  color: #fff;
  font-size: 14px;
`

export const ImageContainer = styled.div`
  position: relative;
  width: calc(33.33333% - 10px);
  margin: 5px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  overflow: hidden;
  @media (max-width: 768px) {
    width: calc(100% - 10px);
  }
`

export const ImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`

export const LinkButton = styled.a`
  display: inline-block;
  color: var(--primary-color);
  padding: 5px 10px;
  border: 1px solid var(--primary-color);
  text-align: center;
  font-size: 14px;
  border-radius: 5px;
  -webkit-transition: 0.2s ease-in-out all;
  transition: 0.2s ease-in-out all;

  &:hover {
    background-color: var(--primary-color);
    color: #fff;
  }
`

export const ExpDetailHeader = styled.span`
  position: relative;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    width: 100vw;
    top: 50%;
    background-color: var(--primary-color);
    height: 1px;
    left: calc(100% + 15px);
    -webkit-transition: 0.2s ease-in-out all;
    transition: 0.2s ease-in-out all;
  }
  &:hover::after {
    background-color: #fff;
  }
`

