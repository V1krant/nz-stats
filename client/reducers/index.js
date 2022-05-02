import { combineReducers } from 'redux'

import regionData from './regionData'
import databaseState from './setDatabase'

export default combineReducers({
  regionData,
  databaseState
})
