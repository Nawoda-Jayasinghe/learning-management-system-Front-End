import React from "react";
import Sidebar from "../dashboard/Sidebar";
import Lecturer from "../lecturer/Lecturer";
import Student from "../student/Student";


const EnrolledCourses = () => {

  const type = "lecturer";

  return <div>
    <Sidebar/>
    {
      type==="lecturer"? <Lecturer/> : <Student/>
    }
    hi im enrolled courses

  </div>;
};

export default EnrolledCourses;
