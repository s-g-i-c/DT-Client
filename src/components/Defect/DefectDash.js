import React from "react";
// import AddDefect from "./Defect/AddDefect";
import DefectDashboard from "./Defect/DefectDashboard";

import "antd/dist/antd.css";

import { Layout, Menu, Icon } from "antd";
import logo from "./logo.png";
import "./Dashboard.css";

const { Header, Sider, Content } = Layout;

class DefectDash extends React.Component {
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
            <img src={logo} margin="34px 16px" width="55px" alt="logo" />{" "}
            <a href="/">Defect Tracker</a>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
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
            <Menu.Item key="7">
              <Icon type="right-circle" />
              <span>Details</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content
            style={{
              margin: "34px 16px",
              padding: 14,
              background: "#fff",
              minHeight: 500
            }}
          >
            {/* <AddDefect /> */}
            <DefectDashboard />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DefectDash;
