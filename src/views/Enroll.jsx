import React, { Component, Fragment } from "react";
import { ReactDOM } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

class Enroll extends Component {

    constructor(props) {
        super(props)
        this.state = {}}
     render(){
        return (
           
                <Box sx={{ flexGrow: 1 }}>
  
                  <AppBar position="static" >
                    <Toolbar>
                      <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                      >
                        <LibraryBooksIcon />
                      </IconButton>
                      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Course Enrollment
                      </Typography>
                      <Button color="inherit">Course</Button>
                    </Toolbar>
                  </AppBar>
                </Box>
              );
            
       
     }
    
    }

export default Enroll