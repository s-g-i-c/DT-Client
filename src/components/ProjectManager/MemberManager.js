import React, { Component } from "react";
import { Col, Row, Table, Button, Modal, Tooltip, Icon } from "antd";
import AddMembers from "./AddMembers";

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
          <Col span={6}>Status</Col>
          <Col span={18}>
            <strong>
              <span>: </span>OnGoing
            </strong>
          </Col>
        </Row>
        <Row gutter={16} style={{ "margin-bottom": "5px" }}>
          <Col span={6}>Progress</Col>
          <Col span={18}>
            <strong>
              <span>: </span>OnGoing
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
            remaining essentially unchanged.
          </Col>
        </Row>
      </div>
    ),
    onOk() {}
  });
}

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    defaultSortOrder: "ascend",
    sorter: (a, b) => a.id - b.id
  },
  {
    title: "Project Name",
    dataIndex: "name",
    filters: [
      {
        text: "Hospital Management System",
        value: "Hospital Management System"
      },
      {
        text: "Library Management System",
        value: "Library Management System"
      }
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"]
  },
  {
    title: "Members",
    dataIndex: "members",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.members - b.members
  },
  {
    title: "Add Members",
    dataIndex: "add",
    align: "center",
    render: () => (
      <Tooltip title="Add Members">
        {/* <Button onClick={info}>Info</Button> */}
        <Icon
          type="usergroup-add"
          style={{ color: "#5b8c00" }}
          onClick={info}
        />
      </Tooltip>
    )
  },
  {
    title: "View Members",
    dataIndex: "view",
    align: "center",
    render: () => (
      <Tooltip title="Full Detail">
        {/* <Button onClick={info}>Info</Button> */}
        <Icon type="table" style={{ color: "#5b8c00" }} onClick={info} />
      </Tooltip>
    )
  },
  {
    title: "Edit",
    dataIndex: "edit",
    align: "center",
    render: () => (
      <Tooltip title="Edit">
        <Icon type="edit" style={{ color: "#13c2c2" }} />
      </Tooltip>
    )
  },
  {
    title: "Delete",
    dataIndex: "delete",
    align: "center",
    render: () => (
      <Tooltip title="Delete">
        <Icon type="delete" style={{ color: "#cf1322" }} />
      </Tooltip>
    )
  }
];

const data = [
  {
    id: "00001",
    name: "Hospital Management System",
    members: "Mathan, Tyron.."
  },
  {
    id: "00002",
    name: "Library Management System",
    members: "Hari Lojunan, Delux.."
  }
];

function onChange(pagination, filters, sorter) {
  console.log("params", pagination, filters, sorter);
}

export default class MembersManager extends Component {
  state = { visible: false };

  // Add Project modal
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Row style={{ "margin-top": "20px" }}>
          <div>
            <Button type="primary" onClick={this.showModal}>
              Add Members
            </Button>
            <Modal
              title="Add Members"
              style={{ top: 20 }}
              width="60%"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <AddMembers />
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
