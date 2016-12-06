import request from '../utils/request';
import qs from 'qs';

export async function login (params) {
  return request(`/api/login?${qs.stringify(params)}`);
}
