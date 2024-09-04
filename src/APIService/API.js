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

  logout: async function (cancel = false) {
    const response = await api.request({
      url: `user/logout`,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
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

  downloadPdf: async function (project, cancel = false) {
    const response = await api.request({
      url: `/plant/pdf`,
      method: "POST",
      data: project,
      responseType: 'blob', // Imp
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    return response
  },

  downloadProjectPdf: async function (project, cancel = false) {
    const response = await api.request({
      url: `/projects/project/`+project+`/pdf`,
      method: "GET",
      responseType: 'blob', // Imp
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

  getSuggestion: async function (inputSearchValue, cancel = false) {
    const response = await api.request({
      url: `/plant?q=` + inputSearchValue,
      method: "GET",
      headers: {
        'Authorization': `Basic ${token}`
      },
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    return response
  },

  searchPlantByName: async function (plantName, cancel = false) {
    const response = await api.request({
      url: `/plant/` + plantName,
      method: "GET",
      headers: {
        'Authorization': `Basic ${token}`
      },
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    return response
  },

  addToFavourite: async function (user, plantId, cancel = false) {
    let data = { plantId: plantId, username: user }
    const response = await api.request({
      url: `/plant/newFav`,
      method: "POST",
      data: data,
      headers: {
        'Authorization': `Basic ${token}`
      },
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    return response
  },

  removeFromFavourite: async function (user, plantId, cancel = false) {
    let data = { plantId: plantId, username: user }
    const response = await api.request({
      url: `/plant/removeFav`,
      method: "DELETE",
      data: data,
      headers: {
        'Authorization': `Basic ${token}`
      },
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    return response
  },

  plantDetails: async function (plantId, cancel = false) {
    const response = await api.request({
      url: `/plant/details/` + plantId,
      method: "GET",
      headers: {
        'Authorization': `Basic ${token}`
      },
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    return response
  },
  findPlantByName: async function (plantName, cancel = false) {
    const response = await api.request({
      url: `/plant/` + plantName,
      method: "GET",
      headers: {
        'Authorization': `Basic ${token}`
      },
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    return response
  },

  loadProject: async function (projectId, cancel = false) {
    const response = await api.request({
      url: `/projects/project/` + projectId,
      method: "GET",
      headers: {
        'Authorization': `Basic ${token}`
      },
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    return response
  },

  userFavourites: async function (cancel = false) {
    const response = await api.request({
      url: `/user/getFavourite`,
      method: "GET",
      headers: {
        'Authorization': `Basic ${token}`
      },
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    return response
  },

  removeFromProject: async function (projectId, plantId, cancel = false) {
    let data = { project: projectId, plant: plantId }
    const response = await api.request({
      url: `/projects/project/removePlant`,
      method: "POST",
      headers: {
        'Authorization': `Basic ${token}`
      },
      data: data,
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    return response
  },

  cancellaProgetto: async function (projectId, cancel = false) {
    const response = await api.request({
      url: `/projects/` + projectId,
      method: "DELETE",
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