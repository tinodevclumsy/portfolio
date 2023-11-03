import React from "react"

const Footer = () => {
  return (
    <footer className="pb-2">
      <div className="container">
        <p style={{ fontSize: "12px", opacity: "0.5" }}>
          Copyright © 2023 Designed and Developed by SEUNGJUN LEE.
        </p>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
