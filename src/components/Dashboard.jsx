import React from "react";

import "antd/dist/antd.css";
import "./Dashboard.css";
import { Layout, Menu, Icon, Row, Col } from "antd";
import logo from "./logo.png";
import "antd/dist/antd.css";
import "./Dashboard.css";

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.toggle}
        >
          <div className="logo">
            <img src={logo} padding="10" width="65px" />{" "}
            <a href="/">Defect.T</a>
          </div>
          <Menu theme="dark " mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Project</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>Test</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="setting" />
              <span>Defects</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="form" />
              <span>Projects</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="user" />
              <span>Users</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="plus" />
              <span>Manage</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="sketch" />
                  <span>Nav Expand</span>
                </span>
              }
            >
              <Menu.Item key="1">
                <Icon type="file-add" />
                Add
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="alert" />
                Manage
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="export" />
                Test
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="tag" />
                Test
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout
          style={{
            background: "#fff"
          }}
        >
          <Header theme="right">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="mail">
                <Icon type="mail" />
                Navigation One
              </Menu.Item>
              <Menu.Item key="app" disabled>
                <Icon type="appstore" />
                Navigation Two
              </Menu.Item>
            </Menu>
          </Header>
          <Content
            style={{
              margin: "34px 16px",
              padding: 14,
              background: "#fff",

              minHeight: 500
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
