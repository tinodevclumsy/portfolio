import React from "react"
import GlobalStyle from "../styles/globalStyles"

import Head from "../components/Head"
import Layout from "../components/TheLayout"
import Landing from "../components/section/Landing"
import About from "../components/section/About"
import Skill from "../components/section/Skill"
import Experience from "../components/section/Experience"
import Project from "../components/section/Project"
import Contact from "../components/section/Contact"

export default function Home() {
  return (
    <>
      <Head />
      <Layout>
        <GlobalStyle />
        <section>
          <Landing />
          <About />
          <Skill />
          <Experience />
          <Project />
          <Contact />
        </section>
      </Layout>
    </>
  )
}
