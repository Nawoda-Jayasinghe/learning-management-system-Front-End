import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex" }}>
        <Sidebar />
      </div>
      <div style={{ display: "flex" }}>
        <Content/>
      </div>
    </div>
  );
};

export default Dashboard;
