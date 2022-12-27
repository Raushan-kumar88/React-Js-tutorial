import React, { forwardRef } from 'react'
import Form from 'react-bootstrap/Form';
function ForwardRef2(props,ref) {
  return (
    <div>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="email" ref={ref}  />
      </Form.Group> 
    </div>
  )
}

export default forwardRef(ForwardRef2)