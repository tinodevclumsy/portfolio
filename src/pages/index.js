import React from "react"
import Layout from "../components/TheLayout"

import Landing from "../components/SectionLanding"
import About from "../components/SectionAbout"
import Skill from "../components/SectionSkill"
import Experience from "../components/SectionExperience"

export default function Home() {
  return (
    <Layout>
      <section>
        <Landing />
        <About />
        <Skill />
        <Experience />
      </section>
    </Layout>
  )
}
