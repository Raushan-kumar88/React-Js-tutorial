import React from 'react'
import {Route,Routes} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Nav from './Nav'
function Homepage() {
  return (
    <>
    <Nav/>
    <Routes>
    
    
    <Route path='/about' element={<About/>}/>
    <Route path='/' exact={true} element={<Home/>}/>
    
    </Routes> 
    </>
  )
}


export default Homepage