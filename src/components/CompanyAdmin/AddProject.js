import React, { Component } from "react";
import { Form, Row, Col, Input, Select } from "antd";

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
              <Select
                showSearch
                style={{ width: "90%" }}
                placeholder="Select a Manager"
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
                <Option value="jack">Mr.Rajintha</Option>
                <Option value="lucy">Mr.Chathuranga</Option>
                <Option value="tom">Mr.Malin</Option>
              </Select>
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
        </Form>
      </div>
    );
  }
}
