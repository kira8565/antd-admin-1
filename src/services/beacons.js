import request from '../utils/request'
import qs from 'qs'

export async function list (params) {
  return request('http://localhost:3000/api/groupDetail?groupId=1847115')
}