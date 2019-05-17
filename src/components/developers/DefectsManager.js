import React, { Component } from "react";
import { Col, Row, Table, Button, Modal, Tooltip, Icon } from "antd";

function info() {
    Modal.info({
        title: "Full details",
        width: "50%",
        style: { top: "20px" },
        content: (
            <div>
                <Row gutter={16} style={{ "margin-bottom": "5px" }}>
                    <Col span={6}>Defect ID</Col>
                    <Col span={18}>
                        <strong>
                            <span>: </span>DE-0001
            </strong>
                    </Col>
                </Row>
                <Row gutter={16} style={{ "margin-bottom": "5px" }}>
                    <Col span={6}>Defect Title</Col>
                    <Col span={18}>
                        <strong>
                            <span>: </span>Form Validation Issue
            </strong>
                    </Col>
                </Row>
                <Row gutter={16} style={{ "margin-bottom": "5px" }}>
                    <Col span={6}>Module</Col>
                    <Col span={18}>
                        <strong>
                            <span>: </span>Login Module
            </strong>
                    </Col>
                </Row>
                <Row gutter={16} style={{ "margin-bottom": "5px" }}>
                    <Col span={6}>Severity</Col>
                    <Col span={18}>
                        <strong>
                            <span>: </span>High
            </strong>
                    </Col>
                </Row>
                <Row gutter={16} style={{ "margin-bottom": "5px" }}>
                    <Col span={6}>Priority</Col>
                    <Col span={18}>
                        <strong>
                            <span>: </span>Low
            </strong>
                    </Col>
                </Row>
                <Row gutter={16} style={{ "margin-bottom": "5px" }}>
                    <Col span={6}>Defect Type</Col>
                    <Col span={18}>
                        <strong>
                            <span>: </span>Validation
            </strong>
                    </Col>
                </Row>
                <Row gutter={16} style={{ "margin-bottom": "5px" }}>
                    <Col span={6}>Entered By</Col>
                    <Col span={18}>
                        <strong>
                            <span>: </span>Mathangan
            </strong>
                    </Col>
                </Row>
                <Row gutter={16} style={{ "margin-bottom": "5px" }}>
                    <Col span={6}>Entered Date</Col>
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
                        ever since the 1500s.
          </Col>
                </Row>
                <Row gutter={16} style={{ "margin-bottom": "5px" }}>
                    <Col span={6}>Steps to recreate</Col>
                    <Col span={18}>
                        <span>: </span>
                        When an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
          </Col>
                </Row>
            </div>
        ),
        onOk() { },
    });
}

const columns = [
    {
        title: "Defect Title",
        dataIndex: "title",
        // filters: [
        //   {
        //     text: "Hospital Management System",
        //     value: "Hospital Management System",
        //   },
        //   {
        //     text: "Library Management System",
        //     value: "Library Management System",
        //   },
        // ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.title.indexOf(value) === 0,
        sorter: (a, b) => a.title.length - b.title.length,
        sortDirections: ["descend"],
    },
    {
        title: "Module",
        dataIndex: "module",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.module - b.module,
    },
    {
        title: "Severity",
        dataIndex: "severity",
    },
    {
        title: "Priority",
        dataIndex: "priority",
    },
    {
        title: "Entered By",
        dataIndex: "by",
    },
    {
        title: "Entered Date",
        dataIndex: "date",
    },
    {
        title: "Actions",
        dataIndex: "actions",
        align: "center",
        render: () => (
            <div>
                <Tooltip title="Full Detail">
                    <a>
                        {/* <Button onClick={info}>Info</Button> */}
                        <Icon type="table" style={{ color: "#5b8c00", 'margin-right': '10px' }} onClick={info} />
                    </a>
                </Tooltip>
                <Tooltip title="Edit">
                    <a>
                        <Icon type="edit" style={{ color: "#13c2c2", 'margin-right': '10px' }} />
                    </a>
                </Tooltip>
                <Tooltip title="Delete">
                    <a>
                        <Icon type="delete" style={{ color: "#cf1322" }} />
                    </a>
                </Tooltip>
            </div>
        )
    }
];

const data = [
    {
        title: "Form Validation Issue",
        module: "Login",
        severity: "High",
        priority: "Medium",
        by: "Tyrone",
        date: "10-May-2019"
    },
    {
        title: "Responsive issue",
        module: "Dashboard",
        severity: "Medium",
        priority: "Low",
        by: "Mathangan",
        date: "11-May-2019"
    },
];

function onChange(pagination, filters, sorter) {
    console.log("params", pagination, filters, sorter);
}

export default class DefectsManager extends Component {
    //   state = { visible: false };

    //   // Add Project modal
    //   showModal = () => {
    //     this.setState({
    //       visible: true,
    //     });
    //   };

    //   handleOk = e => {
    //     console.log(e);
    //     this.setState({
    //       visible: false,
    //     });
    //   };

    //   handleCancel = e => {
    //     console.log(e);
    //     this.setState({
    //       visible: false,
    //     });
    //   };

    render() {
        return (
            <div>
                {/* <Row>
          <div>
            <Button type="primary" onClick={this.showModal}>
              Add Project
            </Button>
            <Modal
              title="Add Project"
              width="60%"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <AddDefects />
            </Modal>
          </div>
        </Row> */}
                <Row style={{ margin: "0 0 20px 0" }}>
                    <h2>Defects Details</h2>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Table columns={columns} dataSource={data} onChange={onChange} />
                    </Col>
                </Row>
            </div>
        );
    }
}
