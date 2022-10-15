import React from "react";
import Sidebar from "../dashboard/Sidebar";
import Lecturer from "../lecturer/Lecturer";
import Student from "../student/Student";


const AvailableCourses = () => {

  const type = "student";

  return <div>

    <Sidebar/>
    {
      type==="lecturer"? <Lecturer/> : <Student/>
    }
    hi im available courses
  </div>;
};

export default AvailableCourses;
