import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Signup from "./components/signup/Signup";
import ClientApp from "./ClientApp";
import { Login } from "./components/login/Login";
// import Available_Courses from './components/student_Dashboard/Available-Courses';
import Appbar from "./components/home/Appbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/dashboard/Sidebar";
import { ForgotPassword } from "./components/login/ForgotPassword";


import Hero from "./components/hero/Hero";
import AvailableCourses from "./components/commonDashboard/AvailableCourses";
import EnrolledCourses from "./components/commonDashboard/EnrolledCourses";
import StudentAvailable from "./components/student/StudentAvailable";
import StudentCourseMarks from "./components/student/StudentCourseMarks";
import EnrolledCourse from "./components/lecturer/EnrolledCourse";


function App() {
  return (
    <div className="App">
      <Appbar />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Hero />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Sidebar" element={<Sidebar/>}/>
          <Route path="/availableCourses" element={<AvailableCourses/>}/>
          <Route path="/enrolledCourses" element={<EnrolledCourses/>}/>
          <Route path="/StudentAvailable" element={<StudentAvailable />} />
          <Route path="/StudentCourseMarks" element={<StudentCourseMarks/>} />
          <Route path="/EnrolledCourse" element={<EnrolledCourse/>} />
          <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        
        </Routes>
      </BrowserRouter>

      {/* <Login/> */}
      {/* <ClientApp/> */}
    </div>
  );
}

export default App;
