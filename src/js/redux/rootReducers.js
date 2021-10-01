import { combineReducers } from 'redux'
import example from './modules/example'
import auth from './modules/auth'

export default combineReducers({
  example,
  auth
})
