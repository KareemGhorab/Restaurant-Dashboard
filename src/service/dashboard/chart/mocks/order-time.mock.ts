import { TChartResponse } from '../chart'

const orderTimeResponseMock: TChartResponse = {
	type: 'pie',
	title: 'Order Time',
	description: 'From 1-6 Dec, 2024',
	data: [
		{
			label: 'Afternoon',
			value: 1890,
			position: 1
		},
		{
			label: 'Evening',
			value: 1521,
			position: 2
		},
		{
			label: 'Morning',
			value: 1119,
			position: 3
		},
	]
}

export default orderTimeResponseMock