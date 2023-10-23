import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import portfolioBase from "../assets/images/portfolio-base.webp"
import portfolioOnikon from "../assets/images/portfolio-onikon-01.webp"
import portfolioOnikonTwo from "../assets/images/portfolio-onikon-02.webp"
import portfolioOnikonThree from "../assets/images/portfolio-onikon-03.webp"
import portfolioOnikonFour from "../assets/images/portfolio-onikon-04.webp"

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

const SkillBadge = styled.div`
  padding: 5px;
  border-radius: 5px;
  margin-right: 3px;
  margin-bottom: 3px;
  background-color: var(--primary-color);
  color: #fff;
`
const ImageContainer = styled.div`
  width: calc(50% - 20px);
  margin: 10px;

  @media (max-width: 768px) {
    width: calc(100% - 20px);
  }
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
  const { exp } = useStaticQuery(graphql`
    {
      exp: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/work/" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              stack
              duty
            }
            html
          }
        }
      }
    }
  `)

  console.log(exp)

  return (
    <div
      id="work-project"
      className="container--section container--section-experience pt-10 pb-20"
    >
      <div className="container">
        <div className="inner-container relative flex flex-wrap items-center mb-20">
          {exp.edges.map((item, index) => {
            const { title, company, duty, location, range, stack } =
              item.node.frontmatter
            return (
              // <div
              //   key={`work-${index}`}
              //   className="inner-container relative flex flex-wrap items-center"
              // >
              <div
                key={`work-${index}`}
                className="item-experience pl-0 md:pl-4 w-full md:w-full mt-8 md:mt-0"
              >
                <div className="work-header mb-3">
                  <h4 className="text-3xl">{title}</h4>
                  <h5 className="title-experience text-2xl mb-1">{company}</h5>
                  <p>{location}</p>
                  <p>{range}</p>
                </div>
                <ul>
                  {duty.map((dutyItem, dutyIndex) => (
                    <ExperienceListItem key={`duty-${dutyIndex}`}>{dutyItem}</ExperienceListItem>
                  ))}
                </ul>

                <div className="container--badge flex flex-wrap mt-3">
                  {stack.map((stackItem, stackIndex) => (
                    <SkillBadge key={`stack-${stackIndex}`}>{stackItem}</SkillBadge>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        {/* <div className="inner-container relative flex flex-wrap items-center mb-20">
          <div className="item-experience pl-0 md:pl-4 w-full md:w-full mt-8 md:mt-0">
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
                <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" /> Website
              </LinkButton>
              <LinkButton
                href="https://apps.apple.com/ca/app/onikon/id6444296112"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" />{" "}
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
          <div className="item-screenshot relative w-full md:w-full flex flex-wrap">
            <ImageContainer>
              <img
                src={portfolioOnikon}
                alt="Seungjun Lee's Portfolio Website - Onikon Screenshot"
                className="max-w-full"
                width={2940}
                height={1572}
              />
            </ImageContainer>

            <ImageContainer>
              <img
                src={portfolioOnikonTwo}
                alt="Seungjun Lee's Portfolio Website - Onikon Screenshot"
                className="max-w-full"
                width={2940}
                height={1572}
              />
            </ImageContainer>

            <ImageContainer>
              <img
                src={portfolioOnikonThree}
                alt="Seungjun Lee's Portfolio Website - Onikon Screenshot"
                className="max-w-full"
                width={2940}
                height={1572}
              />
            </ImageContainer>

            <ImageContainer>
              <img
                src={portfolioOnikonFour}
                alt="Seungjun Lee's Portfolio Website - Onikon Screenshot"
                className="max-w-full"
                width={2940}
                height={1572}
              />
            </ImageContainer>
          </div>
        </div>

        <hr className="mb-20" />

        <div className="inner-container flex items-center flex-wrap">
          <div className="item-experience flex flex-col justify-center pl-0 md:pl-4 w-full md:w-full mt-8 md:mt-0">
            <h4 className="title-experience text-2xl mb-3">Vinple</h4>

            <div className="container--external mb-2">
              <LinkButton
                href="https://web.base.town/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" /> Website
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
          <ImageContainer className="item-screenshot">
            <img
              src={portfolioBase}
              alt="Seungjun Lee's Portfolio Website - Vinple Screenshot"
              className="max-w-full"
              width={2940}
              height={1572}
            />
          </ImageContainer>
        </div> */}
      </div>
    </div>
  )
}
