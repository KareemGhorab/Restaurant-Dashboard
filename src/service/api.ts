import axios from 'axios'
import dashboard from './dashboard/dashboard'
import whoami from './whoami/whoami'
import restaurants from './restaurants/restaurants'

const api = axios.create({
	baseURL: '/',
})

export const dashboardSVC = dashboard(api)
export const whoamiSVC = whoami(api)
export const restaurantsSVC = restaurants(api)
