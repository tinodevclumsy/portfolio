import React from "react"
import Header from "./TheHeader"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        { children }
      </div>
      {/* <footer>
        <p>Copyright 2021 Life Spice.</p>
        <p>All rights reserved.</p>
      </footer> */}
    </div>
  )
}