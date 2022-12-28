// import { Button } from 'bootstrap';
import React from 'react'
import {useSearchParams } from 'react-router-dom'

function Filter() {
    const[searchParams,setsearchParams]=useSearchParams();
    console.warn(searchParams.get('age'));
    console.warn(searchParams.get('city'));
    const age=searchParams.get('age');
    const city=searchParams.get('city');

  return (
    <>
        <h1>This is filter page use SearchParams hook</h1>
        <ol>
            <li>Your age {age}</li>
            <li>Your city {city}</li>
        </ol>
        <input type="text" placeholder="enter your text" onChange={(e)=>setsearchParams({text:e.target.value,age:30})}/>
        <button onClick={()=>setsearchParams({age:20})} >Update age</button>
    </>
  )
}

export default Filter