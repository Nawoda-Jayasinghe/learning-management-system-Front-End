import React from "react";
import Sidebar from "../dashboard/Sidebar";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AssignementForm } from "./AssignementForm";
import AssignmentGrid from "./AssignmentGrid";
import StudentList from "./StudentList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const EnrolledCourse = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: "flex", width:"100%" }}>
      <div>
        <Sidebar/>
      </div>
      <div>
  <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Assignments" {...a11yProps(0)} />
          <Tab label="Student List" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div style={{ display: "flex" }}>
        <AssignementForm/>
        <AssignmentGrid/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <StudentList/>
      </TabPanel>
      
    </Box>
  </div>;
    </div>
  );
};

export default EnrolledCourse;
