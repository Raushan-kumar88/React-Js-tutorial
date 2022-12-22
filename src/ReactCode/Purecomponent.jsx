import React, {Component } from "react";
import { Button } from "react-bootstrap";
import Purecomponentprops from "./Purecomponentprops";
class Purecomponent extends Component{
    constructor(){
        super();
        this.state={
            count:1
        }
    }
    render(){
        console.log("checking rerendring.")
        return(
            <>
                <Purecomponentprops data={this.state.count}/>
                <Button onClick={()=>this.setState({count:this.state.count+1})}>PureComponent </Button>
            </>
        )
    }
}
export default Purecomponent
// pure Component is basically used for if value is changed than updated state
// if value is same than state is not re rendring