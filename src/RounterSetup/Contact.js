import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Contact() {
  return (
    <div>
        <h1>this is contact page...</h1>
        <nav className='nav2'>
        <NavLink className="nav1" to="company">Company</NavLink>
        <NavLink className="nav1" to="channel">Channel</NavLink>
        <NavLink className="nav1" to="other">Other</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Contact