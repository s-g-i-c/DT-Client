import React, { Component } from "react";
import { Form, Row, Col, Input, DatePicker, TimePicker, Select } from "antd";

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { TextArea } = Input;

function onChange(date, dateString) {
  console.log(date, dateString);
}

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

const children = [];
children.push(<Option key="1">Mathangan</Option>);
children.push(<Option key="2">Tyrone</Option>);
children.push(<Option key="3">Hari Lojunan</Option>);
children.push(<Option key="4">Deluxan</Option>);

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default class AddProject extends Component {
  render() {
    // const Option = Select.Option;
    // const { TextArea } = Input;
    return (
      <div>
        <Form>
          <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={12}>Project Name </Col>
            <Col span={12}>Project Manager</Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={12}>
              <Input
                placeholder="Project Name"
                style={{ width: "90%" }}
                allowClear
                onChange={this.onChange}
              />{" "}
            </Col>
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
          </Row>
          <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={12}>Duration</Col>
            <Col span={12}>Type</Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={12}>
              <Input
                placeholder="Duration"
                style={{ width: "90%" }}
                allowClear
                onChange={this.onChange}
              />{" "}
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
            <Col span={12}>Start Date</Col>
            <Col span={12}>End Date</Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={12}>
              <DatePicker onChange={onChange} style={{ width: "90%" }} />
            </Col>
            <Col span={12}>
              {" "}
              <DatePicker onChange={onChange} style={{ width: "90%" }} />
            </Col>
          </Row>
          <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={12}>Status</Col>
            <Col span={12}>Progress</Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={12}>
              {" "}
              <Input
                placeholder="Status"
                style={{ width: "90%" }}
                allowClear
                onChange={this.onChange}
              />
            </Col>
            <Col span={12}>
              <Input
                placeholder="Progress"
                style={{ width: "90%" }}
                allowClear
                onChange={this.onChange}
              />{" "}
            </Col>
          </Row>
          <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={12}>Project Description</Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={24}>
              <TextArea rows={2} style={{ width: "95%" }} />
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
