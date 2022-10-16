import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

const userType = "Student";

const Dashboard = (prop) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex" }}>
        <Sidebar />
      </div>
      <div style={{ display: "flex" }}>
        <Content  type={prop.type} />
      </div>
    </div>
  );
};

export default Dashboard;
