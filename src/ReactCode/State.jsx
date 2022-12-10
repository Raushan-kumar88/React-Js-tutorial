import {useState} from 'react'
import './combine.css';
function State() {
  const [data,setdata]=useState("this is first sentences...");
  function change(){
    setdata("after change this your last sentences..");
  }
  return (
    <div className="demo">
      <h1>{data}</h1>
      <button onClick={change}>click the button</button>
    </div>
  )
}
export default State