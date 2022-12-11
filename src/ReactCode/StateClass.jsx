import React,{Component} from "react";
class StateClass extends Component{
    constructor(){
        super();
        this.state={
            data:1
        }
    }
    apna() {
        this.setState({data:this.state.data+1})
    }
    render(){
        return(
            <>
                <h1>count = {this.state.data}</h1>
                <button onClick={()=>this.apna()}>change word</button>
            </>
        )
    }
}
export default StateClass