import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signup from "./components/signup/Signup";
import ClientApp from './ClientApp';
import { Login } from './components/login/Login';

import Appbar from './components/home/Appbar';


function App() {
  return (
    <div className="App">
      <Appbar/>
      
      <Login/>
      {/* <ClientApp/> */}
      
      
      
      
    </div>
  );
}

export default App;
