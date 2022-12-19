import React, { Component } from 'react'

class Toogle2 extends Component {
    constructor(){
        super();
        this.state={
            show:true
        }
        
    }
    componentWillUnmount(){
        alert("helo")
    }
  render(){
    return (
        <div>
          {
                this.state.show ?<Toogle2/>: <h1>child component removed</h1>
      }
            <button onClick={()=>this.setState({show:!this.state.show})} >Toogle</button>
        </div>
      )
  }
}

export default Toogle2