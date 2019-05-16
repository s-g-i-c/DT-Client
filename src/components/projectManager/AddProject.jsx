import React, { Component } from "react";
import { Form, Row, Col, Input, DatePicker, TimePicker } from "antd";

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { TextArea } = Input;

function onChange(date, dateString) {
    console.log(date, dateString);
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
            <Col span={12}>Duration</Col>
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
                placeholder="Duration"
                style={{ width: "90%" }}
                allowClear
                onChange={this.onChange}
              />{" "}
            </Col>
          </Row>
          <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={12}>Type</Col>
            <Col span={12}>Members</Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={12}>
              <Input
                placeholder="Type"
                style={{ width: "90%" }}
                allowClear
                onChange={this.onChange}
              />{" "}
            </Col>
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
          <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={12}>Start Date</Col>
            <Col span={12}>End Date</Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={12}>
            <DatePicker onChange={onChange} />
            </Col>
            <Col span={12}>
              {" "}
              <DatePicker onChange={onChange} />    
            </Col>
          </Row>
          <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={12}>Project Description</Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={24}>
            <TextArea rows={2} />
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
