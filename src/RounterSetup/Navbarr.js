import React from 'react'
// import { Navbar, NavLink } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './style.css';
import { useAuth0 } from "@auth0/auth0-react";
function Navbarr() {
  const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
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
          {/* <li>
          <NavLink style={({isActive})=>{return{color:isActive ? 'skyblue' : ''}}} className='nav-link' to="/Login">
          Login
          </NavLink>
          </li> */}
            {
              isAuthenticated && 
              <li>
              <p className='user'>{user.name}</p>
            </li>
              

            }
         
          {
            isAuthenticated ? (
              <li>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
          </button>
          </li>
            )
             :
             (
              <li>
          <button onClick={() => loginWithRedirect()}>Log In</button>;
          </li>
             )
          
          }
          
         
        </ul>
        </div>
        </nav>
    </>
  )
}

export default Navbarr