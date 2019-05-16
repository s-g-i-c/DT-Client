import React, { Component } from "react";
import { Col, Row, Progress, Card, Divider } from "antd";
import { Doughnut } from "react-chartjs-2";

export default class DefectDashboard extends Component {
  render() {
    const data = {
      datasets: [
        {
          data: [300, 50, 100, 200],
          backgroundColor: ["#5b8c00", "#a0d911", "#13c2c2", "#722ed1"],
          hoverBackgroundColor: ["#135200", "#389e0d", "#006d75", "#391085"]
        }
      ],
      labels: ["Fixed", "Closed", "Rejected", "Deferred"]
    };
    return (
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <Card style={{ width: 300, marginTop: 0 }}>
              <Col span={18}>
                <h2>Total Defects</h2>
              </Col>
              <Col span={6}>
                <h2 style={{ color: "#52c41a" }}> 50 </h2>
              </Col>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ width: 300, marginTop: 0 }}>
              <Col span={18}>
                <h2>Fixed Defects</h2>
              </Col>
              <Col span={6}>
                <h2 style={{ color: "#52c41a" }}> 45 </h2>
              </Col>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ width: 300, marginTop: 0 }}>
              <Col span={18}>
                <h2>Available Defects</h2>
              </Col>
              <Col span={6}>
                <h2 style={{ color: "#52c41a" }}> 05 </h2>
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

        <Row style={{ marginBottom: "30px" }} />
        <Divider />
        <Row>
          {" "}
          <h2> Overall </h2>{" "}
        </Row>

        <Row>
          <Col span={12}>
            <Row>
              <Col span={10}>
                <Card style={{ width: 300, marginTop: 16 }}>
                  <Col span={18}>
                    <h2>Total Defects</h2>
                  </Col>
                  <Col span={6}>
                    <h2 style={{ color: "#52c41a" }}> 50 </h2>
                  </Col>
                </Card>
              </Col>
              <Col span={2} />

              <Col span={10}>
                <Card style={{ width: 300, marginTop: 16 }}>
                  <Col span={18}>
                    <h2>Fixed Defects</h2>
                  </Col>
                  <Col span={6}>
                    <h2 style={{ color: "#52c41a" }}> 45 </h2>
                  </Col>
                </Card>
              </Col>
            </Row>

            <Row style={{ margin: "0px 0px 30px 0px" }} />

            <Row>
              <Col span={24}>
                <Col span={4}> Fixed </Col>
                <Col span={20}>
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
              <Col span={24}>
                <Col span={4}>Closed</Col>
                <Col span={20}>
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
              <Col span={24}>
                <Col span={4}>Rejected</Col>
                <Col span={20}>
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
              <Col span={24}>
                <Col span={4}>Deferred</Col>
                <Col span={20}>
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
          </Col>

          <Col span={12}>
            <Col span={24}>
              <Doughnut data={data} />
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}
