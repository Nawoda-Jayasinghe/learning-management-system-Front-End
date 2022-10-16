import React from "react";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import EnrolledCourses from "../commonDashboard/EnrolledCourses";
import AvailableCourses from "../commonDashboard/AvailableCourses";
const Content = (prop) => {
  return (
    <div>
      <Routes>

        <Route path="/availableCourses" element={<AvailableCourses type={prop.type} />}></Route>

        <Route path="/enrolledCourses" element={<EnrolledCourses type={prop.type} />}></Route>
      </Routes>
    </div>
  );
};

export default Content;
