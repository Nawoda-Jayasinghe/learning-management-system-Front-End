import React from 'react';
import SubjectCard from "../dashboard/SubjectCard";
import { ForgotPassword } from '../login/ForgotPassword';
import Form from "antd/es/form/Form";
import AssignmentGrid from './AssignmentGrid';


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
            flexWrap: 'wrap',
          }}
        >
       
        <SubjectCard name="Science" btnName="Enroll"/>
        <SubjectCard name="Science" btnName="Enroll"/>
        <SubjectCard name="Science" btnName="Enroll"/>
        <SubjectCard name="Science" btnName="Enroll"/>

        </div>
      </Form>
    </div>
  );
}

export default LecturerAvailable;