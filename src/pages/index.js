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

import useMarkdownData from "../hooks/useMarkdownData"
import useSiteData from "../hooks/useSiteData"

export default function Home() {
  const { exp, projects, skills } = useMarkdownData()
  const site = useSiteData()

  return (
    <>
      <Head site={site} />
      <Layout site={site}>
        <GlobalStyle />
        <section>
          <Landing />
          <About />
          <Skill skills={skills} />
          <Experience exp={exp} />
          <Project projects={projects} />
          <Contact />
        </section>
      </Layout>
    </>
  )
}
