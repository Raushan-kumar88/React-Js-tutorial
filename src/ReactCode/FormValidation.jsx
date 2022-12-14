import React,{useState} from 'react'
import './combine.css'
function FormValidation() {
    
    function errorHandler(e){
        if(user.length<3 || pass.length<3){
            alert("fill valid")
        }
        else{
            alert("good job!")
        }
        e.preventDefault();
    }

    const[user,setUser]=useState("");
    const [pass,setPass]=useState("");
    const[userErr,setUserErr]=useState(false);
    const[passErr,setPassErr]=useState(false);
   function userHandler(e){
    let item=e.target.value;
    if(item.length<3){
        setUserErr(true)
    }
    else{
        setUserErr(false)
    }
    setUser(item)
   }
   function passHandler(e){
     let item=e.target.value;
     if(item.length<3){
        setPassErr(true)
     }
     else{
        setPassErr(false)
     }
     setPass(item)
   } 
  return (
    <div className='form'>
        <h1>Form validation..</h1>
        <form onSubmit={errorHandler}>
            <input type="text" placeholder="enter your user id " onChange={userHandler}  /><br/>{userErr?<span>**not valid**</span>:""}<br/>
            <input type="password" placeholder="enter your password " onChange={passHandler} /> <br/> {passErr?<span>**enter valid**</span>:""}<br/>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default FormValidation