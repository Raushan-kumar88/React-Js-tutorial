import React, { Component } from 'react'

class ComponentDidmount extends Component {
    constructor(){

        super();
        console.warn("constructor")
        this.state={
            name:"karan kumar"
        }
    }
    // ComponentDidmount(){
    //     console.warn("componentDidMount");
    // }
  render(){
    console.warn("render");
    // this.setState({name:"Raushan kumar"})
    return (
        <div>
            <h1>ComponentDidmount Name : {this.state.name}</h1>

            <button onClick={()=>{this.setState({name:"Raushan kumar"})}} >click to change</button>
        </div>
      )
    }
  }

export default ComponentDidmount