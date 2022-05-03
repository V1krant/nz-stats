import { combineReducers } from 'redux'

import regionData from './regionData'
import databaseState from './setDatabase'
import getUserNames from './setUserNames'

export default combineReducers({
  regionData,
  databaseState,
  getUserNames
})
