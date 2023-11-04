import React from "react"
import styled from "styled-components"

const Text = styled.span`
  color: var(--primary);
  font-family: "Playfair Display", serif;
`
const PrimaryText = ({ text }) => <Text>{text}</Text>

export default PrimaryText
