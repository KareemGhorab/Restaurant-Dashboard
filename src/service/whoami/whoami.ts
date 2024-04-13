import { AxiosInstance, AxiosResponse } from 'axios'
import returnMyMock from '../mock'
import { TWhoamiResponse } from './whoami/whoami'
import whoamiResponseMock from './whoami/mocks/whoami.mock'

const whoami = (api: AxiosInstance) => ({
	getWhoami: async (): Promise<AxiosResponse<TWhoamiResponse>> => {
		return returnMyMock<TWhoamiResponse>(whoamiResponseMock, 800)
		return api.get(`/whoami`)
	},
})

export default whoami