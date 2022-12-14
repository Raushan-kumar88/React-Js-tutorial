import React,{useState} from 'react'
import "./combine.css"
function HideShow() {
    const [show,setShow]=useState(true)
  return (
    <div className='toggle'>
        {
            show?
            <h1>Raushan kumar</h1>
            :null
        }
        {/* use two button for hide and show */}
        {/* <button onClick={()=>setShow(false)}>Hide</button> */}
        {/* <button onClick={()=>setShow(true)}>Show</button> */}
        {/* only one button use hide and show */}
        <button onClick={()=>setShow(!show)}>Toggle</button>
    </div>
  )
}

export default HideShow