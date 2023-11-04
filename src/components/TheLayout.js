import React from "react"
import Header from "./TheHeader"
import Footer from "./TheFooter"
import styled from "styled-components"

const Container = styled.div`
  background-color: var(--background);
`
const Layout = ({ children }) => {
  return (
    <Container className="relative z-0 layout">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </Container>
  )
}

export default Layout
