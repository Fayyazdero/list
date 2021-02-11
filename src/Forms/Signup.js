
import React, {useState,useEffect} from 'react'
import { Form, Input, Button, } from 'antd';
import { useHistory } from 'react-router-dom';
import '../App.css'


export const Signup = (props) => {

  const [data, setData] = useState([])

  useEffect(()=>{
      setData(
        JSON.parse(localStorage.userData || `[]`)
        )
  },[])
  const history = useHistory()

  const onFinish = (values) => {
    if (values.password !== values.confirm_password) {
      alert("Not Matched password")
    }
    let dataa = data.find((item)=>{
      return ( item.Name ===  values.Name && item.Email === values.Email)
    }) 
    if(dataa){
      alert("Name Already Taken")
    }else{
      let arr = [...data, values]
      setData(arr)
      localStorage.setItem("userData", JSON.stringify(arr));
      history.push("/sign-in")
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
          <Input id="name" />
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
          <Input id="email" />
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
          name="confirm_password"
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
          <Button type="primary" htmlType="submit">
            Sign Up
        </Button>
        </Form.Item>
      </Form>
    </>
  );
};
