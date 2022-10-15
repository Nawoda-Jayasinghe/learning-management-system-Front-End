import React from "react";
import Form from "antd/es/form/Form";
import Grid from "antd/lib/card/Grid";
import { Button } from "antd/lib/radio";

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
          <Grid container spacing={1} className="flex ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkDNFIq-3knHkuUSzXtaujLmD9rzFkmNS02w&usqp=CAU"></img>
            <Grid item lg={6} md={4} sm={6} xs={12} alignItems="center">
              <center>
                <label>MGTE 21212 Course</label>
                <Button type="primary" block className="w-full">
                  Enroll
                </Button>
              </center>
            </Grid>
          </Grid>

          <Grid container spacing={1} className="flex ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkDNFIq-3knHkuUSzXtaujLmD9rzFkmNS02w&usqp=CAU"></img>
            <Grid item lg={6} md={4} sm={6} xs={12}>
              <label>MGTE 21213 Course</label>
              <Button type="primary" block className="w-full">
                Enroll
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={1} className="flex ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkDNFIq-3knHkuUSzXtaujLmD9rzFkmNS02w&usqp=CAU"></img>
            <Grid item lg={6} md={4} sm={6} xs={12}>
              <label>MGTE 21214 Course</label>
              <Button type="primary" block className="w-full">
                Enroll
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={1} className="flex ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkDNFIq-3knHkuUSzXtaujLmD9rzFkmNS02w&usqp=CAU"></img>
            <Grid item lg={6} md={4} sm={6} xs={12}>
              <label>MGTE 21215 Course</label>
              <Button type="primary" block className="w-full">
                Enroll
              </Button>
            </Grid>
          </Grid>
        </div>
      </Form>
    </div>
  );
}

export default StudentAvailable;
