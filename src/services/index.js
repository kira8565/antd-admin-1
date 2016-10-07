import request from '../utils/request'
import qs from 'qs'

export async function login (params) {
  return request(`http://localhost:3000/api/login?${qs.stringify(params)}`)
}
