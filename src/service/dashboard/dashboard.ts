import { AxiosInstance, AxiosResponse } from 'axios'
import returnMyMock from '../mock'
import { TChartResponse } from './chart/chart'
import revenueResponseMock from './chart/mocks/revenue.mock'
import orderTimeResponseMock from './chart/mocks/order-time.mock'
import ratingResponseMock from './chart/mocks/rating.mock'
import mostOrderedResponseMock from './chart/mocks/most-ordered.mock'
import ordersResponseMock from './chart/mocks/orders.mock'

const dashboard = (api: AxiosInstance) => ({
	getRevenueChart: async (
		query: string
	): Promise<AxiosResponse<TChartResponse>> => {
		return returnMyMock<TChartResponse>(revenueResponseMock, 2000)
		return api.get(`/dashboard/revenue?${query}`)
	},

	getOrderTimeChart: async (
		query: string
	): Promise<AxiosResponse<TChartResponse>> => {
		return returnMyMock<TChartResponse>(orderTimeResponseMock, 1000)
		return api.get(`/dashboard/order-time?${query}`)
	},

	getRatingChart: async (
		query: string
	): Promise<AxiosResponse<TChartResponse>> => {
		return returnMyMock<TChartResponse>(ratingResponseMock, 1500)
		return api.get(`/dashboard/rating?${query}`)
	},

	getMostOrderedChart: async (
		query: string
	): Promise<AxiosResponse<TChartResponse>> => {
		return returnMyMock<TChartResponse>(mostOrderedResponseMock, 3000)
		return api.get(`/dashboard/most-ordered?${query}`)
	},

	getOrdersChart: async (
		query: string
	): Promise<AxiosResponse<TChartResponse>> => {
		return returnMyMock<TChartResponse>(ordersResponseMock, 2500)
		return api.get(`/dashboard/orders?${query}`)
	},
})

export default dashboard
