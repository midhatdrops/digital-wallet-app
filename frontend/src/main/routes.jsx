import React from 'react'
import {Router, Route, Redirect, IndexRoute,  hashHistory} from 'react-router'

import App from './app'

import DashBoard from '../components/container/dashboard/index'
import BillingCycle from '../billingCycle/index'

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={DashBoard} />
      <Route path="billingCycles" component={BillingCycle}/> 
    </Route>
    <Redirect from='*' to="/" />
  </Router>
)