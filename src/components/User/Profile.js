import "antd/dist/antd.css";
import { Avatar, Divider, Col, Row, Form, Input, Icon, Button } from "antd";
import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={16}>
            <Col span={2} />
            <Col span={10}>
              <Row>Full Name</Row>
              <Row>
                <Form.Item>
                  <Input
                    type="text"
                    value="Mathan"
                    placeholder=" Enter Username !"
                  />
                </Form.Item>
              </Row>
              <Row>Current Password</Row>
              <Row>
                <Form.Item>
                  <Input
                    type="password"
                    value="55645484"
                    placeholder=" Enter current Password !"
                  />
                </Form.Item>
              </Row>
              <Row>Password</Row>
              <Row>
                <Form.Item>
                  <Input type="password" placeholder=" Enter New Password !" />
                </Form.Item>
              </Row>
              <Row>Confirm Password</Row>
              <Row>
                <Form.Item>
                  <Input
                    type="password"
                    placeholder=" Enter Confirm Password !"
                  />
                </Form.Item>
              </Row>

              <Row>
                <Button type="primary">Save Changes</Button>&nbsp;
                <Button>Cancel</Button>
              </Row>
            </Col>
          </Col>
          <Col span={7}>
            <Divider>Update </Divider>
            <Avatar
              style={{ margin: "16px 0 0  85px" }}
              size={164}
              icon="user"
            />

            <Row>
              <br />
              <Button style={{ margin: "16px 0 0  85px" }}>
                <Icon type="upload" /> Click to Upload
              </Button>
            </Row>
            <Divider />
          </Col>
          <Col span={1} />
        </Row>
      </div>
    );
  }
}

export default Profile;
