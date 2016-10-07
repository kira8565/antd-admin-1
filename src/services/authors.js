import request from '../utils/request';
import reqwest from 'reqwest'

import qs from 'qs';

export async function query(params) {
  return request(`http://localhost:3000/api/authors?${qs.stringify(params)}`);
}

export async function create(params) {
  return reqwest({
    url: 'http://localhost:3000/api/authors',
    type: 'json',
    method: 'post',
    data: params
  })
}

export async function remove(params) {
  const { id } = params
  return reqwest({
    url: `http://localhost:3000/api/authors/${id}`,
    method: 'delete'
  })
}

export async function update(params) {
  const { id } = params
  return reqwest({
    url: `http://localhost:3000/api/authors/${id}`,
    type: 'json',
    method: 'put',
    data: params
  })
}
