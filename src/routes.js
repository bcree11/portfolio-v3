import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import Home from './pages/home'

export default props => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  </BrowserRouter>
)
