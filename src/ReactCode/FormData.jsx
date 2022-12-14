import React,{useState} from "react";

function FormData() {
    function getdataform(e){
        e.preventDefault();
        console.warn(data,data1,data2);
    }
    const [data,setData]=useState("");
    const [data1,setData1]=useState(false);
    const [data2,setData3]=useState("");
  return (
    <div className="">
    <form onSubmit={getdataform}>
        <h1>form data</h1>
        <input  type="text" placeholder="enter your name" onChange={(e)=>setData(e.target.value)}/><br/><br/>
        <select onChange={(e)=>setData1(e.target.value)}>
            <option>select subject name</option>
            <option>Maths</option>
            <option>English</option>
            <option>Hindi</option>
        </select>
        <br/><br/>
        <input type="checkbox" onChange={(e)=>setData3(e.target.checked)} /> <span>i agree of terms and condition</span><br/><br/>
        <button >SUBMIT</button>
    </form>
    </div>
  )
}

export default FormData
