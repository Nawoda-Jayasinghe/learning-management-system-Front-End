import "antd/dist/antd.css";

import { Menu } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";

import EnrolledCourses from "../commonDashboard/EnrolledCourses";
import AvailableCourses from "../commonDashboard/AvailableCourses";
import Content from "./Content";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
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
      <div>
        <Content/>
      </div>
    </div>
  );

  // function Content() {
  //   return (
  //     <div>
  //       <Routes>
  //         <Route
  //           path="/availableCourses"
  //           element={<AvailableCourses />}
  //         ></Route>
  //         <Route path="/enrolledCourses" element={<EnrolledCourses />}></Route>
  //       </Routes>
  //     </div>
  //   );
  // }
}

export default Sidebar;
