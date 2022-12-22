import React from 'react'
import Liftingchild from './Liftingchild'
// const data="Raushan"
function LiftingParent() {
  function parentsAlert(data){
    console.log(data)
    alert(data.name)
  }
  return (
    <div>
    {/* this process is send data from parents to child */}
      {/* <Liftingchild name={data}/> */}
      {/* this process is send data from child to parents. */}
      <Liftingchild alert={parentsAlert}/>
    </div>
  )
}

export default LiftingParent
// note:- Lifting is the process its means send data from child and child from parents .