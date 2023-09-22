import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons"

export default function Contact() {
  return (
    <div id="contact">
      <div className="container--section container--section-contact">
        <div className="container">
          <div className="container--content m-auto text-center">
            <h3 className="title-contact text-3xl mb-2 mx-auto">
              Transforming visions into compelling user interfaces <br /> -
              Front-end Developer with a passion for creating seamless web
              experiences.
            </h3>

            <div className="icon--contact">
              <FontAwesomeIcon icon={faPaperPlane} size="2xl" />{" "}
            </div>

            <a className="item-email text-xl" href="mailto:seungjun.dev@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="md" />{" "}
              seungjun.dev@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
