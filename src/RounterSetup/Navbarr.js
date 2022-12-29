import React from 'react'
// import { Navbar, NavLink } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './style.css';
function Navbarr() {
  return (
    <>
      <nav className='demo'>
      
      <div>
          <NavLink className="nav-link">React Js</NavLink>
      </div>
        <div>
        <ul >
          <li>
            <NavLink style={({isActive})=>{return{color:isActive ? 'skyblue' : ''}}} className="nav-link" to="/">Home</NavLink>
          </li>
          <li><NavLink style={({isActive})=>{return{color:isActive ? 'skyblue' : ''}}} className="nav-link" to="/About">about</NavLink></li>
          <li><NavLink style={({isActive})=>{return{color:isActive ? 'skyblue' : ''}}} className="nav-link" to="/Contact">Contact</NavLink></li>
          <li><NavLink style={({isActive})=>{return{color:isActive ? 'skyblue' : ''}}} className="nav-link" to="/Filter">Filter</NavLink></li>
        </ul>
        </div>
        </nav>
    </>
  )
}

export default Navbarr