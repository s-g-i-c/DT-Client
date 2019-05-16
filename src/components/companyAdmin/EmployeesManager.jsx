import React, { Component } from "react";
import { Col, Row, Table } from "antd";

const columns = [
  {
    title: "Employee ID",
    dataIndex: "id",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Employee Name",
    dataIndex: "name",
    filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
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
        text: "London",
        value: "London",
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
    name: "Joe Black",
    role: 32,
    email: "Sidney No. 1 Lake Park",
  },
  {
    id: "00004",
    name: "Jim Red",
    role: 32,
    email: "London No. 2 Lake Park",
  },
];

function onChange(pagination, filters, sorter) {
  console.log("params", pagination, filters, sorter);
}

export default class EmployeesManager extends Component {
  render() {
    return (
      <div>
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
