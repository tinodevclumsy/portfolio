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
  background-color: var(--primary);
  margin: 40px auto;
`
const Contact = () => {
  return (
    <div id="contact">
      <div className="container--section container--section-contact mt-20 pb-20">
        <div className="container">
          <div className="container--content m-auto text-center">
            <h3 className="title-contact max-w-3xl text-2xl md:text-3xl mb-2 mx-auto">
              Seeking new opportunities in front-end development!
            </h3>

            <ContactIcon>
              <FontAwesomeIcon icon={faPaperPlane} size="2xl" />
            </ContactIcon>

            <a
              className="item-email text-xl text-white inline-flex items-center"
              href="mailto:seungjun.dev@gmail.com"
            >
              <FontAwesomeIcon className="mr-1" icon={faEnvelope} size="sm" />
              seungjun.dev@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Contact)
