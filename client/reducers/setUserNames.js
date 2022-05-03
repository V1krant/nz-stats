import { SET_NAMES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_NAMES:
      return payload
    default:
      return state
  }
}

export default reducer
