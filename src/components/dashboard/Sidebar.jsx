import "antd/dist/antd.css";
import { Menu } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";


function Sidebar() {
  const navigate = useNavigate();
  return (
      <div style={{ display: "flex" }}>
        <Menu
          onClick={({ key }) => {
            if (key === "signout") {
              //signout option have to implement
            } else {
              navigate(key);
            }
          }}
          items={[
            { label: "Available", key: "/availableCourses" },
            { label: "Enrolled", key: "/enrolledCourses" },
          ]}
        ></Menu>


      </div>
  );
}

export default Sidebar;
