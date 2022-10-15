import React from "react";
import Form from "antd/es/form/Form";
import Grid from "antd/lib/card/Grid";
import { Button } from "antd/lib/radio";
import SubjectCard from "../dashboard/SubjectCard";

function StudentAvailable() {
  return (
    <div className="StudentAvailable">
      <h3>
        <center>Available courses - Student</center>
      </h3>
      <Form onSubmit={() => {}} className="w-full">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
            flexWrap: "wrap",
          }}
        >
          <SubjectCard name="Science" btnName="Enroll" />
          <SubjectCard name="Geography" btnName="Enroll" />
          <SubjectCard name="History"  btnName="Enroll"/>
          <SubjectCard name="Computer Science" btnName="Enroll"/>
          <SubjectCard name="Sinhala" btnName="Enroll"/>
          <SubjectCard name="English" btnName="Enroll"/>
          <SubjectCard name="Science" btnName="Enroll"/>
          <SubjectCard name="Geography"btnName="Enroll" />
          <SubjectCard name="History" btnName="Enroll"/>
          <SubjectCard name="Computer Science"btnName="Enroll" />
          <SubjectCard name="Sinhala" btnName="Enroll"/>
          <SubjectCard name="English" btnName="Enroll"/>
        </div>
      </Form>
    </div>
  );
}

export default StudentAvailable;
