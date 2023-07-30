import React from "react";
import AppAuthLayout from "../layout/AppAuthLayout";
import { Button, Form, Input, Space } from "antd";

const Register = () => {
   return (
      <AppAuthLayout type="register">
         <Form className="auth-form">
            <Form.Item
               name="user"
               rules={[
                  {
                     required: true,
                     message: "Please enter your username",
                  },
               ]}
               hasFeedback
            >
               <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
               name="email"
               rules={[
                  {
                     required: true,
                     message: "Please enter your email",
                  },
                  { type: "email", message: "Please enter a valid email" },
               ]}
               hasFeedback
            >
               <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
               name="password"
               rules={[
                  {
                     required: true,
                     message: "Please enter your password",
                  },
                  { whitespace: true },
               ]}
            >
               <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
               <Button className="form-submit" htmlType="submit" block>
                  Register
               </Button>
            </Form.Item>
         </Form>
      </AppAuthLayout>
   );
};

export default Register;
