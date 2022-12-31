import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
// import Api_data from './ReactCode/Api_data';
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from './reportWebVitals';
import App2 from './App2';
// import {AppProvider} from "./context";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Auth0Provider
    domain="dev-2405ckp20t4yq56t.us.auth0.com"
    clientId="dTbgvw823djaZt2rxoxZhL9GJvvHXgoy"
    redirectUri={window.location.origin}
  >
    
        {/* <App /> */}
      <App2/>
        {/* <Api_data/> */}
   
   
  </Auth0Provider>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
