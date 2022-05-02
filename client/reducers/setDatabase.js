import { SET_DATABASE } from "../actions";

const initialState = null

export default function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_DATABASE:
      return payload
    default:
      return state
  }
}