import React, { Component } from "react";
import { Table, Button, Modal, Row, Col } from "antd";

const data = [
  {
    key: "1",
    defectId: "Defect Id",
    moduleName: "Module Name",
    description: "Description",
    severity: "Severity",
    priority: "Priority",
    type: "Type",
    status: "Status"
  }
];

export default class DefectTable extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    visible: false
  };

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

  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "age"
      }
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "DefectId",
        dataIndex: "defectId",
        key: "defectId",
        filters: [{ text: "Joe", value: "Joe" }, { text: "Jim", value: "Jim" }],
        filteredValue: filteredInfo.defectId || null,
        onFilter: (value, record) => record.defectId.includes(value),
        sorter: (a, b) => a.defectId.length - b.defectId.length,
        sortOrder: sortedInfo.columnKey === "defectId" && sortedInfo.order
      },
      {
        title: "Module Name",
        dataIndex: "moduleName",
        key: "moduleName",
        sorter: (a, b) => a.moduleName - b.moduleName,
        sortOrder: sortedInfo.columnKey === "moduleName" && sortedInfo.order
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
        filters: [
          { text: "London", value: "London" },
          { text: "New York", value: "New York" }
        ],
        filteredValue: filteredInfo.description || null,
        onFilter: (value, record) => record.description.includes(value),
        sorter: (a, b) => a.description.length - b.description.length,
        sortOrder: sortedInfo.columnKey === "description" && sortedInfo.order
      },
      {
        title: "Severity",
        dataIndex: "severity",
        key: "severity",
        filters: [
          { text: "London", value: "London" },
          { text: "New York", value: "New York" }
        ],
        filteredValue: filteredInfo.severity || null,
        onFilter: (value, record) => record.severity.includes(value),
        sorter: (a, b) => a.severity.length - b.severity.length,
        sortOrder: sortedInfo.columnKey === "severity" && sortedInfo.order
      },
      {
        title: "Priority",
        dataIndex: "priority",
        key: "priority",
        filters: [
          { text: "London", value: "London" },
          { text: "New York", value: "New York" }
        ],
        filteredValue: filteredInfo.priority || null,
        onFilter: (value, record) => record.priority.includes(value),
        sorter: (a, b) => a.priority.length - b.priority.length,
        sortOrder: sortedInfo.columnKey === "priority" && sortedInfo.order
      },
      {
        title: "Type",
        dataIndex: "type",
        key: "type",
        filters: [
          { text: "London", value: "London" },
          { text: "New York", value: "New York" }
        ],
        filteredValue: filteredInfo.type || null,
        onFilter: (value, record) => record.type.includes(value),
        sorter: (a, b) => a.type.length - b.type.length,
        sortOrder: sortedInfo.columnKey === "type" && sortedInfo.order
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        filters: [
          { text: "London", value: "London" },
          { text: "New York", value: "New York" }
        ],
        filteredValue: filteredInfo.status || null,
        onFilter: (value, record) => record.status.includes(value),
        sorter: (a, b) => a.status.length - b.status.length,
        sortOrder: sortedInfo.columnKey === "status" && sortedInfo.order
      },
      {
        title: "Details",
        dataIndex: "",
        key: "x",
        render: () => (
          <Button type="primary" icon="plus" onClick={this.showModal} />
        )
      }
    ];

    const { visible } = this.state;
    return (
      <div>
        <Modal
          visible={visible}
          title="DefectId"
          width="60%"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>
          ]}
        >
          <div>
            <Row style={{ margin: "0px 0px 20px 0px" }}>
              <Col span={24}>
                <Col span={6}> Module Name: </Col>
                <Col span={18}> ModuleName </Col>
              </Col>
              {/* <Col span={12}>col-12</Col> */}
            </Row>
            <Row style={{ margin: "0px 0px 20px 0px" }}>
              <Col span={24} style={{ border: "0px solid" }}>
                <Col span={6} style={{ border: "0px solid" }}>
                  {" "}
                  Description:{" "}
                </Col>
                <Col span={18}>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </Col>
              </Col>
              {/* <Col span={12}>col-12</Col> */}
            </Row>
            <Row style={{ margin: "0px 0px 20px 0px" }}>
              <Col span={24}>
                <Col span={6}> Detailed Description: </Col>
                <Col span={18}>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur voluptatibus accusantium necessitatibus culpa
                  exercitationem autem excepturi incidunt eveniet officiis eos,
                  eius facere, nostrum voluptates, fuga earum aliquam esse
                  blanditiis quae?{" "}
                </Col>
              </Col>
            </Row>
            <Row style={{ margin: "0px 0px 20px 0px" }}>
              <Col span={24}>
                <Col span={6}> Comments: </Col>
                <Col span={18}>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur voluptatibus accusantium necessitatibus culpa
                  exercitationem autem excepturi incidunt eveniet officiis eos,
                  eius facere, nostrum voluptates, fuga earum aliquam esse
                  blanditiis quae?. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Similique nisi in dignissimos. Saepe dolorem
                  dolorum dolor consectetur perspiciatis quis molestiae,
                  eligendi quisquam labore sunt in quas debitis, doloribus,
                  aliquam nam!
                </Col>
              </Col>
            </Row>
            <Row style={{ margin: "0px 0px 20px 0px" }}>
              <Col span={24}>
                <Col span={6}> Defect Added By: </Col>
                <Col span={18}>Added By</Col>
              </Col>
            </Row>
            <Row style={{ margin: "0px 0px 20px 0px" }}>
              <Col span={24}>
                <Col span={6}> Added Date: </Col>
                <Col span={18}>Added Date</Col>
              </Col>
            </Row>
          </div>
        </Modal>

        <Table
          columns={columns}
          dataSource={data}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
