import { Component } from 'react'

class ComponetDidUpdate extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    componentDidUpdate(preProps,preStates,snapshot){
        // if(preStates.count==this.state.count){
        //     alert("already same value");
        // }
        if(this.state.count<10){
            this.setState({count:this.state.count+1});
        }
    }
  render(){
    return (
        <div>
            <h1>hello how are you .. name : {this.state.count}</h1>
            <button onClick={()=>{this.setState({count:1})}}>Update</button>
        </div>
      )
  }
}

export default ComponetDidUpdate