import React from 'react'
import Reusecomponent2 from './Reusecomponent2'
import Alert from 'react-bootstrap/Alert';
function Reusecomponent() {
    const user=[
        {
            name:'Raushan',
            email:"rk@gmail.com",
            phone:"8298"
        },
        {
            name:'Karan',
            email:"karan@gmail.com",
            phone:"8893"
        },
    ]
  return (
    <div>
    {   
        user.map((item,i)=>
        
        <Alert>
          
          <Reusecomponent2 data={item} />
        </Alert>
        )
        
    }
        
    </div>
  )
}

export default Reusecomponent