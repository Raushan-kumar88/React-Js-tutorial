import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Uncontrolledcomponent() {
    function handle(e){
        e.preventDefault();
        console.warn(inputref.current.value);
        console.warn(inputref1.current.value);
        let inputs=document.getElementById('inputfield').value;
        console.warn("the value "+inputs);
    }

    let inputref=useRef();
    let inputref1=useRef();
    // function getvalue(){
        
    // }

  return (
    
    <div >
        <h1>Uncontrolledcomponent</h1>
        <Form onSubmit={handle}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control ref={inputref} type="text" placeholder="Enter email" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control ref={inputref1} type="text" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control id='inputfield' type="text" placeholder="Password" />
      </Form.Group>
    
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Uncontrolledcomponent