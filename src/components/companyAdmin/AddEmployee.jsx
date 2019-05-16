import React, { Component } from "react";
import { Form, Row, Col, Input, Select, Upload, Button, Icon } from "antd";

export default class AddEmployee extends Component {
  render() {
    // const Option = Select.Option;
    // const { TextArea } = Input;
    return (
      <div>
        <Form>
          <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={12}> Employee Id</Col>
            <Col span={12}>Employee Name </Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={12}>
              {" "}
              <Input
                placeholder="Employee ID"
                style={{ width: "90%" }}
                allowClear
                onChange={this.onChange}
              />
            </Col>
            <Col span={12}>
              <Input
                placeholder="Employee Name"
                style={{ width: "90%" }}
                allowClear
                onChange={this.onChange}
              />{" "}
            </Col>
          </Row>

          <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={12}>Role</Col>
            <Col span={12}>Email ID</Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={12}>
              {" "}
              <Input
                placeholder="Role"
                style={{ width: "90%" }}
                allowClear
                onChange={this.onChange}
              />
            </Col>
            <Col span={12}>
              <Input
                placeholder="Email ID"
                style={{ width: "90%" }}
                allowClear
                onChange={this.onChange}
              />{" "}
            </Col>
          </Row>
          <Row>
            <Col span={12}>
                <Upload name="logo" action="/upload.do" listType="picture">
                <Button>
                    <Icon type="upload" /> Upload profile picture
                </Button>
                </Upload>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
