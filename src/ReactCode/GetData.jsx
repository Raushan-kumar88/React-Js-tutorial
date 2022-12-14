import React,{useState} from 'react'

function GetData() {
  const [data,setData]=useState(null)
  const [print1,getdata1]=useState(false)
  function getData(val){
    console.warn(val.target.value)
    setData(val.target.value)
    getdata1(false)
  }
  return (
    <div>
        {
          print1?
          <h1>{data}</h1>
          :false
        }
      <input type="text" onChange={getData}/>
      <button onClick={()=>getdata1(true)}>get data</button>
    </div>
  )
}

export default GetData