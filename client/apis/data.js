import request from 'superagent'

const rootUrl = '/api/v1/data'

export function getData(region) {
  return request.get(rootUrl + '/' + region)
    .then(res => {
      return res.body
    })
}

export function fillDatabase() {
  return request.get(rootUrl + '/getdata')
}

export function checkDatabase() {
  return request.get(rootUrl + '/checkdata')
    .then(res => {
      if (res.body.length === 0) {
        return null
      } else {
      return 'Database is populated'
      }
    })
}