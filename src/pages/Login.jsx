import React from "react";
import AppAuthLayout from "../layout/AppAuthLayout";
import { Button, Form, Input, Space } from "antd";

const Login = () => {
   return (
      <AppAuthLayout>
         <Form className="auth-form" autoComplete="off">
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
                  Login
               </Button>
            </Form.Item>
         </Form>
      </AppAuthLayout>
   );
};

export default Login;
