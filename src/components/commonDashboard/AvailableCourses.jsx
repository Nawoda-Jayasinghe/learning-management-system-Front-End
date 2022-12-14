import React from "react";
import Sidebar from "../dashboard/Sidebar";
import Lecturer from "../lecturer/Lecturer";
import LecturerAvailable from "../lecturer/LecturerAvailable";
import Student from "../student/Student";
import StudentAvailable from "../student/StudentAvailable";

const AvailableCourses = (prop) => {
  const type = prop.type;

  return (
    <div>
      <Sidebar />
      {type === "lecturer" ? <LecturerAvailable /> : <StudentAvailable />}
    </div>
  );
};

export default AvailableCourses;
