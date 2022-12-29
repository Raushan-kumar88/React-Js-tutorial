import React from 'react'
import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom'
import Home2 from './RounterSetup/Home2'
import About from './RounterSetup/About'
import Navbarr from './RounterSetup/Navbarr'
import Page404 from './RounterSetup/Page404'
import User from './RounterSetup/User'
import Filter from './RounterSetup/Filter'
import Contact from './RounterSetup/Contact'
import Company from './RounterSetup/Company'
import Channel from './RounterSetup/Channel'
import Other from './RounterSetup/Other'

function App2() {
  return (
    <div>
        <Router>
        <Navbarr/>
            <Routes>
            
                <Route path='/' element={<Home2/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/*' element={<Page404/>}/>
                <Route path='/User/:name' element={<User/>}/>
                <Route path='/Filter' element={<Filter/>}/>
                
                {/* here is nested routing */}
                <Route path='/contact' element={<Contact/>}>
                    <Route path='company' element={<Company/>}/>
                    <Route path='channel' element={<Channel/>}/>
                    <Route path='other' element={<Other/>}/>
                </Route>
                
            </Routes>
        </Router>
    
    </div>
  )
}

export default App2