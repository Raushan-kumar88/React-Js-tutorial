import React from 'react'

function FunctionProps(props) {
  return (
    <div>
        <h1>Function props....</h1>
        <button onClick={props.data}>Click me</button>
    </div>
  )
}

export default FunctionProps