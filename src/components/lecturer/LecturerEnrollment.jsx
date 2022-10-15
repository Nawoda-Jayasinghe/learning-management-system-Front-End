import React from 'react';
import SubjectCard from "../dashboard/SubjectCard";
import Form from "antd/es/form/Form";
import { Link } from "react-router-dom";


function LecturerEnrollment() {
  return (
    <div className="StudentAvailable">
      <h3>
        <center>Enrolled courses - Lecturer</center>
      </h3>
      <Form onSubmit={() => {}} className="w-full">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
            flexWrap: 'wrap',
          }}
        >
        <Link to="/EnrolledCourse">
            <SubjectCard name="Mathematics" btnName="View"/>
          </Link>
        <SubjectCard name="Science" btnName="View"/>
        <SubjectCard name="Science" btnName="View"/>
        <SubjectCard name="Science" btnName="View"/>
        <SubjectCard name="Science" btnName="View"/>
          

          
          
          
        </div>
      </Form>
    </div>
  );
}

export default LecturerEnrollment;