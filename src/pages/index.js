import React from "react"
import GlobalStyle from "../styles/globalStyles"
import { Helmet } from "react-helmet"
import Layout from "../components/TheLayout"
import Landing from "../components/section/SectionLanding"
import About from "../components/section/SectionAbout"
import Skill from "../components/section/SectionSkill"
import Experience from "../components/section/SectionExperience"
import Contact from "../components/section/SectionContact"

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
        <link rel="icon" type="image/png" href="./favicon.ico" />
        <title>Seungjun Lee - Front end Developer in metro Vancouver</title>
        <meta
          name="description"
          content="Welcome to Seungjun's portfolio website!"
        ></meta>
        <meta name="image" content="./meta-image.png" />

        <meta
          property="og:description"
          content="Welcome to Seungjun's portfolio website!"
        />
        <meta property="og:image" content="./meta-image.png" />
        <meta
          property="og:url"
          content="https://tinodevclumsy.github.io/portfolio"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Seungjun Lee - Front end Developer in metro Vancouver"
        />
        <meta
          name="twitter:description"
          content="Welcome to Seungjun's portfolio website!"
        />
        <meta name="twitter:image" content="./meta-image.png" />
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
