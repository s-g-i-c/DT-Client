import React, { Component } from "react";
import { Row, Col, Checkbox } from "antd";
import "./Style.css";

export default class privilege extends Component {
  render() {
    function onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    }
    return (
      <div>
        <Row style={{ margin: "0px 0px 20px 0px" }}>
          <Col span={4}> </Col>
          <Col span={4}>Lead QA</Col>
          <Col span={4}>Lead Software Engineer </Col>
          <Col span={4}>QA</Col>
          <Col span={4}>Software Engineer</Col>
          <Col span={4}>Project Manager</Col>
        </Row>

        <Row style={{ margin: "0px 0px 20px 0px" }}>
          <Col span={4}> Approval for Company</Col>
          <Col span={4}>
            <Checkbox onChange={onChange} />
          </Col>
          <Col span={4}>
            <Checkbox onChange={onChange} />
          </Col>
          <Col span={4}>
            <Checkbox onChange={onChange} />
          </Col>
          <Col span={4}>
            <Checkbox onChange={onChange} />
          </Col>
          <Col span={4}>
            <Checkbox onChange={onChange} />
          </Col>
        </Row>
      </div>
    );
  }
}
