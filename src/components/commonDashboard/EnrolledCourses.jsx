import React from "react";
import Sidebar from "../dashboard/Sidebar";


const EnrolledCourses = () => {

  const type = "lecturer";

  return <div>
    <Sidebar/>
    {
      type==="lecturer"? "lecturer Content " : "student Content"
    }
    hi im enrolled courses

  </div>;
};

export default EnrolledCourses;
