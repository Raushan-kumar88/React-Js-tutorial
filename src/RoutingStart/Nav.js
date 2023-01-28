import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <>
        <Link to="/">Homepage</Link>
    <br/>
    <Link to="/about">Aboutpage</Link>
    </>
  )
}

export default Nav