import React, { Component } from "react";
import { Col, Row, Table, Button, Modal } from "antd";
import AddEmployee from './AddEmployee'

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    defaultSortOrder: "ascend",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Company Name",
    dataIndex: "name",
    filters: [
      {
        text: "Virtusa",
        value: "Virtusa",
      },
      {
        text: "Sysco Labs",
        value: "Sysco Labs",
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Role",
    dataIndex: "role",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.role - b.role,
  },
  {
    title: "Email ID",
    dataIndex: "email",
    filters: [
      {
        text: "Deluxan",
        value: "deluxan",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.email.indexOf(value) === 0,
    sorter: (a, b) => a.email.length - b.email.length,
    sortDirections: ["descend", "ascend"],
  },
];

const data = [
  {
    id: "00001",
    name: "Tyrone",
    role: "Backend Developer",
    email: "tyrone@gmail.com",
  },
  {
    id: "00002",
    name: "Mathangan",
    role: "Full stack developer",
    email: "mathangan@gmail.com",
  },
  {
    id: "00003",
    name: "Hari Lojunan",
    role: "Frontend Developer",
    email: "hari@gmail.com",
  },
  {
    id: "00004",
    name: "Deluxan",
    role: "Frontend Developer",
    email: "deluxan@gmail.com",
  },
];

function onChange(pagination, filters, sorter) {
  console.log("params", pagination, filters, sorter);
}

export default class CompanyManager extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Row>
          <div>
            <Button type="primary" onClick={this.showModal}>
              Add Employee
            </Button>
            <Modal
              title="Add Employee"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
            <AddEmployee />
            </Modal>
          </div>
        </Row>
        <Row style={{ margin: "0 0 20px 0" }} />
        <Row gutter={16}>
          <Col span={24}>
            <Table columns={columns} dataSource={data} onChange={onChange} />
          </Col>
        </Row>
      </div>
    );
  }
}
