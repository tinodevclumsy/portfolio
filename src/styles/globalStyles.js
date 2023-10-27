import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
/* *,
:after,
:before {
  font-family: "Schoolbell", cursive;
} */

* {
  font-family: 'Montserrat', sans-serif;
}
:root {
  /* --primary-color: #66a1ee; */
  --primary-color: #e7c2bf;
}
.test {
  font-family: 'Playfair Display', serif;
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
.transition {
  -webkit-transition: 0.2s ease-in-out all;
  transition: 0.2s ease-in-out all;
}
html {
  position: relative;
  font-size: 16px;
  scroll-behavior: smooth;
  background-color: #1E2F56;
  color: #FFFFE0;
  overflow-x: hidden;
}
body {
  position: relative;
  overflow-x: hidden;
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
