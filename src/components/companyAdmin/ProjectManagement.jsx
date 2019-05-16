import React, { Component } from "react";
import { Col, Row, Table, Button, Modal, Tooltip, Icon } from "antd";
import AddEmployee from "./AddEmployee";
import AddProject from "./AddProject";

function info() {
  Modal.info({
    title: "Full details",
    width: "50%",
    style: { top: "20px" },
    content: (
      <div>
        <Row gutter={16} style={{ "margin-bottom": "5px" }}>
          <Col span={6}>Project ID</Col>
          <Col span={18}>
            <strong>
              <span>: </span>00001
            </strong>
          </Col>
        </Row>
        <Row gutter={16} style={{ "margin-bottom": "5px" }}>
          <Col span={6}>Project Name</Col>
          <Col span={18}>
            <strong>
              <span>: </span>Hospital Management System
            </strong>
          </Col>
        </Row>
        <Row gutter={16} style={{ "margin-bottom": "5px" }}>
          <Col span={6}>Project Manager</Col>
          <Col span={18}>
            <strong>
              <span>: </span>Somebody, I don't know, Theriyathuda
            </strong>
          </Col>
        </Row>
        <Row gutter={16} style={{ "margin-bottom": "5px" }}>
          <Col span={6}>Type</Col>
          <Col span={18}>
            <strong>
              <span>: </span>Web Application
            </strong>
          </Col>
        </Row>
        <Row gutter={16} style={{ "margin-bottom": "5px" }}>
          <Col span={6}>Members</Col>
          <Col span={18}>
            <strong>
              <span>: </span>Mathangan, Tyrone, Hari Lojunan, Deluxan
            </strong>
          </Col>
        </Row>
        <Row gutter={16} style={{ "margin-bottom": "5px" }}>
          <Col span={6}>Duration</Col>
          <Col span={18}>
            <strong>
              <span>: </span>6 Months
            </strong>
          </Col>
        </Row>
        <Row gutter={16} style={{ "margin-bottom": "5px" }}>
          <Col span={6}>Start Date</Col>
          <Col span={18}>
            <strong>
              <span>: </span>16-05-2019
            </strong>
          </Col>
        </Row>
        <Row gutter={16} style={{ "margin-bottom": "5px" }}>
          <Col span={6}>End Date</Col>
          <Col span={18}>
            <strong>
              <span>: </span>16-11-2019
            </strong>
          </Col>
        </Row>
        <Row gutter={16} style={{ "margin-bottom": "5px" }}>
          <Col span={6}>Description</Col>
          <Col span={18}>
            <span>: </span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Col>
        </Row>
      </div>
    ),
    onOk() {},
  });
}

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    defaultSortOrder: "ascend",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Project Name",
    dataIndex: "name",
    filters: [
      {
        text: "Hospital Management System",
        value: "Hospital Management System",
      },
      {
        text: "Library Management System",
        value: "Library Management System",
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Project Manager",
    dataIndex: "project_manager",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.role - b.role,
  },
  {
    title: "Type",
    dataIndex: "type",
    // filters: [
    //   {
    //     text: "Deluxan",
    //     value: "deluxan",
    //   },
    //   {
    //     text: "New York",
    //     value: "New York",
    //   },
    // ],
    filterMultiple: false,
    onFilter: (value, record) => record.email.indexOf(value) === 0,
    sorter: (a, b) => a.email.length - b.email.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Full View",
    dataIndex: "members",
    align: "center",
    render: () => (
      <Tooltip title="Full Detail">
        <a>
          {/* <Button onClick={info}>Info</Button> */}
          <Icon type="table" style={{ color: "#5b8c00" }} onClick={info} />
        </a>
      </Tooltip>
    ),
  },
  {
    title: "Edit",
    dataIndex: "edit",
    align: "center",
    render: () => (
      <Tooltip title="Edit">
        <a>
          <Icon type="edit" style={{ color: "#13c2c2" }} />
        </a>
      </Tooltip>
    ),
  },
  {
    title: "Delete",
    dataIndex: "delete",
    align: "center",
    render: () => (
      <Tooltip title="Delete">
        <a>
          <Icon type="delete" style={{ color: "#cf1322" }} />
        </a>
      </Tooltip>
    ),
  },
];

const data = [
  {
    id: "00001",
    name: "Hospital Management System",
    project_manager: "Somebody",
    type: "Web Application",
  },
  {
    id: "00002",
    name: "Library Management System",
    project_manager: "I don't know",
    type: "Desktop Application",
  },
];

function onChange(pagination, filters, sorter) {
  console.log("params", pagination, filters, sorter);
}

export default class ProjectManagement extends Component {
  state = { visible: false };

  // Add Project modal
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
              Add Project
            </Button>
            <Modal
              title="Add Project"
              style={{ top: 20 }}
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <AddProject />
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
