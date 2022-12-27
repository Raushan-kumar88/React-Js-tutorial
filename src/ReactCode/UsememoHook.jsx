import React, { useMemo, useState } from 'react'
import { Button } from 'react-bootstrap';

function UsememoHook() {
    const[data,setData]=useState(0);
    const[count,setCount]=useState(10);

    const demo=useMemo(function retdata(){
        console.warn("update");
        return data*2;
    },[data]);
    // function retdata(){
    //     console.warn("update");
    //     return data*2;
    // }
  return (
    <>
        <h1>Use memo hook </h1>
        <h1>Data : {data}</h1>
        <h1>Count : {count}</h1>
        <h1>{demo}</h1>
        {/* <h1> {retdata()}</h1> */}
        <Button  onClick={()=>setData(data+1)}>Update data</Button>
        <Button className="ml-6" onClick={()=>setCount(count*10)}>Update count</Button>
        

    </>
  )
}

export default UsememoHook