import React from "react";
import Sidebar from "../dashboard/Sidebar";
import Student from "../student/Student";


const AvailableCourses = () => {

  const type = "student";

  return <div>

    <Sidebar/>
    {
      type==="lecturer"? "lecturer Content " : <Student/>
    }
    hi im available courses
  </div>;
};

export default AvailableCourses;
