import React from "react";

import {
  PageHeader,
  Table,
  Divider,
  Popconfirm,
  Icon,
  Button,
  Modal,
  Form,
  Input,
  DatePicker
} from "antd";

class CompanyMain extends React.Component {
  state = {
    loading: false,
    visible: false
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

    const dataSource = [
      {
        key: "id",
        id: "C678",
        name: "Samuel Gnanam",
        abbreviation: "Sgic",
        period: "1Year",
        admin: "Mathan"
      },
      {
        key: "id",
        id: "C452",
        name: "Invicta Inovations",
        abbreviation: "Invicta",
        period: "1Year",
        admin: "Theepan"
      },

      {
        key: "id",
        id: "C124",
        name: "Sysco Labs",
        abbreviation: "Sysco",
        period: "1Year",
        admin: "Hari"
      },

      {
        key: "id",
        id: "C777",
        name: "Mithra inovations",
        abbreviation: "mithra",
        period: "2Year",
        admin: "Tyron"
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
        title: "Lisence period",
        dataIndex: "period",
        key: "period"
      },
      ,
      {
        title: "Company Admin",
        dataIndex: "admin",
        key: "admin"
      },
      {
        title: "Action",
        key: "action",

        render: () => (
          <span>
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
            <Divider type="vertical" />
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
            <Divider type="vertical" />
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
        <PageHeader onBack={() => null} title="Company" subTitle="Main" />

        <div style={{ padding: 14, background: "#fff", minHeight: 360 }}>
          <Button type="primary" onClick={this.showModal}>
            <Icon type="diff" theme="filled" />
            Add New
          </Button>
          <Table columns={columns} dataSource={dataSource} />
        </div>
        <div>
          <Modal
            visible={visible}
            title="ADD COMPANY"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Return
              </Button>,
              <Button
                key="submit"
                type="primary"
                loading={loading}
                onClick={this.handleOk}
              >
                Save
              </Button>
            ]}
          >
            <Form.Item layout="horizondal">
              <Input
                placeholder="Company Name"
                className={this.name}
                onChange={event =>
                  this.handleInputChange(event, this.validateName)
                }
              />
            </Form.Item>
            <Form.Item layout="horizondal">
              <Input
                placeholder="Abberivation"
                className={this.module_id}
                onChange={event =>
                  this.handleInputChange(event, this.validateName)
                }
              />
            </Form.Item>

            <Form.Item layout="horizondal">
              <Input
                placeholder="Lisence period"
                className={this.module_id}
                onChange={event =>
                  this.handleInputChange(event, this.validateName)
                }
              />
            </Form.Item>

            <Form.Item layout="horizondal">
              <Input
                placeholder="Company Admin name"
                className={this.module_id}
                onChange={event =>
                  this.handleInputChange(event, this.validateName)
                }
              />
            </Form.Item>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default CompanyMain;
