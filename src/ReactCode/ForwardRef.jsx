
import ForwardRef2 from './ForwardRef2';

import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'

function ForwardRef() {
    let refcom=useRef(null);
    function demo(){
                refcom.current.value="873878";
                refcom.current.style.display="none";
            }
  return (
    <div>
         <h1>use Forward ref</h1>
         <ForwardRef2 ref={refcom} />
       <Button onClick={demo}>button</Button>
    </div>
  )
}

export default ForwardRef