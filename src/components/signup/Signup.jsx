import { useNavigate } from "react-router-dom";

import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

import "antd/dist/antd.css";

export const Signup = () => {

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate("");
  };



  return (
    <div className="sub-main">
      <div>
        

        <div>
          <h1>Sign up</h1>
          
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
              label="Name"
              name="Name"
              rules={[
                {
                  required: true,
                  message: "Please input your Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
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
          <a href="#">Forgot password</a> or <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
