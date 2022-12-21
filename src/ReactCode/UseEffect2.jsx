// import React, { useEffect,useState } from 'react'
import React, {useState } from 'react'
import Userprops from './Userprops';
function UseEffect2() {
    const[data,setData]=useState(100);
    const[count,setCount]=useState(10);

    //useeffect is used specific data or specific state..
    // useEffect(()=>{
    //     console.warn(count+1);
    // },[count])
    // useEffect(()=>{
    //     console.warn(data+1);
    // },[data])
    

  return (
    <div className='toggle'>
        {/* here props used in  */}
        <Userprops data={data} count={count} /> 
        
        <button onClick={()=>setData(data+1)}>Click data</button>
        <button onClick={()=>setCount(count+1)}>Click count</button>

    </div>
  )
}

export default UseEffect2