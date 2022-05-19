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
      if (res.body === false) {
        return false
      } else {
      return true
      }
    })
}

export function addUserRegion (data) {
  return request.post(rootUrl + '/insertdata').send(data)
}

export function getUserNames () {
  return request.get(rootUrl + '/getusernames')
}

export function editUser (data) {
  return request.post(rootUrl + '/editdata').send(data)
}