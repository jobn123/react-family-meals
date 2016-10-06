import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Index from '../components/Index/Index'
import NotFound from '../components/NotFound/NotFound'
import Checkbox from '../components/Checkbox/CheckboxWithLabel'
import About from '../components/About/about'
import Users from '../components/users/user'
import UserOne from '../components/users/userOne'
import UserTwo from '../components/users/userTwo'
import StaticData from '../components/List/StaticData'
import DynamicData from '../components/List/DynamicData'
import App from './App'

export default (
    <Route path='/' component={App}>
      <IndexRoute component={Index} />
      <Route path='/about' component={About} />
      <Route path='users' component={Users}>
        <IndexRoute component={UserOne}/>
        <Route path=":id" component={UserTwo}/>
      </Route>
      <Route path="404" component={NotFound} />
      <Route path="checkbox" component={Checkbox} />
      <Route path="static" component={StaticData} />
      <Route path="dynamic" component={DynamicData} />
    </Route>
)