import React, { Component } from "react";
class Render1 extends Component{
    constructor(){
        super();
        this.state={
            email:"rk@gmail.com"
        }
    }
    render(){
        console.warn("render method",this.state.email)
        return(

            <>
                <h1>class Render method {this.state.email}</h1>
                <button onClick={()=>this.setState({email:"raushan@gmail.com"})}>update email</button>
            </>
        )
    }
}
export default Render1