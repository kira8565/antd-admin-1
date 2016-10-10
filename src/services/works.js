import request from '../utils/request';
import reqwest from 'reqwest'

import qs from 'qs';



export async function getSelectAllAuthors() {
  return reqwest({
    url: 'http://localhost:3000/api/getSelectAllAuthors',
    method: 'get'
  })
}


export async function query(params) {
  return request(`http://localhost:3000/api/works?${qs.stringify(params)}`);
}

export async function create(params) {
  return reqwest({
    url: 'http://localhost:3000/api/works',
    type: 'json',
    method: 'post',
    data: params
  })
}

export async function remove(params) {
  const { id } = params
  return reqwest({
    url: `http://localhost:3000/api/works/${id}`,
    method: 'delete'
  })
}

export async function update(params) {
  const { id } = params
  return reqwest({
    url: `http://localhost:3000/api/works/${id}`,
    type: 'json',
    method: 'put',
    data: params
  })
}
