import React,{useEffect} from 'react'

function Userprops(props) {
    useEffect(()=>{
        console.warn(props.data+1);
        console.warn(props.count+1);
    },[props.data,props.count])
  return (
    <div>
    <h1>data: {props.data}</h1>
    <h1>count: {props.count}</h1>
    </div>
  )
}

export default Userprops