import React, { Component } from "react";
import { Card, Col, Row, Table, Progress, Badge } from "antd";
import EmployeesManager from "./EmployeesManager";
import ProjectManagement from './ProjectManagement'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title="No.of Projects"
              extra={
                <Badge
                  count={16}
                  style={{ backgroundColor: "#52c41a" }}
                  overflowCount={100000}
                />
              }
              bordered={true}
            >
              Ongoing projects -{" "}
              <span>
                <strong>11</strong>
              </span>
              <Progress percent={70} status="active" />
              Pending projects -{" "}
              <span>
                <strong>5</strong>
              </span>
              <Progress
                percent={30}
                status="active"
                strokeColor={{
                  "0%": "#f5222d",
                  "100%": "#f5222d",
                }}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Employees Available"
              extra={
                <Badge
                  count={60}
                  style={{ backgroundColor: "#52c41a" }}
                  overflowCount={100000}
                />
              }
              bordered={true}
            >
              Employees in projects -{" "}
              <span>
                <strong>54</strong>
              </span>
              <Progress percent={90} status="active" />
              In bench -{" "}
              <span>
                <strong>6</strong>
              </span>
              <Progress
                percent={10}
                status="active"
                strokeColor={{
                  "0%": "#f5222d",
                  "100%": "#f5222d",
                }}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Employees Details"
              extra={
                <Badge
                  count={60}
                  style={{ backgroundColor: "#52c41a" }}
                  overflowCount={100000}
                />
              }
              bordered={true}
            >
              <Row>
                <Col span={18}>Software Architect</Col>
                <Col span={6}>
                  <span>
                    <strong>4</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={18}>QA Architect</Col>
                <Col span={6}>
                  <span>
                    <strong>3</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={18}>Project Manager</Col>
                <Col span={6}>
                  <span>
                    <strong>3</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={18}>Senior software developer</Col>
                <Col span={6}>
                  <span>
                    <strong>10</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={18}>Junior software developer</Col>
                <Col span={6}>
                  <span>
                    <strong>15</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={18}>Senior QA</Col>
                <Col span={6}>
                  <span>
                    <strong>10</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={18}>Junior QA</Col>
                <Col span={6}>
                  <span>
                    <strong>15</strong>
                  </span>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <ProjectManagement />

      </div>
    );
  }
}
