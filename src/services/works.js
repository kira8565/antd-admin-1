import reqwest from 'reqwest'

import qs from 'qs';



export async function getSelectAllAuthors() {
  return reqwest({
    url: 'http://localhost:3000/api/getSelectAllAuthors',
    method: 'get'
  })
}
