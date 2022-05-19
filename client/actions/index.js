import { getData, fillDatabase, checkDatabase, addUserRegion, editUser, getUserNames } from '../apis/data'

export const SET_DATA = 'SET_DATA'
export const SET_DATABASE = 'SET_DATABASE'
export const SET_NAMES = 'SET_NAMES'

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

export function setNames (state) {
  return {
    type: SET_NAMES,
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

export function checkData() {
  return (dispatch) => {
     return checkDatabase()
    .then((response) => {
      if (response === false) {
        dispatch(setDatabaseState(true))
        fillDatabase().then(() => {
        location.reload()
       })
      } else {
      dispatch(setDatabaseState(false))
      }
    })
  }
}

export function insertData (data) {
  return (dispatch) => {
    dispatch(setDatabaseState(true))
    return addUserRegion(data)
    .then((response) => {
      dispatch(setDatabaseState(false))
      location.reload()
     return response
   })
 }
}

export function fetchUserNames () {
    return (dispatch) => {
      dispatch(setDatabaseState(true))
      return getUserNames()
      .then((response) => {
        dispatch(setNames(response.body))
        dispatch(setDatabaseState(false))
       return response
     })
   }
}


export function editData (data) {
  return (dispatch) => {
    dispatch(setDatabaseState(true))
    return editUser(data)
    .then((response) => {
      dispatch(setDatabaseState(false))
      location.reload()
     return response
   })
 }
}
