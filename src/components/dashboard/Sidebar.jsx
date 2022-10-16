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

// import React from "react";

// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// import LecturerAvailable from "../lecturer/LecturerAvailable";
// import LecturerEnrollment from "../lecturer/LecturerEnrollment";
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }
// const Sidebar = () => {

//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return <div>

//   <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Available courses" {...a11yProps(0)} />
//           <Tab label="Enrolled courses" {...a11yProps(1)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//         <div style={{ display: "flex" }}>
//         <LecturerAvailable/>
//         </div>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//       <LecturerEnrollment/>
//       </TabPanel>
      
//     </Box>
//   </div>;
// };

// export default Sidebar;
