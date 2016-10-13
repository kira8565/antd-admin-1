import request from '../utils/request'
import qs from 'qs'

export async function list () {
  return request('http://localhost:3000/api/groupDetail?groupId=1847115')
}

export async function create (params) {
  console.log(qs.stringify(params))
  return request(`http://localhost:3000/api/groupAddDevice?${qs.stringify(params)}`);
}

export async function remove (params) {
  return request(`http://localhost:3000/api/groupDeleteDevice?${qs.stringify(params)}`);
}