import React from "react"
import GlobalStyle from "../styles/globalStyles"

import Head from "../components/Head"
import Layout from "../components/TheLayout"
import Landing from "../components/section/SectionLanding"
import About from "../components/section/SectionAbout"
import Skill from "../components/section/SectionSkill"
import Experience from "../components/section/SectionExperience"
import Project from "../components/section/SectinoProject"
import Contact from "../components/section/SectionContact"

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
