import React, { PureComponent } from 'react'

class Purecomponentprops extends PureComponent {
    render(){
        return (
            <div>
                <h1>Pure component props pass : {this.props.data}</h1>
            </div>
          )
    }
  
}

export default Purecomponentprops