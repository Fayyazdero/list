import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Alert } from "antd";
import { Link, useHistory } from "react-router-dom";
import "../App.css";

export const Signin = ({ setUser }) => {
  const [loginData, setLoginData] = useState({});
  const [val, setVal] = useState({});

  const history = useHistory();
  useEffect(() => {
    let loginData = JSON.parse(localStorage.getItem("userInfo"));
    if (findUser(loginData)) {
      history.push("/");
      setUser(loginData);
    }
    setLoginData(loginData);
  }, []);

  let signupData = JSON.parse(localStorage.getItem("userData"));

  function findUser(user) {
    return signupData.find(
      (item) => item.Email === user.email && user.password === item.password
    );
  }
  const onFinish = (values) => {
    if (findUser({ email: values.email, password: values.password })) {
      localStorage.setItem("userInfo", JSON.stringify(values));
      history.push("/");
      setUser(values);
    } else {
      setVal({
        type: "error",
        message: "Not Found",
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 11,
      span: 16,
    },
  };

  return (
    <>
      <h2 className="text-center">Sign In</h2>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
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

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <p style={{ textAlign: "center" }}>
          Not Registered ? <Link to="/sign-up"> sign-Up</Link>
        </p>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Signin;
