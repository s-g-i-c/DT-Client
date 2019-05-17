import React, { Component } from "react";
import { Form, Row, Col, Select, Transfer } from "antd";

const Option = Select.Option;

const children = [];
children.push(<Option key="1">Mathangan</Option>);
children.push(<Option key="2">Tyrone</Option>);
children.push(<Option key="3">Hari Lojunan</Option>);
children.push(<Option key="4">Deluxan</Option>);

// Transfer

const mockData = [];
mockData.push({ key: "0", title: "Mathangan" });
mockData.push({ key: "1", title: "Tyrone" });
mockData.push({ key: "2", title: "Hari Lojunan" });
mockData.push({ key: "3", title: "Thenujan" });
mockData.push({ key: "4", title: "Deluxan" });

const oriTargetKeys = mockData
  .filter(item => +item.key % 1 > 0)
  .map(item => item.key);

export default class AddMembers extends Component {
  state = {
    targetKeys: oriTargetKeys,
    selectedKeys: [],
    disabled: false
  };

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys });

    console.log("targetKeys: ", nextTargetKeys);
    console.log("direction: ", direction);
    console.log("moveKeys: ", moveKeys);
  };

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({
      selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys]
    });

    console.log("sourceSelectedKeys: ", sourceSelectedKeys);
    console.log("targetSelectedKeys: ", targetSelectedKeys);
  };

  handleScroll = (direction, e) => {
    console.log("direction:", direction);
    console.log("target:", e.target);
  };

  render() {
    // const Option = Select.Option;
    // const { TextArea } = Input;
    const { targetKeys, selectedKeys, disabled } = this.state;
    return (
      <div>
        <Form>
          {/* <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={24}>Project ID </Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={24}>
              {" "}
              <Select
                showSearch
                style={{ width: "90%" }}
                placeholder="Select project"
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
                <Option value="jack">00001</Option>
                <Option value="lucy">00002</Option>
                <Option value="tom">00003</Option>
              </Select>
            </Col>
          </Row> */}
          <Row style={{ margin: "0 0 10px 0" }}>
            <Col span={24}>Add Members</Col>
          </Row>
          <Row style={{ margin: "0 0 20px 0" }}>
            <Col span={24}>
              <Transfer
                dataSource={mockData}
                listStyle={{
                  width: 300,
                  height: 350
                }}
                titles={["Source", "Added"]}
                targetKeys={targetKeys}
                selectedKeys={selectedKeys}
                onChange={this.handleChange}
                onSelectChange={this.handleSelectChange}
                onScroll={this.handleScroll}
                render={item => item.title}
                disabled={disabled}
              />
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
