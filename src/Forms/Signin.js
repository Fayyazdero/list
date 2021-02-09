import React, {useState, useEffect} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom';
import '../App.css'


export const Signin = () => {

  const [text, setText] = useState("Test")
  const [windowWidth, setWindowWith] = useState(window.innerWidth)

  useEffect(() => {
      window.addEventListener('resize', handleResize)
  }, [windowWidth])

  const handleResize = () => {
    setWindowWith(window.innerWidth)
    console.log('hii')
  }
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

  const handleSubmit = (value) => {
      console.log("value", value)
  }

  return (
    <>
    {windowWidth}
    <Button onClick={() => setText("Test")}>Test</Button>
    <Button onClick={() => setText("Post")}>post</Button>
    <h2 className="form-head">{text}</h2>
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
        <Input/>
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
        <p style={{textAlign: 'center'}}>Not Registered ? <Link to="/sign-up"> <a>Sign-Up</a></Link></p>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

