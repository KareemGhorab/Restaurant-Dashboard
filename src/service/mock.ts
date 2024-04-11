import { AxiosError, AxiosResponse } from 'axios'

const returnMyMock = <T>(
	mockData: T,
	time: number,
	options?: { isError?: boolean }
): Promise<AxiosResponse<T>> =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			if (options?.isError) {
				const error: AxiosError = {
					name: 'Error',
					message: 'Request failed for some reason',
					config: {} as any,
					isAxiosError: true,
					toJSON: () => ({
						message: 'Request failed for some reason',
					}),
				}
				reject(error)
			} else {
				resolve({
					data: mockData,
					status: 200,
					statusText: 'OK',
					headers: {},
					config: {} as any,
				})
			}
		}, time)
	})

export default returnMyMock
