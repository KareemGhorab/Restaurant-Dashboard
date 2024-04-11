import { TChartResponse } from '../chart'

const ratingResponseMock: TChartResponse = {
	type: 'multi_pie',
	title: 'Your Rating',
	description: 'Overall rating collected from customers',
	data: [
		{
			label: 'Food taste',
			position: 1,
			value: 85,
		},
		{
			label: 'Hygiene',
			position: 2,
			value: 88,
		},
		{
			label: 'Packaging',
			position: 3,
			value: 92,
		},
	],
}

export default ratingResponseMock