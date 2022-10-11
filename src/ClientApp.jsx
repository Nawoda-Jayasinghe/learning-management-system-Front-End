import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import UserApp from "./views/UserApp";


function ClientApp() {
  return (
    <div className="ClientApp">
      <UserApp/>
    </div>
  );
}

export default ClientApp;
