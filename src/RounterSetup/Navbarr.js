import React from 'react'
// import { Navbar, NavLink } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './style.css';
function Navbarr() {
  return (
    <>
      
        <ul className='demo'>
          <li>
            <NavLink style={({isActive})=>{return{color:isActive ? 'skyblue' : ''}}} className="nav-link" to="/">Home</NavLink>
          </li>
          <li><NavLink className="nav-link" to="/About">about</NavLink></li>
          <li><NavLink className="nav-link" to="/Invalid">Contact</NavLink></li>
          <li><NavLink className="nav-link" to="/Filter">Filter</NavLink></li>

          


        </ul>
      
    </>
  )
}

export default Navbarr