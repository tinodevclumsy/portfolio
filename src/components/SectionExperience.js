import React from "react"
import Lottie from "lottie-react"
import experienceAnimation from "../assets/exp.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

export default function Experience() {
  return (
    <div
      id="work-project"
      className="container--section container--section-experience pt-10 pb-20"
    >
      <div className="container">
        <Lottie animationData={experienceAnimation} className="animation-exp" />
        <div className="inner-container flex mb-6">
          <div className="item-screenshot w-1/2"></div>
          <div className="item-experience w-1/2">
            <h4 className="title-experience text-2xl mb-3">
              ONIKON Creative Inc.
            </h4>
            <div className="container--external mb-2 flex">
              <a
                className="btn--external mr-1"
                href="https://onikon.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare} size="md" /> Website
              </a>

              <a
                className="btn--external"
                href="https://apps.apple.com/ca/app/onikon/id6444296112"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare} size="md" />{" "}
                Application
              </a>
            </div>

            <ul>
              <li>
                Developed and maintained Front-end side on internal CRM project
                with Vuejs and Vuex
              </li>
              <li>
                Developed real estate IDX plugin, dashboard and implemented it
                on websites
              </li>
              <li>
                Developed an application based on Vuejs and Quasar framework for
                clients to schedule company's services
              </li>
              <li>Translated UX/UI designs to actual codes</li>
              <li>
                Developed, delivered and maintained interactive and responsive
                websites with HTML, CSS, JS, JQuery and Wordpress
              </li>
              <li>Created and maintained Wordpress theme, plugins</li>
            </ul>

            <div className="container--badge flex mt-3">
              <div className="item--badge">HTML/CSS</div>
              <div className="item--badge">Vue.js</div>
              <div className="item--badge">Vuex</div>
              <div className="item--badge">Nuxt.js</div>
              <div className="item--badge">Wordpress</div>
              <div className="item--badge">PHP</div>
            </div>
          </div>
        </div>

        <div className="inner-container flex">
          <div className="item-screenshot w-1/2"></div>
          <div className="item-experience w-1/2">
            <h4 className="title-experience text-2xl mb-3">Vinple</h4>

            <div className="container--external mb-2 flex">
              <a
                className="btn--external mr-1"
                href="https://web.base.town/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare} size="md" /> Website
              </a>
            </div>
            <ul>
              <li>
                Worked in a team developing a communication app for students in
                BC
              </li>
              <li>
                Developed and maintained web app with React and mobile
                application with React Native
              </li>
              <li>Collaborated in agile environment based on Git and Jira</li>
            </ul>

            <div className="container--badge flex mt-3">
              <div className="item--badge">React.js</div>
              <div className="item--badge">React Native</div>
              <div className="item--badge">Redux</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
