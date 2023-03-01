import User from './User'
import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
function DyanmicRouting() {
    let users = [
        { id: 1, name: "Raushan", email: "raushan@gmail.com" },
        { id: 2, name: "Karan", email: "karan@gmail.com" },
        { id: 3, name: "Pawan", email: "pawan@gmail.com" },
        { id: 13, name: "Ravan", email: "ravan@gmail.com" },

    ]
    return (
        <div className='App' >
            <Router>
                <h1>Print Data</h1>

                {
                    users.map((item) =>
                        <div><Link to={"/user/" + item.id}><h3>{item.name}</h3></Link></div>
                    )
                }
                <Routes>
                    <Route path="/user/:id" element={<User />} />
                </Routes>

            </Router>
        </div>
    )
}

export default DyanmicRouting