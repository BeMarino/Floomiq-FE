import { api, mockApi } from "../configs/axiosConfigs"
import { defineCancelApiObject } from "../configs/axiosUtils"
import qs from 'qs';

let token = localStorage.getItem('userCred');
export const API = {
  updateUserInfo: async function (body, cancel = false) {
    const response = await api.request({
      url: `/user/updateInfo`,
      method: "POST",
      headers: {
        'Authorization': `Basic ${token}`
      },
      data: body,
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    return response
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

}



// defining the cancel API object for ProductAPI
const cancelApiObject = defineCancelApiObject(API)