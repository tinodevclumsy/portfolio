import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
/* *,
:after,
:before {
  font-family: "Schoolbell", cursive;
} */
:root {
  /* --primary-color: #66a1ee; */
  --primary-color: #000;
}
.primary-text {
  color: var(--primary-color);
}
.primary-bg {
  background-color: var(--primary-color);
}
.container {
  width: 100%;
  max-width: 1280px;
  padding: 0 15px;
  margin: auto;
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
