// import logo from './logo.svg';
import './App.css';
import React from "react";
// import './index.css'
import Pop from './ReactCode/Pop';
import State from './ReactCode/State';
import FunctionComponent from './ReactCode/FunctionComponent';
import ClassComponent from './ReactCode/ClassComponent';
import Class2 from './ReactCode/Class2';
// import {Function2} from './Function2'; //test without import any function...
import State2 from './ReactCode/State2';
import StateClass from './ReactCode/StateClass';
import PropsFunction from './ReactCode/PropsFunction';
import GetData from './ReactCode/GetData';
import HideShow from './ReactCode/HideShow';
import FormData from './ReactCode/FormData';
import Ifelse from './ReactCode/Ifelse';
import FormValidation from './ReactCode/FormValidation';
// import FunctionProps from './ReactCode/FunctionProps';
import Render1 from './ReactCode/Render1';
import ComponentDidmount from './ReactCode/ComponentDidmount';
import ComponetDidUpdate from './ReactCode/ComponetDidUpdate';
// import Toogle2 from './ReactCode/Toogle2';
import ReactHook from './ReactCode/ReactHook';
import UseEffect2 from './ReactCode/UseEffect2';
function App() {

  // function Data(){
  //   alert("demo test")
  // }
  
  // const[name,setName]=useState("Raushan kumar");

  return (
    <div className='`mx-auto  mb-4 py-5 px-32 bg-gradient-to-br  h-fit  }`'>
  
      <h1>React Tutorial.....</h1>
      <FunctionComponent />
      <ClassComponent />
      <Pop/>
      <State/>
      {/* <Function2/> */}
      <Class2/>
      <State2/>
      <StateClass/>
      <PropsFunction name={"Karan"} email={"raushan@gmail.com"} other={{address:'delhi',Mobile:900}}/>
      <GetData/>
      <HideShow/>
      <FormData/>
      <Ifelse/>
      <FormValidation/>
      {/* <FunctionProps data={Data} /> */}
      <Render1 />
      {/* <button onClick={()=>setName("Rahul")}>Update name</button> */}
      <ComponentDidmount />
      <ComponetDidUpdate/>
      {/* <Toogle2/> */}
      <ReactHook/>
      <UseEffect2/>
    </div>
  );
}

export default App;
