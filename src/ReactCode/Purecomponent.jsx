import React, { PureComponent } from "react";
import { Button } from "react-bootstrap";
class Purecomponent extends PureComponent{
    constructor(){
        super();
        this.state={
            count:1
        }
    }
    render(){
        return(
            <>
                <h1>Pure component</h1>
                <Button>PureComponent : {this.state.count}</Button>
            </>
        )
    }
}
export default Purecomponent