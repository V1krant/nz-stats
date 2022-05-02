import { SET_DATA } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_DATA:
      return payload
    default:
      return state
  }
}

export default reducer
