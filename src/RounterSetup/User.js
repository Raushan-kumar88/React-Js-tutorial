import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function User() {
    const params = useParams();
    const {name}=params;
    const location=useLocation();
    console.warn(location);
  return (
    <div>
        <h1>this is {name} page</h1>
    </div>
  )
}

export default User