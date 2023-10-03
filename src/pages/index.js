import React from "react"
import GlobalStyle from "../styles/globalStyles"
import { Helmet } from "react-helmet"
import Layout from "../components/TheLayout"
import Landing from "../components/SectionLanding"
import About from "../components/SectionAbout"
import Skill from "../components/SectionSkill"
import Experience from "../components/SectionExperience"
import Contact from "../components/SectionContact"

export default function Home() {
  return (
    <Layout>
      <GlobalStyle />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Schoolbell&display=swap"
          rel="stylesheet"
        />
        <title>Seungjun Lee - Front end Developer in metro Vancouver</title>
        <meta name="description" content="Welcome to Seungjun's portfolio website!"></meta>
      </Helmet>
      <section>
        <Landing />
        <About />
        <Skill />
        <Experience />
        <Contact />
      </section>
    </Layout>
  )
}
