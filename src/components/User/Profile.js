import "antd/dist/antd.css";
import { Avatar, Col, Row, Form, Input, Icon, message, Button } from "antd";
import React, { Component } from "react";
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text"
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};
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
          <Col span={8}>
            <Avatar size={164} icon="user" />

            <Row>
              <br />
              <Button>
                <Icon type="upload" /> Click to Upload
              </Button>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
