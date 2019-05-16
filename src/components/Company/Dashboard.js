import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./Dashboard.css";
import { Layout, Menu, Icon, Row, Col, Badge } from "antd";
import logoDefect from "./logo.png";
import "antd/dist/antd.css";
import "./Dashboard.css";
import CompanyMain from "./ListCompanies";
import Widget from "./Widget";
import Emptyfile from "./EmptyFile";
import Profile from "../User/Profile";

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Dashboard extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.toggle}
            style={{
              background: "#001529"
            }}
          >
            <div className="logo">
              <img src={logoDefect} padding="10" width="65px" alt="logo" />
              <a href="/">Defect.T</a>
            </div>
            <Menu theme="dark " mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Icon type="dashboard" />
                <span>Dashboard</span>
                <Link to={`/widget`} />
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="plus" />
                <span>Manage</span>
                <Link to={`/main`} />
              </Menu.Item>

              <Menu.Item key="3">
                <Icon type="setting" />
                <span>Empty</span>
                <Link to={`/empty`} />
              </Menu.Item>
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
                          <Link to={`/profile`} />
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
                minHeight: 600
              }}
            >
              <Route path="/widget" component={Widget} />
              <Route path="/main" component={CompanyMain} />
              <Route path="/empty" component={Emptyfile} />
              <Route path="/profile" component={Profile} />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Dashboard;
