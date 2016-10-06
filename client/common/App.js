import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserhistory } from 'react-router'

const ACTIVE = {color: 'red'}

const App = ({ children }) => (
  <div>
    <h1> App page</h1>
    <ul>
      <li><Link to="/" activeStyle={ACTIVE}>/</Link></li>
      <li><IndexLink to="/" activeStyle={ACTIVE}>/ IndexLink</IndexLink></li>

      <li><Link to="/users" activeStyle={ACTIVE}>/users</Link></li>
      <li><IndexLink to="/users" activeStyle={ACTIVE}>/users IndexLink</IndexLink></li>

      <li><Link to="/users/ryan" activeStyle={ACTIVE}>/users/ryan</Link></li>
      <li><Link to={{ pathname: '/users/ryan', query: { foo: 'bar' } }}
                                      activeStyle={ACTIVE}>/users/ryan?foo=bar</Link></li>
      <li><Link to="/about" activeStyle={ACTIVE}>/about</Link></li>
    <li><Link to="/static" activeStyle={ACTIVE}>/static data</Link></li>
    <li><Link to="/dynamic" activeStyle={ACTIVE}>/fetch dynamic data</Link></li>
    </ul>  
    
    {children}
  </div> 
)

export default App