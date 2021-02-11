import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import '../App.css'


export const Signin = () => {
  const [userInfo, setUserInfo] = useState({})
  const history = useHistory()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userData'))
    setUserInfo(user)
  }, [])

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
    if ((userInfo.Name === values.username) && (userInfo.password === values.password)) {
      history.push('/')
    }
    else {
      history.push('/sign-up')
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



  return (
    <>
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
          name="username"
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
