import React from "react";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import EnrolledCourses from "../commonDashboard/EnrolledCourses";
import AvailableCourses from "../commonDashboard/AvailableCourses";
const Content = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/availableCourses"
          element={<AvailableCourses />}
        ></Route>
        <Route path="/enrolledCourses" element={<EnrolledCourses />}></Route>
      </Routes>
    </div>
  );
};

export default Content;
