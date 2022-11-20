import React from 'react'
let name="Raushan kumar"
function Pop() {
    function demo(){
        name="Rahul kumar"
        alert(name);
    }
  return (
    <>
        <h1>Onevent click</h1>
        <h3>{name}</h3>
        <input type="submit" onClick={demo} /><br/>
        <button onClick={() => demo()}>Another method</button>
    </>
  )
}

export default Pop