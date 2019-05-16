import React, { Component } from "react";
import DefectTable from "./DefectTable";
import { Button, Layout, Modal, Row, Col, Input, Select, Form } from "antd";

const { Content } = Layout;

export default class AddDefect extends Component {
  state = { visible: false };

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
  onChange = e => {
    console.log(e);
  };
  render() {
    const Option = Select.Option;
    const { TextArea } = Input;
    return (
      <div>
        <Layout>
          <Content style={{ backgroundColor: "White" }}>
            {" "}
            <h2> Add Defect </h2>{" "}
          </Content>
          <Content
            id="emptyDiv"
            style={{ height: "10px", backgroundColor: "white" }}
          />
          <Content style={{ height: "10px", backgroundColor: "white" }}>
            <Button type="primary" icon="file-add" onClick={this.showModal}>
              ADD
            </Button>
            <Modal
              title="Add Defect"
              width="60%"
              style={{ top: 10 }}
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <div>
                <Form>
                  <Row>
                    <Col span={12}> Defect Name </Col>
                    <Col span={12}> Module</Col>
                  </Row>
                  <Row style={{ margin: "0px 0px 30px 0px" }}>
                    <Col span={12}>
                      <Input
                        placeholder="Defect Name"
                        style={{ width: "90%" }}
                        allowClear
                        onChange={this.onChange}
                      />
                    </Col>
                    <Col span={12}>
                      <Select
                        showSearch
                        style={{ width: "99%" }}
                        placeholder=" Select Module"
                      >
                        <Option value="module1"> Module 1 </Option>
                        <Option value="module2"> Module 2 </Option>
                        <Option value="module3"> Module 3 </Option>
                      </Select>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={8}> Type </Col>
                    <Col span={8}> Severity</Col>
                    <Col span={8}> Priority</Col>
                  </Row>
                  <Row style={{ margin: "0px 0px 30px 0px" }}>
                    <Col span={8}>
                      <Col span={24}>
                        <Select
                          showSearch
                          style={{ width: "90%" }}
                          placeholder=" Select Type"
                        >
                          <Option value="type1"> Type 1 </Option>
                          <Option value="type2"> Type 2 </Option>
                          <Option value="type3"> Type 3 </Option>
                        </Select>
                      </Col>
                    </Col>
                    <Col span={8}>
                      <Col span={24}>
                        <Select
                          showSearch
                          style={{ width: "90%" }}
                          placeholder=" Select Severity"
                        >
                          <Option value="high"> High </Option>
                          <Option value="medium"> Medium </Option>
                          <Option value="low"> Low </Option>
                        </Select>
                      </Col>
                    </Col>
                    <Col span={8}>
                      <Col span={24}>
                        <Select
                          showSearch
                          style={{ width: "99%" }}
                          placeholder=" Select Priority"
                        >
                          <Option value="high"> High </Option>
                          <Option value="medium"> Medium </Option>
                          <Option value="low"> Low </Option>
                        </Select>
                      </Col>
                    </Col>
                  </Row>
                  <Row>{/* <Divider /> */}</Row>
                  <Row>
                    <Col span={12}>Description</Col>
                  </Row>
                  <Row style={{ margin: "0px 0px 30px 0px" }}>
                    <Col span={24}>
                      <TextArea rows={2} />
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>Steps to Re-Create</Col>
                  </Row>
                  <Row style={{ margin: "0px 0px 30px 0px" }}>
                    <Col span={24}>
                      <TextArea rows={4} />
                    </Col>
                  </Row>

                  <Row>{/* <Divider /> */}</Row>
                  <Row>
                    <Col span={12}>Assigned To</Col>
                    <Col span={12}>Available In</Col>
                  </Row>
                  <Row style={{ margin: "0px 0px 30px 0px" }}>
                    <Col span={12}>
                      <Select
                        showSearch
                        style={{ width: "90%" }}
                        placeholder=" Assigned To "
                      >
                        <Option value="user1"> User1 </Option>
                        <Option value="user2"> User2 </Option>
                        <Option value="user3"> User3 </Option>
                      </Select>
                    </Col>
                    <Col span={12}>
                      <Input
                        placeholder="Available In"
                        style={{ width: "99%" }}
                        allowClear
                        onChange={this.onChange}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}> Comments </Col>
                  </Row>
                  <Row style={{ margin: "0px 0px 30px 0px" }}>
                    <Col span={24}>
                      <TextArea rows={4} />
                    </Col>
                  </Row>
                </Form>
              </div>
            </Modal>
          </Content>
          <Content
            id="emptyDiv"
            style={{ height: "30px", backgroundColor: "white" }}
          />
          <Content>
            <DefectTable />
          </Content>
          <Content style={{ height: "50px", backgroundColor: "white" }} />
        </Layout>
      </div>
    );
  }
}
