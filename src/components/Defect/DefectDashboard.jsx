import React, { Component } from "react";
import { Col, Row, Progress, Card } from "antd";

export default class DefectDashboard extends Component {
  render() {
    return (
      <div style={{ padding: "30px" }}>
        <Row>
          {" "}
          <h2> Project Name </h2>{" "}
        </Row>

        <Row gutter={16}>
          <Col span={8}>
            <Card style={{ width: 300, marginTop: 16 }}>
              <Col span={18}>
                <h2>Total Defects</h2>
              </Col>
              <Col span={6}>
                <h2 style={{ color: "#52c41a" }}> 20 </h2>
              </Col>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ width: 300, marginTop: 16 }}>
              <Col span={18}>
                <h2>Total Defects</h2>
              </Col>
              <Col span={6}>
                <h2 style={{ color: "#52c41a" }}> 20 </h2>
              </Col>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ width: 300, marginTop: 16 }}>
              <Col span={18}>
                <h2>Total Defects</h2>
              </Col>
              <Col span={6}>
                <h2 style={{ color: "#52c41a" }}> 20 </h2>
              </Col>
            </Card>
          </Col>
        </Row>

        <Row style={{ margin: "0px 0px 30px 0px" }} />
        <Row>
          <Col span={18}>
            <Col span={3}>New</Col>
            <Col span={15}>
              <Progress
                percent={10}
                status="active"
                strokeColor={{
                  "0%": "#f5222d",
                  "100%": "#f5222d"
                }}
              />
            </Col>
          </Col>
        </Row>

        <Row>
          <Col span={18}>
            <Col span={3}>Open</Col>
            <Col span={15}>
              <Progress
                percent={20}
                status="active"
                strokeColor={{
                  "0%": "#eb2f96",
                  "100%": "#ff7a45"
                }}
              />
            </Col>
          </Col>
        </Row>

        <Row>
          <Col span={18}>
            <Col span={3}> Fixed </Col>
            <Col span={15}>
              <Progress
                percent={30}
                status="active"
                strokeColor={{
                  "0%": "#5b8c00",
                  "100%": "#5b8c00"
                }}
                style={{}}
              />
            </Col>
          </Col>
        </Row>

        <Row>
          <Col span={18}>
            <Col span={3}>Re-Open</Col>
            <Col span={15}>
              <Progress
                percent={40}
                status="active"
                strokeColor={{
                  "0%": "#fadb14",
                  "100%": "#fadb14"
                }}
                style={{}}
              />
            </Col>
          </Col>
        </Row>
        <Row>
          <Col span={18}>
            <Col span={3}>Closed</Col>
            <Col span={15}>
              <Progress
                percent={50}
                strokeColor={{
                  "0%": "#a0d911",
                  "100%": "#a0d911"
                }}
                status="active"
              />
            </Col>
          </Col>
        </Row>
        <Row>
          <Col span={18}>
            <Col span={3}>Rejected</Col>
            <Col span={15}>
              <Progress
                percent={60}
                strokeColor={{
                  "0%": "#13c2c2",
                  "100%": "#13c2c2"
                }}
                status="active"
              />
            </Col>
          </Col>
        </Row>
        <Row>
          <Col span={18}>
            <Col span={3}>Deferred</Col>
            <Col span={15}>
              <Progress
                percent={70}
                strokeColor={{
                  "0%": "#722ed1",
                  "100%": "#722ed1"
                }}
                status="active"
              />
            </Col>
          </Col>
        </Row>
        {/* <Row>
          <Col span={18}>
            <Col span={3}>Deferred</Col>
            <Col span={15}>
              <Progress percent={70} status="active" />
            </Col>
          </Col>
        </Row> */}
      </div>
    );
  }
}
