import { useNavigate } from "react-router-dom";

import { Button, Checkbox, Form, Input } from "antd";
import React from "react";


import "antd/dist/antd.css";

export const ForgotPassword = () => {

  const navigate = useNavigate();

  // const hhandleOnPopup = (e) => {
  //   e.preventDefault();
  //   navigate("/SuccessPopup");
  // };

  return (
    <div className="sub-main">
      <div>
        

        <div >
          <h1>Forgot Password</h1><br/>
          <br/>
          <h4><center>Please Enter your email to reset the password</center></h4>
          <br/>
          
          <div>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 8,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label="E-mail"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                  placeholder: "Please Enter your email",
                },
              ]}
            >
              <Input />
            </Form.Item>

            

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                // onClick={(e) => handleOnPopup(e)}
              >
                Reset Password
              </Button>
            </Form.Item>
          </Form>
          </div>
        </div>

        <p className="link">
          <a href="Login">Remember Your password?Login</a> 
        </p>
      </div>
    </div>
  );
};
