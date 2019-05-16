import React, { Component } from "react";
import { Form, Row, Col, Input, Select, Upload, Button, Icon } from "antd";

export default class AddProject extends Component {
  render() {
    // const Option = Select.Option;
    // const { TextArea } = Input;
    return (
      <div>
        <Form>
          <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={12}>Project Id</Col>
            <Col span={12}>Project Name </Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={12}>
              {" "}
              <Input
                placeholder="Project ID"
                style={{ width: "90%" }}
                allowClear
                onChange={this.onChange}
              />
            </Col>
            <Col span={12}>
              <Input
                placeholder="Project Name"
                style={{ width: "90%" }}
                allowClear
                onChange={this.onChange}
              />{" "}
            </Col>
          </Row>

          <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={12}>Project Manager</Col>
            <Col span={12}>Type</Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={12}>
              {" "}
              <Input
                placeholder="Project Manager"
                style={{ width: "90%" }}
                allowClear
                onChange={this.onChange}
              />
            </Col>
            <Col span={12}>
              <Input
                placeholder="Type"
                style={{ width: "90%" }}
                allowClear
                onChange={this.onChange}
              />{" "}
            </Col>
          </Row>
          <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={12}>Members</Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={12}>
              {" "}
              <Input
                placeholder="Members"
                style={{ width: "90%" }}
                allowClear
                onChange={this.onChange}
              />
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
