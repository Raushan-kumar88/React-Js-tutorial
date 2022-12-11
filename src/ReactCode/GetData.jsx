import React, {useState} from 'react'

function GetData() {
    const [data,putdata]=useState(null)
    const [print,setPrint]=useState(false)
    function Demo(val){
        console.log(val.target.value)
        putdata(val.target.value)
    }
  return (
    <div>
        {
            print?
            <h1> {data} </h1> 
            :null
        }
        {/* <h1> name : {data}</h1> */}
        <input type="text" onchange={Demo} />
        <button onClick={()=>setPrint(true)}>Put data</button>
    </div>
  );
}

export default GetData