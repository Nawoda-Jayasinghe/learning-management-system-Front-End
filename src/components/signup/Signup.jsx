import {
    Box,
    Button,
    FormHelperText,
    IconButton,
    Input,
    InputAdornment,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import Appbar from "../home/Appbar";
  // import AccountCircleIcon from "@mui/icons-material/AccountCircle";
  // import { Visibility, VisibilityOff } from "@mui/icons-material";
  import Alert from "../utilsComponents/Alert";
  import { Link, useNavigate } from "react-router-dom";
//   import authService from "../../services/auth.service";
  // import { ROLES } from "../../constants/roles";
  import Footer from "../home/Footer";

  function Signup() {
    return (
        <>
          <Appbar />
          Signup
          <Footer />
        </>
      );
  
  }
    
  
  export default Signup;
  