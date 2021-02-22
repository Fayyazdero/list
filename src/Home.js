import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Post } from './Forms/Post'
import { Layout, Menu, Breadcrumb } from "antd";
  import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  } from "@ant-design/icons";
import "./App.css";

export const Home = () => {
  const [userInfo, setUserInfo] = useState({});

  let x = JSON.parse(localStorage.getItem("userData"));
  let login = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    const user = x.find((item) => item.Email === login.Email);
    setUserInfo(user);
  }, []);

  return (
    <div className="home-page">
      <h3>{userInfo && userInfo.Name}</h3>
    </div>
  );
};

export const Dashboard = ({user}) => {
  
  const history = useHistory();
  useEffect(() => {
    if (!user.email) {
      history.push("/sign-in");
      // props.history.push("/sign-in");
    }
  }, []);

  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  return(
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">Option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Post/>
          </Content>
        </Layout>
      </Layout>
  );
};
