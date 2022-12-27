import { Component, createRef } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
class Refcomponent extends Component{
    constructor(){
        super();
        this.refcom=createRef();
    }
    componentDidMount() {
        console.warn(this.refcom.current.value);
    }
    getValue(){
        console.warn(this.refcom.current.value);
        this.refcom.current.style.color="red";
        this.refcom.current.style.backgroundColor="black";

    }
    operationInput() {
        this.refcom.current.value="783878";
        this.refcom.current.focus();
        this.refcom.current.style.display="none";
    }
    render(){
        return(
            <>
                {/* <input type="text" ref={this.refcom} /> */}
         <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="email" ref={this.refcom}  />
      </Form.Group> 
            {/* <h1>{this.refcom.current.value}</h1> */}
            <Button onClick={()=>this.getValue()}>BUTTON</Button>
            <Button className="ml-3" onClick={()=>this.operationInput()}>Operation</Button>

            
            </>
        )
    }
}
export default Refcomponent;