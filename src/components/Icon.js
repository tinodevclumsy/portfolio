import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

const Icon = ({ iconName, size = '3x' }) => {
  return <FontAwesomeIcon icon={["fab", iconName]} size={size} />
}

export default Icon
