import { Card, Col, Row } from 'antd';
import React from 'react';
import { Button } from 'antd';
import Grid from "antd/lib/card/Grid";
const SubjectCard = () => (
  <div className="site-card-wrapper center">
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
  </div>
);
export default SubjectCard;