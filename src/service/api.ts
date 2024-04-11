import axios from 'axios'
import dashboard from './dashboard/dashboard'

const api = axios.create({
	baseURL: '/',
})

export const dashboardSVC = dashboard(api)
