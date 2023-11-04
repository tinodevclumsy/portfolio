import React from "react"
import styled from "styled-components"

const CustomButton = styled.a`
  font-size: 20px;
  font-weight: 300;
  margin-top: 25px;
  display: inline-block;
  width: 175px;
  color: var(--primary);
  padding: 10px;
  border: 1px solid var(--primary);
  text-align: center;
  border-radius: 5px;
  -webkit-transition: 0.2s ease-in-out all;
  transition: 0.2s ease-in-out all;
  &:hover {
    color: #fff;
    background-color: var(--primary);
  }
`

const Button = ({ message, link }) => <CustomButton href={link}>{message}</CustomButton>

export default Button
