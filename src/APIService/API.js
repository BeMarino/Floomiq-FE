import { api, mockApi } from "../configs/axiosConfigs"
import { defineCancelApiObject } from "../configs/axiosUtils"
import qs from 'qs';

let token = localStorage.getItem('userCred');
export const API = {
  updateUserInfo: async function (body, cancel = false) {
    const response = await api.request({
      url: `/user/update`,
      method: "PUT",
      headers: {
        'Authorization': `Basic ${token}`
      },
      data: body,
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    return response
  },

  register: async function (body, cancel = false) {
    const response = await api.request({
      url: `/user/register`,
      method: "POST",
      headers: {
        'Authorization': `Basic ${token}`
      },
      data: body,
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    return response;
  },

  login: async function (body, cancel = false) {
    const response = await api.request({
      url: `/j_security_check`,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: body,
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    return response;
  },

  getUserInfo: async function (username, cancel = false) {
    const response = await api.request({
      url: `/user/` + username,
      method: "GET",
      headers: {
        'Authorization': `Basic ${token}`
      },
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    return response
  },

  verifyMail: async function (token, cancel = false) {
    const response = await api.request({
      url: `/user/verify/` + token,
      method: "PUT",
      headers: {
        'Authorization': `Basic ${token}`
      },
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    return response
  },

  plants: async function (filters, page, cancel = false) {
    const response = await api.request({
      url: `/plant?size=10&page=` + page,
      method: "POST",
      data: filters,
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    return response
  },

  submitProject: async function (project, cancel = false) {
    const response = await api.request({
      url: `/projects`,
      method: "POST",
      data: project,
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    return response
  },
  
  getUserProjects: async function (username, cancel = false) {
    const response = await api.request({
      url: `/projects/` + username,
      method: "GET",
      headers: {
        'Authorization': `Basic ${token}`
      },
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    return response
  },
}



// defining the cancel API object for ProductAPI
const cancelApiObject = defineCancelApiObject(API)