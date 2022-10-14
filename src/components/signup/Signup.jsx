import React, { useState } from "react";
import profile from "../../image/profile.png";
import email from "../../image/email.jpg";
import pass from "../../image/pass.png";
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';

function Signup() {
  return (
    <>
      <Box >
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>

          <div>
            <h1>Signup Page</h1>
            <div>
              <img src={email} alt="name" className="email" />
              <input type="text" placeholder="user name" className="name" />
            </div>
            <br></br>
            <div>
              <img src={email} alt="email" className="email" />
              <input type="text" placeholder="user email" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="pass" />
              <input type="text" placeholder="password" className="name" />
            </div>
            
            <div className="login-button">
              <button>Signup</button>
            </div>
          </div>

          <p className="link">
            <a href="#"></a> Already have an account? <a href="#">Login</a>
            
             
            
          </p>
          
        </div>
      </div>
      </Box>
    
    </>
  );
}

export default Signup;
