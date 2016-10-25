import request from '../utils/request'
import qs from 'qs'

export async function list () {
  return request('/api/groupDetail?groupId=1847115')
}

export async function create (params) {
  console.log(qs.stringify(params))
  return request(`/api/groupAddDevice?${qs.stringify(params)}`);
}

export async function remove (params) {
  return request(`/api/groupDeleteDevice?${qs.stringify(params)}`);
}