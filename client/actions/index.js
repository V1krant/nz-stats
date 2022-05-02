import { getData, fillDatabase, checkDatabase } from '../apis/data'

export const SET_DATA = 'SET_DATA'
export const SET_DATABASE = 'SET_DATABASE'

export function setData(regionData) {
  return {
    type: SET_DATA,
    payload: regionData,
  }
}

export function setDatabaseState (state) {
  return {
    type: SET_DATABASE,
    payload: state
  }
}

export function fetchData(region) {
  return (dispatch) => {
    return getData(region).then((response) => {
      dispatch(setData(response))
      return null
    })
  }
}

export function callFillAPI() {
 return fillDatabase()
}

export function checkData() {
  return (dispatch) => {
     return checkDatabase()
     .then((response) => {
      return response
    })
    .then((response) => {
      if (response !== 'Database is populated') {
      callFillAPI().then(() => {
        location.reload()
       })
      } else {
      dispatch(setDatabaseState(false))
      }
    })
  }
}
