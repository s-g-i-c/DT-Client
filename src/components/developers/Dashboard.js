import React, { Component } from "react";
import { Card, Col, Row, Icon } from "antd";
import {Doughnut} from 'react-chartjs-2';
import DefectsManager from "./DefectsManager";

// Doughnut Data
const data = {
	labels: [
		'Assigned',
		'Closed',
		'Opened',
		'Reopened',
		'Deferred',
		'Rejected'
	],
	datasets: [{
		data: [6, 4, 1, 2, 3, 1],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56',
		'#91d5ff',
		'#f759ab'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56',
		'#91d5ff',
		'#f759ab'
		]
	}]
};

export default class Dashboard extends Component {
	render() {
		return (
			<div>
				<Row gutter={16}>
					<Col span={18}>
						<Row gutter={16}>
							<Col span={6}>
								<Card
									bordered={true}
									style={{
										height: '100px',
										background: 'linear-gradient(to right, #ffc500, #c21500)'
									}}
								>
									<Row gutter={16}>
										<Col span={12}>
											<Row><span style={{ 'font-size': '1.5rem' }}>6</span></Row>
											<Row>Assigned</Row>
										</Col>
										<Col span={12}>
											<Icon type="frown" style={{ fontSize: '3rem', color: '#d9d9d9', opacity: '0.5' }} />
										</Col>
									</Row>
								</Card>
							</Col>
							<Col span={6}>
								<Card
									bordered={true}
									style={{
										height: '100px',
										background: 'linear-gradient(to right, #ffe000, #799f0c)'
									}}
								>
									<Row gutter={16}>
										<Col span={12}>
											<Row><span style={{ 'font-size': '1.5rem' }}>4</span></Row>
											<Row>Closed</Row>
										</Col>
										<Col span={12}>
											<Icon type="check-circle" style={{ fontSize: '3rem', color: '#d9d9d9', opacity: '0.5' }} />
										</Col>
									</Row>
								</Card>
							</Col>
							<Col span={6}>
								<Card
									bordered={true}
									style={{
										height: '100px',
										background: 'linear-gradient(to right, #ffa751, #ffe259)'
									}}
								>
									<Row gutter={16}>
										<Col span={12}>
											<Row><span style={{ 'font-size': '1.5rem' }}>1</span></Row>
											<Row>Pending</Row>
										</Col>
										<Col span={12}>
											<Icon type="warning" style={{ fontSize: '3rem', color: '#d9d9d9', opacity: '0.5' }} />
										</Col>
									</Row>
								</Card>
							</Col>
							<Col span={6}>
								<Card
									bordered={true}
									style={{
										height: '100px',
										background: 'linear-gradient(to right, #dad299, #b0dab9)'
									}}
								>
									<Row gutter={16}>
										<Col span={12}>
											<Row><span style={{ 'font-size': '1.5rem' }}>1</span></Row>
											<Row>Deferred</Row>
										</Col>
										<Col span={12}>
											<Icon type="close" style={{ fontSize: '3rem', color: '#d9d9d9', opacity: '0.5' }} />
										</Col>
									</Row>
								</Card>
							</Col>
						</Row>
						<Row gutter={16} style={{ 'margin-top': '50px' }}>
							<DefectsManager />
						</Row>
					</Col>
					<Col span={6}>
						<Card
							style={{ height: '500px' }}
							bordered={true}
						>
							<h2>Defects Chart</h2>
							<Doughnut width="100%" data={data} />
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}
