import React, {useState, useEffect} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import {Link, useHistory} from 'react-router-dom';
import '../App.css'


export const Signup = (props) => {

const [userData, setUserData] = useState([]);
const [data, setData] = useState({
  name: "",
  email: "",
  Password: "",
  confirmPassword: "",
});

const addName = (data) => {
  const filter = userData.filter((item) => item.email == data.email);
  setUserData([...userData, data])
}

const handleSubmit = () => {
  if (userData) {
    props.addName(data)
  }
};

useEffect (() => {
  localStorage.setItem("userData", JSON.stringify(userData));
}), ([userData]);


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

  const onFinish = (values) => {
    console.log('Success:', values);
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
    <h2 className="form-head">Sign Up</h2>
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
        label="Name"
        name="Name"
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input id="name"/>
      </Form.Item>

      <Form.Item
        label="Email"
        name="Email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input id="email"/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password id="password" />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="Confirm password"
        rules={[
          {
            required: true,
            message: 'Please Confirm your password!',
          },
        ]}
      >
        <Input.Password id="confirmPassword" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button onClick={handleSubmit} type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

