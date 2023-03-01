
import {withRouter} from 'react-router'
import React from "react"
function User(prop) {
  console.warn(prop)
  return (
    <div>
      <h3>This is user page </h3>
    </div>
  )
}

export default withRouter(User)