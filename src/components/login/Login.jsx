
import { useNavigate } from "react-router-dom";

import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

import "antd/dist/antd.css";

export const Login = () => {

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="sub-main">
      <div>
        {/* <div className="imgs">
          <div className="container-image">
            <img src={profile} alt="profile" className="profile" />
          </div>
        </div> */}

        <div>
          <h1>Login Page</h1>
          {/* <div>
            <img src={email} alt="email" className="email" />
            <input type="text" placeholder="user name" className="name" />
          </div>

          <div className="second-input">
            <img src={pass} alt="pass" className="pass" />
            <input type="text" placeholder="password" className="name" />
          </div>
          <div className="login-button">
            <button onClick={(e) => handleOnSubmit(e)}>Login</button>
          </div> */}
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
              label="User Name"
              name="Name"
              rules={[
                {
                  required: true,
                  message: "Please input your User Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
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
                onClick={(e) => handleOnSubmit(e)}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
          </div>
        </div>

        <p className="link">
          <a href="ForgotPassword">Forgot password</a> or <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
};
