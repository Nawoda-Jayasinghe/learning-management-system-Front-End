import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signup from "./components/signup/Signup";
import ClientApp from './ClientApp';

import Appbar from './components/home/Appbar';




function App() {
  return (
    <div className="App">
      {/* <ClientApp/> */}
      
      
      <Appbar/>
      
    </div>
  );
}

export default App;
