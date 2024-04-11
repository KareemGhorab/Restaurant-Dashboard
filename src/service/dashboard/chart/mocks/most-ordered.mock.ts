import { TChartResponse } from '../chart'

const mostOrderedResponseMock: TChartResponse = {
	type: 'list',
	title: 'Most Ordered',
	description: 'Most ordered food',
	data: [
		{
			title: 'Fresh Salad Bowl',
			value: 45,
			image: `https://picsum.photos/${Math.random()}/picsum/40/40`,
			position: 1,
		},
		{
			title: 'Chicken Noodles',
			value: 75,
			image: `https://picsum.photos/${Math.random()}/picsum/40/40`,
			position: 2,
		},
		{
			title: 'Smoothie Fruits',
			value: 50,
			image: `https://picsum.photos/${Math.random()}/picsum/40/40`,
			position: 3,
		},
		{
			title: 'Hot Chicken Wings',
			value: 60,
			image: `https://picsum.photos/${Math.random()}/picsum/40/40`,
			position: 4,
		},
	],
}

export default mostOrderedResponseMock