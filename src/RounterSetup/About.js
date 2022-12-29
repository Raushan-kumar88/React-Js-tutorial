import React from 'react'
// import { NavLink } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div>
        <h1>Raushan kumar</h1>
        <p>Learn how to create a fast and awesome responsive website that will work on all devices, PC, laptop, tablet, and phone.

        </p>
          <li><NavLink className="nav-link" to="/User/Anil" state={{name:'Raushan',age:22}}>Anil</NavLink></li>
          <li><NavLink className="nav-link" to="/User/Raushan">Raushan</NavLink></li>
          
    </div>
  )
}

export default About