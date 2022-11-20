// import logo from './logo.svg';
import './App.css';
import React from "react";
// import './index.css'
import Pop from './ReactCode/Pop';

 import FunctionComponent from './ReactCode/FunctionComponent';
 import ClassComponent from './ReactCode/ClassComponent';
function App() {

  
  return (
    <div className='`mx-auto  mb-4 py-5 px-32 bg-gradient-to-br  h-fit  }`'>
  
      <h1>React Tutorial.....</h1>
      <FunctionComponent />
      <ClassComponent />
      <Pop/>
    
    </div>
  );
}

export default App;
