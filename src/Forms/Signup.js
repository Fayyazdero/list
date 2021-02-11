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
    if (values.password !== values.confirm_password) {
      alert("Not Matched password")
    }
    let dataa = data.find((e)=>{
      return ( e.Name ==  values.Name && e.Email == values.Email)
    }) 
    if(dataa){
      alert("name taken")
    }else{
      console.log(values, "t6est")
      let arr = [...data, values]
      setData(arr)
      localStorage.setItem("userData", JSON.stringify(arr));
      history.push("/")
    }
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
