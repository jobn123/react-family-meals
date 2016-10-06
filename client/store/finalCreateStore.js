//support dispatch function
import thunk from 'redux-thunk'
//log
import createLogger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import DevTools from '../utils/DevTools'

//call log print method
const loggerMiddleware = createLogger()

//create middleware collection
const middleware = [thunk, loggerMiddleware]

const finalCreateStore = compose(
  applyMiddleware(...middleware),
  DevTools.instrument(),
)(createStore)

export default finalCreateStore