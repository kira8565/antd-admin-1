import request from '../utils/request';
import reqwest from 'reqwest'

import qs from 'qs';



export async function getSelectAllAuthors() {
  return reqwest({
    url: '/api/getSelectAllAuthors',
    method: 'get'
  })
}


export async function query(params) {
  return request(`/api/works?${qs.stringify(params)}`);
}

export async function create(params) {
  return reqwest({
    url: '/api/works',
    type: 'json',
    method: 'post',
    data: params
  })
}

export async function remove(params) {
  const { id } = params
  return reqwest({
    url: `/api/works/${id}`,
    method: 'delete'
  })
}

export async function update(params) {
  const { id } = params
  return reqwest({
    url: `/api/works/${id}`,
    type: 'json',
    method: 'put',
    data: params
  })
}
