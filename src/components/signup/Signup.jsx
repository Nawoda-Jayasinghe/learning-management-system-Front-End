import { useNavigate } from "react-router-dom";

import { Button, Checkbox, Form, Input ,Select } from "antd";
// import {Select} from 'antd';
import React from "react";


import "antd/dist/antd.css";

const { Option } = Select;

export const Signup = () => {

  const navigate = useNavigate();


  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate("");
  };

  const [form] = Form.useForm();
  const onRoleChange = (value) => {
    // switch (value) {
    //   case 'male':
    //     form.setFieldsValue({
    //       note: 'Hi, man!',
    //     });
    //     return;
    //   case 'female':
    //     form.setFieldsValue({
    //       note: 'Hi, lady!',
    //     });
    //     return;
    //   case 'other':
    //     form.setFieldsValue({
    //       note: 'Hi there!',
    //     });
    // }
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
              label="UserName"
              name="UserName"
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
        name="role"
        label="Role"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onRoleChange}
          allowClear
        >
          <Option value="lecturer">Lecturer</Option>
          <Option value="student">Student</Option>
          
        </Select>
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
