//combine reducers
import { combineReducers } from 'redux'
//routerReducer manage
import { routerReducer } from 'react-router-redux'
import update from './count'

export default combineReducers({
  update,
  routing: routerReducer
})