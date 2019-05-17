import React, { Component } from "react";
import { Form, Row, Col, Input, Select, Upload, Button, Icon } from "antd";

const Option = Select.Option;

function onChangeSelect(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

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
              <Select
                showSearch
                style={{ width: "90%" }}
                placeholder="Select a role"
                optionFilterProp="children"
                onChange={onChangeSelect}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="Software Architect">Software Architect</Option>
                <Option value="QA Architect">QA Architect</Option>
                <Option value="Project Manager">Project Manager</Option>
                <Option value="Senior Developer">Senior Developer</Option>
                <Option value="Junior Developer">Junior Developer</Option>
                <Option value="Senior QA">Senior QA</Option>
                <Option value="Junior QA">Junior QA</Option>
              </Select>
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
