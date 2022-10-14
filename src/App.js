import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signup from "./components/signup/Signup";
import ClientApp from './ClientApp';
import { Login } from './components/login/Login';
// import Available_Courses from './components/student_Dashboard/Available-Courses';
import Appbar from './components/home/Appbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Course from './components/studentDashboard/Course';


function App() {
  return (
    <div className="App">
      <Appbar/>
      


      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Course" element={<Course/>}/>

        </Routes>
      </BrowserRouter>

      {/* <Login/> */}
      {/* <ClientApp/> */}

      
      
      
      
    </div>
  );
}

export default App;
