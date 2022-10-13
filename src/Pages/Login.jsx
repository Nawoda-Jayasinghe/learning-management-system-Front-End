import React from 'react'
import profile from "../image/a.png";
import email from "../image/email.jpg";
import pass from "../image/pass.png";
import '../login.css'

export const Login = () => {
  return (
    <div className="sub-main">
        <div>
        <div className='imgs'>
          <div className='container-image'>
            <img src= {profile} alt = "profile" className='profile'/>
          </div>

        </div>
        
        <div>
          <h1>Login Page</h1>
          <div>
            <img src={email} alt="email" className='email'/>
            <input type= "text" placeholder = "user name" className='name'/>
          </div>
          
          <div className='second-input'>
            <img src={pass} alt="pass" className='pass'/>
            <input type= "text" placeholder = "password" className='name'/>
          </div>
          <div className='login-button'>
          <button>Login</button>
          </div>
        </div>
        
          <p  className='link'>
            <a href='#'>Forgot password</a> or <a href='#'>Sign Up</a>
          </p>
        
      </div>
      </div>
  )
}
