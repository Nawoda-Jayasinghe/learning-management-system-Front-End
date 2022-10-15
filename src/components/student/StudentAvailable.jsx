import React from "react";
import Form from "antd/es/form/Form";
import Grid from "antd/lib/card/Grid";
import { Button } from "antd/lib/radio";
import SubjectCard from "../dashboard/SubjectCard"

function StudentAvailable() {
  return (
    <div className="StudentAvailable">
      <h3>
        <center>Courses Enrollment - Student</center>
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


export default StudentAvailable;
