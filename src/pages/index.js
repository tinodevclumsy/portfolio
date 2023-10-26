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
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Schoolbell&display=swap"
          rel="stylesheet"
        /> */}
        <title>Seungjun Lee - Front end Developer in metro Vancouver</title>
        <meta
          name="description"
          content="Welcome to Seungjun's portfolio website!"
        ></meta>
      </Helmet>
      <Layout>
        <GlobalStyle />
        <section>
          <Landing />
          <About />
          <Skill />
          <Experience />
          <Contact />
        </section>
      </Layout>
    </>
  )
}
