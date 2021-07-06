/** @format */

import axios from 'axios'

export default axios.create({
	withCredentials: true,
	changeOrigin: true,
	baseURL: 'http://localhost:3000/',
	headers: {
		//'Content-Type': 'application/x-www-form-urlencoded'
		'Content-type': 'application/json',
	},
})
