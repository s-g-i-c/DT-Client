import React from "react";

import { Breadcrumb, Table, Divider, Popconfirm, Icon, Button } from "antd";

class CompanyMain extends React.Component {
  render() {
    const dataSource = [
      {
        key: "id",
        id: "C678",
        name: "Samuel Gnanam",
        abbreviation: "Sgic",
        address: "10 Downing Street"
      },
      {
        key: "id",
        id: "C878",
        name: "Samuel Gnanam",
        abbreviation: "Sgic",
        address: "10 Downing Street"
      },
      {
        key: "id",
        id: "C878",
        name: "Samuel Gnanam",
        abbreviation: "Sgic",
        address: "10 Downing Street"
      },
      {
        key: "id",
        id: "C878",
        name: "Samuel Gnanam",
        abbreviation: "Sgic",
        address: "10 Downing Street"
      }
    ];
    const columns = [
      {
        title: "Company ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "Company Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Abbreviation",
        dataIndex: "abbreviation",
        key: "abbreviation"
      },
      {
        title: "Action",
        key: "action",

        render: (text, record) => (
          <span>
            <Divider type="vertical" />
            <Popconfirm
              title="Are you sure, do you want edit this Company?"
              icon={
                <Icon type="question-circle-o" style={{ color: "primary" }} />
              }
              onCancel={this.cancel}
              okText="Yes"
              cancelText="No"
            >
              <a href="hello">
                <Icon
                  type="edit"
                  className="datatable-icon"
                  style={{ color: "primary" }}
                />
                Edit
              </a>
            </Popconfirm>
            &nbsp; &nbsp;
            <Popconfirm
              title="Are you sure, do you want delete this Company?"
              icon={<Icon type="question-circle-o" style={{ color: "red" }} />}
              onCancel={this.cancel}
              okText="Yes"
              cancelText="No"
            >
              <a href="hello" style={{ color: "red" }}>
                <Icon type="delete" className="datatable-icon" />
                Delete
              </a>
            </Popconfirm>
            &nbsp; &nbsp;
            <a href="hello" style={{ color: "green" }}>
              <Icon type="fullscreen" className="datatable-icon" />
              View
            </a>
          </span>
        )
      }
    ];

    return (
      <React.Fragment>
        <Breadcrumb style={{ margin: " 0" }}>
          <Breadcrumb.Item>Company</Breadcrumb.Item>
          <Breadcrumb.Item>Main</Breadcrumb.Item>
        </Breadcrumb>

        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          <Button type="primary">
            <Icon type="diff" theme="filled" />
            Add New
          </Button>
          <Table columns={columns} dataSource={dataSource} />
        </div>
      </React.Fragment>
    );
  }
}

export default CompanyMain;
