import React from "react";
import Sidebar from "../dashboard/Sidebar";
import Lecturer from "../lecturer/Lecturer";
import LecturerEnrollment from "../lecturer/LecturerEnrollment";
import Student from "../student/Student";
import StudentEnrollment from "../student/StudentEnrollment";


const EnrolledCourses = (prop) => {

  const type = prop.type;

  return <div>
    <Sidebar/>
    {
      type==="lecturer"? <LecturerEnrollment/> : <StudentEnrollment/>
    }
    

  </div>;
};

export default EnrolledCourses;
