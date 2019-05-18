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
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

const children = [];
children.push(<Option key="1">Mathangan</Option>);
children.push(<Option key="2">Tyrone</Option>);
children.push(<Option key="3">Hari Lojunan</Option>);
children.push(<Option key="4">Deluxan</Option>);

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default class AddDefect extends Component {
  render() {
    // const Option = Select.Option;
    // const { TextArea } = Input;
    return (
      <div>
        <Form>
          <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={12}>Defect Title</Col>
            <Col span={12}>Module</Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={12}>
              <Input
                placeholder="Defect"
                style={{ width: "95%" }}
                allowClear
                onChange={this.onChange}
              />{" "}
            </Col>
            <Col span={12}>
              <Select
                showSearch
                style={{ width: "95%" }}
                placeholder="Module"
                optionFilterProp="children"
                onChange={onChangeSelect}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="jack">Login</Option>
                <Option value="lucy">Notification</Option>
                <Option value="tom">Dashboard</Option>
              </Select>
            </Col>
          </Row>
          <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={8}>Severity</Col>
            <Col span={8}>Priority</Col>
            <Col span={8}>Type</Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={8}>
            <Select
                showSearch
                style={{ width: "90%" }}
                placeholder="Severity"
                optionFilterProp="children"
                onChange={onChangeSelect}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="jack">Low</Option>
                <Option value="lucy">Medium</Option>
                <Option value="tom">High</Option>
              </Select>
            </Col>
            <Col span={8}>
            <Select
                showSearch
                style={{ width: "90%" }}
                placeholder="Priority"
                optionFilterProp="children"
                onChange={onChangeSelect}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="jack">Low</Option>
                <Option value="lucy">Medium</Option>
                <Option value="tom">High</Option>
              </Select>
            </Col>
            <Col span={8}>
            <Select
                showSearch
                style={{ width: "90%" }}
                placeholder="Type"
                optionFilterProp="children"
                onChange={onChangeSelect}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="jack">Type 1</Option>
                <Option value="lucy">Type 2</Option>
                <Option value="tom">Type 3</Option>
              </Select>
            </Col>
          </Row>
          <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={8}>Entered Date</Col>
            <Col span={8}>Assigned To</Col>
            <Col span={8}>Available In</Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={8}>
              <DatePicker onChange={onChange} style={{ width: '90%' }} />
            </Col>
            <Col span={8}>
            <Select
                showSearch
                style={{ width: "90%" }}
                placeholder="Assigned To"
                optionFilterProp="children"
                onChange={onChangeSelect}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="Mathangan">Mathangan</Option>
                <Option value="Tyrone">Tyrone</Option>
                <Option value="Hari Lojunan">Hari Lojunan</Option>
                <Option value="Deluxan">Deluxan</Option>
              </Select>
            </Col>
            <Col span={8}>
            <Input
                placeholder="Available In"
                style={{ width: "90%" }}
                allowClear
                onChange={this.onChange}
              />
            </Col>
          </Row>
          <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={8}>Status</Col>
            <Col span={8}>Fixed By</Col>
            <Col span={8}>Fixed Date</Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={8}>
              <Input
                placeholder="Status"
                style={{ width: "90%" }}
                allowClear
                onChange={this.onChange}
              />
            </Col>
            <Col span={8}>
            <Select
                showSearch
                style={{ width: "90%" }}
                placeholder="Fixed By"
                optionFilterProp="children"
                onChange={onChangeSelect}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="Mathangan">Mathangan</Option>
                <Option value="Tyrone">Tyrone</Option>
                <Option value="Hari Lojunan">Hari Lojunan</Option>
                <Option value="Deluxan">Deluxan</Option>
              </Select>
            </Col>
            <Col span={8}>
              <DatePicker onChange={onChange} style={{ width: '90%' }} />
            </Col>
          </Row>
          <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={12}>Comments</Col>
            <Col span={12}>Steps To Recreate</Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={12}>
              <TextArea rows={2} style={{ width: '95%' }} />
            </Col>
            <Col span={12}>
              <TextArea rows={2} style={{ width: '95%' }} />
            </Col>
          </Row>
          <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={12}>Description</Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={24}>
              <TextArea rows={2} style={{ width: '98%' }} />
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
