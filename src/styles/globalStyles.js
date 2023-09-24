import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*,
:after,
:before {
  font-family: "Schoolbell", cursive;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  margin: 0;
}
:root {
  --primary-color: #66a1ee;
}
.primary-text {
  color: var(--primary-color);
}
.primary-bg {
  background-color: var(--primary-color);
}
html {
  font-size: 16px;
  scroll-behavior: smooth;
}
a {
  text-decoration: none !important;
  color: #000;
  cursor: pointer;
}
p {
  line-height: 1.8em;
}
ol,
ul {
  list-style: none;
  padding-left: 0;
  list-style-type: none;
}

`

export default GlobalStyle
