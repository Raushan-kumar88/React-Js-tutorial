import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.css';
function Navbarr() {
  return (
    <>
      <Navbar className='demo'>
        <ul >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/About">about</Link></li>
          <li><Link to="/kkj">Contact</Link></li>

        </ul>
      </Navbar>
    </>
  )
}

export default Navbarr