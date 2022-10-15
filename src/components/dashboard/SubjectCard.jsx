import { Card, Col, Row } from 'antd';
import React from 'react';
import { Button } from 'antd';
import Grid from "antd/lib/card/Grid";
const SubjectCard = (props) => (
  <div className="w-full" style={{margin:"10px 10px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
    <Grid container spacing={4} className="flex " style={{width:"100%", mx:2 }} >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkDNFIq-3knHkuUSzXtaujLmD9rzFkmNS02w&usqp=CAU"></img>
            <Grid item lg={6} md={4} sm={6} xs={12} alignItems="center" style={{width:"100%" }} >
              <center>
                <label>{props.name}</label>
                <Button type="primary" block className="w-full">
                  {props.btnName}
                </Button>
              </center>
            </Grid>
          </Grid>
  </div>
);
export default SubjectCard;