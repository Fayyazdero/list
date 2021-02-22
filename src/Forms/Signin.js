
import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import '../App.css'


export const Signin = () => {
  const [loginData, setLoginData] = useState({})
  const history = useHistory()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userData'))
    setLoginData(user)
  }, [])

  let signupData = JSON.parse(localStorage.getItem('userData'));

  const onFinish = (values) => {
    if(values.email === signupData.email && values.password === signupData.password ) {
    localStorage.setItem("userInfo", JSON.stringify(values));
      history.push("/")
    } else {
      alert("Not Found")
    }
  }
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
              message: 'Please input your username!',
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
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <p style={{ textAlign: 'center' }}>Not Registered ? <Link to="/sign-up"> sign-Up</Link></p>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
      </Form>
    </>
  );
};


export default Signin