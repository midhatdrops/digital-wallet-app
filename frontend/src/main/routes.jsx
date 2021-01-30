import React from 'react';
import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router';
import AuthOrApp from './authOrApp';

import App from './app';

import DashBoard from '../components/container/dashboard/index';
import BillingCycle from '../billingCycle/index';

export default (props) => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={DashBoard} />
      <Route path="billingCycles" component={BillingCycle} />
      <Route path="/" component={AuthOrApp}></Route>
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);
