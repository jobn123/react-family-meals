'use strict'

/*****reset css*****/
import 'ress'
/*****base css*****/
import 'styles/main.scss'
import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

//import store config
import finalCreateStore from './store/finalCreateStore'
//import redux debugger tool
import DevTools from './utils/DevTools'
/*****reducers*****/
import reducers from './reducers'
/*****routers*****/
import Routes from './common/Routes'
//create store
const store = finalCreateStore(reducers)
//Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store)

render (
  <Provider store={store}>
    <div>
      <Router history={ history }>
        {Routes}
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('js-main'))
