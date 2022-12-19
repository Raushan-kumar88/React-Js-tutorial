import React,{useEffect,useState} from 'react'

function ReactHook() {
    useEffect(()=>{
        // alert("use effect")
        console.warn("use effect");
    })
    const[count, setcount]=useState(0);
  return (
    <div className='toggle'>
    <h1>use effect hooks {count}</h1>
    <button onClick={()=>setcount(count+1)}>update value</button>
    </div>
  )
}

export default ReactHook