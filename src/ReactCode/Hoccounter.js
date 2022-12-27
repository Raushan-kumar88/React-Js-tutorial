import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

function Hoccounter() {
  return (
    <div>
      <h1>High order counter </h1>
      <Hocblack cmp={Demo} />
      <Hocgreen cmp={Demo} />
      <Hocyellow cmp={Demo} />

      
    </div>
  )
}
function Hocblack(props){
  return<h2 style={{backgroundColor:'black',color:'white'}}><props.cmp/></h2>    
}
function Hocyellow(props){
  return<h2 style={{backgroundColor:'yellow',color:'red'}}><props.cmp/></h2>    
}
function Hocgreen(props){
  return<h2 style={{backgroundColor:'green',color:'black'}}><props.cmp/></h2>    
}
function Demo(){
  const[data,setData]=useState(0);
  return(
    <div>
    <h1 className='ml-8 mb-4 text-center'>{data}</h1>
    <Button className='ml-8 mb-10 bg-center'  onClick={()=>setData(data+1)}>Update</Button>
    </div>
  )
  
}
export default Hoccounter