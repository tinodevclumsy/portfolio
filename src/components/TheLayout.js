import React from "react"
import Header from "./TheHeader"
import Footer from "./TheFooter"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
