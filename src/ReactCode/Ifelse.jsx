import React,{useState} from 'react'

function Ifelse() {
    const [loginin,setData]=useState();
    function show(){
        setData("karan kumar");
    }
    
  return (
    <div>
        {
            loginin===1?
            <h1>user1</h1>
            :loginin===2?
            <h1>user2</h1>
            :<h1>guest</h1>
        }
        <button onClick={()=>show()}>click me</button>
    </div>
  )
}

export default Ifelse