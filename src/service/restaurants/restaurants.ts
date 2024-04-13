import { AxiosInstance, AxiosResponse } from 'axios'
import returnMyMock from '../mock'
import { TRestaurantsResponse } from './restaurant/restaurant'
import restaurantsResponseMock from './restaurant/mock/restaurants.mock'

const restaurants = (api: AxiosInstance) => ({
	getRestaurants: async (): Promise<AxiosResponse<TRestaurantsResponse>> => {
		return returnMyMock<TRestaurantsResponse>(restaurantsResponseMock, 200)
		return api.get(`/restaurants`)
	},
})

export default restaurants
