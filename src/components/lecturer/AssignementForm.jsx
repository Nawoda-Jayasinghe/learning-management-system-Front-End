import { useNavigate } from "react-router-dom";
import React from "react";
import "antd/dist/antd.css";
import { Button, Form, Input } from "antd";


export const AssignementForm = () => {

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    navigate("#");

  };
   
  
    return (
            <div>git
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 8,
              }}
            >
              <Form.Item
                label="Assignment Name"
                name="Name"
                rules={[
                  {
                    required: true,
                    message: "Please input Assignment Name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
  
              <Form.Item
                label="Description"
                name="Description"
                rules={[
                  {
                    required: true,
                    message: "Please input description!",
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
                  onClick={(e) => handleOnSubmit(e)}
                >
                  Save
                </Button>
              </Form.Item>
            </Form>
            </div>
    );
  };
  