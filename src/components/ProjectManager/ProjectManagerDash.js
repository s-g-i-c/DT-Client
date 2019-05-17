import React, { Component } from "react";
import { Card, Col, Row, Progress, Badge } from "antd";
import MembersManager from "./MemberManager";

export default class PMDashboard extends Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={12}>
            <Card
              title="Success Ratio"
              extra={
                <Badge
                  count={"9/10"}
                  style={{ backgroundColor: "#52c41a" }}
                  overflowCount={100000}
                />
              }
              bordered={true}
            >
              Succeeded -{" "}
              <span>
                <strong>9 out of 10</strong>
              </span>
              <Progress percent={90} status="active" />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Ongoing project Details" bordered={true}>
              <Row>
                <Col span={12}>Project Title</Col>
                <Col span={12}>
                  <span>
                    <strong>Hospital Management System</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={12}>Project Manager</Col>
                <Col span={12}>
                  <span>
                    <strong>1</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={12}>Software Architect</Col>
                <Col span={12}>
                  <span>
                    <strong>1</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={12}>QA Architect</Col>
                <Col span={12}>
                  <span>
                    <strong>1</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={12}>Senior software developer</Col>
                <Col span={12}>
                  <span>
                    <strong>15</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={12}>Senior QA</Col>
                <Col span={12}>
                  <span>
                    <strong>10</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={12}>Junior Software Developer</Col>
                <Col span={12}>
                  <span>
                    <strong>15</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={12}>Junior QA</Col>
                <Col span={12}>
                  <span>
                    <strong>15</strong>
                  </span>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <MembersManager />
      </div>
    );
  }
}
