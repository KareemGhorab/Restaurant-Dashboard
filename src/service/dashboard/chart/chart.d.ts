export type TChartResponse = {
	title: string
	description: string
} & (
	| {
			type: 'bar' | 'pie' | 'multi_pie' | 'line'
			data: {
				value: number
				label: string
				position: number
			}[]
			change?: number
	  }
	| {
			type: 'list'
			data: {
				title: string
				value: number
				image: string
				position: number
			}[]
	  }
)
