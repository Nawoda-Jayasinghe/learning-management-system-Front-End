import React from 'react';
import SubjectCard from "../dashboard/SubjectCard";
import Form from "antd/es/form/Form";


function LecturerAvailable() {
  return (
    <div className="StudentAvailable">
      <h3>
        <center>Available courses - Lecturer</center>
      </h3>
      <Form onSubmit={() => {}} className="w-full">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
        <SubjectCard/>
        <SubjectCard/>
        <SubjectCard/>
        <SubjectCard/>
          

          
          
          
        </div>
      </Form>
    </div>
  );
}

export default LecturerAvailable;