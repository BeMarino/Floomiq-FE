import axios from "axios"
import Constant from "../utils/constant"

export const api = axios.create({
  withCredentials: true,
  baseURL: Constant.apiEndpoint,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
   }
})

export const mockApi = axios.create({
  withCredentials: false,
  baseURL: "https://4a35e7a0-5cec-4c00-9156-17a240957e06.mock.pstmn.io/",
})

// defining a custom error handler for all APIs
const errorHandler = (error) => {
  const statusCode = error.response?.status

  // logging only errors that are not 401
  if (statusCode && statusCode !== 401) {
    console.error(error)
  }

  return Promise.reject(error)
}

// registering the custom error handler to the
// "api" axios instance
api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error)
})