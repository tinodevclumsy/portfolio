import React from "react"
import Lottie from "lottie-react"
import experienceAnimation from "../assets/exp.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import portfolioBase from "../assets/images/portfolio-base.webp"
import portfolioOnikon from "../assets/images/portfolio-onikon-01.webp"
import portfolioOnikonTwo from "../assets/images/portfolio-onikon-02.webp"
import portfolioOnikonThree from "../assets/images/portfolio-onikon-03.webp"
import portfolioOnikonFour from "../assets/images/portfolio-onikon-04.webp"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ExperienceListItem = styled.li`
  position: relative;
  list-style-type: none;
  padding-left: 20px;

  &::before {
    content: "•";
    position: absolute;
    top: 0;
    left: -0;
  }
`

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const SkillBadge = styled.div`
  padding: 5px;
  border-radius: 5px;
  margin-right: 3px;
  margin-bottom: 3px;
  background-color: var(--primary-color);
  color: #fff;
`

const LinkButton = styled.a`
  display: inline-block;
  color: var(--primary-color);
  padding: 5px 10px;
  border: 1px solid var(--primary-color);
  text-align: center;
  font-size: 14px;
  border-radius: 5px;
  -webkit-transition: 0.2s ease-in-out all;
  transition: 0.2s ease-in-out all;

  &:hover {
    background-color: var(--primary-color);
    color: #fff;
  }
`

export default function Experience() {
  return (
    <div
      id="work-project"
      className="container--section container--section-experience pt-10 pb-20"
    >
      <div className="container">
        <Lottie
          animationData={experienceAnimation}
          className="max-w-sm m-auto"
        />
        <div className="inner-container relative flex flex-wrap items-center mb-20">
          <div className="item-screenshot relative w-full md:w-1/2">
            <Slider {...settings} className="overflow-hidden">
              <div>
                <img
                  src={portfolioOnikon}
                  alt="Seungjun Lee's Portfolio Website - Onikon Screenshot"
                  className="max-w-full"
                  width={2940}
                  height={1572}
                />
              </div>

              <div>
                <img
                  src={portfolioOnikonTwo}
                  alt="Seungjun Lee's Portfolio Website - Onikon Screenshot"
                  className="max-w-full"
                  width={2940}
                  height={1572}
                />
              </div>

              <div>
                <img
                  src={portfolioOnikonThree}
                  alt="Seungjun Lee's Portfolio Website - Onikon Screenshot"
                  className="max-w-full"
                  width={2940}
                  height={1572}
                />
              </div>

              <div>
                <img
                  src={portfolioOnikonFour}
                  alt="Seungjun Lee's Portfolio Website - Onikon Screenshot"
                  className="max-w-full"
                  width={2940}
                  height={1572}
                />
              </div>
            </Slider>
          </div>
          <div className="item-experience pl-0 md:pl-4 w-full md:w-1/2 mt-8 md:mt-0">
            <h4 className="title-experience text-2xl mb-3">
              ONIKON Creative Inc.
            </h4>
            <div className="container--external mb-2 flex">
              <LinkButton
                className="mr-1"
                href="https://onikon.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare} size="md" /> Website
              </LinkButton>
              <LinkButton
                href="https://apps.apple.com/ca/app/onikon/id6444296112"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare} size="md" />{" "}
                Application
              </LinkButton>
            </div>

            <ul>
              <ExperienceListItem>
                Developed and maintained Front-end side on internal CRM project
                with Vuejs and Vuex
              </ExperienceListItem>
              <ExperienceListItem>
                Developed real estate IDX plugin, dashboard and implemented it
                on websites
              </ExperienceListItem>
              <ExperienceListItem>
                Developed an application based on Vuejs and Quasar framework for
                clients to schedule company's services
              </ExperienceListItem>
              <ExperienceListItem>
                Translated UX/UI designs to actual codes
              </ExperienceListItem>
              <ExperienceListItem>
                Developed, delivered and maintained interactive and responsive
                websites with HTML, CSS, JS, JQuery and Wordpress
              </ExperienceListItem>
              <ExperienceListItem>
                Created and maintained Wordpress theme, plugins
              </ExperienceListItem>
            </ul>

            <div className="container--badge flex flex-wrap mt-3">
              <SkillBadge>HTML/CSS</SkillBadge>
              <SkillBadge>Vue.js</SkillBadge>
              <SkillBadge>Vuex/Pinia</SkillBadge>
              <SkillBadge>Nuxt.js</SkillBadge>
              <SkillBadge>Wordpress</SkillBadge>
              <SkillBadge>PHP</SkillBadge>
            </div>
          </div>
        </div>

        <hr className="mb-20" />

        <div className="inner-container flex items-center flex-wrap">
          <div className="item-screenshot w-full md:w-1/2">
            <img
              src={portfolioBase}
              alt="Seungjun Lee's Portfolio Website - Vinple Screenshot"
              className="max-w-full"
              width={2940}
              height={1572}
            />
          </div>
          <div className="item-experience flex flex-col justify-center pl-0 md:pl-4 w-full md:w-1/2 mt-8 md:mt-0">
            <h4 className="title-experience text-2xl mb-3">Vinple</h4>

            <div className="container--external mb-2">
              <LinkButton
                href="https://web.base.town/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare} size="md" /> Website
              </LinkButton>
            </div>
            <ul>
              <ExperienceListItem>
                Worked in a team developing a communication app for students in
                BC
              </ExperienceListItem>
              <ExperienceListItem>
                Developed and maintained web app with React and mobile
                application with React Native
              </ExperienceListItem>
              <ExperienceListItem>
                Collaborated in agile environment based on Git and Jira
              </ExperienceListItem>
            </ul>

            <div className="container--badge flex flex-wrap mt-3">
              <SkillBadge>React.js</SkillBadge>
              <SkillBadge>React Native</SkillBadge>
              <SkillBadge>Redux</SkillBadge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
