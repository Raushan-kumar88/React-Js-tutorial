// import { Button } from 'bootstrap'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {
    const login=()=>{
        localStorage.setItem('login',true);
        navigate('/')
    }
    const navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('login');
        if(login){
            navigate('/')
        }
    })
  return (
    <div className='form'>
        {/* <Button>Login</Button> */}
        <h1>This is login Page</h1>
        <input type="text" placeholder="enter the userid "/>
        <br/>
        <input type="text" placeholder="enter the Password "/>
        <br/>
        <button onClick={login}>Login</button>

        {/* <>domain : dev-2405ckp20t4yq56t.us.auth0.com
client : dTbgvw823djaZt2rxoxZhL9GJvvHXgoy

https://manage.auth0.com/dashboard/us/dev-2405ckp20t4yq56t/</> */}
    </div>
  )
}

export default Login