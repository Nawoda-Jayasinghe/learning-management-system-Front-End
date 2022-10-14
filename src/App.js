import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signup from "./components/signup/Signup";
import ClientApp from './ClientApp';
import { Login } from './components/login/Login';

import Appbar from './components/home/Appbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Appbar/>

      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>

      {/* <Login/> */}
      {/* <ClientApp/> */}

      
      
      
      
    </div>
  );
}

export default App;
