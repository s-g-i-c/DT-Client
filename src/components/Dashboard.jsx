import React from "react";

import "antd/dist/antd.css";
import "./Dashboard.css";
import { Layout, Menu, Icon, Row, Col, Badge, Empty, Ico } from "antd";
import logo from "./logo.png";
import "antd/dist/antd.css";
import "./Dashboard.css";
import Dashboard from "./companyAdmin/Dashboard";

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
              <Icon type="dashboard" />
              <span>Dashboard</span>
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
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="sketch" />
                  <span>Company Admin</span>
                </span>
              }
            >
              <Menu.Item key="7">
                <Icon type="dashboard" />
                Dashboard
              </Menu.Item>
              <Menu.Item key="8">
                <Icon type="user" />
                Employees Management
              </Menu.Item>
              <Menu.Item key="9">
                <Icon type="form" />
                Project Management
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout
          style={{
            background: "#fff"
          }}
        >
          <Header
            style={{
              background: "#fff"
            }}
          >
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box" />
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box" />
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box" />
              </Col>
              <Col className="gutter-row" span={6}>
                <Menu
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
                >
                  <Menu.Item key="setting:11">
                    <Badge count={0} showZero>
                      <Icon type="bell" />
                      <a href="#" className="head-example" />
                    </Badge>
                  </Menu.Item>
                  <SubMenu
                    title={
                      <span className="submenu-title-wrapper">
                        <Icon type="user" />
                        Mathan
                      </span>
                    }
                  >
                    <MenuItemGroup>
                      <Menu.Item key="setting:2">
                        <Icon type="setting" />
                        Edit Profile
                      </Menu.Item>
                      <Menu.Item key="setting:3">
                        <Icon type="logout" />
                        Logout
                      </Menu.Item>
                    </MenuItemGroup>
                  </SubMenu>
                  <Menu.Item>
                    <Icon type="sync" spin />
                    Help
                  </Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Header>

          <Content
            style={{
              margin: "34px 16px",
              padding: 14,
              background: "#fff",
              minHeight: 500
            }}
          >
          <Dashboard />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
