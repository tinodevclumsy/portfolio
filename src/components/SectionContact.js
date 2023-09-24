import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const ContactIcon = styled.div`
  width: 75px;
  height: 75px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: var(--primary-color);
  margin: 40px auto;
`
export default function Contact() {
  return (
    <div id="contact">
      <div className="container--section container--section-contact py-20">
        <div className="container">
          <div className="container--content m-auto text-center">
            <h3 className="title-contact max-w-3xl text-3xl mb-2 mx-auto">
              Transforming visions into compelling user interfaces <br /> -
              Front-end Developer with a passion for creating seamless web
              experiences.
            </h3>

            <ContactIcon>
              <FontAwesomeIcon icon={faPaperPlane} size="2xl" />
            </ContactIcon>

            <a
              className="item-email text-xl"
              href="mailto:seungjun.dev@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} size="md" />{" "}
              seungjun.dev@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
