import { Card } from "antd";
import React from "react";
import SubjectCard from "../dashboard/SubjectCard";
import Form from "antd/es/form/Form";
import StudentCourseMarks from "./StudentCourseMarks";
import { Link } from "react-router-dom";

function StudentEnrollment() {
  return (
    <div className="StudentAvailable">
      <h3>
        <center>Enrolled courses - Student</center>
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
          <Link to="/StudentCourseMarks">
            <SubjectCard name="Mathematics" btnName="View"/>
          </Link>
          <SubjectCard name="Science" btnName="View"/>
          <SubjectCard name="Geography" btnName="View"/>
          <SubjectCard name="History" btnName="View"/>
          <SubjectCard name="Computer Science" btnName="View"/>
          <SubjectCard name="Sinhala" btnName="View"/>
          
        </div>
      </Form>
    </div>
  );
}

export default StudentEnrollment;
